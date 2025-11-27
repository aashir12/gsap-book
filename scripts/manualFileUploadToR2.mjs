#!/usr/bin/env node
// ESM multipart upload to Cloudflare R2 using AWS SDK v3 + lib-storage
// Usage: node scripts/manualFileUploadToR2.mjs /path/to/Sargasso_Undaria.mp4 [optional-object-key.mp4]

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { S3Client } from "@aws-sdk/client-s3";
import { Upload } from "@aws-sdk/lib-storage";
import dotenv from "dotenv";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, "..", ".env") });

const BUCKET = process.env.CLOUDFLARE_R2_BUCKET_NAME;
const ENDPOINT = process.env.CLOUDFLARE_R2_ENDPOINT;
const ACCESS_KEY = process.env.CLOUDFLARE_R2_ACCESS_KEY;
const SECRET_KEY = process.env.CLOUDFLARE_R2_SECRET_KEY;
const PUBLIC_URL = process.env.CLOUDFLARE_R2_PUBLIC_URL || "";

if (!BUCKET || !ENDPOINT || !ACCESS_KEY || !SECRET_KEY) {
  console.error(
    "Missing R2 credentials in .env. Please set CLOUDFLARE_R2_BUCKET_NAME, CLOUDFLARE_R2_ENDPOINT, CLOUDFLARE_R2_ACCESS_KEY and CLOUDFLARE_R2_SECRET_KEY"
  );
  process.exit(1);
}

async function main() {
  const argv = process.argv.slice(2);
  if (argv.length < 2) {
    console.error(
      "Usage: node scripts/manualFileUploadToR2.mjs upload/path /path/to/file"
    );
    process.exit(1);
  }

  const uploadPath = argv[0];
  const filePath = path.resolve(argv[1]);
  if (!fs.existsSync(filePath)) {
    console.error("File not found:", filePath);
    process.exit(1);
  }

  const stats = fs.statSync(filePath);
  const fileSize = stats.size;

  const fileName = path.posix.basename(filePath);
  // Ensure upload prefix is `11_undaria/`
  const key = path.posix.join(uploadPath, fileName);

  const endpointUrl = ENDPOINT.startsWith("http")
    ? ENDPOINT
    : `https://${ENDPOINT}`;

  const s3Client = new S3Client({
    region: "auto",
    endpoint: endpointUrl,
    credentials: {
      accessKeyId: ACCESS_KEY,
      secretAccessKey: SECRET_KEY,
    },
    forcePathStyle: false,
  });

  const fileStream = fs.createReadStream(filePath);

  console.log(
    `Starting upload -> bucket: ${BUCKET}, key: ${key}, size: ${Math.round(
      fileSize / (1024 * 1024)
    )} MB`
  );

  try {
    const parallelUploads3 = new Upload({
      client: s3Client,
      params: {
        Bucket: BUCKET,
        Key: key,
        Body: fileStream,
        ACL: "private",
      },
      queueSize: 4,
      partSize: 5 * 1024 * 1024,
      leavePartsOnError: false,
    });

    parallelUploads3.on("httpUploadProgress", (progress) => {
      const loaded = progress.loaded || 0;
      const total = progress.total || fileSize;
      const pct = ((loaded / total) * 100).toFixed(2);
      process.stdout.write(
        `\r${pct}% uploaded (${Math.round(
          loaded / (1024 * 1024)
        )} MB / ${Math.round(total / (1024 * 1024))} MB)`
      );
    });

    const result = await parallelUploads3.done();
    console.log("\nUpload complete.");
    console.log("ETag:", result.ETag);
    if (PUBLIC_URL) {
      const publicLink = `${PUBLIC_URL.replace(
        /\/$/,
        ""
      )}/11_undaria/${encodeURIComponent(fileName)}`;
      console.log("Public URL (if object is public):", publicLink);
    } else {
      console.log(
        "No `CLOUDFLARE_R2_PUBLIC_URL` in .env — construct your public URL or use signed URL via your app."
      );
    }
  } catch (err) {
    console.error("\nUpload failed:");
    console.error(err);
    process.exit(2);
  }
}

main();

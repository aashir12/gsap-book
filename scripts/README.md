# Cloudflare R2 Multipart Upload Script

This folder contains scripts for uploading large files to Cloudflare R2 using the AWS S3-compatible SDK.

## Prerequisites

1. **Install Dependencies**:
   Make sure you have Node.js installed. Then, install the required packages:

   ```bash
   npm install @aws-sdk/client-s3 @aws-sdk/lib-storage dotenv
   ```

2. **Set Up Environment Variables**:
   Create a `.env` file in the root of the project (if not already present) and add the following variables:
   ```env
   CLOUDFLARE_R2_BUCKET_NAME=your-bucket-name
   CLOUDFLARE_R2_ENDPOINT=your-endpoint
   CLOUDFLARE_R2_ACCESS_KEY=your-access-key
   CLOUDFLARE_R2_SECRET_KEY=your-secret-key
   CLOUDFLARE_R2_PUBLIC_URL=your-public-url (optional)
   ```

## Usage

### Uploading Files

To upload a file to a specific folder inside your R2 bucket:

```bash
node manualFileUploadToR2.mjs upload/path /path/to/your/file.mp4
```

- Replace `upload/path` with the desired path inside your bucket (e.g., `11_undaria`).
- Replace `/path/to/your/file.mp4` with the path to the file you want to upload.
- The file will be uploaded to the specified folder in your bucket.

### Custom Object Key

If you want to specify a custom object key (filename) for the uploaded file:

```bash
node manualFileUploadToR2.mjs /path/to/your/file.mp4 custom-name.mp4
```

This will upload the file as `11_undaria/custom-name.mp4`.

## Notes

- The script uses multipart upload for large files, splitting them into 5MB parts.
- Progress is displayed in the terminal during the upload.
- If `CLOUDFLARE_R2_PUBLIC_URL` is set in the `.env` file, the script will print the public URL of the uploaded file.
- By default, the uploaded file is private. Adjust the bucket's ACL or policies for public access if needed.

## Troubleshooting

- **Missing Dependencies**: Ensure you have installed the required packages using `npm install`.
- **Environment Variables**: Double-check your `.env` file for correctness.
- **File Not Found**: Ensure the file path provided to the script is correct.

For further assistance, refer to the Cloudflare R2 documentation or the AWS SDK documentation.

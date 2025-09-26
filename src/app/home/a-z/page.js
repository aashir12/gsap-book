"use client";
import videos from "../../json/videos.json"; // unified data source
import { useRouter } from "next/navigation";
import { LuArrowLeft } from "react-icons/lu";
import { FaPlay } from "react-icons/fa";

export default function Page() {
  const router = useRouter();
  return (
    <div className="app-viewport">
      <div className="app-frame archer-book-pro font-light relative my-6 rounded-xl bg-[#5a6e5c] bg-[url('/list-background.png')] bg-cover bg-center bg-no-repeat overflow-y-auto no-scrollbar m-auto">
        <div className="flex items-center border-[#b8ead9] border-b-2 mb-14 rounded-2xl justify-between p-10">
          <button
            aria-label="Back"
            onClick={() => router.push("/home")}
            className="w-[100px] h-10 bg-transparent cursor-pointer border-2 border-[#b8ead9] text-white rounded-full flex items-center justify-start pl-3 hover:bg-white/5 transition"
          >
            <LuArrowLeft size={18} />
          </button>
          <h1 className="text-3xl font-medium text-white">
            Lista delle Specie
          </h1>
        </div>

        <div className="w-full  pb-6">
          {videos.map((item) => (
            <div
              key={item.id}
              role="button"
              tabIndex={0}
              onClick={() => {
                const target = "/home";
                setTimeout(() => router.push(target), 120);
              }}
              className="relative flex items-center py-5 overflow-hidden cursor-pointer select-none transition-colors duration-150 hover:bg-white/10 active:scale-[0.98]"
            >
              {/* Left side - Image */}
              <div className="w-1/2 relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-34 object-cover rounded-tr-xl rounded-br-xl"
                />
                <button
                  aria-label="Play"
                  className="absolute bottom-2 right-2 w-10 h-10 bg-transparent border-2 border-[#b8ead9] text-white rounded-full flex items-center justify-center hover:bg-white/10 transition cursor-pointer"
                  onClick={() => router.push(`/home`)}
                >
                  <FaPlay size={10} />
                </button>
              </div>

              {/* Right side - Title & Description */}
              <div className="w-1/2 p-2 text-white">
                <h2 className="text-lg font-semibold leading-tight">
                  {item.title}
                </h2>
                <p className="text-xs opacity-90 mt-1">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Footer with logos */}
        <div className="flex items-center justify-between p-10 mt-10 border-t-2 border-[#b8ead9] rounded-2xl">
          <img
            src="/logo/logo1.png"
            alt="Logo 1"
            className="h-8 w-auto object-contain"
          />
          <img
            src="/logo/logo2.png"
            alt="Logo 2"
            className="h-8 w-auto object-contain"
          />
        </div>
        <style jsx global>{`
          @font-face {
            font-family: "Archer Book Pro";
            src: url("/fonts/ArcherBookPro.otf") format("opentype");
            font-weight: 400;
            font-style: normal;
            font-display: swap;
          }
          .archer-book-pro {
            font-family: "Archer Book Pro", ui-sans-serif, system-ui, sans-serif;
          }
        `}</style>
      </div>
    </div>
  );
}

"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import "./styles/bg.css";
import "./styles/fonts.css";
import Footer from "./components/footer";
import PlayMenu from "./components/playMenu";
import PopupPlayer from "./components/PopupPlayer";
import videos from "./json/videos.json";
import { LuArrowLeft } from "react-icons/lu";
import { FaPlay } from "react-icons/fa";

// Define the possible views
type ViewType = "home" | "book" | "a-z";

export default function Home() {
  const [currentView, setCurrentView] = useState<ViewType>("home");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showInfo, setShowInfo] = useState(false);
  const [activeItem, setActiveItem] = useState<any>(null);

  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
  };

  const goToHome = () => {
    setCurrentView("home");
    setShowInfo(false);
  };

  const goToBook = () => {
    setCurrentView("book");
  };

  const goToAZ = () => {
    setCurrentView("a-z");
    setShowInfo(false);
  };

  // When video index changes, keep background playing muted
  useEffect(() => {
    if (videoRef.current && currentView === "book") {
      videoRef.current.load();
      videoRef.current.muted = true;
      videoRef.current.play();
    }
  }, [currentIndex, currentView]);

  // Home View Component
  const HomeView = () => (
    <div className="app-viewport">
      <div className="app-frame archer-book-pro font-light overflow-hidden relative my-6 rounded-xl bg-[#5a6e5c] bg-[url('/list-background.png')] bg-cover bg-center bg-no-repeat m-auto">
        <div className="z-10 flex flex-col items-center mt-16">
          <h1
            className="text-3xl font-medium text-white text-center mb-6"
            style={{ fontFamily: "serif" }}
          >
            Il viaggio di Go
            <br />
            nella Laguna incantata
          </h1>
          <button
            onClick={goToBook}
            className="px-8 py-3 rounded-xl border-2 border-purple-300 text-purple-700 font-medium bg-purple-200/10 backdrop-blur-sm hover:bg-purple-200/20 transition"
          >
            iniza a leggere
          </button>
        </div>
        <Footer />
      </div>
    </div>
  );

  // Book View Component
  const BookView = () => (
    <div className="app-viewport">
      <div className="app-frame archer-book-pro relative rounded-xl bg-white overflow-hidden flex items-center justify-center">
        {/* Background Video */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover rounded-xl"
        >
          <source src={videos[currentIndex].url} type="video/mp4" />
        </video>

        {/* Subtitle with background gradient */}
        <div className="absolute top-0 w-full pointer-events-none">
          <div className="bg-gradient-to-b from-black/70 to-transparent w-full px-16 pt-6 pb-12">
            <div className="max-h-[20vh] overflow-hidden">
              <p className="text-white archer-book-pro text-[32px] font-semibold leading-snug text-justify">
                {videos[currentIndex].subtitle
                  .split(" ")
                  .slice(0, 35)
                  .join(" ") +
                  (videos[currentIndex].subtitle.split(" ").length > 35
                    ? "…"
                    : "")}
              </p>
            </div>
          </div>
        </div>

        {/* Play Menu */}
        <PlayMenu
          onPrev={handlePrev}
          onNext={handleNext}
          onInfo={() => setShowInfo(true)}
          onHome={goToBook}
          onAZ={goToAZ}
        />

        {/* Popup */}
        {showInfo && (
          <PopupPlayer
            url={videos[currentIndex].url}
            title={videos[currentIndex].title}
            subtitle={videos[currentIndex].subtitle}
            onClose={() => setShowInfo(false)}
          />
        )}
      </div>
    </div>
  );

  // A-Z List View Component
  const AZView = () => (
    <div className="app-viewport">
      <div className="app-frame archer-book-pro font-light overflow-hidden relative my-6 rounded-xl bg-[#5a6e5c] bg-[url('/list-background.png')] bg-cover bg-center bg-no-repeat m-auto">
        {showInfo && activeItem && (
          <div className="absolute inset-0 z-50 archer-book-pro font-light">
            <PopupPlayer
              url={activeItem.url}
              title={activeItem.title}
              subtitle={activeItem.subtitle}
              onClose={() => setShowInfo(false)}
            />
          </div>
        )}
        <div className="w-full h-full overflow-y-auto no-scrollbar archer-book-pro font-light">
          <div className="flex items-center border-[#b8ead9] border-b-2 mb-14 rounded-2xl justify-between p-10">
            <button
              aria-label="Back"
              onClick={goToBook}
              className="w-[100px] h-10 bg-transparent cursor-pointer border-2 border-[#b8ead9] text-white rounded-full flex items-center justify-start pl-3 hover:bg-white/5 transition"
            >
              <LuArrowLeft size={18} />
            </button>
            <h1 className="text-3xl font-medium text-white">
              Lista delle Specie
            </h1>
          </div>

          <div className="w-full pb-6">
            {videos.map((item) => (
              <div
                key={item.id}
                role="button"
                tabIndex={0}
                onClick={() => {
                  setActiveItem(item);
                  setShowInfo(true);
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
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveItem(item);
                      setShowInfo(true);
                    }}
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
        </div>
      </div>
    </div>
  );

  // Render the appropriate view based on current state
  const renderCurrentView = () => {
    switch (currentView) {
      case "home":
        return <HomeView />;
      case "book":
        return <BookView />;
      case "a-z":
        return <AZView />;
      default:
        return <HomeView />;
    }
  };

  return (
    <div>
      {renderCurrentView()}
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
  );
}

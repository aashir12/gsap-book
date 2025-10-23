"use client";

import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import "./styles/bg.css";
import "./styles/fonts.css";
import Footer from "./components/footer";
import PlayMenu from "./components/playMenu";
import PopupPlayer from "./components/PopupPlayer";
import BackgroundVideo from "./components/BackgroundVideo";
import Subtitle from "./components/Subtitle";
import videos from "./json/videos.json";
import Image from "next/image";
import { LuArrowLeft } from "react-icons/lu";
import { FaPlay } from "react-icons/fa";
import Bubbles from "./components/Bubbles"; 
import AnimatedBubbles from "./components/AnimatedBubbles ";

// Define the possible views
type ViewType = "home" | "book" | "a-z";

interface ActiveItem {
  id: number;
  url: string;
  "secondary-url": string;
  subtitle: string[];
  title: string;
  description: string;
  image: string;
}

export default function Home() {
  const [currentView, setCurrentView] = useState<ViewType>("home");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentSubtitleIndex, setCurrentSubtitleIndex] = useState(0);
  const [showInfo, setShowInfo] = useState(false);
  const [activeItem, setActiveItem] = useState<ActiveItem | null>(null);

  const homeContainerRef = useRef<HTMLDivElement>(null);
  const homeContentRef = useRef<HTMLDivElement>(null);
  const bookContainerRef = useRef<HTMLDivElement>(null);
  const bookVideoRef = useRef<HTMLVideoElement>(null);
  const bookContentRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const playMenuRef = useRef<HTMLDivElement>(null);
  const azContainerRef = useRef<HTMLDivElement>(null);
  const azContentRef = useRef<HTMLDivElement>(null);

  const handlePrev = () => {
    if (currentView !== "book") return;
    const isFirstSubtitle = currentSubtitleIndex === 0;
    const willChangeVideo = isFirstSubtitle;
    gsap.killTweensOf(subtitleRef.current);
    if (willChangeVideo) gsap.killTweensOf(bookVideoRef.current);

    if (!willChangeVideo) {
      const tl = gsap.timeline();
      tl.to(subtitleRef.current, {
        opacity: 0,
        x: 50,
        duration: 0.25,
        ease: "power2.inOut",
      })
        .call(() => {
          setCurrentSubtitleIndex((prev) => prev - 1);
        })
        .set(subtitleRef.current, { x: -50 })
        .to(subtitleRef.current, {
          opacity: 1,
          x: 0,
          duration: 0.35,
          ease: "power2.out",
        });
      return;
    }

    const tl = gsap.timeline();
    tl.to([bookVideoRef.current, subtitleRef.current], {
      opacity: 0,
      x: 50,
      duration: 0.3,
      ease: "power2.inOut",
    })
      .call(() => {
        const prevVideoIndex =
          currentIndex === 0 ? videos.length - 1 : currentIndex - 1;
        setCurrentIndex(prevVideoIndex);
        setCurrentSubtitleIndex(videos[prevVideoIndex].subtitle.length - 1);
      })
      .set([bookVideoRef.current, subtitleRef.current], { x: -50 })
      .to([bookVideoRef.current, subtitleRef.current], {
        opacity: 1,
        x: 0,
        duration: 0.4,
        ease: "power2.out",
      });
  };

  const handleNext = () => {
    if (currentView !== "book") return;
    const isLastSubtitle =
      currentSubtitleIndex === videos[currentIndex].subtitle.length - 1;
    const willChangeVideo = isLastSubtitle;
    gsap.killTweensOf(subtitleRef.current);
    if (willChangeVideo) gsap.killTweensOf(bookVideoRef.current);

    if (!willChangeVideo) {
      const tl = gsap.timeline();
      tl.to(subtitleRef.current, {
        opacity: 0,
        x: -50,
        duration: 0.25,
        ease: "power2.inOut",
      })
        .call(() => {
          setCurrentSubtitleIndex((prev) => prev + 1);
        })
        .set(subtitleRef.current, { x: 50 })
        .to(subtitleRef.current, {
          opacity: 1,
          x: 0,
          duration: 0.35,
          ease: "power2.out",
        });
      return;
    }

    const tl = gsap.timeline();
    tl.to([bookVideoRef.current, subtitleRef.current], {
      opacity: 0,
      x: -50,
      duration: 0.3,
      ease: "power2.inOut",
    })
      .call(() => {
        const nextVideoIndex =
          currentIndex === videos.length - 1 ? 0 : currentIndex + 1;
        setCurrentIndex(nextVideoIndex);
        setCurrentSubtitleIndex(0);
      })
      .set([bookVideoRef.current, subtitleRef.current], { x: 50 })
      .to([bookVideoRef.current, subtitleRef.current], {
        opacity: 1,
        x: 0,
        duration: 0.4,
        ease: "power2.out",
      });
  };

  const goToHome = () => {
    gsap.to(
      currentView === "book"
        ? bookContainerRef.current
        : azContainerRef.current,
      {
        opacity: 0,
        duration: 0.4,
        ease: "power2.inOut",
        onComplete: () => {
          setCurrentView("home");
          setShowInfo(false);
          // Reset home content position when going back to home
          gsap.set(homeContentRef.current, { y: 0 });
        },
      }
    );
  };

  const goToBook = () => {
    const tl = gsap.timeline();

    // Animate the entire home content container upward
    tl.to(homeContentRef.current, {
      y: "-100vh",
      duration: 1,
      ease: "power2.inOut",
    }).call(() => {
      setCurrentView("book");
    });
  };
  const goToBookFromAZ = () => {
    setCurrentView("book");
  };

  const goToAZ = () => {
    const tl = gsap.timeline();
    tl.to(
      currentView === "book"
        ? bookContainerRef.current
        : homeContainerRef.current,
      { opacity: 0, duration: 0.4, ease: "power2.inOut" }
    )
      .call(() => {
        setCurrentView("a-z");
        setShowInfo(false);
      })
      .set({}, {}, "+=0.2");
  };

  useEffect(() => {
    if (bookVideoRef.current && currentView === "book") {
      bookVideoRef.current.load();
      bookVideoRef.current.muted = true;
      bookVideoRef.current.play();
    }
  }, [currentIndex, currentView]);

  useEffect(() => {
    if (currentView === "book") setCurrentSubtitleIndex(0);
  }, [currentView]);

  useEffect(() => {
    if (currentView === "home" && homeContainerRef.current) {
      gsap.set(homeContainerRef.current, { opacity: 0, y: 20 });
      gsap.set(homeContentRef.current, { opacity: 0, y: 0 });

      const tl = gsap.timeline();
      tl.to(homeContainerRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
      }).to(
        homeContentRef.current,
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        "-=0.3"
      );
    }
  }, [currentView]);

  useEffect(() => {
    if (
      currentView === "book" &&
      bookContainerRef.current &&
      bookVideoRef.current &&
      bookContentRef.current &&
      subtitleRef.current
    ) {
      gsap.set(bookVideoRef.current, { opacity: 0 });

      // Set initial states for subtitle (hidden at top)
      gsap.set(subtitleRef.current, { opacity: 0, y: -50 });

      // Find PlayMenu element and set initial state (hidden at bottom)
      const playMenuElement =
        bookContentRef.current.querySelector(".absolute.bottom-0");
      if (playMenuElement) {
        gsap.set(playMenuElement, { opacity: 0, y: 50 });
      }

      const tl = gsap.timeline({ delay: 0.1 });
      tl.to(bookVideoRef.current, {
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
      })
        // Animate subtitle from top
        .to(
          subtitleRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.3"
        )
        // Animate PlayMenu from bottom (same timing as subtitle)
        .to(
          playMenuElement,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.8"
        );
    }
  }, [currentView]);

  useEffect(() => {
    if (currentView === "a-z" && azContentRef.current) {
      gsap.fromTo(
        azContentRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out", delay: 0.1 }
      );
    }
  }, [currentView]);

  return (
    <div>
      {/* 🏠 HOME */}
      {currentView === "home" && (
        <div className="app-viewport text-black relative">
          <div
            ref={homeContainerRef}
            className="app-frame archer-book-pro font-light overflow-hidden relative my-6 rounded-xl bg-[#5a6e5c] m-auto"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute top-0 left-0 w-full h-full object-cover rounded-xl"
            >
              <source src="/backgrounds/bgvideo.mp4" type="video/mp4" />
            </video>

            {/* bubbles */}
            <AnimatedBubbles />

            <div
              ref={homeContentRef}
              className="z-10 flex flex-col items-center mt-24 relative"
            >
              <h1
                className="text-[64px] font-medium text-black leading-tight text-center mb-12"
                style={{ fontFamily: "Archer", fontWeight: 500 }}
              >
                Il viaggio di Go
                <br />
                nella Laguna
                <br />
                incantata
              </h1>
              <button
                onClick={goToBook}
                className="px-8 py-3 rounded-xl cursor-pointer border-2 border-[#C4A5FF] text-[#5800FF] font-medium bg-purple-200/10 backdrop-blur-md hover:bg-purple-200/20 transition-all duration-500 hover:rounded-4xl active:scale-95"
                style={{ fontFamily: "Satoshi", fontSize: "24px" }}
              >
                Inizia a leggere
              </button>
            </div>

            <div className="absolute bottom-0 w-full z-10">
              <Footer />
            </div>
          </div>
        </div>
      )}

      {/* BOOK */}
      {currentView === "book" && (
        <div className="app-viewport">
          <div
            ref={bookContainerRef}
            className="app-frame archer-book-pro relative rounded-xl bg-white overflow-hidden flex items-center justify-center"
          >
            <BackgroundVideo
              ref={bookVideoRef}
              src={videos[currentIndex].url}
              className="absolute top-0 left-0 w-full h-full object-cover rounded-xl"
            />

            <div ref={bookContentRef} className="absolute inset-0">
              <Subtitle
                ref={subtitleRef}
                text={videos[currentIndex].subtitle[currentSubtitleIndex] || ""}
                fontSize={videos[currentIndex].fontSize}
                alignment={videos[currentIndex].alignment}
                position={videos[currentIndex].position}
              />
              <PlayMenu
                ref={playMenuRef}
                onPrev={handlePrev}
                onNext={handleNext}
                onInfo={() => setShowInfo(true)}
                onHome={goToHome}
                onAZ={goToAZ}
              />
            </div>
            {showInfo && (
              <PopupPlayer
                url={videos[currentIndex]["secondary-url"]}
                title={videos[currentIndex].title}
                subtitle={videos[currentIndex].description}
                onClose={() => setShowInfo(false)}
              />
            )}
          </div>
        </div>
      )}

      {/* 🔤 A-Z */}
      {currentView === "a-z" && (
        <div className="app-viewport">
          <div
            ref={azContainerRef}
            className="app-frame archer-book-pro font-light overflow-hidden relative my-6 rounded-xl bg-[#5a6e5c] bg-[url('/backgrounds/list-background.png')] bg-cover bg-center bg-no-repeat m-auto flex flex-col"
          >
            {showInfo && activeItem && (
              <div className="absolute inset-0 z-50 archer-book-pro font-light">
                <PopupPlayer
                  url={activeItem["secondary-url"]}
                  title={activeItem.title}
                  subtitle={activeItem.description}
                  onClose={() => setShowInfo(false)}
                />
              </div>
            )}

            <div className="sticky top-0 z-40 bg-[#5a6e5c] bg-[url('/backgrounds/list-background.png')] bg-cover bg-center bg-no-repeat">
              <div className="flex items-center border-[#b8ead9] border-b-2 rounded-2xl justify-between p-10">
                <button
                  aria-label="Back"
                  onClick={goToBookFromAZ}
                  className="w-[136px] h-12 cursor-pointer border-2 border-[#b8ead9] text-white rounded-full flex items-center justify-center hover:bg-white/5 transition  border-2 border-[#b8ead9] text-white rounded-full flex items-center justify-center bg-[#A8C2AC]/40 backdrop-blur-sm  hover:bg-white/10 transition cursor-pointer"
                  style={{
                    fontFamily: "Satoshi",
                    fontSize: "18px",
                    fontWeight: "500",
                  }}
                >
                  <LuArrowLeft size={18} />
                  <span className="ml-1">indietro</span>
                </button>
                <h1
                  className="text-3xl font-medium text-white"
                  style={{
                    fontFamily: "Archer",
                    fontWeight: "400",
                    fontSize: "48px",
                  }}
                >
                  Lista delle Specie
                </h1>
              </div>
            </div>

            <div
              ref={azContentRef}
              className="w-full flex-1 overflow-y-auto no-scrollbar archer-book-pro font-light"
            >
              <div className="w-full pb-6 pt-6">
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
                    <div className="w-1/2 h-auto mr-4 relative">
                      <Image
                        src={item.image}
                        alt={item.title.toUpperCase()}
                        width={400}
                        height={400}
                        className="w-full h-56 object-cover rounded-tr-xl rounded-br-xl"
                      />
                      <button
                        aria-label="Play"
                        className="absolute bottom-2 right-2 w-10 h-10 border-2 border-[#b8ead9] text-white rounded-full flex items-center justify-center hover:bg-white/10 transition cursor-pointer  border-2 border-[#b8ead9] text-white rounded-full flex items-center justify-center bg-[#A8C2AC]/40 backdrop-blur-sm  hover:bg-white/10 transition cursor-pointer"
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveItem(item);
                          setShowInfo(true);
                        }}
                      >
                        <FaPlay size={10} />
                      </button>
                    </div>
                    <div className="w-1/2 p-2 text-white">
                      <h2
                        className="text-lg font-semibold leading-tight"
                        style={{
                          fontFamily: "Archer",
                          fontSize: "18px",
                          fontWeight: "bold",
                        }}
                      >
                        {item.title}
                      </h2>
                      <p
                        className="mt-1"
                        style={{
                          fontFamily: "Satoshi",
                          fontSize: "15px",
                          fontWeight: "500",
                          opacity: "0.8",
                        }}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <Footer variant="light" />
            </div>
          </div>
        </div>
      )}

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

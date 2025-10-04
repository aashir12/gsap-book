"use client";

import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import "./styles/bg.css";
import "./styles/fonts.css";
import Footer from "./components/footer";
import PlayMenu from "./components/playMenu";
import PopupPlayer from "./components/PopupPlayer";
import videos from "./json/videos.json";
import Image from "next/image";
import { LuArrowLeft } from "react-icons/lu";
import { FaPlay } from "react-icons/fa";

// Define the possible views
type ViewType = "home" | "book" | "a-z";

interface ActiveItem {
  id: number;
  url: string;
  subtitle: string;
  title: string;
  description: string;
  image: string;
}


export default function Home() {
  const [currentView, setCurrentView] = useState<ViewType>("home");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showInfo, setShowInfo] = useState(false);
  const [activeItem, setActiveItem] = useState<ActiveItem | null>(null);


  const homeContainerRef = useRef<HTMLDivElement>(null);
  const homeContentRef = useRef<HTMLDivElement>(null);
  const bookContainerRef = useRef<HTMLDivElement>(null);
  const bookVideoRef = useRef<HTMLVideoElement>(null);
  const bookContentRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const azContainerRef = useRef<HTMLDivElement>(null);
  const azContentRef = useRef<HTMLDivElement>(null);

  const handlePrev = () => {
    if (currentView !== "book") return;

    // Animate out current content
    const tl = gsap.timeline();

    tl.to([bookVideoRef.current, subtitleRef.current], {
      opacity: 0,
      x: 50, // Slide right (opposite of navigation direction)
      duration: 0.3,
      ease: "power2.inOut",
    })
      .call(() => {
        setCurrentIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
      })
      .set([bookVideoRef.current, subtitleRef.current], { x: -50 }) // Position for slide in from left
      .to([bookVideoRef.current, subtitleRef.current], {
        opacity: 1,
        x: 0,
        duration: 0.4,
        ease: "power2.out",
      });
  };

  const handleNext = () => {
    if (currentView !== "book") return;

    // Animate out current content
    const tl = gsap.timeline();

    tl.to([bookVideoRef.current, subtitleRef.current], {
      opacity: 0,
      x: -50, // Slide left (opposite of navigation direction)
      duration: 0.3,
      ease: "power2.inOut",
    })
      .call(() => {
        setCurrentIndex((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
      })
      .set([bookVideoRef.current, subtitleRef.current], { x: 50 }) // Position for slide in from right
      .to([bookVideoRef.current, subtitleRef.current], {
        opacity: 1,
        x: 0,
        duration: 0.4,
        ease: "power2.out",
      });
  };

  const goToHome = () => {
    // Fade out current view then switch
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
        },
      }
    );
  };

  const goToBook = () => {
    // Smooth transition from home to book
    const tl = gsap.timeline();

    // Fade out home content
    tl.to(homeContainerRef.current, {
      opacity: 0,
      duration: 0.4,
      ease: "power2.inOut",
    })
      // Switch view and prepare book elements
      .call(() => {
        setCurrentView("book");
      })
      // Small delay to let the view switch
      .set({}, {}, "+=0.1")
      // Animate book view in smoothly
      .fromTo(
        bookContainerRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
        }
      );
  };

  const goToAZ = () => {
    // Smooth transition to A-Z page
    const tl = gsap.timeline();

    // Fade out current view
    tl.to(
      currentView === "book"
        ? bookContainerRef.current
        : homeContainerRef.current,
      {
        opacity: 0,
        duration: 0.4,
        ease: "power2.inOut",
      }
    )
      // Switch view and prepare A-Z elements
      .call(() => {
        setCurrentView("a-z");
        setShowInfo(false);
      })
      // Small delay to let the view switch and refs update
      .set({}, {}, "+=0.2");
  };

  // When video index changes, keep background playing muted
  useEffect(() => {
    if (bookVideoRef.current && currentView === "book") {
      bookVideoRef.current.load();
      bookVideoRef.current.muted = true;
      bookVideoRef.current.play();
    }
  }, [currentIndex, currentView]);


  // Animate home view on mount
  useEffect(() => {
    if (currentView === "home" && homeContainerRef.current) {
      gsap.set(homeContainerRef.current, { opacity: 0, y: 20 });
      gsap.set(homeContentRef.current, { opacity: 0, y: 30 });

      const tl = gsap.timeline();
      tl.to(homeContainerRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
      }).to(
        homeContentRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.3"
      );
    }
  }, [currentView]);

  // Animate book view on mount (only when not coming from goToBook transition)
  useEffect(() => {
    if (
      currentView === "book" &&
      bookContainerRef.current &&
      bookVideoRef.current &&
      bookContentRef.current
    ) {
      // Set initial states for smooth entrance
      gsap.set(bookVideoRef.current, { opacity: 0 });
      gsap.set(bookContentRef.current, { opacity: 0, y: 20 });

      const tl = gsap.timeline({ delay: 0.1 });

      // Fade in video smoothly
      tl.to(bookVideoRef.current, {
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
      })
        // Fade in content elements
        .to(
          bookContentRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
          },
          "-=0.3"
        );
    }
  }, [currentView]);

  // Animate A-Z view when it mounts
  useEffect(() => {
    if (currentView === "a-z" && azContentRef.current) {
      // Animate only the content, not the container (to avoid black screen)
      gsap.fromTo(
        azContentRef.current,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
          delay: 0.1,
        }
      );
    }
  }, [currentView]);

  // Home View Component
  const HomeView = () => (
    <div className="app-viewport">
      <div
        ref={homeContainerRef}
        className="app-frame archer-book-pro font-light overflow-hidden relative my-6 rounded-xl bg-[#5a6e5c] bg-[url('/backgrounds/home-background.png')] bg-cover bg-center bg-no-repeat m-auto"
      >
        <div
          ref={homeContentRef}
          className="z-10 flex flex-col items-center mt-16"
        >
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
            className="px-8 py-3 rounded-xl border-2 border-purple-300 text-purple-700 font-medium bg-purple-200/10 backdrop-blur-sm hover:bg-purple-200/20 transition-all duration-300 hover:scale-105 active:scale-95"
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
      <div
        ref={bookContainerRef}
        className="app-frame archer-book-pro relative rounded-xl bg-white overflow-hidden flex items-center justify-center"
      >
        {/* Background Video */}
        <video
          ref={bookVideoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover rounded-xl"
        >
          <source src={videos[currentIndex].url} type="video/mp4" />
        </video>

        {/* Content wrapper for animations */}
        <div ref={bookContentRef} className="absolute inset-0">
          {/* Subtitle with background gradient */}
          <div className="absolute top-0 w-full pointer-events-none">
            <div className="bg-gradient-to-b from-black/70 to-transparent w-full px-16 pt-6 pb-12">
              <div className="max-h-[20vh] overflow-hidden">
                <p
                  ref={subtitleRef}
                  className="text-white archer-book-pro text-[32px] font-semibold leading-snug text-justify"
                >
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
            onHome={goToHome}
            onAZ={goToAZ}
          />
        </div>

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
      <div
        ref={azContainerRef}
        className="app-frame archer-book-pro font-light overflow-hidden relative my-6 rounded-xl bg-[#5a6e5c] bg-[url('/backgrounds/list-background.png')] bg-cover bg-center bg-no-repeat m-auto flex flex-col"
      >
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
        {/* Sticky Header */}
        <div className="sticky top-0 z-40 bg-[#5a6e5c] bg-[url('/backgrounds/list-background.png')] bg-cover bg-center bg-no-repeat">
          <div className="flex items-center border-[#b8ead9] border-b-2 rounded-2xl justify-between p-10">
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
        </div>

        {/* Scrollable Content */}
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
                {/* Left side - Image */}
                <div className="w-1/2 h-auto relative">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={400}
                    className="w-full h-56 object-cover rounded-tr-xl rounded-br-xl"
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
            <Image
              src="/logo/logo1.png"
              alt="Logo 1"
              width={100}
              height={32}
              className="h-8 w-auto object-contain"
            />

            <Image
              src="/logo/logo2.png"
              alt="Logo 2"
              width={100}
              height={32}
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

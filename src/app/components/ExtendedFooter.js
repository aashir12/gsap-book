"use client";
import React from "react";
import Image from "next/image";

const ExtendedFooter = () => {
  return (
    <div className=" px-3 w-full bg-white">
      {/* Divider Line - Black color */}
      <div className="border-t-2 border-black my-6"></div>

      {/* Extended Footer Section */}
      <div className="text-black pb-6">
        {/* Project Description */}
        <div className="text-center">
          <p className="font-[Archer] font-semibold text-[14px] leading-[18px] max-w-4xl mx-auto">
            Pubblicazione realizzata nell’ambito delle iniziative promosse dal
            Biodiversity Gateway del National Biodiversity Future Center (NBFC),
            in riferimento al Piano Nazionale di Ripresa e Resilienza (PNRR) -
            Missione 4 “Istruzione e Ricerca” - Componente 2. “Dalla Ricerca
            all’Impresa” - Linea di Investimento 1.4 “Potenziamento strutture di
            ricerca e creazione di campioni nazionali di R&S su alcune Key
            Enabling Technologies”. Finanziato dall’Unione Europea
            NextGenerationEU. Award Number: Codice progetto CN_00000033 - CODICE
            CUP B83C22002930006
          </p>
        </div>

        {/* Logo Section */}
        <div className="flex justify-center w-full gap-4 items-center mb-4">
          <Image
            src="/footer/first.png"
            alt="First Logo"
            width={100}
            height={100}
            className="w-30 h-30 object-contain"
            priority
            quality={100}
            unoptimized
          />
          <Image
            src="/footer/second.png"
            alt="Second Logo"
            width={100}
            height={100}
            className=" h-30 object-contain"
            priority
            quality={100}
            unoptimized
          />
          <Image
            src="/footer/third.png"
            alt="Third Logo"
            width={100}
            height={100}
            className="w-30 h-30 object-contain"
            priority
            quality={100}
            unoptimized
          />
          <Image
            src="/footer/forth.png"
            alt="Fourth Logo"
            width={100}
            height={100}
            className="w-30 h-30 object-contain"
            priority
            quality={100}
            unoptimized
          />
          <Image
            src="/footer/fifth.png"
            alt="Fifth Logo"
            width={100}
            height={100}
            className="w-30 h-30 object-contain"
            priority
            quality={100}
            unoptimized
          />
        </div>
      </div>
    </div>
  );
};

export default ExtendedFooter;

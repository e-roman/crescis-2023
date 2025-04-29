

"use client";

import { useEffect } from "react";
import { useLayoutEffect } from "react"; 

// Components
import Header from "@/components/Header/Header";
import CursorMagic from "@/components/CursorMagic/CursorMagic";

import PageTransition from "@/components/PageTransition/PageTransition";


// Functions
import { initLenis } from '@/utils/initLenis';
import { RevealLoad, HideLoad, initPageTransitions, initMagicCursor } from '@/utils/themeFunctions';
import { initScrollAnimations } from '@/utils/scrollAnimations';

export default function ClientProviders({ children }) {
  useEffect(() => {
    initLenis();
    RevealLoad();
    HideLoad();
    // initPageTransitions();
    // initMagicCursor();
    // initScrollAnimations();
  }, []); 

  return (
    <>
      {/* <PageTransition/> */}
      <Header/>
      <CursorMagic/>
      <div className="bg-noise"></div>
      <div className="scroll-content"> 
        <div id="content-wrap">
          {children}
        </div>
      </div>
    </>
  );
}

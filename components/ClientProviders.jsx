

"use client";

import { useEffect } from "react";
import { useLayoutEffect } from "react"; 

// Components
import PageTransition from "@/components/PageTransition/PageTransition";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import CursorMagic from "@/components/CursorMagic/CursorMagic";

// Functions
import { initLenis } from '@/utils/initLenis';
import { initMagicCursor, initScrollToTop, initAnchorScrolling } from '@/utils/themeFunctions';
import { initScrollAnimations } from '@/utils/scrollAnimations';

export default function ClientProviders({ children }) {
  useEffect(() => {
    initLenis();
    initMagicCursor();
    initScrollAnimations();
    initScrollToTop();
    initAnchorScrolling();
  }, []); 

  return (
    <>
      <PageTransition/>
      <Header/>
      <CursorMagic/>
      <div className="bg-noise"></div>
      <div className="scroll-content"> 
        <div id="content-wrap">
          {children}
        </div>

        <Footer/>
      </div>
    </>
  );
}

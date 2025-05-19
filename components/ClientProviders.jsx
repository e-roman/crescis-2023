"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Components
import PageTransition from "@/components/PageTransition/PageTransition";
import PageTransition2 from "@/components/PageTransition/PageTransition2";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import CursorMagic from "@/components/CursorMagic/CursorMagic";

// Functions
import { initLenis } from '@/utils/initLenis';
import { initMagicCursor, initScrollToTop, initAnchorScrolling, initScrollingText } from '@/utils/themeFunctions';
import { initScrollAnimations } from '@/utils/scrollAnimations';
import { animateSplitTextScroll } from "@/utils/SplitText";

export default function ClientProviders({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    initLenis();
    initMagicCursor();
    initScrollAnimations();
    initScrollToTop();
    initScrollingText();       
    initAnchorScrolling();
    animateSplitTextScroll();
  }, []); 

  const isHome = pathname === "/";

  return (
    <>
      {isHome ? <PageTransition /> : <PageTransition2 />}
      <Header />
      <CursorMagic />
      <div className="bg-noise"></div>
      <div className="scroll-content"> 
        <div id="content-wrap">
          {children}
        </div>
        <Footer />
      </div>
    </>
  );
}

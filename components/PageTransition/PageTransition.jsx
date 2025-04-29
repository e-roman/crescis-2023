
// components/PageTransition.tsx
"use client";

import { useEffect } from "react";
import Image from "next/image";

import { detectBrowser, detectMobile, initPageTransitions, RevealLoad, HideLoad } from '@/utils/themeFunctions';

export default function PageTransition() {
  useEffect(() => {
    detectBrowser();
    detectMobile();
    initPageTransitions();
    RevealLoad();
    HideLoad();
  }, []); 

  return (
    <div id="page-transition">
      <div className="ptr-overlay"></div>
      <div className="ptr-preloader">
        <div className="ptr-prel-content">
          <Image src="/assets/img/logo-light.png" alt="Image" width={70} height={50} />
        </div> 
      </div> 
    </div>
  );
}

"use client";

import { useEffect } from "react";
import Image        from "next/image";
import { initPageTransition } from "@/utils/FunctionsLoader";

export default function PageTransition() {
  useEffect(() => {
    initPageTransition();
  }, []);

  return (
    <div id="page-transition">
      <div className="ptr-overlay" />
      <div className="ptr-preloader">
        <div className="ptr-prel-content">
          <Image src="/assets/img/logo-light.png" alt="Logo" width={70} height={50} />
        </div>
      </div>
    </div>
  );
}

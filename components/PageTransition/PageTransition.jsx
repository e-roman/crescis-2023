
// components/PageTransition.tsx
"use client";

import { useEffect } from "react";
import Image from "next/image";

import { initPageTransitions } from "@/utils/themeFunctions";

export default function PageTransition() {
  useEffect(() => {
    // Esperar un poquito para asegurar que todo esté montado
    const timeout = setTimeout(() => {
      initPageTransitions();
    }, 50); // o usar requestAnimationFrame o raf-tick si usás GSAP MatchMedia

    return () => clearTimeout(timeout);
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

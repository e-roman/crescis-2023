"use client"; // si usás App Router (Next.js 13/14)

import { useEffect } from "react";
import gsap from "gsap";

const usePageTransitions = () => {
  useEffect(() => {
    const revealLoad = () => {
      const tl = gsap.timeline();
      tl.set(".loading-screen", { yPercent: 0 })
        .to(".loading-screen", {
          yPercent: -100,
          duration: 1,
          ease: "power2.out",
        })
        .set(".loading-screen", { yPercent: 100 });
    };

    const hideLoad = () => {
      const tl = gsap.timeline();
      tl.set(".loading-screen", { yPercent: 100 })
        .to(".loading-screen", {
          yPercent: 0,
          duration: 1,
          ease: "power2.out",
        });
    };

    // Ejecutar reveal automáticamente al cargar
    revealLoad();

    // Podrías escuchar eventos de router aquí si querés más control
    // pero eso lo podemos mejorar luego si querés

    // No hacemos limpieza especial por ahora

  }, []);
};

export default usePageTransitions;

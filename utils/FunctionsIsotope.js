// utils/FunctionsIsotope.js
"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Registra ScrollTrigger en GSAP
gsap.registerPlugin(ScrollTrigger);

export async function initIsotope() {
  if (typeof window === "undefined") return; // No correr en SSR

  // Carga dinámica de librerías para no romper el build en Next.js
  const imagesLoaded = (await import("imagesloaded")).default;
  const Isotope      = (await import("isotope-layout")).default;
  const PackeryMode  = (await import("isotope-packery")).default;

  // Registra el modo Packery en Isotope
  Isotope.LayoutMode.modes.packery = PackeryMode;

  // Selector del contenedor
  const container = document.querySelector(".isotope-items-wrap");
  if (!container) return;

  // Espera a que carguen las imágenes
  imagesLoaded(container, () => {
    // Inicializa Isotope con Packery
    const iso = new Isotope(container, {
      itemSelector: ".isotope-item",
      layoutMode: "packery",
      transitionDuration: "0.7s",
      percentPosition: true,
    });

    // Primer layout + refrescar ScrollTrigger
    setTimeout(() => {
      iso.layout();
      ScrollTrigger.refresh(true);
    }, 500);

    // ---------------------------------
    // Gestión de filtrado
    // ---------------------------------
    const filterLinks = document.querySelectorAll(".ttgr-cat-list > li > a");
    filterLinks.forEach(link => {
      link.addEventListener("click", e => {
        e.preventDefault();
        const selector = link.getAttribute("data-filter") || "*";

        // Aplica el filtro
        iso.arrange({ filter: selector });

        // Marca activo
        filterLinks.forEach(l => l.classList.remove("active"));
        link.classList.add("active");

        // Refresca ScrollTrigger tras layout
        setTimeout(() => ScrollTrigger.refresh(true), 500);
      });
    });
  });
}

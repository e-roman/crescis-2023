// utils/lenos.js
"use client";

import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let lenis;  // mantén una referencia si quieres más tarde

export function initLenis() {
  if (typeof window === "undefined") return;

  // Si ya lo inicializaste, no volver a hacerlo
  if (lenis) return;

  lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easing similar a Expo
    orientation: "vertical",
    gestureOrientation: "vertical",
    smoothWheel: true,
    smoothTouch: false,
    infinite: false,
  });

  function raf(time) {
    lenis.raf(time);
    ScrollTrigger.update(); // refresca ScrollTrigger en cada frame
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
}
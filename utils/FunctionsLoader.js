// utils/FunctionsLoader.js
import { gsap, Expo } from "gsap";

export function initPageTransition() {
  // 1) Solo cliente

  // 2) Si ya sabes que siempre está la clase tt-transition, omite la comprobación
  const body = document.body;

  function RevealLoad() {
    const tl = gsap.timeline({ defaults: { duration: 1, ease: Expo.easeInOut }}); 
    tl.set("#page-transition",    { autoAlpha: 1 });
    tl.to(".ptr-overlay",         { scaleY: 1, transformOrigin: "center bottom" }, 0);
    tl.to("#content-wrap",        { y: -80, autoAlpha: 0 }, 0);
    tl.to("#tt-header",           { y: -20, autoAlpha: 0 }, 0);
    tl.to(".ph-image",           { y: -80, autoAlpha: 0 }, 0);
    tl.to(".ph-appear",           { y: -60, autoAlpha: 0 }, 0);
    tl.to(".ptr-preloader",       { autoAlpha: 1 }, 0.4);
  }

  function HideLoad() {
    const tl = gsap.timeline();
    tl.to(".ptr-preloader", { duration: 1, autoAlpha: 0, ease: Expo.easeInOut });
    tl.to(".ptr-overlay",   { duration: 1, scaleY: 0, transformOrigin: "center top", ease: Expo.easeInOut }, 0.3);
    tl.from("#tt-header",   { duration: 1, y: 20, autoAlpha: 0, ease: Expo.easeInOut, clearProps: "all" }, 0.6);
    tl.from(".ph-image",    { duration: 1.5, y: 80, autoAlpha: 0, stagger: 0.3, ease: Expo.easeOut, clearProps:"all" }, 1.2);
    tl.from(".ph-appear",   { duration: 1.5, y: 60, autoAlpha: 0, stagger: 0.3, ease: Expo.easeOut, clearProps:"all" }, 1.5);
    tl.set("#page-transition", { duration: 1, autoAlpha: 0, ease: Expo.easeInOut });
  }

  // 3) Hide inicial al montar
  HideLoad();
}

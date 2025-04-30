// utils/FunctionsLoader.js
import { gsap, Expo } from "gsap";

export function initPageTransition() {
  // 1) Sólo cliente
  if (typeof window === "undefined") return;
  const body = document.body;
  // 2) Sólo si body tiene la clase tt-transition
  if (!body.classList.contains("tt-transition")) return;

  function RevealLoad() {
    const tl = gsap.timeline({ defaults: { duration: 1, ease: Expo.easeInOut }});
    tl.set("#page-transition",    { autoAlpha: 1 });
    tl.to(".ptr-overlay",         { scaleY: 1, transformOrigin: "center bottom" }, 0);
    tl.to("#content-wrap",        { y: -80, autoAlpha: 0 }, 0);
    tl.to("#tt-header",           { y: -20, autoAlpha: 0 }, 0);
    tl.to(".ptr-preloader",       { autoAlpha: 1 }, 0.4);
  }

  function HideLoad() {
    const tl = gsap.timeline();
    tl.to(".ptr-preloader", { duration: 1, autoAlpha: 0, ease: Expo.easeInOut });
    tl.to(".ptr-overlay",   { duration: 1, scaleY: 0, transformOrigin: "center top", ease: Expo.easeInOut }, 0.3);
    tl.from("#tt-header",   { duration: 1, y: 20, autoAlpha: 0, ease: Expo.easeInOut, clearProps: "all" }, 0.6);
    tl.from(".ph-image", { duration: 1.5, y: 80, autoAlpha: 0, stagger: 0.3, ease: Expo.easeOut, clearProps:"all" }, 1.2);
    tl.from(".ph-appear", { duration: 1.5, y: 60, autoAlpha: 0, stagger: 0.3, ease: Expo.easeOut, clearProps:"all" }, 1.5);
    // ... aquí tus demás from() de ph-image, ph-appear, etc.
    tl.set("#page-transition", { duration: 1, autoAlpha: 0, ease: Expo.easeInOut });
  }

  // 3) Hide inicial al montar
  HideLoad();

  // 4) Interceptar clicks
  document.querySelectorAll(
    "a:not([target='_blank']):not([href^='#']):not(.no-transition):not(.tt-btn-disabled a)"
  ).forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      RevealLoad();
      const href = link.href;
      setTimeout(() => window.location = href, 0);
    });
  });

  // 5) Al load de la página
  window.addEventListener("load",   () => setTimeout(HideLoad, 0));
  // 6) Back/forward cache
  window.onpageshow = evt => { if (evt.persisted) HideLoad(); };
}

// utils/FunctionsLoader.js

import { gsap, Expo } from "gsap";

export function initPageTransition() {
  if (typeof window === "undefined") return;
  const body = document.body;
  if (!body.classList.contains("tt-transition")) return;

  function RevealLoad() {
    const tl = gsap.timeline({ defaults: { duration: 1, ease: Expo.easeInOut } });
    tl.set("#page-transition", { autoAlpha: 1 });
    tl.to(".ptr-overlay", { scaleY: 1, transformOrigin: "center bottom" }, 0);
    tl.to("#content-wrap", { y: -80, autoAlpha: 0 }, 0);
    tl.to("#tt-header", { y: -20, autoAlpha: 0 }, 0);
    tl.to(".ptr-preloader", { autoAlpha: 1 }, 0.4);
  }

  function HideLoad() {
    const tl = gsap.timeline();
    tl.to(".ptr-preloader", { duration: 1, autoAlpha: 0, ease: Expo.easeInOut });
    tl.to(".ptr-overlay", { duration: 1, scaleY: 0, transformOrigin: "center top", ease: Expo.easeInOut }, 0.3);

    // tt-Header appear
    tl.from("#tt-header", { duration: 1, y: 20, autoAlpha: 0, ease: Expo.easeInOut, clearProps: "all" }, 0.6);

    // Page header image appear
    const pageHeader = document.getElementById("page-header");
    const phImageEls = document.querySelectorAll(".ph-image");
    if (phImageEls.length) {
      if (pageHeader?.classList.contains("ph-bg-image")) {
        tl.from(".ph-image img, .ph-video", {
          duration: 1.5, y: 80, autoAlpha: 0, stagger: 0.3,
          ease: Expo.easeOut, clearProps: "all"
        }, 0.8);
      } else {
        tl.from(".ph-image", {
          duration: 1.5, y: 80, autoAlpha: 0, stagger: 0.3,
          ease: Expo.easeOut, clearProps: "all"
        }, 1.2);
      }
    }

    // Page header elements with class "ph-appear"
    if (document.querySelectorAll(".ph-appear").length) {
      tl.from(".ph-appear", {
        duration: 1.5, y: 60, autoAlpha: 0, stagger: 0.3,
        ease: Expo.easeOut, clearProps: "all"
      }, 1.5);
    }

    // Project info list items
    const infoList = pageHeader?.querySelector(".project-info-list");
    if (infoList) {
      if (pageHeader.classList.contains("ph-inline")) {
        tl.from("#page-header .project-info-list > ul > li", {
          duration: 1.5, y: 80, autoAlpha: 0, stagger: 0.15,
          ease: Expo.easeOut, clearProps: "all"
        }, 2.2);
      } else {
        tl.from("#page-header .project-info-list > ul", {
          duration: 1.5, y: 80, autoAlpha: 0,
          ease: Expo.easeOut, clearProps: "all"
        }, 2.2);
      }
    }

    // Portfolio slider elements (tt-psc-elem)
    document.querySelectorAll(".tt-psc-elem").forEach(el => {
      const wrapper = document.createElement("div");
      wrapper.classList.add("tt-ps-appear");
      el.parentNode.insertBefore(wrapper, el);
      wrapper.appendChild(el);
    });
    if (document.querySelectorAll(".tt-ps-appear").length) {
      tl.from(".tt-ps-appear", {
        duration: 1.5, y: 80, autoAlpha: 0, stagger: 0.3,
        ease: Expo.easeOut, clearProps: "all"
      }, 1.4);
    }

    // Portfolio carousel titles & categories
    if (document.querySelectorAll(".tt-pci-title").length) {
      tl.from(".tt-pci-title", {
        duration: 1.5, x: 80, autoAlpha: 0, skewX: "-10deg",
        ease: Expo.easeOut, clearProps: "all"
      }, 1.4);
    }
    if (document.querySelectorAll(".tt-pci-category").length) {
      tl.from(".tt-pci-category", {
        duration: 1.5, x: 80, autoAlpha: 0,
        ease: Expo.easeOut, clearProps: "all"
      }, 1.5);
    }

    // Page content appear
    tl.from("#page-content", {
      duration: 1.5, autoAlpha: 0, y: 80,
      ease: Expo.easeOut, clearProps: "all"
    }, 0.8);

    // Finalmente ocultamos el container
    tl.set("#page-transition", { duration: 1, autoAlpha: 0, ease: Expo.easeInOut });
  }

  // interruptor de links
  document.querySelectorAll(
    "a:not([target='_blank']):not([href^='#']):not(.no-transition):not(.tt-btn-disabled a)"
  ).forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      RevealLoad();
      const href = link.href;
      setTimeout(() => window.location = href, 1000);
    });
  });

  // hide al cargar
  window.addEventListener("load", () => setTimeout(HideLoad, 0));
  // back/forward cache
  window.onpageshow = evt => { if (evt.persisted) HideLoad(); };

  // initial hide
  HideLoad();
}

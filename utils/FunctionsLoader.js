// Loader.js
import { gsap, Power2, Expo } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

// Registrar plugins GSAP
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// Detecta si es Firefox
export function detectBrowser() {
  if (typeof window !== "undefined") {
    const isFirefox = navigator.userAgent.indexOf("Firefox") > -1;
    if (isFirefox) {
      document.body.classList.add("is-firefox");
    }
  }
}

// Detecta si es un dispositivo móvil
export function detectMobile() {
  if (typeof window !== "undefined") {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Nokia|Opera Mini/i.test(navigator.userAgent);
    if (isMobile) {
      document.body.classList.add("is-mobile");
    }
  }
}

// Función para inicializar Page Transitions
export function initPageTransitions() {
  if (typeof window === "undefined") return;

  if (document.body.classList.contains("tt-transition")) {

    window.addEventListener("load", () => {
      setTimeout(() => {
        HideLoad();
      }, 0);
    });

    // Forzar recarga en el botón de "Back" del navegador
    window.onpageshow = function (event) {
      if (event.persisted) {
        window.location.reload();
      }
    };

    // Agregar evento a todos los <a> que no sean #, _blank, mailto, tel, etc
    document.querySelectorAll('a:not([target="_blank"]):not([href^="#"]):not([href^="mailto"]):not([href^="tel"]):not(.lg-trigger):not(.tt-btn-disabled a):not(.no-transition)').forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        setTimeout(() => {
          window.location.href = link.href;
        }, 1000);
        RevealLoad();
      });
    });
  }
}

// Función que muestra el "Overlay" de transición
export function RevealLoad() {
  const tl_transitIn = gsap.timeline({ defaults: { duration: 1, ease: "expo.inOut" } });

  // Mostrar el contenedor de transición
  tl_transitIn.set("#page-transition", { autoAlpha: 1 });

  // Escalar el overlay hacia arriba
  tl_transitIn.to(".ptr-overlay", { scaleY: 1, transformOrigin: "center bottom" }, 0);

  // Mover el contenido principal hacia arriba y desvanecer
  // tl_transitIn.to("#content-wrap", { y: -80, autoAlpha: 1 }, 0);

  // Mover y desvanecer el header
  tl_transitIn.to("#tt-header", { y: -20, autoAlpha: 0 }, 0);

  // Mostrar el preloader
  tl_transitIn.to(".ptr-preloader", { autoAlpha: 1 }, 0.4);
}

// Función que oculta el "Overlay" de transición
export function HideLoad() {
  const tl_transitOut = gsap.timeline();

  // Preloader Fade Out
  tl_transitOut.to(".ptr-preloader", { duration: 1, autoAlpha: 0, ease: "expo.inOut" });

  // Overlay Scale Out
  tl_transitOut.to(".ptr-overlay", { duration: 1, scaleY: 0, transformOrigin: "center top", ease: "expo.inOut" }, 0.3);

  // Header Appear
  tl_transitOut.from("#tt-header", { duration: 1, y: 20, autoAlpha: 0, ease: "expo.inOut", clearProps: "all" }, 0.6);

  // Page Header Image Appear
  const phImage = document.querySelector(".ph-image");
  if (phImage) {
    if (document.querySelector("#page-header.ph-bg-image")) {
      // If #page-header has class "ph-bg-image", animate inner img or video
      const imagesAndVideos = phImage.querySelectorAll("img, .ph-video");
      if (imagesAndVideos.length) {
        tl_transitOut.from(imagesAndVideos, { duration: 1.5, y: 80, autoAlpha: 0, stagger: 0.3, ease: "expo.out", clearProps: "all" }, 0.8);
      }
    } else {
      // Animate .ph-image itself
      tl_transitOut.from(phImage, { duration: 1.5, y: 80, autoAlpha: 0, stagger: 0.3, ease: "expo.out", clearProps: "all" }, 1.2);
    }
  }

  // Page Header Elements Appear (.ph-appear)
  const phAppear = document.querySelectorAll(".ph-appear");
  if (phAppear.length) {
    tl_transitOut.from(phAppear, { duration: 1.5, y: 60, autoAlpha: 0, stagger: 0.3, ease: "expo.out", clearProps: "all" }, 1.5);
  }

  // Project Info List Elements
  const projectInfoList = document.querySelector("#page-header .project-info-list");
  if (projectInfoList) {
    if (document.querySelector("#page-header.ph-inline")) {
      const listItems = projectInfoList.querySelectorAll("ul > li");
      if (listItems.length) {
        tl_transitOut.from(listItems, { duration: 1.5, y: 80, autoAlpha: 0, stagger: 0.15, ease: "expo.out", clearProps: "all" }, 2.2);
      }
    } else {
      const list = projectInfoList.querySelector("ul");
      if (list) {
        tl_transitOut.from(list, { duration: 1.5, y: 80, autoAlpha: 0, ease: "expo.out", clearProps: "all" }, 2.2);
      }
    }
  }

  // Portfolio Slider Elements (.tt-psc-elem)
  const pscElems = document.querySelectorAll(".tt-psc-elem");
  if (pscElems.length) {
    pscElems.forEach(elem => {
      // Wrap each element in a div.tt-ps-appear
      const wrapper = document.createElement("div");
      wrapper.classList.add("tt-ps-appear");
      elem.parentNode.insertBefore(wrapper, elem);
      wrapper.appendChild(elem);
    });
    const psAppears = document.querySelectorAll(".tt-ps-appear");
    tl_transitOut.from(psAppears, { duration: 1.5, y: 80, autoAlpha: 0, stagger: 0.3, ease: "expo.out", clearProps: "all" }, 1.4);
  }

  // Portfolio Carousel Title (.tt-pci-title)
  const pciTitles = document.querySelectorAll(".tt-pci-title");
  if (pciTitles.length) {
    tl_transitOut.from(pciTitles, { duration: 1.5, x: 80, autoAlpha: 0, skewX: "-10deg", ease: "expo.out", clearProps: "all" }, 1.4);
  }

  // Portfolio Carousel Category (.tt-pci-category)
  const pciCategories = document.querySelectorAll(".tt-pci-category");
  if (pciCategories.length) {
    tl_transitOut.from(pciCategories, { duration: 1.5, x: 80, autoAlpha: 0, ease: "expo.out", clearProps: "all" }, 1.5);
  }

  // Page Content
  tl_transitOut.from("#page-content", { duration: 1.5, autoAlpha: 0, y: 80, ease: "expo.out", clearProps: "all" }, 0.8);

  // Finally hide the #page-transition container
  tl_transitOut.set("#page-transition", { autoAlpha: 0 });
}

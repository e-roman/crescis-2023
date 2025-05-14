import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);


export function animateSplitTextScroll() {
  const elements = document.querySelectorAll(".split-lines");

  elements.forEach((el) => {
    if (el.classList.contains("not-split")) {
      new SplitType(el, {
        types: "lines",
        lineClass: "line",
      });

      el.classList.remove("not-split");

      el.querySelectorAll(".line").forEach((line) => {
        if (!line.querySelector(".single-line-inner")) {
          const wrapper = document.createElement("div");
          wrapper.classList.add("single-line-inner");
          wrapper.append(...line.childNodes);
          line.appendChild(wrapper);
        }
      });
    }

    const lines = el.querySelectorAll(".single-line-inner");

    // Aseguramos que las líneas estén ocultas al inicio
    gsap.set(lines, {
      yPercent: 100,
      opacity: 0,
      rotate: 0.001,
    });

    // Animación solo cuando el elemento entra al viewport
    gsap.to(lines, {
      scrollTrigger: {
        trigger: el,
        start: "top 80%",  // Ajusta esto para que se dispare justo cuando aparece
        toggleActions: "play none none none",
        once: true,        // solo una vez
      },
      yPercent: 0,
      opacity: 1,
      rotate: 0.001,
      ease: "power4.out",
      duration: 1.47,
      stagger: 0.07,
    });
  });
}



export function animateSplitEntranceLoad() {
  const elements = document.querySelectorAll(".split-lines-init");

  elements.forEach((el) => {
    // SPLIT solo si no está hecho
    if (el.classList.contains("not-split-in")) {
      new SplitType(el, {
        types: "lines",
        lineClass: "line",
      });

      el.classList.remove("not-split-in");

      el.querySelectorAll(".line").forEach((line) => {
        if (!line.querySelector(".single-line-inner")) {
          const wrapper = document.createElement("div");
          wrapper.classList.add("single-line-inner");
          wrapper.append(...line.childNodes);
          line.appendChild(wrapper);
        }
      });
    }

    const lines = el.querySelectorAll(".single-line-inner");

    // 🔒 Oculta inmediatamente las líneas para que no se vean antes de animar
    gsap.set(lines, {
      yPercent: 100,
      opacity: 0,
      rotate: 0.001,
    });

    // 🎬 Animación de entrada
    gsap.to(lines, {
      yPercent: 0,
      opacity: 1,
      rotate: 0.001,
      ease: "power4.out",
      duration: 1.47,
      stagger: 0.09,
    });
  });
}


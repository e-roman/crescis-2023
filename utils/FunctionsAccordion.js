
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export function initAccordion() {
  if (typeof window === 'undefined') return;

  const groups = gsap.utils.toArray(".accordion-group");
  const menus = gsap.utils.toArray(".tt-accordion-heading");

  const createAnimation = (element) => {
    const menu = element.querySelector(".tt-accordion-heading");
    const box = element.querySelector(".accordion-content");

    gsap.set(box, { height: "auto", overflow: "hidden", display: "none" });

    const animation = gsap.timeline({ paused: true })
      .fromTo(box, { height: 0, display: "block" }, { height: "auto", duration: 0.5, ease: "power2.inOut" })
      .reverse();

    return (clickedMenu) => {
      if (clickedMenu === menu) {
        animation.reversed(!animation.reversed());
        element.classList.toggle("active");
      } else {
        animation.reverse();
        element.classList.remove("active");
      }
    };
  };

  const menuToggles = groups.map(createAnimation);

  menus.forEach((menu) => {
    menu.addEventListener("click", () => {
      menuToggles.forEach((toggleFn) => toggleFn(menu));
    });
  });
}



// Ejecutar manualmente desde el componente React cuando el DOM esté listo
// gsapAccordion();

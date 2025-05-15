
import { gsap, Expo, Power3, Sine  } from "gsap";

import { animateSplitEntranceLoad } from "@/utils/SplitText";

export function initPageTransition2() {
  const splash = document.querySelector('.js-splash');
  const splashBg = document.querySelector('.splash__bg');
  const splashLogo = document.querySelector('.splash__logo');
  const body = document.querySelector('body');

  if (!splash || !splashBg || !splashLogo) return;

  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  const maxSize = Math.max(screenWidth, screenHeight);

  const tl = gsap.timeline();

  // Expansión inicial del fondo
  tl.fromTo(splashBg, 
    { webkitClipPath: "ellipse(0 0 at 50% 50%)" }, 
    { webkitClipPath: "ellipse(140px 140px at 50% 50%)", ease: Sine.easeOut, duration: 0.6 }
  );

  // Aparece el logo
  tl.to(splashLogo, { opacity: 1, duration: 0.3 }, "<0.3");

  // Expansión completa
  tl.to(splashBg, {
    webkitClipPath: `ellipse(${maxSize}px ${maxSize}px at 50% 50%)`,
    ease: Sine.easeOut,
    duration: 1.1
  }, "+=0.4");

  // Quita clase al body antes de mover el splash
  tl.call(() => {
    body?.classList.remove('first-animation');
  }, null, "-=0.2");

  // Mueve el splash hacia abajo y luego lo oculta
  tl.to(splash, {
    yPercent: 100,
    ease: Power3.easeInOut,
    duration: 0.9,
    onComplete: () => {
      splash.style.display = 'none';
    }
  }, "<");


  // Muestra elementos ocultos
  tl.call(() => {
    document.querySelectorAll('.is-hidden').forEach(el => el.classList.remove('is-hidden'));
  }, null, "+=0.4");



  // Ejecuta animación personalizada
  tl.call(() => animateSplitEntranceLoad(), [], "+=0");

  // Muestra después de animar
  tl.to(".split-lines-init", { opacity: 1, duration: 0.5 }, "+=0.4");

  // Agrega clase 'active' a .drawLoaded
  tl.add(() => {
    document.querySelectorAll('.drawLoaded').forEach(el => {
      el.classList.add('active');
    });
  }, "+=0");
}

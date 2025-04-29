"use client";

import { createContext, useContext, useState } from "react";
import { gsap } from "gsap";

const TransitionContext = createContext();

export function useTransition() {
  return useContext(TransitionContext);
}

export function TransitionProvider({ children }) {
  const [isAnimating, setIsAnimating] = useState(false);

  const pageTransitionIn = () => {
    setIsAnimating(true);
    const tl = gsap.timeline({
      onComplete: () => setIsAnimating(false)
    });

    tl.set("#page-transition", { autoAlpha: 1 })
      .to(".ptr-overlay", {
        duration: 0.8,
        scaleY: 1,
        transformOrigin: "bottom",
        ease: "power4.inOut",
      })
      .to(".ptr-preloader", {
        duration: 0.8,
        opacity: 1,
        ease: "power2.out",
      }, "-=0.5");
  };

  return (
    <TransitionContext.Provider value={{ pageTransitionIn }}>
      {children}
    </TransitionContext.Provider>
  );
}

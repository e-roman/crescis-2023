// utils/FunctionsNavsite.js

"use client";

import { gsap, Power2 } from "gsap";

// Portfolio grid categories filter
export function initPortfolioFilter() {
  if (typeof window === "undefined") return; // SSR safety

  // 1) Move the category nav into #body-inner
  const catNav = document.querySelector(".ttgr-cat-nav");
  const bodyInner = document.querySelector("#body-inner");
  if (catNav && bodyInner) {
    bodyInner.appendChild(catNav);
  }

  // 2) Define close-nav handler and function to rebind it
  function handleCatNavCloseClick() {
    document.body.classList.remove("ttgr-cat-nav-open");

    // Categories step out animations
    const tlClose = gsap.timeline();
    tlClose.to(".ttgr-cat-list > li", {
      duration: 0.3,
      y: -80,
      autoAlpha: 0,
      stagger: 0.05,
      ease: Power2.easeIn,
    });
    tlClose.to(
      ".ttgr-cat-nav",
      { duration: 0.3, autoAlpha: 0, clearProps: "all" },
      "+=0.2"
    );
    tlClose.to(
      ".portfolio-grid-item",
      { duration: 0.3, scale: 1, clearProps: "all" },
      "-=0.4"
    );
    tlClose.to(
      ".pgi-caption, #page-header, .ttgr-cat-trigger",
      { duration: 0.3, autoAlpha: 1, clearProps: "all" },
      "-=0.4"
    );
    tlClose.to(".ttgr-cat-list > li", { clearProps: "all" });
  }

  function bindCatNavClose() {
    if (catNav) {
      catNav.addEventListener("click", handleCatNavCloseClick);
    }
  }

  // 3) On category-trigger click → open category nav
  document.querySelectorAll(".ttgr-cat-trigger").forEach(trigger => {
    trigger.addEventListener("click", () => {
      document.body.classList.add("ttgr-cat-nav-open");

      if (document.body.classList.contains("ttgr-cat-nav-open")) {
        // Shrink grid items + hide captions & trigger
        gsap.to(".portfolio-grid-item", { duration: 0.3, scale: 0.9 });
        gsap.to(".pgi-caption, .ttgr-cat-trigger", { duration: 0.3, autoAlpha: 0 });

        // Temporarily unbind close clicks
        if (catNav) catNav.removeEventListener("click", handleCatNavCloseClick);

        // Categories step-in animation
        const tlIn = gsap.timeline({
          onComplete: bindCatNavClose, // rebind close handler when done
        });
        tlIn.to(".ttgr-cat-nav", { duration: 0.3, autoAlpha: 1 });
        tlIn.from(".ttgr-cat-list > li", {
          duration: 0.3,
          y: 80,
          autoAlpha: 0,
          stagger: 0.05,
          ease: Power2.easeOut,
          clearProps: "all",
        });

        // On clicking a category link, animate the list out
        document
          .querySelectorAll(".ttgr-cat-nav a")
          .forEach(link => {
            const href = link.getAttribute("href");
            const target = link.getAttribute("target");
            if (
              target === "_blank" ||
              href?.startsWith("#") ||
              href?.startsWith("mailto:") ||
              href?.startsWith("tel:")
            ) {
              return; // skip external or anchor/tel/mailto
            }
            link.addEventListener("click", () => {
              gsap.to(".ttgr-cat-list > li", {
                duration: 0.3,
                y: -80,
                autoAlpha: 0,
                stagger: 0.05,
                ease: Power2.easeIn,
              });
            });
          });
      }
    });
  });
}

// utils/FunctionsNavsite.js

"use client";

import { gsap, Power2, Expo } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Registro de plugins
gsap.registerPlugin(ScrollTrigger);

// Main Menu (Classic) - Desktop Only
export function initMainMenu() {
  if (typeof window === "undefined") return;

  // Keeping sub-menus inside screen (only on large screens)
  if (window.innerWidth > 1200) {
    document.querySelectorAll(".tt-submenu-trigger").forEach(trigger => {
      const parent = trigger.parentElement;
      if (!parent) return;
      parent.addEventListener("mouseenter", () => {
        const menu = parent.querySelector(":scope > .tt-submenu");
        if (!menu) return;
        const rect = menu.getBoundingClientRect();
        if (rect.left + rect.width > window.innerWidth) {
          menu.style.left = `-${menu.offsetWidth}px`;
        }
      });
    });
  }

  // Main menu hover
  document.querySelectorAll(".tt-main-menu-list").forEach(item => {
    item.addEventListener("mouseenter", () => item.classList.add("tt-mm-hover"));
    item.addEventListener("mouseleave", () => item.classList.remove("tt-mm-hover"));
  });

  // Submenu wrap hover
  document.querySelectorAll(".tt-submenu-wrap").forEach(wrap => {
    wrap.addEventListener("mouseenter", () => wrap.classList.add("tt-submenu-open"));
    wrap.addEventListener("mouseleave", () => wrap.classList.remove("tt-submenu-open"));
  });
}

// Mobile Menu (Classic)
export function initMobileMenu() {
  if (typeof window === "undefined") return;

  const toggleBtnWrap = document.getElementById("tt-m-menu-toggle-btn-wrap");
  if (!toggleBtnWrap) return;

  const html = document.documentElement;
  const body = document.body;
  const mainMenu = document.querySelector(".tt-main-menu");
  const mainMenuItems = document.querySelectorAll(".tt-main-menu-content > ul > li");
  const menuLinks = document.querySelectorAll(".tt-main-menu a, .tt-logo a");

  const handleToggleClick = e => {
    e.preventDefault();
    html.classList.toggle("tt-no-scroll");
    body.classList.toggle("tt-m-menu-open");

    if (body.classList.contains("tt-m-menu-open")) {
      body.classList.add("tt-m-menu-toggle-no-click");
      const tlIn = gsap.timeline({
        onComplete: () => body.classList.remove("tt-m-menu-toggle-no-click")
      });
      tlIn.to(mainMenu, { duration: 0.4, autoAlpha: 1 });
      tlIn.from(mainMenuItems, {
        duration: 0.4, y: 80, autoAlpha: 0, stagger: 0.05,
        ease: Power2.easeOut, clearProps: "all"
      });

      menuLinks.forEach(link => {
        const href = link.getAttribute("href");
        const target = link.getAttribute("target");
        if (
          href && !href.startsWith("#") &&
          !href.startsWith("mailto") && !href.startsWith("tel") &&
          target !== "_blank"
        ) {
          link.addEventListener("click", () => {
            gsap.set("#content-wrap", { autoAlpha: 0 });
            gsap.to(mainMenuItems, {
              duration: 0.4, y: -80, autoAlpha: 0, stagger: 0.05,
              ease: Power2.easeIn
            });
          });
        }
      });

    } else {
      body.classList.add("tt-m-menu-toggle-no-click");
      const tlOut = gsap.timeline({
        onComplete: () => body.classList.remove("tt-m-menu-toggle-no-click")
      });
      tlOut.to(mainMenuItems, {
        duration: 0.4, y: -80, autoAlpha: 0, stagger: 0.05,
        ease: Power2.easeIn
      });
      tlOut.to(mainMenu, { duration: 0.4, autoAlpha: 0, clearProps: "all" }, "+=0.2");
      tlOut.to(mainMenuItems, { clearProps: "all" });

      setTimeout(() => {
        document.querySelectorAll(".tt-submenu").forEach(sm => sm.style.display = "none");
        document.querySelectorAll(".tt-submenu-trigger").forEach(t => t.classList.remove("tt-m-submenu-open"));
      }, 500);
    }
  };

  toggleBtnWrap.addEventListener("click", handleToggleClick);

  // Append trigger spans for submenu links that are anchors
  document.querySelectorAll('.tt-submenu-trigger > a[href^="#"]').forEach(link => {
    const parent = link.parentElement;
    if (!parent) return;
    const span = document.createElement("span");
    span.className = "tt-submenu-trigger-m";
    parent.appendChild(span);
  });

  // Handle submenu-toggle spans and carets
  document.querySelectorAll(".tt-submenu-trigger-m, .tt-m-caret").forEach(span => {
    span.addEventListener("click", e => {
      const parent = e.target.closest(".tt-submenu-trigger");
      if (!parent) return;
      const submenu = parent.nextElementSibling;
      if (parent.classList.contains("tt-m-submenu-open")) {
        parent.classList.remove("tt-m-submenu-open");
        if (submenu) submenu.style.display = "none";
      } else {
        document.querySelectorAll(".tt-submenu-trigger").forEach(t => t.classList.remove("tt-m-submenu-open"));
        document.querySelectorAll(".tt-submenu").forEach(sm => sm.style.display = "none");
        parent.classList.add("tt-m-submenu-open");
        if (submenu) submenu.style.display = "block";
      }
    });
  });
}

// Overlay Menu (Classic)
export function initOverlayMenu() {
  if (typeof window === "undefined") return;

  const header = document.getElementById("tt-header");
  if (header?.classList.contains("tt-header-fixed")) {
    document.body.classList.add("tt-header-fixed-on");
  }

  const toggleBtns = document.querySelectorAll(".tt-ol-menu-toggle-btn-text, .tt-ol-menu-toggle-btn");
  const overlayMenu = document.querySelector(".tt-overlay-menu");
  const slidingSidebar = document.querySelector(".tt-sliding-sidebar-trigger");
  const menuList = document.querySelector(".tt-ol-menu-list");

  const handleMenuToggle = () => {
    document.documentElement.classList.toggle("tt-no-scroll");
    document.body.classList.toggle("tt-ol-menu-open");

    if (document.body.classList.contains("tt-ol-menu-open")) {
      document.body.classList.add("olm-toggle-no-click");
      const tlIn = gsap.timeline({
        onComplete: () => document.body.classList.remove("olm-toggle-no-click")
      });
      tlIn.to(overlayMenu, { duration: 0.4, autoAlpha: 1 });
      tlIn.from(".tt-ol-menu-list > li", {
        duration: 0.4, y: 80, autoAlpha: 0, stagger: 0.05,
        ease: Power2.easeOut, clearProps: "all"
      });
      if (slidingSidebar) {
        gsap.to(slidingSidebar, { duration: 1, autoAlpha: 0, ease: Expo.easeOut });
      }
    } else {
      document.body.classList.add("olm-toggle-no-click");
      const tlOut = gsap.timeline({
        onComplete: () => document.body.classList.remove("olm-toggle-no-click")
      });
      tlOut.to(".tt-ol-menu-list > li", {
        duration: 0.4, y: -80, autoAlpha: 0, stagger: 0.05,
        ease: Power2.easeIn
      });
      tlOut.to(overlayMenu, { duration: 0.4, autoAlpha: 0, clearProps: "all" }, "+=0.2");
      tlOut.set(".tt-ol-menu-list > li", { clearProps: "all" });
      if (slidingSidebar) {
        gsap.to(slidingSidebar, { duration: 1, autoAlpha: 1, ease: Expo.easeOut, clearProps: "all" }, "-=0.3");
      }
      setTimeout(() => {
        document.querySelectorAll(".tt-ol-submenu").forEach(sm => sm.style.display = "none");
        document.querySelectorAll(".tt-ol-submenu-trigger").forEach(t => t.classList.remove("tt-ol-submenu-open"));
      }, 500);
    }
  };

  toggleBtns.forEach(btn => btn.addEventListener("click", handleMenuToggle));

  // Handle overlay submenu triggers
  const handleOverlaySubmenu = e => {
    e.preventDefault();
    const parent = e.currentTarget.parentElement;
    const submenu = parent.nextElementSibling;
    if (parent.classList.contains("tt-ol-submenu-open")) {
      parent.classList.remove("tt-ol-submenu-open");
      if (submenu) submenu.style.display = "none";
    } else {
      document.querySelectorAll(".tt-ol-submenu").forEach(sm => sm.style.display = "none");
      document.querySelectorAll(".tt-ol-submenu-trigger").forEach(t => t.classList.remove("tt-ol-submenu-open"));
      parent.classList.add("tt-ol-submenu-open");
      if (submenu) submenu.style.display = "block";
    }
  };

  document.querySelectorAll(".tt-ol-submenu-trigger > a").forEach(link => {
    if (link.getAttribute("href")?.startsWith("#")) {
      link.addEventListener("click", handleOverlaySubmenu);
    }
  });
  document.querySelectorAll(".tt-ol-submenu-caret-wrap").forEach(c => c.addEventListener("click", handleOverlaySubmenu));

  // Hover effect
  if (menuList) {
    menuList.addEventListener("mouseenter", () => menuList.classList.add("tt-ol-menu-hover"));
    menuList.addEventListener("mouseleave", () => menuList.classList.remove("tt-ol-menu-hover"));
  }

  // On menu link click, animate out
  document.querySelectorAll(".tt-overlay-menu a, .tt-logo a").forEach(link => {
    if (
      !link.getAttribute("target") &&
      !link.getAttribute("href")?.startsWith("#") &&
      !link.getAttribute("href")?.startsWith("mailto") &&
      !link.getAttribute("href")?.startsWith("tel")
    ) {
      link.addEventListener("click", () => {
        gsap.set("#content-wrap, .ttgr-cat-nav", { autoAlpha: 0 });
        const tlClick = gsap.timeline();
        tlClick.to(".tt-ol-menu-list > li", {
          duration: 0.4, y: -80, autoAlpha: 0,
          stagger: 0.05, ease: Power2.easeIn
        });
      });
    }
  });
}

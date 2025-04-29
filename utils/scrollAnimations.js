// utils/themeFunctions.js
"use client";

import { gsap, Power2, Expo } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initScrollAnimations() {
  if (typeof window === "undefined") return;

  // Page header parallax effects
  const pageHeader = document.getElementById("page-header");
  if (pageHeader?.classList.contains("ph-content-parallax")) {
    const tlPhParallax = gsap.timeline({
      scrollTrigger: {
        trigger: "#page-header",
        start: "top top",
        end: "bottom top",
        scrub: true,
        markers: false
      }
    });

    // helper to wrap inner
    function wrapInner(selector, wrapperClass) {
      document.querySelectorAll(selector).forEach(el => {
        const wrapper = document.createElement("div");
        wrapper.className = wrapperClass;
        while (el.firstChild) wrapper.appendChild(el.firstChild);
        el.appendChild(wrapper);
        return wrapper;
      });
    }

    // categories
    if (document.querySelector(".ph-categories")) {
      wrapInner(".ph-categories", "ph-cat-parallax");
      tlPhParallax.to(".ph-cat-parallax", { y: -80 }, 0);
    }
    // title
    if (document.querySelector(".ph-caption-title")) {
      wrapInner(".ph-caption-title", "ph-title-parallax");
      tlPhParallax.to(".ph-title-parallax", { y: -40 }, 0);
    }
    // subtitle
    if (document.querySelector(".ph-caption-subtitle")) {
      wrapInner(".ph-caption-subtitle", "ph-subt-parallax");
      tlPhParallax.to(".ph-subt-parallax", { y: -10 }, 0);
    }
    // ghost
    if (document.querySelector(".ph-caption-title-ghost")) {
      wrapInner(".ph-caption-title-ghost", "ph-ghost-parallax");
      tlPhParallax.to(".ph-ghost-parallax", { y: 40 }, 0);
    }
    // image
    if (document.querySelector(".ph-image-inner")) {
      if (pageHeader.classList.contains("ph-bg-image")) {
        tlPhParallax.to(".ph-image-inner", { yPercent: 30, scale: 1.05 }, 0);
      } else {
        tlPhParallax.to(".ph-image-inner", { yPercent: -20 }, 0);
      }
    }
    // project info list
    if (document.querySelector("#page-header .project-info-list > ul > li")) {
      wrapInner("#page-header .project-info-list > ul > li", "ph-pil-parallax");
      if (pageHeader.classList.contains("ph-inline") && !pageHeader.classList.contains("ph-center")) {
        ScrollTrigger.matchMedia({
          "(min-width:1025px)": () => {
            gsap.to(".ph-pil-parallax", {
              y: -140,
              stagger: 0.15,
              ease: "none",
              scrollTrigger: {
                trigger: "#page-header",
                start: "top top",
                end: "bottom top",
                scrub: true,
                markers: false
              }
            });
          },
          "(max-width:1024px)": () => {
            gsap.to("#page-header .project-info-list", {
              y: 20,
              ease: "none",
              scrollTrigger: {
                trigger: "#page-header",
                start: "top top",
                end: "bottom top",
                scrub: true,
                markers: false
              }
            });
          }
        });
      } else {
        gsap.to(".ph-pil-parallax", {
          y: 30,
          ease: "none",
          scrollTrigger: {
            trigger: "#page-header",
            start: "top top",
            end: "bottom top",
            scrub: true,
            markers: false
          }
        });
      }
    }
    // scroll-down-circle
    if (document.querySelector(".scroll-down-circle")) {
      gsap.to(".scroll-down-circle", {
        x: -100,
        autoAlpha: 0,
        ease: "none",
        scrollTrigger: {
          trigger: "#page-header",
          start: "top top",
          end: "30% top",
          scrub: true,
          markers: false
        }
      });
    }
    // made-with-love
    if (document.querySelector(".mwl-inner")) {
      gsap.to(".mwl-inner", {
        yPercent: 250,
        autoAlpha: 0,
        ease: "none",
        scrollTrigger: {
          trigger: "#page-header",
          start: "top top",
          end: "40% top",
          scrub: true,
          markers: false
        }
      });
    }
    // project share
    if (document.querySelector(".ph-share-trigger")) {
      wrapInner(".ph-share-trigger", "ph-share-trigger-wrap");
      ScrollTrigger.matchMedia({
        "(min-width:769px)": () => {
          gsap.to(".ph-share-trigger-wrap", {
            y: 50,
            autoAlpha: 0,
            ease: "none",
            scrollTrigger: {
              trigger: "#page-header",
              start: "top top",
              end: "30% top",
              scrub: true,
              markers: false
            }
          });
        }
      });
    }
    // light background toggles
    if (pageHeader.classList.contains("ph-bg-image-is-light") && document.getElementById("tt-header")?.classList.contains("tt-header-fixed")) {
      ScrollTrigger.create({
        trigger: "#page-header",
        start: "top bottom",
        end: "bottom 30px",
        scrub: true,
        markers: false,
        onLeave:  () => document.body.classList.remove("ph-bg-image-light-on"),
        onEnter:  () => document.body.classList.add   ("ph-bg-image-light-on"),
        onLeaveBack: () => document.body.classList.remove("ph-bg-image-light-on"),
        onEnterBack: () => document.body.classList.add   ("ph-bg-image-light-on")
      });
    }
  }

  // grid categories show/hide on scroll
  const ttgWrap = document.querySelector(".ttgr-cat-trigger-wrap");
  if (ttgWrap && document.querySelector(".tt-grid-categories")) {
    if (ttgWrap.classList.contains("ttgr-cat-fixed")) {
      document.querySelector("#body-inner")?.appendChild(ttgWrap);
      ScrollTrigger.create({
        trigger: "#portfolio-grid",
        start: "top bottom",
        end: "bottom 75%",
        scrub: true,
        markers: false,
        onEnter:  () => gsap.to(ttgWrap,{duration:0.4,autoAlpha:1,scale:1,ease:"power2.out"}),
        onLeave:  () => gsap.to(ttgWrap,{duration:0.4,autoAlpha:0,scale:0.9,ease:"power2.out"}),
        onEnterBack:() => gsap.to(ttgWrap,{duration:0.4,autoAlpha:1,scale:1,ease:"power2.out"}),
        onLeaveBack:() => gsap.to(ttgWrap,{duration:0.4,autoAlpha:0,scale:0.9,ease:"power2.out"})
      });
    } else {
      gsap.to(ttgWrap, {
        yPercent: 70,
        autoAlpha: 0,
        ease: "none",
        scrollTrigger: {
          trigger: ttgWrap,
          start: "top 250px",
          end: "100px 250px",
          scrub: true,
          markers: false
        }
      });
    }
  }

  // portfolio list item info
  document.querySelectorAll(".pli-info").forEach(info => {
    const title    = info.querySelector(".pli-title");
    const category = info.querySelector(".pli-categories-wrap");
    const counter  = info.querySelector(".pli-counter");
    const tl = gsap.timeline({
      scrollTrigger: { trigger: info, start: "top bottom", markers: false }
    });
    if (title)    tl.from(title,    { duration:2.5, autoAlpha:0, y:80, ease:"expo.out", clearProps:"all" }, "+=0.5");
    if (category) tl.from(category, { duration:2.5, autoAlpha:0, y:60, ease:"expo.out", clearProps:"all" }, "-=2.2");
    if (counter)  tl.from(counter,  { duration:2.5, autoAlpha:0, y:40, ease:"expo.out", clearProps:"all" }, "-=2.2");
  });

  // image parallax
  document.querySelectorAll(".anim-image-parallax").forEach(img => {
    const wrap  = document.createElement("div");
    wrap.className = "anim-image-parallax-wrap";
    const inner = document.createElement("div");
    inner.className = "anim-image-parallax-inner";
    img.parentNode.insertBefore(wrap, img);
    wrap.appendChild(inner);
    inner.appendChild(img);

    wrap.style.overflow = "hidden";

    gsap.to(img, {
      yPercent: 30,
      ease: "none",
      scrollTrigger: {
        trigger: wrap,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        markers: false
      }
    });

    const tlZoom = gsap.timeline({
      scrollTrigger: { trigger: wrap, start: "top 90%", markers: false }
    });
    tlZoom.from(inner, {
      duration: 1.5,
      autoAlpha: 0,
      scale: 1.2,
      ease: "power2.out",
      clearProps: "all"
    });
  });

  // layout-creative parallax
  ScrollTrigger.matchMedia({
    "(min-width:768px)": () => {
      document.querySelectorAll(
        ".tt-grid.ttgr-layout-creative-1 .tt-grid-item:nth-of-type(6n+2) .ttgr-item-inner,"
        +".tt-grid.ttgr-layout-creative-1 .tt-grid-item:nth-of-type(6n+4) .ttgr-item-inner,"
        +".tt-grid.ttgr-layout-creative-2 .tt-grid-item:nth-of-type(4n+2) .ttgr-item-inner,"
        +".tt-grid.ttgr-layout-creative-2 .tt-grid-item:nth-of-type(4n+3) .ttgr-item-inner"
      ).forEach(el => {
        gsap.to(el, {
          yPercent: -50,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
            markers: false
          }
        });
      });
    }
  });

  // appear on scroll: zoomin
  document.querySelectorAll(".anim-zoomin").forEach(el => {
    const wrap = document.createElement("div");
    wrap.className = "anim-zoomin-wrap";
    el.parentNode.insertBefore(wrap, el);
    wrap.appendChild(el);
    wrap.style.overflow = "hidden";

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrap,
        start: "top 90%",
        markers: false,
        onEnter: () => ScrollTrigger.refresh()
      }
    });
    tl.from(el, {
      duration: 1.5,
      autoAlpha: 0,
      scale: 1.2,
      ease: "power2.out",
      clearProps: "all"
    });
  });

  // fadeinup
  document.querySelectorAll(".anim-fadeinup").forEach(el => {
    const tl = gsap.timeline({
      scrollTrigger: { trigger: el, start: "top bottom", markers: false }
    });
    tl.from(el, { duration: 2.5, autoAlpha: 0, y: 100, ease: "expo.out", clearProps: "all" }, "+=0.3");
  });

  // skewinup
  document.querySelectorAll(".anim-skewinup").forEach(el => {
    const tl = gsap.timeline({
      scrollTrigger: { trigger: el, start: "top bottom", markers: false }
    });
    tl.from(el, {
      duration: 2,
      skewY: 5,
      transformOrigin: "left top",
      autoAlpha: 0,
      y: 100,
      ease: "expo.out",
      clearProps: "all"
    }, "+=0.3");
  });

  // stretchinup
  document.querySelectorAll(".anim-stretchinup").forEach(el => {
    const tl = gsap.timeline({
      scrollTrigger: { trigger: el, start: "top bottom", markers: false }
    });
    tl.from(el, {
      duration: 2,
      autoAlpha: 0,
      y: 100,
      scaleY: 1.4,
      transformOrigin: "top",
      ease: "expo.out",
      clearProps: "all"
    }, "+=0.2");
  });
}

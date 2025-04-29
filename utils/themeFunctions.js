// themeFunctions.js
// Adaptado para React y Next.js (sin jQuery)

import { gsap, Power2, Expo } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Registro de plugins
gsap.registerPlugin(ScrollTrigger);

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


// Magic Cursor Initialization
export function initMagicCursor() {
  if (typeof window === "undefined") return;

  const body         = document.body;
  const magicCursor  = document.getElementById("magic-cursor");
  const ball         = document.getElementById("ball");

  // Solo en pantallas grandes y si está activado el magic-cursor
  if (
    magicCursor &&
    ball &&
    !body.classList.contains("is-mobile") &&
    body.classList.contains("tt-magic-cursor") &&
    window.innerWidth > 1024
  ) {
    // Hacer visible el magic cursor container
    magicCursor.style.opacity    = "1";
    magicCursor.style.visibility = "inherit";

    // --- WRAP magnetic-item y marca no-hide-cursor ---
    document.querySelectorAll(".magnetic-item").forEach(item => {
      const wrap = document.createElement("div");
      wrap.className = "magnetic-wrap";
      item.parentNode.insertBefore(wrap, item);
      wrap.appendChild(item);

      // Si es <a>, no ocultar cursor al pasar
      if (item.tagName.toLowerCase() === "a") {
        item.classList.add("not-hide-cursor");
      }
    });

    // Setup inicial del ball
    const ballWidth       = 34;
    const ballHeight      = 34;
    const ballScale       = 1;
    const ballOpacity     = 0.5;
    const ballBorderWidth = 2;

    gsap.set(ball, {
      xPercent:      -50,
      yPercent:      -50,
      width:         ballWidth,
      height:        ballHeight,
      borderWidth:   ballBorderWidth,
      opacity:       ballOpacity,
      backgroundColor:"transparent"
    });

    let mouse  = { x: window.innerWidth/2, y: window.innerHeight/2 };
    let pos    = { x: mouse.x, y: mouse.y };
    const ratio = 0.15;
    let active  = false;

    document.addEventListener("mousemove", e => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    gsap.ticker.add(() => {
      if (!active) {
        pos.x += (mouse.x - pos.x)*ratio;
        pos.y += (mouse.y - pos.y)*ratio;
        gsap.set(ball, { x: pos.x, y: pos.y });
      }
    });

    // Funciones internas
    function parallaxIt(e, parent, target, movement) {
      const rect = parent.getBoundingClientRect();
      const relX = e.clientX - rect.left;
      const relY = e.clientY - rect.top;
    
      gsap.to(target, {
        duration: 0.3,
        x: ((relX - rect.width / 2) / rect.width) * movement,
        y: ((relY - rect.height / 2) / rect.height) * movement,
        ease: "power2.out"
      });
    }
    function parallaxCursor(e, parent, movement) {
      const rect = parent.getBoundingClientRect();
      const relX = e.clientX - rect.left;
      const relY = e.clientY - rect.top;
      pos.x = rect.left + rect.width/2 + (relX - rect.width/2)/movement;
      pos.y = rect.top  + rect.height/2 + (relY - rect.height/2)/movement;
      gsap.to(ball, { duration: 0.3, x: pos.x, y: pos.y });
    }

    // --- Magnetic-wrap behavior ---
    document.querySelectorAll(".magnetic-wrap").forEach(wrap => {
      wrap.addEventListener("mousemove", e => {
        const target = wrap.querySelector(".magnetic-item");
        parallaxIt(e, wrap, target, 25);
        parallaxCursor(e, wrap, 2);
      });
      wrap.addEventListener("mouseenter", () => {
        gsap.to(ball, { duration: 0.3, scale: 2, borderWidth: 1, opacity: ballOpacity });
        active = true;
      });
      wrap.addEventListener("mouseleave", () => {
        gsap.to(ball, { duration: 0.3, scale: ballScale, borderWidth: ballBorderWidth, opacity: ballOpacity });
        const target = wrap.querySelector(".magnetic-item");
        if (target) gsap.to(target, { duration: 0.3, x:0, y:0, clearProps:"all" });
        active = false;
      });
    });

    // --- Cursores alternativos en hover ---
    document.querySelectorAll(
      ".cursor-alter, .tt-main-menu-list > li > a, .tt-main-menu-list > li > .tt-submenu-trigger > a"
    ).forEach(el => {
      if (!el.classList.contains("magnetic-item")) {
        el.addEventListener("mouseenter", () => {
          gsap.to(ball, {
            duration: 0.3,
            borderWidth: 0,
            opacity: 0.2,
            backgroundColor: "#CCC",
            width: 100,
            height: 100
          });
        });
        el.addEventListener("mouseleave", () => {
          gsap.to(ball,{
            duration:0.3,
            borderWidth:ballBorderWidth,
            opacity:ballOpacity,
            backgroundColor:"transparent",
            width:ballWidth,
            height:ballHeight,
            clearProps:"backgroundColor"
          });
        });
      }
    });

    // --- Overlay menu caret hover ---
    document.querySelectorAll(".tt-ol-submenu-caret-wrap .magnetic-wrap").forEach(el => {
      el.addEventListener("mouseenter", () => {
        gsap.to(ball, { duration: 0.3, scale: 1.3, borderWidth: ballBorderWidth });
      });
      el.addEventListener("mouseleave", () => {
        gsap.to(ball, { duration: 0.3, scale: ballScale });
      });
    });

    // --- data-cursor views ---
    document.querySelectorAll("[data-cursor]").forEach(el => {
      el.classList.add("not-hide-cursor");
      el.addEventListener("mouseenter", () => {
        const view = document.createElement("div");
        view.className = "ball-view";
        view.textContent = el.getAttribute("data-cursor");
        ball.appendChild(view);
        gsap.to(ball, {
          duration:0.3,
          yPercent:-75,
          width:95,
          height:95,
          opacity:1,
          borderWidth:0,
          backgroundColor:"#FFF"
        });
        gsap.to(view, { duration:0.3, scale:1, autoAlpha:1 });
      });
      el.addEventListener("mouseleave", () => {
        gsap.to(ball, {
          duration:0.3,
          yPercent:-50,
          width:ballWidth,
          height:ballHeight,
          opacity:ballOpacity,
          borderWidth:ballBorderWidth,
          backgroundColor:"transparent"
        });
        const view = ball.querySelector(".ball-view");
        if (view) gsap.to(view, { duration:0.3, scale:0, autoAlpha:0, clearProps:"all", onComplete:() => view.remove() });
      });
    });

    // --- Swiper cursor-drag hover ---
    document.querySelectorAll(".swiper").forEach(sw => {
      const parent = sw.parentElement;
      if (parent?.dataset?.simulateTouch === "true") {
        // add not-hide-cursor
        if (parent.classList.contains("cursor-drag")) {
          sw.classList.add("not-hide-cursor");
          sw.addEventListener("mouseenter", () => {
            const drag = document.createElement("div"); drag.className="ball-drag";
            ball.appendChild(drag);
            gsap.to(ball, {duration:0.3,width:60,height:60,opacity:1});
          });
          sw.addEventListener("mouseleave", () => {
            const drag = ball.querySelector(".ball-drag"); if(drag) drag.remove();
            gsap.to(ball,{duration:0.3,width:ballWidth,height:ballHeight,opacity:ballOpacity});
          });
        }
        if (parent.classList.contains("cursor-drag-mouse-down")) {
          sw.addEventListener("pointerdown", e => {
            if(e.button===0){
              const drag = document.createElement("div"); drag.className="ball-drag";
              ball.appendChild(drag);
              gsap.to(ball,{duration:0.2,width:60,height:60,opacity:1});
            }
          });
          sw.addEventListener("pointerup", () => {
            ball.querySelectorAll(".ball-drag").forEach(d=>d.remove());
            gsap.to(ball,{duration:0.2,width:ballWidth,height:ballHeight,opacity:ballOpacity});
          });
          sw.addEventListener("mouseleave", () => {
            ball.querySelectorAll(".ball-drag").forEach(d=>d.remove());
            gsap.to(ball,{duration:0.2,width:ballWidth,height:ballHeight,opacity:ballOpacity});
          });
        }
      }
    });

    // --- cursor-close hover ---
    document.querySelectorAll(".cursor-close").forEach(el => {
      el.addEventListener("mouseenter", () => {
        ball.classList.add("ball-close-enabled");
        const close = document.createElement("div"); close.className="ball-close"; close.textContent="Close";
        ball.appendChild(close);
        gsap.to(ball,{duration:0.3,yPercent:-75,width:80,height:80,opacity:1});
        gsap.from(close,{duration:0.3,scale:0,autoAlpha:0});
      });
      ["mouseleave","click"].forEach(evt => {
        el.addEventListener(evt, () => {
          ball.classList.remove("ball-close-enabled");
          ball.querySelectorAll(".ball-close").forEach(c=>c.remove());
          gsap.to(ball,{duration:0.3,yPercent:-50,width:ballWidth,height:ballHeight,opacity:ballOpacity});
        });
      });
    });
    // Inner hover ignore
    document.querySelectorAll(".cursor-close a, .cursor-close button, .cursor-close .tt-btn, .cursor-close .hide-cursor")
      .forEach(inner => {
        inner.addEventListener("mouseenter", ()=> ball.classList.remove("ball-close-enabled"));
        inner.addEventListener("mouseleave", ()=> ball.classList.add("ball-close-enabled"));
      });

    // --- portfolio-interactive-item ---
    document.querySelectorAll(".portfolio-interactive-item").forEach(item => {
      const img = item.querySelector(".pi-item-image");
      const link = item.querySelector(".pi-item-title-link");
      if (img && link) {
        link.classList.add("not-hide-cursor");
        link.addEventListener("mouseenter", () => {
          magicCursor.classList.add("portfolio-interactive-hover-on");
          item.appendChild(img);
          ball.appendChild(img);
          gsap.to(ball,{duration:0.3,width:"20vw",height:"20vw",opacity:1});
          img.querySelectorAll("video").forEach(v=>v.play());
        });
        link.addEventListener("mouseleave", () => {
          magicCursor.classList.remove("portfolio-interactive-hover-on");
          item.appendChild(img);
          gsap.to(ball,{duration:0.3,width:ballWidth,height:ballHeight,opacity:ballOpacity});
          img.querySelectorAll("video").forEach(v=>v.pause());
        });
      }
    });

    // --- blog-interactive-item ---
    document.querySelectorAll(".blog-interactive-item").forEach(item => {
      const img = item.querySelector(".bi-item-image");
      const link = item.querySelector(".bi-item-title a");
      if (img && link) {
        link.classList.add("not-hide-cursor");
        item.classList.add("bi-item-image-on");
        link.addEventListener("mouseenter", () => {
          magicCursor.classList.add("blog-interactive-hover-on");
          ball.appendChild(img);
          gsap.to(ball,{duration:0.3,width:"20vw",height:"20vw",opacity:1});
        });
        link.addEventListener("mouseleave", () => {
          magicCursor.classList.remove("blog-interactive-hover-on");
          item.appendChild(img);
          gsap.to(ball,{duration:0.3,width:ballWidth,height:ballHeight,opacity:ballOpacity});
        });
      }
    });

    // --- page nav hover ---
    document.querySelectorAll(".tt-page-nav").forEach(nav => {
      const navImg = nav.querySelector(".tt-pn-image");
      const navLink= nav.querySelector(".tt-pn-link");
      if (navImg && navLink) {
        navLink.classList.add("not-hide-cursor");
        navLink.addEventListener("mouseenter", () => {
          magicCursor.classList.add("tt-pn-hover-on");
          ball.appendChild(navImg);
          gsap.to(ball,{duration:0.3,width:"20vw",height:"20vw",opacity:1});
          navImg.querySelectorAll("video").forEach(v=>v.play());
        });
        navLink.addEventListener("mouseleave", () => {
          magicCursor.classList.remove("tt-pn-hover-on");
          nav.appendChild(navImg);
          gsap.to(ball,{duration:0.3,width:ballWidth,height:ballHeight,opacity:ballOpacity});
          navImg.querySelectorAll("video").forEach(v=>v.pause());
        });
      } else if (navLink) {
        navLink.classList.remove("not-hide-cursor");
      }
    });

    // --- show/hide global cursor on hover of elements ---
    document.querySelectorAll("a, button, .tt-btn, .tt-form-control, .tt-form-radio, .tt-form-check, .hide-cursor")
      .forEach(el => {
        if (!el.classList.contains("not-hide-cursor") &&
            !el.classList.contains("cursor-alter") &&
            !el.closest(".tt-main-menu-list > li > a") &&
            !el.closest(".tt-main-menu-list > li > .tt-submenu-trigger > a")) {
          el.addEventListener("mouseenter", () => {
            gsap.to(ball,{duration:0.3,scale:0,opacity:0});
          });
          el.addEventListener("mouseleave", () => {
            gsap.to(ball,{duration:0.3,scale:ballScale,opacity:ballOpacity});
          });
        }
      });

    // --- hide on click ---
    document.querySelectorAll("a")
      .forEach(link => {
        const href = link.getAttribute("href")||"";
        const target = link.getAttribute("target");
        if (
          target!=="_blank" &&
          !href.startsWith("#") &&
          !href.startsWith("mailto:") &&
          !href.startsWith("tel:") &&
          !link.classList.contains("lg-trigger") &&
          !link.closest(".tt-btn-disabled a")
        ) {
          link.addEventListener("click", () => {
            gsap.to(ball,{duration:0.3,scale:1.3,autoAlpha:0});
          });
        }
      });

    // --- show/hide on document leave/enter ---
    document.addEventListener("mouseleave", () => {
      gsap.to(magicCursor,{duration:0.3,autoAlpha:0});
    });
    document.addEventListener("mouseenter", () => {
      gsap.to(magicCursor,{duration:0.3,autoAlpha:1});
    });
    document.addEventListener("mousemove", () => {
      gsap.to(magicCursor,{duration:0.3,autoAlpha:1});
    });
  }
}


// Scroll To Top Button
export function initScrollToTop() {
  if (typeof window === "undefined") return;

  const scrollBtn = document.getElementById("scroll-to-top");

  if (!scrollBtn) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 700) {
      scrollBtn.classList.add("show");
    } else {
      scrollBtn.classList.remove("show");
    }
  });

  scrollBtn.addEventListener("click", (e) => {
    e.preventDefault();
    gsap.to(window, { duration: 1.5, scrollTo: 0, ease: "power3.inOut" });
  });
}


// Smooth Scroll Between Anchors
export function initAnchorScrolling() {
  if (typeof window === "undefined") return;

  document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetID = this.getAttribute("href").substring(1);
      const target = document.getElementById(targetID);

      if (target) {
        gsap.to(window, { duration: 1, scrollTo: target, ease: "power3.inOut" });
      }
    });
  });
}



// Defer Youtube/Vimeo Videos Loading
export function initDeferVideos() {
  if (typeof window === "undefined") return;

  document.querySelectorAll("iframe[data-src]").forEach(iframe => {
    iframe.setAttribute("src", iframe.getAttribute("data-src"));
    iframe.removeAttribute("data-src");
  });
}







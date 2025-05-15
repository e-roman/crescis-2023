// MagixCursor.js
import { gsap, Power2, Expo } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Registrar plugins GSAP
gsap.registerPlugin(ScrollTrigger);

export function initDraw() {
  document.querySelectorAll(".draw-on").forEach((el) => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: "10% center",
        end: "+=900",
        toggleClass: "active",
        once: true,
      },
    });
  });
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
    const ballOpacity     = 0.8;
    const ballBorderWidth = 0;

    gsap.set(ball, {
      xPercent:      -50,
      yPercent:      -50,
      width:         ballWidth,
      height:        ballHeight,
      borderWidth:   ballBorderWidth,
      opacity:       ballOpacity,
      backgroundColor: "#FFB2C7"
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
    // Eliminar cualquier .ball-view anterior si existe
    const existingView = ball.querySelector(".ball-view");
    if (existingView) existingView.remove();

    // Crear nuevo .ball-view
    const view = document.createElement("div");
    view.className = "ball-view";

    const label = el.getAttribute("data-cursor");
    if (label && label.trim() !== "") {
      view.textContent = label;
    }

    ball.appendChild(view);

    // Animar entrada del cursor
    gsap.to(ball, {
      duration: 0.3,
      yPercent: -75,
      width: 95,
      height: 95,
      opacity: 1,
      borderWidth: 0,
      backgroundColor: "#FFF"
    });

    gsap.fromTo(view, {
      scale: 0,
      autoAlpha: 0
    }, {
      duration: 0.3,
      scale: 1,
      autoAlpha: 1
    });
  });

  el.addEventListener("mouseleave", () => {
    // Restaurar estado del cursor
    gsap.to(ball, {
      duration: 0.3,
      yPercent: -50,
      width: ballWidth,
      height: ballHeight,
      opacity: ballOpacity,
      borderWidth: ballBorderWidth,
      backgroundColor: "transparent"
    });

    const view = ball.querySelector(".ball-view");
    if (view) {
      gsap.to(view, {
        duration: 0.3,
        scale: 0,
        autoAlpha: 0,
        clearProps: "all",
        onComplete: () => view.remove()
      });
    }
  });
});



    // Cursor view on hover (data attribute "data-cursor-view").
    document.querySelectorAll("[data-cursor-view]").forEach(el => {
      el.classList.add("not-hide-cursor");

      el.addEventListener("mouseenter", () => {
        // Eliminar cualquier .ball-view previo (si aún existe)
        const existingView = ball.querySelector(".ball-view");
        if (existingView) existingView.remove();

        // Crear el nuevo .ball-view
        const view = document.createElement("div");
        view.className = "ball-view";
        view.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" xml:lang="en" xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 500 500" class="hover-cursor">
            <defs>
              <path id="textcircle" d="M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z" transform="rotate(12,250,250)" />
            </defs>
            <text class="default">
              <textPath xlink:href="#textcircle"
                        aria-label="VIEW PROJECT . VIEW PROJECT . VIEW PROJECT ."
                        textLength="930">
                VIEW PROJECT ~ VIEW PROJECT ~ VIEW PROJECT ~ 
              </textPath>
            </text>
          </svg>
        `;

        // Texto adicional (si se usa en el atributo, aunque esté vacío ahora)
        const extra = el.getAttribute("data-cursor-view");
        if (extra && extra.trim() !== "") {
          view.appendChild(document.createTextNode(extra));
        }

        ball.appendChild(view);

        // Animación de entrada del cursor personalizado
        gsap.to(ball, {
          duration: 0.3,
          yPercent: -75,
          width: 95,
          height: 95,
          opacity: 1,
          borderWidth: 0,
          backgroundColor: "#FFB2C7"
        });

        gsap.fromTo(view, {
          scale: 0,
          autoAlpha: 0
        }, {
          duration: 0.3,
          scale: 1,
          autoAlpha: 1
        });
      });

      el.addEventListener("mouseleave", () => {
        // Restaurar el cursor a su estado anterior
        gsap.to(ball, {
          duration: 0.3,
          yPercent: -50,
          width: ballWidth,
          height: ballHeight,
          opacity: ballOpacity,
          borderWidth: ballBorderWidth,
          backgroundColor: "#FFB2C7"
        });

        const view = ball.querySelector(".ball-view");
        if (view) {
          gsap.to(view, {
            duration: 0.3,
            scale: 0,
            autoAlpha: 0,
            clearProps: "all",
            onComplete: () => view.remove()
          });
        }
      });
    });






    // --- Swiper cursor-drag hover ---
document.querySelectorAll(".swiper").forEach(sw => {
  const parent = sw.parentElement;
  if (parent?.dataset?.simulateTouch === "true") {
    
    // --- Cursor "drag" al pasar el mouse (mouseenter / mouseleave)
    if (parent.classList.contains("cursor-drag")) {
      sw.classList.add("not-hide-cursor");

      sw.addEventListener("mouseenter", () => {
        // Eliminar si ya existe
        const existing = ball.querySelector(".ball-drag");
        if (existing) existing.remove();

        const drag = document.createElement("div");
        drag.className = "ball-drag";
        drag.innerText = "DRAG"; 
        ball.appendChild(drag);

        gsap.to(ball, {
          duration: 0.3,
            width: 100,
            height: 100,
          opacity: 1
        });
      });

      sw.addEventListener("mouseleave", () => {
        const drag = ball.querySelector(".ball-drag");
        if (drag) drag.remove();

        gsap.to(ball, {
          duration: 0.3,
          width: ballWidth,
          height: ballHeight,
          opacity: ballOpacity
        });
      });
    }

    // --- Cursor "drag" al hacer clic (mousedown / mouseup)
    if (parent.classList.contains("cursor-drag-mouse-down")) {
      sw.addEventListener("pointerdown", e => {
        if (e.button === 0) {
          // Eliminar previos antes de agregar
          const existing = ball.querySelector(".ball-drag");
          if (existing) existing.remove();

          const drag = document.createElement("div");
          drag.className = "ball-drag";
          ball.appendChild(drag);

          gsap.to(ball, {
            duration: 0.2,
            width: 100,
            height: 100,
            opacity: 1
          });
        }
      });

      const clearDrag = () => {
        ball.querySelectorAll(".ball-drag").forEach(d => d.remove());
        gsap.to(ball, {
          duration: 0.2,
          width: ballWidth,
          height: ballHeight,
          opacity: ballOpacity
        });
      };

      sw.addEventListener("pointerup", clearDrag);
      sw.addEventListener("mouseleave", clearDrag);
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

// Ejecutar defer videos al cargar ventana (para compatibilidad)
if (typeof window !== 'undefined') {
  window.addEventListener('load', initDeferVideos);
}




// Init scrolling text
export function initScrollingText() {
  if (typeof window === 'undefined') return;
  document.querySelectorAll('.tt-scrolling-text').forEach(el => {
    const speed = el.getAttribute('data-scroll-speed');
    const inner = el.querySelector('.tt-scrolling-text-inner');
    if (inner && speed) {
      inner.style.animationDuration = `${speed}s`;
    }
  });
}



// Init scroll-to-top buttons
export function initScrollToTop() {
  if (typeof window === 'undefined') return;
  document.querySelectorAll('.scroll-to-top').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      const body = document.body;
      const html = document.documentElement;
      // Si se usa smooth-scroll basado en classe
      if (body.classList.contains('tt-smooth-scroll')) {
        const scrollbar = window.Scrollbar || null;
        if (scrollbar && scrollbar.get) {
          const sb = scrollbar.get(document.getElementById('scroll-container'));
          gsap.to(sb, { duration: 1.5, scrollTo: { y: 0, autoKill: true }, ease: 'expo.inOut' });
          return;
        }
      }
      // fallback nativo / GSAP ScrollToPlugin
      gsap.to(window, { duration: 1.5, scrollTo: { y: 0 }, ease: 'expo.inOut' });
    });
  });
}






// HOVER TITLE PROJECTS
export function initTitleHoverProjects() {
  if (typeof window === 'undefined') return;

  const isMobile = /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent);
  if (isMobile) return;

  const interactive = document.querySelector('.portfolio-interactive');
  if (!interactive) return;

  const forceScroll = interactive.classList.contains('pi-force-scroll');
  const titles = interactive.querySelectorAll('.pi-item-hover-title');

  titles.forEach(title => {
    const span = document.createElement('span');
    span.innerHTML = title.innerHTML;
    title.innerHTML = '';
    title.appendChild(span);

    const clones = forceScroll ? 5 : 1;
    for (let i = 0; i < clones; i++) {
      const clone = span.cloneNode(true);
      title.appendChild(clone);
    }
  });

  // Hover estado (add/remove class)
  const items = interactive.querySelectorAll('.portfolio-interactive-item');
  items.forEach(item => {
    const link = item.querySelector('.pi-item-title-link');
    if (link) {
      link.addEventListener('mouseenter', () => item.classList.add('pi-item-hover'));
      link.addEventListener('mouseleave', () => item.classList.remove('pi-item-hover'));
    }

    // Velocidad de scroll desde data-scroll-speed
    const scrollSpeed = item.getAttribute('data-scroll-speed');
    if (scrollSpeed) {
      const spans = item.querySelectorAll('.pi-item-hover-title span');
      spans.forEach(span => {
        span.style.animationDuration = `${scrollSpeed}s`;
      });
    }
  });
}

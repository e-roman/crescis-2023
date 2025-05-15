// FunctionsSwipers.js
// Adaptación de sliders Swiper para React y Next.js (sin jQuery)

import Swiper from 'swiper/bundle';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import 'swiper/css/bundle';

// Registrar plugins GSAP
gsap.registerPlugin(ScrollTrigger);

// Portfolio Slider (Fullscreen Slider)
export function initPortfolioSlider() {
  if (typeof window === 'undefined') return;

  document.querySelectorAll('.tt-portfolio-slider').forEach(sliderEl => {
    const container = sliderEl.querySelector('.swiper');
    if (!container) return;

    const mousewheel = sliderEl.getAttribute('data-mousewheel') === 'true';
    const keyboard = sliderEl.getAttribute('data-keyboard') === 'true';
    const simulateTouch = sliderEl.getAttribute('data-simulate-touch') === 'true';
    const grabCursor = sliderEl.getAttribute('data-grab-cursor') === 'true';
    const autoplayAttr = sliderEl.getAttribute('data-autoplay');
    const autoplay = autoplayAttr ? { delay: parseInt(autoplayAttr, 10) } : false;
    const loop = sliderEl.getAttribute('data-loop') === 'true';
    const speedAttr = sliderEl.getAttribute('data-speed');
    const speed = speedAttr ? parseInt(speedAttr, 10) : 900;
    const paginationType = sliderEl.getAttribute('data-pagination-type') || 'fraction';

    const swiper = new Swiper(container, {
      direction: 'horizontal',
      effect: 'slide',
      speed: 600,
      parallax: true,
      resistanceRatio: 0,
      longSwipesRatio: 0.02,
      preloadImages: false,
      preventInteractionOnTransition: true,
      autoplay,
      mousewheel,
      keyboard,
      simulateTouch,
      grabCursor,
      loop,
      breakpoints: { 1025: { speed } },
      lazy: { loadPrevNext: true, loadOnTransitionStart: true },
      navigation: {
        nextEl: sliderEl.querySelector('.tt-ps-nav-arrow-next'),
        prevEl: sliderEl.querySelector('.tt-ps-nav-arrow-prev'),
        disabledClass: 'tt-ps-nav-arrow-disabled'
      },
      pagination: {
        el: sliderEl.querySelector('.tt-ps-nav-pagination'),
        type: paginationType,
        modifierClass: 'tt-ps-nav-pagination-',
        dynamicBullets: true,
        dynamicMainBullets: 1,
        clickable: true
      },
      on: {
        init() {
          const active = this.slides[this.activeIndex];
          active.querySelectorAll('video').forEach(v => v.play());
          const titleEl = sliderEl.querySelector('.tt-ps-caption-title');
          const catEl = sliderEl.querySelector('.tt-ps-caption-category');
          const dataTitle = active.getAttribute('data-title');
          const dataUrl = active.getAttribute('data-url');
          if (titleEl.querySelector('a')) {
            const link = titleEl.querySelector('a');
            link.textContent = dataTitle;
            link.href = dataUrl;
          } else {
            titleEl.textContent = dataTitle;
          }
          catEl.textContent = active.getAttribute('data-category');
          setTimeout(() => {
            document.body.classList.toggle('psi-light-image-on', active.classList.contains('psi-image-is-light'));
          }, 400);
        },
        transitionStart() {
          const active = this.slides[this.activeIndex];
          setTimeout(() => {
            document.body.classList.toggle('psi-light-image-on', active.classList.contains('psi-image-is-light'));
          }, 400);
          active.querySelectorAll('video').forEach(v => v.play());
          gsap.fromTo(
            sliderEl.querySelectorAll('.tt-psc-elem'),
            { autoAlpha: 1, y: 0 },
            { duration: 0.25, autoAlpha: 0, y: -30, stagger: 0.15, ease: 'power1.in' }
          );
        },
        transitionEnd() {
          this.slides.forEach((slide, idx) => {
            if (idx !== this.activeIndex) slide.querySelectorAll('video').forEach(v => v.pause());
          });
          const active = this.slides[this.activeIndex];
          const titleEl = sliderEl.querySelector('.tt-ps-caption-title');
          const catEl = sliderEl.querySelector('.tt-ps-caption-category');
          const dataTitle = active.getAttribute('data-title');
          const dataUrl = active.getAttribute('data-url');
          if (titleEl.querySelector('a')) {
            const link = titleEl.querySelector('a');
            link.textContent = dataTitle;
            link.href = dataUrl;
          } else {
            titleEl.textContent = dataTitle;
          }
          catEl.textContent = active.getAttribute('data-category');
          gsap.fromTo(
            sliderEl.querySelectorAll('.tt-psc-elem'),
            { autoAlpha: 0, y: 30 },
            { duration: 0.25, autoAlpha: 1, y: 0, stagger: 0.15, ease: 'power1.out' }
          );
        }
      }
    });

    if (!document.body.classList.contains('is-mobile') && sliderEl.getAttribute('data-parallax-mouse-move') === 'true') {
      const img = sliderEl.querySelector('.tt-psi-image');
      const cap = sliderEl.querySelector('.tt-ps-caption-inner');
      gsap.set(img, { scale: 1.05 });
      sliderEl.addEventListener('mousemove', e => {
        parallax(e, img, -25);
        parallax(e, cap, -35);
      });
      function parallax(e, target, m) {
        const rect = sliderEl.getBoundingClientRect();
        const relX = e.clientX - rect.left;
        const relY = e.clientY - rect.top;
        gsap.to(target, { duration: 1, x: ((relX - rect.width / 2) / rect.width) * m, y: ((relY - rect.height / 2) / rect.height) * m });
      }
    }
  });
}

// Portfolio Carousel (Fullscreen Carousel)
export function initPortfolioCarousel() {
  if (typeof window === 'undefined') return;

  document.querySelectorAll('.tt-portfolio-carousel').forEach(carEl => {
    const container = carEl.querySelector('.swiper');
    if (!container) return;

    const mousewheel = carEl.getAttribute('data-mousewheel') === 'true';
    const keyboard = carEl.getAttribute('data-keyboard') === 'true';
    const simulateTouch = carEl.getAttribute('data-simulate-touch') === 'true';
    const grabCursor = carEl.getAttribute('data-grab-cursor') === 'true';
    const autoplayAttr = carEl.getAttribute('data-autoplay');
    const autoplay = autoplayAttr ? { delay: parseInt(autoplayAttr, 10) } : false;
    const loop = carEl.getAttribute('data-loop') === 'true';
    const speedAttr = carEl.getAttribute('data-speed');
    const speed = speedAttr ? parseInt(speedAttr, 10) : 1200;
    const paginationType = carEl.getAttribute('data-pagination-type') || 'fraction';

    const swiper = new Swiper(container, {
      direction: 'horizontal',
      slidesPerView: 'auto',
      spaceBetween: 0,
      resistanceRatio: 0.85,
      longSwipesRatio: 0.3,
      shortSwipes: true,
      centeredSlides: true,
      preloadImages: false,
      watchSlidesProgress: true,
      preventInteractionOnTransition: false,
      speed,
      keyboard,
      mousewheel,
      autoplay,
      simulateTouch,
      grabCursor,
      loop,
      lazy: { loadPrevNext: true, loadOnTransitionStart: true },
      breakpoints: { 1025: { speed, lazy: { loadPrevNextAmount: 3 } } },
      navigation: {
        nextEl: carEl.querySelector('.tt-pc-arrow-next'),
        prevEl: carEl.querySelector('.tt-pc-arrow-prev'),
        disabledClass: 'tt-pc-arrow-disabled'
      },
      pagination: {
        el: carEl.querySelector('.tt-pc-pagination'),
        type: paginationType,
        modifierClass: 'tt-pc-pagination-',
        dynamicBullets: true,
        dynamicMainBullets: 1,
        clickable: true
      },
      on: {
        init() {
          this.slides[this.activeIndex].classList.add('tt-slide-active');
          this.slides[this.activeIndex].prevElementSibling?.classList.add('tt-pcs-disabled');
          this.slides[this.activeIndex].nextElementSibling?.classList.add('tt-pcs-disabled');
        },
        transitionStart() {
          const active = this.slides[this.activeIndex];
          active.classList.add('tt-slide-active');
          active.prevElementSibling?.classList.add('tt-slide-active-start');
          active.nextElementSibling?.classList.add('tt-slide-active-start');
          active.prevElementSibling?.classList.add('tt-pcs-disabled');
          active.nextElementSibling?.classList.add('tt-pcs-disabled');
          active.querySelectorAll('video').forEach(v => v.play());
          container.querySelectorAll('.tt-pc-arrow').forEach(el => el.classList.add('tt-pc-arrow-disabled'));
        },
        transitionEnd() {
          const active = this.slides[this.activeIndex];
          active.prevElementSibling?.classList.remove('tt-slide-active');
          active.nextElementSibling?.classList.remove('tt-slide-active');
          active.prevElementSibling?.classList.remove('tt-slide-active-start');
          active.nextElementSibling?.classList.remove('tt-slide-active-start');
          this.slides.forEach((slide, idx) => {
            if (idx !== this.activeIndex) slide.querySelectorAll('video').forEach(v => v.pause());
          });
          container.querySelectorAll('.tt-pc-arrow').forEach(el => el.classList.remove('tt-pc-arrow-disabled'));
        }
      }
    });

    // Scale down animation
    if (simulateTouch && carEl.classList.contains('pc-scale-down')) {
      container.addEventListener('pointerdown', e => {
        if (e.button === 0) gsap.to(container.querySelectorAll('.swiper-slide'), { duration: 0.7, scale: 0.9 });
      });
      window.addEventListener('pointerup', () => {
        gsap.to(container.querySelectorAll('.swiper-slide'), { duration: 0.7, scale: 1, clearProps: 'scale' });
      });
    }

    // Update on resize/orientation change
    const update = () => {
      setTimeout(() => {
        swiper.update();
        container.classList.add('swtr-smooth');
        setTimeout(() => container.classList.remove('swtr-smooth'), speed);
      }, speed);
    };
    window.addEventListener('resize', update);
    window.addEventListener('orientationchange', update);
  });
}

// Content Carousel (adapt similar to above)
export function initContentCarousel() {
  if (typeof window === 'undefined') return;

  document.querySelectorAll('.tt-content-carousel').forEach(carEl => {
    const container = carEl.querySelector('.swiper');
    if (!container) return;

    const simulateTouch = carEl.getAttribute('data-simulate-touch') === 'true';
    const autoplayAttr = carEl.getAttribute('data-autoplay');
    const autoplay = autoplayAttr ? { delay: parseInt(autoplayAttr, 10) } : false;
    const loop = carEl.getAttribute('data-loop') === 'true';
    const speedAttr = carEl.getAttribute('data-speed');
    const speed = speedAttr ? parseInt(speedAttr, 10) : 900;
    const paginationType = carEl.getAttribute('data-pagination-type') || 'bullets';

    const swiper = new Swiper(container, {
      direction: 'horizontal',
      slidesPerView: 'auto',
      spaceBetween: 0,
      centeredSlides: true,
      longSwipesRatio: 0.3,
      preloadImages: false,
      watchSlidesProgress: true,
      preventInteractionOnTransition: false,
      simulateTouch,
      grabCursor: simulateTouch,
      speed,
      autoplay,
      loop,
      lazy: { loadPrevNext: true, loadOnTransitionStart: true },
      breakpoints: { 1025: { lazy: { loadPrevNextAmount: 3 } } },
      navigation: {
        nextEl: carEl.querySelector('.tt-cc-nav-next'),
        prevEl: carEl.querySelector('.tt-cc-nav-prev'),
        disabledClass: 'tt-cc-nav-arrow-disabled'
      },
      pagination: {
        el: carEl.querySelector('.tt-cc-pagination'),
        type: paginationType,
        modifierClass: 'tt-cc-pagination-',
        dynamicBullets: true,
        dynamicMainBullets: 1,
        clickable: true
      },
      on: {
        transitionStart() {
          container.querySelectorAll('.swiper-slide-active video').forEach(v => v.play());
        },
        transitionEnd() {
          container.querySelectorAll('.swiper-slide-prev video, .swiper-slide-next video').forEach(v => v.pause());
        }
      }
    });

    if (simulateTouch && carEl.classList.contains('cc-scale-down')) {
      container.addEventListener('pointerdown', e => {
        if (e.button === 0) gsap.to(carEl.querySelectorAll('.tt-content-carousel-item'), { duration: 0.7, scale: 0.9 });
      });
      window.addEventListener('pointerup', () => {
        gsap.to(carEl.querySelectorAll('.tt-content-carousel-item'), { duration: 0.7, scale: 1, clearProps: 'scale' });
      });
    }
  });
}

// Testimonials Slider
export function initTestimonialsSlider() {
  if (typeof window === 'undefined') return;

  document.querySelectorAll('.tt-testimonials-slider').forEach(sliderEl => {
    const container = sliderEl.querySelector('.swiper');
    if (!container) return;

    const simulateTouch = sliderEl.getAttribute('data-simulate-touch') === 'true';
    const autoplayAttr = sliderEl.getAttribute('data-autoplay');
    const autoplay = autoplayAttr ? { delay: parseInt(autoplayAttr, 10) } : false;
    const loop = sliderEl.getAttribute('data-loop') === 'true';
    const speedAttr = sliderEl.getAttribute('data-speed');
    const speed = speedAttr ? parseInt(speedAttr, 10) : 900;

    const swiper = new Swiper(container, {
      direction: 'horizontal',
      slidesPerView: 'auto',
      spaceBetween: 0,
      centeredSlides: true,
      autoHeight: true,
      preventInteractionOnTransition: false,
      speed,
      simulateTouch,
      autoplay,
      loop,
      navigation: {
        nextEl: sliderEl.querySelector('.tt-ts-nav-next'),
        prevEl: sliderEl.querySelector('.tt-ts-nav-prev'),
        disabledClass: 'tt-ts-nav-arrow-disabled'
      },
      pagination: {
        el: sliderEl.querySelector('.tt-ts-pagination'),
        type: 'bullets',
        modifierClass: 'tt-ts-pagination-',
        dynamicBullets: true,
        dynamicMainBullets: 1,
        clickable: true
      }
    });

    setTimeout(() => swiper.updateAutoHeight(), 100);

    if (simulateTouch && sliderEl.classList.contains('ts-scale-down')) {
      container.addEventListener('pointerdown', e => {
        if (e.button === 0) gsap.to(container.querySelectorAll('.swiper-slide'), { duration: 0.7, scale: 0.9 });
      });
      window.addEventListener('pointerup', () => {
        gsap.to(container.querySelectorAll('.swiper-slide'), { duration: 0.7, scale: 1, clearProps: 'scale' });
      });
    }
  });
}





export function initPartnersSlider() {
  if (typeof window === 'undefined') return;

  document.querySelectorAll('.tt-partners-carousel').forEach(sliderEl => {
    const container = sliderEl.querySelector('.swiper');
    if (!container) return;

    const swiperOptions = {
      slidesPerView: 'auto',
      centeredSlides: false,
      loop: false,
      slidesPerGroup: 1,
      freeMode: true,
      spaceBetween: 0,
      speed: 1000,
      grabCursor: true,
      scrollbar: {
        el: sliderEl.querySelector('.swiper-scrollbar'),
        hide: false,
      },
      breakpoints: {
        640: {
          slidesPerView: 'auto',
          spaceBetween: 0,
          scrollbar: true,
        },
        768: {
          slidesPerView: 'auto',
          spaceBetween: 0,
          scrollbar: true,
        },
        1024: {
          slidesPerView: 'auto',
          spaceBetween: 0,
          slidesPerGroup: 1,
          scrollbar: false,
        },
        1940: {
          slidesPerView: 4,
          spaceBetween: 0,
          slidesPerGroup: 1,
          scrollbar: false,
        },
      },
    };

    // 👉 Crear instancia de Swiper
    new Swiper(container, swiperOptions);
  });
}

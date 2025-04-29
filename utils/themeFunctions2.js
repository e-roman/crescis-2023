// themeFunctions.js
// Adaptado para React y Next.js (sin jQuery)

import { gsap, Power2, Expo } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

// Registrar plugins GSAP
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);


// ================================================================
// Portfolio list (Videos + Zoom)
// ================================================================

export function initPortfolioListEffects() {
  if (typeof window === 'undefined') return;

  // Play video on hover
  document.querySelectorAll('.pli-image-link').forEach(link => {
    link.addEventListener('mouseenter', () => {
      link.querySelectorAll('video').forEach(video => video.play());
    });
    link.addEventListener('mouseleave', () => {
      link.querySelectorAll('video').forEach(video => video.pause());
    });
  });

  // Image zoom wrapper
  if (document.querySelector('.portfolio-list')?.classList.contains('pli-hover')) {
    document.querySelectorAll('.portfolio-list-item').forEach(item => {
      const img = item.querySelector('.pli-image img');
      if (img && !img.closest('.pli-image-hover-zoom')) {
        const wrapper = document.createElement('div');
        wrapper.className = 'pli-image-hover-zoom';
        img.parentNode.insertBefore(wrapper, img);
        wrapper.appendChild(img);
      }
    });
  }
}

// ================================================================
// Portfolio Interactive
// ================================================================

export function initPortfolioInteractive() {
  if (typeof window === 'undefined') return;

  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  if (isMobile) return;

  const container = document.querySelector('.portfolio-interactive');
  if (!container) return;

  const forceScroll = container.classList.contains('pi-force-scroll');
  document.querySelectorAll('.pi-item-hover-title').forEach(title => {
    const span = document.createElement('span');
    span.innerHTML = title.innerHTML;
    title.innerHTML = '';
    title.appendChild(span);
    const clones = forceScroll ? 5 : (span.offsetWidth > title.parentElement.offsetWidth ? 1 : 0);
    for (let i = 0; i < clones; i++) {
      title.appendChild(span.cloneNode(true));
    }
  });

  document.querySelectorAll('.portfolio-interactive-item').forEach(item => {
    const link = item.querySelector('.pi-item-title-link');
    if (link) {
      link.addEventListener('mouseenter', () => item.classList.add('pi-item-hover'));
      link.addEventListener('mouseleave', () => item.classList.remove('pi-item-hover'));
    }

    const speed = item.getAttribute('data-scroll-speed');
    if (speed) {
      item.querySelectorAll('.pi-item-hover-title span').forEach(span => {
        span.style.animationDuration = `${speed}s`;
      });
    }
  });
}

// ================================================================
// Portfolio Grid
// ================================================================

export function initPortfolioGrid() {
  if (typeof window === 'undefined') return;

  const grid = document.getElementById('portfolio-grid');
  if (grid?.classList.contains('pgi-cap-inside')) {
    document.querySelectorAll('.portfolio-grid-item').forEach(item => {
      const caption = item.querySelector('.pgi-caption');
      const wrap = item.querySelector('.pgi-image-wrap');
      if (caption && wrap) wrap.appendChild(caption);
    });
    document.querySelectorAll('.pgi-title a').forEach(a => {
      const span = document.createElement('span');
      span.innerHTML = a.innerHTML;
      a.replaceWith(span);
    });
  }

  // Video hover
  document.querySelectorAll('.pgi-image-wrap').forEach(wrap => {
    wrap.addEventListener('mouseenter', () => {
      wrap.querySelectorAll('video').forEach(video => video.play());
    });
    wrap.addEventListener('mouseleave', () => {
      wrap.querySelectorAll('video').forEach(video => video.pause());
    });
  });

  // Move cat nav
  const nav = document.querySelector('.ttgr-cat-nav');
  if (nav) document.getElementById('body-inner')?.appendChild(nav);

  // Category trigger click
  const trigger = document.querySelector('.ttgr-cat-trigger');
  trigger?.addEventListener('click', () => {
    document.body.classList.add('ttgr-cat-nav-open');

    gsap.to('.portfolio-grid-item', { duration: 0.3, scale: 0.9 });
    gsap.to(['.pgi-caption', '.ttgr-cat-trigger'], { duration: 0.3, autoAlpha: 0 });

    nav?.removeEventListener('click', ttCatNavClose);

    const tl = gsap.timeline({ onComplete: ttCatNavClose });
    tl.to('.ttgr-cat-nav', { duration: 0.3, autoAlpha: 1 });
    tl.from('.ttgr-cat-list > li', {
      duration: 0.3,
      y: 80,
      autoAlpha: 0,
      stagger: 0.05,
      ease: Power2.easeOut,
      clearProps: 'all'
    });

    document.querySelectorAll('.ttgr-cat-nav a')
      .forEach(a => {
        const href = a.getAttribute('href');
        if (href && !href.startsWith('#') && !href.startsWith('mailto') && !href.startsWith('tel') && !a.hasAttribute('target')) {
          a.addEventListener('click', () => {
            gsap.to('.ttgr-cat-list > li', { duration: 0.3, y: -80, autoAlpha: 0, stagger: 0.05, ease: Power2.easeIn });
          });
        }
      });
  });

  function ttCatNavClose() {
    nav?.addEventListener('click', () => {
      document.body.classList.remove('ttgr-cat-nav-open');

      const tl = gsap.timeline();
      tl.to('.ttgr-cat-list > li', { duration: 0.3, y: -80, autoAlpha: 0, stagger: 0.05, ease: Power2.easeIn });
      tl.to('.ttgr-cat-nav', { duration: 0.3, autoAlpha: 0, clearProps: 'all' }, '+=0.2');
      tl.to('.portfolio-grid-item', { duration: 0.3, scale: 1, clearProps: 'all' }, '-=0.4');
      tl.to(['.pgi-caption', '#page-header', '.ttgr-cat-trigger'], { duration: 0.3, autoAlpha: 1, clearProps: 'all' }, '-=0.4');
      tl.to('.ttgr-cat-list > li', { clearProps: 'all' });
    });
  }
}

// ================================================================
// tt-Gallery
// ================================================================

export function initGalleryHoverEffects() {
  if (typeof window === 'undefined') return;

  // Video hover
  document.querySelectorAll('.tt-gallery-video-wrap').forEach(wrap => {
    wrap.addEventListener('mouseenter', () => {
      wrap.querySelectorAll('video').forEach(video => video.play());
    });
    wrap.addEventListener('mouseleave', () => {
      wrap.querySelectorAll('video').forEach(video => video.pause());
    });
  });

  // Image zoom wrapper
  if (document.querySelector('.tt-gallery')?.classList.contains('ttga-hover')) {
    document.querySelectorAll('.tt-gallery-item').forEach(item => {
      const img = item.querySelector('.tt-gallery-image img');
      if (img && !img.closest('.tt-gallery-image-hover-zoom')) {
        const wrapper = document.createElement('div');
        wrapper.className = 'tt-gallery-image-hover-zoom';
        img.parentNode.insertBefore(wrapper, img);
        wrapper.appendChild(img);
      }
    });
  }
}

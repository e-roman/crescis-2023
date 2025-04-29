
// utils/initLazyLoad.js

import LazyLoad from 'vanilla-lazyload'

let lazyLoadInstance = null

export function initLazyLoad() {
  if (!process.browser) return // No correr en server-side (Next.js)

  if (lazyLoadInstance) {
    lazyLoadInstance.update()
  } else {
    lazyLoadInstance = new LazyLoad({
      container: document.querySelector('[data-scroll-container]') || null, // si tenés smooth scroll tipo Lenis
      elements_selector: '.lazy',
      threshold: 300, // empieza a cargar 300px antes de que aparezca
      data_src: 'src', // atributo data-src
      class_loaded: 'lazy-loaded', // cuando carga, le pone esta clase (puede servir para animaciones)
      callback_loaded: (el) => {
        el.removeAttribute('data-src') // Opcional: limpia el atributo para mantener limpio el DOM
      },
    })
  }
}

// Si querés forzar update manual (por ejemplo luego de navegar en Next.js):
export function updateLazyLoad() {
  if (lazyLoadInstance) {
    lazyLoadInstance.update()
  }
}

// utils/lenis.js
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

let scroll

export function initLenis() {
  scroll = new Lenis({ duration: 1.5 })

  scroll.on('scroll', () => {
    ScrollTrigger.update()
  })

  gsap.ticker.add((time) => {
    scroll.raf(time * 1000)
  })

  return scroll
}

export { scroll }

// para poder usar scrollTo()
export const scrollTo = (...args) => scroll?.scrollTo(...args);

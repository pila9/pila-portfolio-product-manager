export function useSmoothScroll() {
  const scrollTo = (target: string | HTMLElement, offset = 80) => {
    const element =
      typeof target === 'string'
        ? document.querySelector(target)
        : target

    if (!element) return

    const top = element.getBoundingClientRect().top + window.scrollY
    let currentPos = window.scrollY
    const distance = top - currentPos - offset
    const duration = 800
    let start: number

    const easeInOutQuad = (t: number): number =>
      t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t

    const animate = (timestamp: number) => {
      if (!start) start = timestamp
      const elapsed = timestamp - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = easeInOutQuad(progress)

      window.scrollTo(0, currentPos + distance * eased)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }

  return { scrollTo }
}

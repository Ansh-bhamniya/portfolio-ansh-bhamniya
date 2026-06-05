import { useEffect, useRef } from 'react'

const WORDMARK_BG =
  'https://www.anything.com/images/homepage-v2/anything-bg.jpg'

/** Extra inset so italic serifs are not clipped at the edges. */
const EDGE_INSET_PX = 32

export function FooterWordmark() {
  const containerRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const fitText = () => {
      const container = containerRef.current
      const text = textRef.current
      if (!container || !text) return

      text.style.fontSize = ''
      let size = parseFloat(getComputedStyle(text).fontSize)
      const minSize = 36
      const maxWidth = container.clientWidth - EDGE_INSET_PX

      while (text.scrollWidth > maxWidth && size > minSize) {
        size -= 0.5
        text.style.fontSize = `${size}px`
      }
    }

    fitText()
    document.fonts?.ready?.then(fitText).catch(() => {})

    const observer = new ResizeObserver(fitText)
    if (containerRef.current) observer.observe(containerRef.current)

    window.addEventListener('resize', fitText)
    return () => {
      observer.disconnect()
      window.removeEventListener('resize', fitText)
    }
  }, [])

  return (
    <section
      data-header-surface="light"
      className="relative w-full bg-transparent px-6 pt-10 sm:px-10 sm:pt-12 md:px-12 md:pt-14"
      aria-hidden
    >
      <div ref={containerRef} className="flex w-full justify-center">
        <p
          ref={textRef}
          className="mb-0 inline-block max-w-full select-none whitespace-nowrap text-center leading-[1.12] tracking-[-0.03em] text-transparent bg-clip-text text-[clamp(3rem,19vw,24rem)]"
          style={{
            backgroundImage: `url(${WORDMARK_BG})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <span className="font-serif italic">An</span>
          <span className="font-serif italic">sh</span>
          <span className="font-sf not-italic"> Bhamniya</span>
        </p>
      </div>
    </section>
  )
}

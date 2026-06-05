import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface WordsPullUpProps {
  text: string
  className?: string
  showAsterisk?: boolean
}

export function WordsPullUp({ text, className = '', showAsterisk = false }: WordsPullUpProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const words = text.split(' ')

  return (
    <span ref={ref} className={`inline-flex flex-wrap ${className}`}>
      {words.map((word, index) => {
        const isLastWord = index === words.length - 1
        const showStar = showAsterisk && isLastWord && word.toLowerCase().endsWith('a')

        return (
          <span key={`${word}-${index}`} className="inline-block overflow-hidden mr-[0.25em] last:mr-0">
            <motion.span
              className="inline-block relative"
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {word}
              {showStar && (
                <span
                  className="absolute top-[0.65em] -right-[0.3em] text-[0.31em]"
                  aria-hidden
                >
                  *
                </span>
              )}
            </motion.span>
          </span>
        )
      })}
    </span>
  )
}

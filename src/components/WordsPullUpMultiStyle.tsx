import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface TextSegment {
  text: string
  className?: string
}

interface WordsPullUpMultiStyleProps {
  segments: TextSegment[]
  className?: string
}

export function WordsPullUpMultiStyle({ segments, className = '' }: WordsPullUpMultiStyleProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const words: { word: string; className: string }[] = []
  segments.forEach((segment) => {
    segment.text.split(' ').forEach((word) => {
      if (word) {
        words.push({ word, className: segment.className ?? '' })
      }
    })
  })

  return (
    <span
      ref={ref}
      className={`inline-flex flex-wrap justify-center ${className}`}
    >
      {words.map(({ word, className: wordClassName }, index) => (
        <span key={`${word}-${index}`} className="inline-block mr-[0.25em] last:mr-0">
          <motion.span
            className={`inline-block ${wordClassName}`}
            initial={{
              y: '1.1em',
              opacity: 0,
              clipPath: 'inset(0 0 100% 0)',
            }}
            animate={
              isInView
                ? { y: 0, opacity: 1, clipPath: 'inset(0 0 0 0)' }
                : { y: '1.1em', opacity: 0, clipPath: 'inset(0 0 100% 0)' }
            }
            transition={{
              duration: 0.6,
              delay: index * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  )
}

import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useRef, type CSSProperties, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { MacTerminalChrome } from '@/components/ui/mac-terminal-chrome'
import { cn } from '@/lib/utils'

function renderHighlightText(
  text: string,
  lightContent: boolean
) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <span
          key={`${part}-${index}`}
          className={cn(
            'font-semibold',
            lightContent
              ? 'text-white'
              : 'text-stone-900 dark:text-[#E1E0CC]'
          )}
        >
          {part.slice(2, -2)}
        </span>
      )
    }

    return part
  })
}

export interface StackingExperienceCardProps {
  index: number
  title: string
  role: string
  period: string
  imageSrc: string
  href: string
  websiteUrl: string
  highlights?: string[]
  summary?: string
  cardClassName: string
  backgroundStyle?: CSSProperties
  backgroundNode?: ReactNode
  lightContent?: boolean
  showImage?: boolean
  showDetailLink?: boolean
  progress: MotionValue<number>
  range: [number, number]
  targetScale: number
}

export function StackingExperienceCard({
  index,
  title,
  role,
  period,
  imageSrc,
  href,
  websiteUrl,
  highlights = [],
  summary,
  cardClassName,
  backgroundStyle,
  backgroundNode,
  lightContent = false,
  showImage = true,
  showDetailLink = false,
  progress,
  range,
  targetScale,
}: StackingExperienceCardProps) {
  const container = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start'],
  })

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.15, 1])
  const scale = useTransform(progress, range, [1, targetScale])

  const terminalTitle = `portfolio — ${title.toLowerCase()}`

  return (
    <div
      ref={container}
      className="sticky top-0 flex h-screen items-center justify-center px-4"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${index * 25}px)`,
        }}
        className={cn(
          'relative -top-[25%] h-[min(580px,84vh)] w-[min(92%,75%)] origin-top sm:h-[min(620px,86vh)]',
          cardClassName
        )}
      >
        <MacTerminalChrome title={terminalTitle} websiteUrl={websiteUrl}>
          <div className="relative flex h-full min-h-[480px] flex-col overflow-hidden sm:min-h-[520px]">
            {backgroundNode ? (
              <div aria-hidden className="absolute inset-0 z-0 overflow-hidden">
                {backgroundNode}
              </div>
            ) : (
              backgroundStyle && (
                <div
                  aria-hidden
                  className="absolute inset-0 z-0"
                  style={backgroundStyle}
                />
              )
            )}

            <div className="relative z-10 flex h-full w-full flex-1">
              <div
                className={cn(
                  'flex flex-col justify-between p-8 sm:p-10 md:p-12',
                  showImage ? 'w-1/2' : 'w-full'
                )}
              >
                <div className="text-left">
                  <h3
                    className={cn(
                      'font-serif text-2xl italic leading-[1.05] tracking-tight sm:text-3xl md:text-4xl lg:text-[2.75rem]',
                      lightContent
                        ? 'text-white'
                        : 'text-stone-900 dark:text-[#E1E0CC]'
                    )}
                  >
                    {title}
                  </h3>
                  <p
                    className={cn(
                      'mt-4 font-sf text-base font-normal leading-snug sm:text-lg md:text-xl',
                      lightContent
                        ? 'text-white/85'
                        : 'text-stone-800/90 dark:text-stone-200'
                    )}
                  >
                    {role}
                  </p>
                  {summary && (
                    <p
                      className={cn(
                        'mt-3 max-w-2xl font-sf text-sm leading-relaxed sm:text-base',
                        lightContent
                          ? 'text-white/80'
                          : 'text-stone-700/90 dark:text-stone-300'
                      )}
                    >
                      {summary}
                    </p>
                  )}
                  <p
                    className={cn(
                      'mt-2 font-mono text-xs font-normal uppercase tracking-[0.12em]',
                      lightContent
                        ? 'text-white/55'
                        : 'text-stone-600/90 dark:text-stone-400'
                    )}
                  >
                    {period}
                  </p>

                  {highlights.length > 0 && (
                    <ul className="mt-5 space-y-2 sm:mt-6">
                      {highlights.map((item) => (
                        <li
                          key={item}
                          className={cn(
                            'flex gap-2.5 font-sf text-sm leading-relaxed sm:text-[0.9375rem]',
                            lightContent
                              ? 'text-white/85'
                              : 'text-stone-800/90 dark:text-stone-200'
                          )}
                        >
                          <span
                            aria-hidden
                            className={cn(
                              'mt-[0.55em] h-1 w-1 shrink-0 rounded-full',
                              lightContent
                                ? 'bg-white/70'
                                : 'bg-stone-700/80 dark:bg-stone-300/80'
                            )}
                          />
                          <span>{renderHighlightText(item, lightContent)}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {showDetailLink && (
                  <Link
                    to={href}
                    className={cn(
                      'group/link inline-flex w-fit items-center gap-2 font-mono text-sm font-medium tracking-tight transition-colors',
                      lightContent
                        ? 'text-white hover:text-white/80'
                        : 'text-stone-900 hover:text-stone-700 dark:text-[#E1E0CC] dark:hover:text-white/85'
                    )}
                  >
                    <span className="text-green-700/90 dark:text-green-400/90">
                      $
                    </span>
                    explain more
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                )}
              </div>

              {showImage && (
                <div className="flex w-1/2 items-center justify-center p-6 sm:p-8 md:p-10">
                  <div className="relative aspect-[4/3] h-[min(100%,320px)] w-full max-h-[88%] max-w-[92%] overflow-hidden rounded-lg border border-black/10 bg-stone-100 shadow-inner dark:border-white/15 dark:bg-stone-900/50">
                    <motion.div
                      className="h-full w-full"
                      style={{ scale: imageScale }}
                    >
                      <img
                        src={imageSrc}
                        alt={title}
                        className="absolute inset-0 h-full w-full object-cover"
                        loading="lazy"
                      />
                    </motion.div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </MacTerminalChrome>
      </motion.div>
    </div>
  )
}

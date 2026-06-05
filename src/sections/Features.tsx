import { useRef } from 'react'
import { useScroll } from 'framer-motion'
import {
  ExperienceCardGradient,
  type ExperienceGradientVariant,
} from '@/components/ui/noisy-gradient-backgrounds'
import { StackingExperienceCard } from '@/components/ui/stacking-experience-card'
import { experiences } from '../data/experiences'
import { WordsPullUpMultiStyle } from '../components/WordsPullUpMultiStyle'

const EXPERIENCE_GRADIENT_BY_SLUG: Record<string, ExperienceGradientVariant> = {
  railse: 'railse-green',
  techspr: 'techspr-blue',
  dhadkan: 'dhadkan-purple',
  quddle: 'quddle-coral',
}

const EXPERIENCE_SECTION_GRID = `
  linear-gradient(to right, #f0f0f0 1px, transparent 1px),
  linear-gradient(to bottom, #f0f0f0 1px, transparent 1px),
  radial-gradient(circle 800px at 100% 200px, #d5c5ff, transparent),
  radial-gradient(circle 800px at 0% 200px, #d5c5ff, transparent)
`

const EXPERIENCE_SECTION_GRID_DARK = `
  linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px),
  linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px),
  radial-gradient(circle 800px at 100% 200px, rgba(120,90,200,0.35), transparent),
  radial-gradient(circle 800px at 0% 200px, rgba(120,90,200,0.35), transparent)
`

export function Features() {
  const container = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  })

  return (
    <section
      id="experience"
      data-header-surface="light"
      className="relative scroll-mt-24 bg-white transition-colors duration-300 dark:bg-black"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 dark:hidden"
        style={{
          backgroundImage: EXPERIENCE_SECTION_GRID,
          backgroundSize: '96px 64px, 96px 64px, 100% 100%, 100% 100%',
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 hidden dark:block"
        style={{
          backgroundImage: EXPERIENCE_SECTION_GRID_DARK,
          backgroundSize: '96px 64px, 96px 64px, 100% 100%, 100% 100%',
        }}
      />
      <div className="bg-noise pointer-events-none absolute inset-0 z-[1] opacity-[0.08]" />

      <div className="relative z-10 px-4 pb-8 pt-16 sm:px-6 sm:pb-12 sm:pt-24 md:pt-32">
        <header className="mx-auto mb-8 max-w-7xl text-center sm:mb-12 md:mb-16">
          <h2 className="text-3xl font-normal leading-[1.2] sm:text-4xl md:text-5xl lg:text-6xl">
            <WordsPullUpMultiStyle
              segments={[
                {
                  text: 'Some of my Work.',
                  className: 'font-serif italic text-primary',
                },
                {
                  text: '',
                  className: 'text-stone-500 dark:text-gray-500',
                },
              ]}
            />
          </h2>
        </header>
      </div>

      <div ref={container} className="relative z-10 w-full">
        {experiences.map((exp, i) => {
          const targetScale = 1 - (experiences.length - i) * 0.05
          const gradientVariant = EXPERIENCE_GRADIENT_BY_SLUG[exp.slug]

          return (
            <StackingExperienceCard
              key={exp.slug}
              index={i}
              title={exp.company}
              role={exp.role}
              period={exp.period}
              imageSrc={exp.imgSrc}
              href={`/experience/${exp.slug}`}
              websiteUrl={exp.websiteUrl}
              highlights={exp.highlights}
              cardClassName="bg-transparent"
              backgroundNode={
                gradientVariant ? (
                  <ExperienceCardGradient variant={gradientVariant} />
                ) : undefined
              }
              showImage={false}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          )
        })}
      </div>
    </section>
  )
}

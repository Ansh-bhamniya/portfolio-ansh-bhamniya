import { WordsPullUpMultiStyle } from '../components/WordsPullUpMultiStyle'
import { ScrollRevealText } from '../components/AnimatedLetter'
import { AURORA_BACKGROUND } from '../lib/aurora-gradient'

const BODY_TEXT =
  'I blend software engineering and design thinking to build scalable, high-performance applications that drive real impact.'

export function About() {
  return (
    <section
      id="about"
      data-header-surface="light"
      className="scroll-mt-24 bg-white px-4 py-16 sm:px-6 sm:py-24 md:py-32 dark:bg-black"
    >
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-2xl px-6 py-16 text-center sm:px-12 sm:py-20 md:py-24">
        <div
          aria-hidden
          className="absolute inset-0 z-0"
          style={{ background: AURORA_BACKGROUND }}
        />

        <div className="relative z-10">
          <p className="mb-8 text-[10px] text-stone-600 sm:mb-12 sm:text-xs">
            Software Engineering
          </p>

          <h2 className="mx-auto mb-10 max-w-3xl text-3xl leading-[0.95] text-stone-900 sm:mb-14 sm:text-4xl sm:leading-[0.9] md:text-5xl lg:text-6xl xl:text-7xl">
            <WordsPullUpMultiStyle
              segments={[
                {
                  text:
                    "I'm a Software Developer and 2026 graduate of IIT Roorkee, passionate about creating seamless mobile applications using Flutter and modern frameworks with great user experiences.",
                  className: 'italic font-serif',
                },
                // {
                //   // text:
                //   //   'I build scalable products with a strong focus on user experience, performance, and clean design.',
                //   // className: 'italic font-serif',
                // },
              ]}
            />
          </h2>

          <ScrollRevealText
            text={BODY_TEXT}
            className="mx-auto max-w-2xl text-xs leading-relaxed text-stone-700 sm:text-sm md:text-base"
          />
        </div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import { WordsPullUp } from '../components/WordsPullUp'

const TAGLINE =
  'Building pixel-perfect mobile apps with a sharp eye for design and smooth animations.'

export function Hero() {
  return (
    <section id="hero" data-header-surface="hero" className="relative w-full">
      <div className="relative mx-auto h-[800px] min-h-screen w-full overflow-hidden tablet:h-[1000px] lg:h-[1127px]">
        <img
          src="https://www.anything.com/images/homepage-v2/anything-bg.jpg"
          alt=""
          className="absolute inset-0 h-full w-full scale-[1.01] object-cover object-center blur-[2px] transition-opacity duration-1000"
        />

        <div className="absolute inset-0 z-10 flex justify-center px-6 pt-[28vh] sm:pt-[30vh] md:pt-[32vh]">
          <div className="max-w-2xl select-text text-center sm:max-w-3xl">
            <h1 className="text-5xl leading-[0.9] tracking-tight text-white sm:text-6xl md:text-8xl lg:text-9xl xl:text-[7.5rem]">
              <span className="font-serif italic">
                <WordsPullUp text="Ansh Bhamniya" />
              </span>
            </h1>

            <motion.p
              className="mx-auto mt-6 max-w-xl font-sf text-base font-normal leading-snug text-white/90 sm:mt-8 sm:text-lg md:mt-10 md:max-w-2xl md:text-xl"
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              {TAGLINE}
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  )
}

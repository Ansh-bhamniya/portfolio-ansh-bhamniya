import { Hero } from '../sections/Hero'
import { About } from '../sections/About'
import { CreditCardShowcase } from '../sections/CreditCardShowcase'
import { Features } from '../sections/Features'
import { Footer } from '../sections/Footer'
import { TechMarquee } from '../sections/TechMarquee'

export function Home() {
  return (
    <main className="bg-[#f4f3ee] dark:bg-black min-h-screen transition-colors duration-300">
      <Hero />
      <About />
      <TechMarquee />
      <Features />
      <CreditCardShowcase />
      <Footer />
    </main>
  )
}

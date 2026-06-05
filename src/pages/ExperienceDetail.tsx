import { motion } from 'framer-motion'
import { ArrowLeft, Check } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { getExperienceBySlug } from '../data/experiences'
import { Footer } from '../sections/Footer'

const customEase = [0.16, 1, 0.3, 1] as const

export function ExperienceDetail() {
  const { slug } = useParams<{ slug: string }>()
  const experience = slug ? getExperienceBySlug(slug) : undefined

  if (!experience) {
    return <Navigate to="/" replace />
  }

  const paragraphs = experience.description.split('\n\n').filter(Boolean)

  return (
    <div
      data-header-surface="light"
      className="min-h-screen bg-[#f4f3ee] transition-colors duration-300 dark:bg-black"
    >
      <div className="bg-noise fixed inset-0 opacity-[0.12] pointer-events-none" />

      <header className="relative z-10 border-b border-white/5">
        <div className="mx-auto max-w-4xl px-4 py-6 sm:px-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm transition-colors duration-200"
            style={{ color: 'rgba(225, 224, 204, 0.8)' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#E1E0CC'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'rgba(225, 224, 204, 0.8)'
            }}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to portfolio
          </Link>
        </div>
      </header>

      <article className="relative z-10 mx-auto max-w-4xl px-4 pb-24 pt-10 sm:px-6 sm:pt-16">
        <motion.p
          className="text-primary text-[10px] sm:text-xs mb-4"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: customEase }}
        >
          Experience {experience.number}
        </motion.p>

        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-medium leading-[0.95] tracking-tight mb-2"
          style={{ color: '#E1E0CC' }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: customEase }}
        >
          {experience.company}
        </motion.h1>

        <motion.p
          className="text-primary/80 text-sm sm:text-base mb-1"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15, ease: customEase }}
        >
          {experience.role}
        </motion.p>

        <motion.p
          className="text-gray-500 text-xs sm:text-sm mb-8"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: customEase }}
        >
          {experience.period}
        </motion.p>

        <motion.p
          className="text-primary/70 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed mb-12 font-sf"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: customEase }}
        >
          {experience.tagline}
        </motion.p>

        <div className="rounded-2xl bg-[#101010] p-6 sm:p-10 mb-12">
          <div className="space-y-6 text-[#DEDBC8] text-sm sm:text-base leading-relaxed">
            {paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
        </div>

        <section className="mb-12">
          <h3 className="text-primary text-lg font-medium mb-6">What I worked on</h3>
          <ul className="grid gap-4 sm:grid-cols-2">
            {experience.highlights.map((item, i) => (
              <motion.li
                key={item}
                className="flex items-start gap-3 rounded-xl bg-[#212121] p-4"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, ease: customEase }}
              >
                <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">{item}</span>
              </motion.li>
            ))}
          </ul>
        </section>

        <section className="rounded-2xl bg-[#212121] p-6 sm:p-8">
          <h3 className="text-lg font-medium mb-4" style={{ color: '#E1E0CC' }}>
            Technologies
          </h3>
          <div className="flex flex-wrap gap-2">
            {experience.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-primary/20 bg-black/40 px-4 py-1.5 text-xs sm:text-sm text-primary/80"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>
      </article>
      <Footer />
    </div>
  )
}

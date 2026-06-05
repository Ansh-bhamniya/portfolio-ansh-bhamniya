'use client'

import { type FormEvent, useState } from 'react'
import { GradientBackground } from '@/components/ui/noisy-gradient-backgrounds'
import { FooterWordmark } from '../components/FooterWordmark'
import { cn } from '../lib/utils'

const CONTACT_EMAIL = 'ansh.bhamniya@gmail.com'

const SOCIAL_LINKS = [
  { name: 'Instagram', href: 'https://instagram.com/' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/ansh-bhamniya-98b680258/' },
  { name: 'GitHub', href: 'https://github.com/ansh-bhamniya' },
] as const

const QUICK_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Resume', href: '/ansh_resume.pdf' },
] as const

const footerLinkClassName =
  'font-sf text-sm text-stone-800/85 transition-opacity hover:opacity-70 dark:text-white/80'

const inputClassName = cn(
  'font-sf w-full rounded-2xl border border-white/35 bg-white/15 text-sm text-stone-900',
  'shadow-[inset_0_1px_1px_rgba(255,255,255,0.45),0_8px_32px_rgba(0,0,0,0.06)]',
  'placeholder:text-stone-700/60 backdrop-blur-xl transition-[background-color,border-color,box-shadow] duration-300',
  'focus-visible:outline-none focus-visible:border-white/50 focus-visible:bg-white/25',
  'focus-visible:ring-2 focus-visible:ring-white/30',
  'dark:border-white/20 dark:bg-white/10 dark:text-white dark:placeholder:text-white/45',
  'dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.12),0_8px_32px_rgba(0,0,0,0.2)]',
  'dark:focus-visible:border-white/35 dark:focus-visible:bg-white/15 dark:focus-visible:ring-white/20'
)

export function Footer() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const trimmedEmail = email.trim()
    const trimmedMessage = message.trim()
    if (!trimmedEmail) return

    const subject = encodeURIComponent('Portfolio contact')
    const body = encodeURIComponent(
      `From: ${trimmedEmail}\n\n${trimmedMessage || '(No message)'}`
    )
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
  }

  return (
    <>
      <FooterWordmark />
      <footer
        data-header-surface="light"
        className="footer-section relative min-h-[480px] overflow-hidden px-4 pb-6 pt-0 sm:min-h-[520px] sm:px-6 sm:pb-8"
      >
        <GradientBackground
          gradientOrigin="bottom-middle"
          noiseIntensity={0.35}
          noisePatternAlpha={22}
          noisePatternSize={120}
          noisePatternRefreshInterval={4}
        />

        <div className="relative z-10 mx-auto flex min-h-[480px] w-full max-w-6xl flex-col justify-between pt-8 sm:min-h-[520px] sm:pt-10">
          <div className="flex w-full flex-col gap-10 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
            <form
              onSubmit={handleSubmit}
              className="flex w-full max-w-xl flex-col gap-4 sm:pl-4"
            >
              <p className="font-sf text-lg font-medium leading-snug text-stone-900 sm:text-xl dark:text-white">
                Let&apos;s do great work together
              </p>
              <p className="font-sf text-sm font-medium text-stone-900 dark:text-white">
                Contact me
              </p>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Your email"
                required
                className={cn(inputClassName, 'h-11 px-4')}
              />
              <textarea
                name="message"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="Your message"
                rows={6}
                className={cn(
                  inputClassName,
                  'min-h-[140px] resize-y px-4 py-3 sm:min-h-[160px]'
                )}
              />
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="font-sf h-11 shrink-0 rounded-full bg-[#000000] px-8 text-sm font-medium text-white transition-opacity hover:opacity-90"
                >
                  Send
                </button>
              </div>
            </form>

            <div className="flex flex-col items-start gap-10 sm:flex-row sm:gap-20 md:gap-28 sm:pl-4 sm:pt-1">
              <nav aria-label="Quick links" className="flex flex-col items-start gap-3">
                <p className="font-sf text-sm font-medium text-stone-900 dark:text-white">
                  Quick links
                </p>
                <ul className="flex flex-col gap-2">
                  {QUICK_LINKS.map(({ name, href }) => (
                    <li key={name}>
                      <a
                        href={href}
                        {...(name === 'Resume'
                          ? { target: '_blank', rel: 'noopener noreferrer' }
                          : {})}
                        className={footerLinkClassName}
                      >
                        {name}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              <nav aria-label="Social links" className="flex flex-col items-start gap-3">
                <p className="font-sf text-sm font-medium text-stone-900 dark:text-white">
                  Social Handles
                </p>
                <ul className="flex flex-col gap-2">
                  {SOCIAL_LINKS.map(({ name, href }) => (
                    <li key={name}>
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={footerLinkClassName}
                      >
                        {name}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>

          <div className="flex w-full flex-col items-start gap-3 pb-2 pl-2 sm:flex-row sm:items-center sm:justify-between sm:pl-4">
            <p className="text-left text-xs text-stone-800/75 sm:text-sm dark:text-white/60">
              © {new Date().getFullYear()} Ansh Bhamniya. All Rights Reserved.
            </p>
            <p className="text-left text-xs text-stone-900 sm:ml-auto sm:text-right sm:text-sm dark:text-primary">
              Available for work
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}

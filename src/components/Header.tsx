import { useHeaderOnLightSurface } from '../hooks/useHeaderOnLightSurface'
import { cn } from '../lib/utils'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: 'mailto:ansh.bhamniya@gmail.com' },
] as const

export function Header() {
  const onLightSurface = useHeaderOnLightSurface()

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 sm:pt-5 md:pt-6">
      <nav
        aria-label="Main"
        className={cn(
          'pointer-events-auto mx-auto flex w-full max-w-xl items-center justify-between gap-3 rounded-full border px-4 py-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.08)] backdrop-blur-xl transition-colors duration-300 sm:max-w-2xl sm:gap-4 sm:px-5 sm:py-3 md:max-w-3xl md:px-6 md:py-3.5',
          onLightSurface
            ? 'border-black/15 bg-white/70'
            : 'border-white/30 bg-white/15'
        )}
      >
        <a
          href="/"
          className={cn(
            'shrink-0 text-xl tracking-tight transition-colors duration-300 sm:text-2xl',
            onLightSurface ? 'text-black' : 'text-white'
          )}
        >
          <span className="font-serif italic">An</span>
          <span className="font-serif italic">sh</span>
        </a>

        <ul className="hidden flex-1 items-center justify-center gap-4 md:flex lg:gap-6">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className={cn(
                  'font-sf text-base font-normal transition-colors duration-300',
                  onLightSurface
                    ? 'text-black/75 hover:text-black'
                    : 'text-white/95 hover:text-white'
                )}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="/ansh_resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="font-sf shrink-0 rounded-full bg-[#000000] px-5 py-2.5 text-base font-medium text-white transition-opacity hover:opacity-90 sm:px-6 sm:py-3"
        >
          View resume
        </a>
      </nav>
    </header>
  )
}

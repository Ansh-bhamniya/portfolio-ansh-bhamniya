import { cn } from '@/lib/utils'

const TOOLS = [
  { name: 'Figma', slug: 'figma' },
  { name: 'Cursor', slug: 'cursor' },
  { name: 'Flutter', slug: 'flutter' },
  { name: 'Lottie', slug: 'lottiefiles' },
  { name: 'Node.js', slug: 'nodedotjs' },
  { name: 'MongoDB', slug: 'mongodb' },
  { name: 'Firebase', slug: 'firebase' },
  { name: 'AWS', iconSrc: '/logos/aws.svg' },
  { name: 'Express', slug: 'express' },
  { name: 'PayU', iconSrc: '/logos/payu.svg' },
  { name: 'Docker', slug: 'docker' },
  { name: 'Supabase', slug: 'supabase' },
] as const

function ToolLogo({
  name,
  slug,
  iconSrc,
}: {
  name: string
  slug?: string
  iconSrc?: string
}) {
  const src = iconSrc ?? `https://cdn.simpleicons.org/${slug}`

  return (
    <li className="flex shrink-0 items-center gap-3 px-8 sm:px-10">
      <img
        src={src}
        alt={name}
        width={32}
        height={32}
        className={cn(
          'object-contain',
          iconSrc?.includes('/logos/aws.svg') || iconSrc?.includes('/logos/payu.svg')
            ? 'h-6 w-auto sm:h-7'
            : 'h-7 w-7 sm:h-8 sm:w-8'
        )}
        loading="lazy"
      />
      <span className="text-stone-600 dark:text-primary/60 text-sm sm:text-base whitespace-nowrap">
        {name}
      </span>
    </li>
  )
}

function ToolTrack({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {TOOLS.map((tool) => (
        <ToolLogo
          key={tool.name}
          name={tool.name}
          slug={'slug' in tool ? tool.slug : undefined}
          iconSrc={'iconSrc' in tool ? tool.iconSrc : undefined}
        />
      ))}
    </ul>
  )
}

export function TechMarquee() {
  return (
    <section
      data-header-surface="light"
      className="relative overflow-hidden bg-white py-12 transition-colors duration-300 dark:bg-black sm:py-16"
    >
      <div className="relative z-20 mx-auto mb-8 max-w-6xl px-4 text-center sm:mb-10 sm:px-6">
        <p className="font-sf text-sm font-medium tracking-tight text-stone-500 dark:text-stone-400 sm:text-base">
          A Toolkit for Building Scalable Products
        </p>
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 sm:w-32 bg-gradient-to-r from-white via-white/80 to-transparent dark:from-black dark:via-black/80" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 sm:w-32 bg-gradient-to-l from-white via-white/80 to-transparent dark:from-black dark:via-black/80" />

      <div className="overflow-hidden" style={{ direction: 'ltr' }}>
        <div className="flex w-max animate-infinite-scroll will-change-transform">
          <ToolTrack />
          <ToolTrack hidden />
        </div>
      </div>
    </section>
  )
}

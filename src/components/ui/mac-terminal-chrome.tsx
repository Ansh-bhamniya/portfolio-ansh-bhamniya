import type { ReactNode } from 'react'
import { CopyButton } from '@/components/ui/copy-button'
import { cn } from '@/lib/utils'

interface MacTerminalChromeProps {
  title: string
  websiteUrl: string
  children: ReactNode
  className?: string
}

export function MacTerminalChrome({
  title,
  websiteUrl,
  children,
  className,
}: MacTerminalChromeProps) {
  return (
    <div
      className={cn(
        'flex h-full w-full flex-col overflow-hidden rounded-xl border border-black/10 shadow-2xl',
        'bg-[#7a7a7a] dark:border-white/15 dark:bg-[#262626]',
        className
      )}
    >
      <div className="flex shrink-0 items-center justify-between gap-3 border-b border-[#656565] bg-[#6e6e6e] px-4 py-2.5 dark:border-[#141414] dark:bg-[#2a2a2a]">
        <div className="flex shrink-0 items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" aria-hidden />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" aria-hidden />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" aria-hidden />
        </div>
        <p className="min-w-0 flex-1 truncate px-2 text-center font-mono text-xs text-stone-100 dark:text-stone-200">
          {title}
        </p>
        <div className="flex max-w-[min(100%,14rem)] shrink-0 items-center gap-1.5 sm:max-w-xs md:max-w-sm">
          <a
            href={websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="min-w-0 truncate font-mono text-[10px] text-stone-200 underline-offset-2 hover:text-white hover:underline dark:text-stone-300 dark:hover:text-white sm:text-xs"
            title={websiteUrl}
          >
            {websiteUrl}
          </a>
          <CopyButton value={websiteUrl} className="shrink-0" />
        </div>
      </div>

      <div className="relative flex min-h-0 flex-1 flex-col overflow-hidden rounded-b-xl border-x border-b border-black/10 bg-[#f5f5f7] dark:border-white/10 dark:bg-[#1a1a1a]">
        {children}
      </div>
    </div>
  )
}

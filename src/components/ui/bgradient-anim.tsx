import { cn } from '@/lib/utils'

/** Single dark tone for Dhadkan card (deep blue-teal) */
const DARK_GRADIENT_COLOR = 'oklch(0.28 0.07 235)'

interface BgradientAnimProps {
  className?: string
}

export function BgradientAnim({ className = '' }: BgradientAnimProps) {
  return (
    <div
      className={cn('h-full w-full', className)}
      style={{ backgroundColor: DARK_GRADIENT_COLOR }}
    />
  )
}

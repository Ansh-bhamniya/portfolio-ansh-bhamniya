import { Check, Copy } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/utils'

interface CopyButtonProps {
  value: string
  className?: string
}

export function CopyButton({ value, className }: CopyButtonProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={copied ? 'Copied' : 'Copy link'}
      className={cn(
        'inline-flex h-7 w-7 items-center justify-center rounded-md text-stone-200 transition-colors',
        'hover:bg-white/15 hover:text-white dark:text-stone-300 dark:hover:bg-white/10 dark:hover:text-white',
        className
      )}
    >
      {copied ? (
        <Check className="h-3.5 w-3.5 text-green-600 dark:text-green-400" />
      ) : (
        <Copy className="h-3.5 w-3.5" />
      )}
    </button>
  )
}

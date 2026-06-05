import { ChevronUp, Moon, Sun } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <div
      className="flex items-center gap-1.5 rounded-full border border-white/10 dark:border-white/10 bg-[#141414] dark:bg-[#141414] bg-stone-200/80 px-2 py-1.5 shrink-0"
      role="group"
      aria-label="Theme"
    >
      <button
        type="button"
        onClick={() => setTheme('light')}
        aria-label="Light mode"
        aria-pressed={theme === 'light'}
        className={`flex h-8 w-8 items-center justify-center rounded-full transition-colors ${
          theme === 'light'
            ? 'bg-stone-300 dark:bg-[#2a2a2a] text-stone-900 dark:text-primary'
            : 'text-gray-500 hover:text-primary/80'
        }`}
      >
        <Sun className="h-4 w-4" strokeWidth={1.5} />
      </button>
      <ChevronUp className="h-3 w-3 text-gray-600 shrink-0" strokeWidth={2} />
      <button
        type="button"
        onClick={() => setTheme('dark')}
        aria-label="Dark mode"
        aria-pressed={theme === 'dark'}
        className={`flex h-8 w-8 items-center justify-center rounded-full transition-colors ${
          theme === 'dark'
            ? 'bg-[#2a2a2a] text-primary'
            : 'text-gray-500 hover:text-primary/80'
        }`}
      >
        <Moon className="h-4 w-4" strokeWidth={1.5} />
      </button>
    </div>
  )
}

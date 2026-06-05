import { useEffect, useState } from 'react'
import { useTheme } from '../context/ThemeContext'

const HEADER_OFFSET_PX = 72

export function useHeaderOnLightSurface() {
  const { theme } = useTheme()
  const [onLightSurface, setOnLightSurface] = useState(false)

  useEffect(() => {
    const update = () => {
      if (theme === 'dark') {
        setOnLightSurface(false)
        return
      }

      const y = HEADER_OFFSET_PX
      const sections = document.querySelectorAll('[data-header-surface]')
      let surface: string | null = null

      sections.forEach((el) => {
        const rect = el.getBoundingClientRect()
        if (rect.top <= y && rect.bottom > y) {
          surface = el.getAttribute('data-header-surface')
        }
      })

      if (!surface) {
        const hero = document.getElementById('hero')
        const pastHero =
          hero !== null && hero.getBoundingClientRect().bottom < y
        surface = pastHero ? 'light' : 'hero'
      }

      setOnLightSurface(surface === 'light')
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)

    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [theme])

  return onLightSurface
}

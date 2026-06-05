import { useEffect, useRef, type CSSProperties, type ReactNode } from 'react'

type GradientOrigin =
  | 'bottom-middle'
  | 'bottom-left'
  | 'bottom-right'
  | 'top-middle'
  | 'top-left'
  | 'top-right'
  | 'left-middle'
  | 'right-middle'
  | 'center'

type GradientType = 'radial-gradient' | 'linear-gradient' | 'conic-gradient'

interface GradientColorStop {
  color: string
  stop: string
}

interface NoiseProps {
  patternSize?: number
  patternScaleX?: number
  patternScaleY?: number
  patternRefreshInterval?: number
  patternAlpha?: number
  intensity?: number
}

function Noise({
  patternSize = 100,
  patternScaleX = 1,
  patternScaleY = 1,
  patternRefreshInterval = 1,
  patternAlpha = 50,
  intensity = 1,
}: NoiseProps) {
  const grainRef = useRef<HTMLCanvasElement>(null)
  const canvasCssSizeRef = useRef({ width: 0, height: 0 })

  useEffect(() => {
    const canvas = grainRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let frame = 0
    const patternCanvas = document.createElement('canvas')
    patternCanvas.width = patternSize
    patternCanvas.height = patternSize

    const patternCtx = patternCanvas.getContext('2d')
    if (!patternCtx) return

    const patternData = patternCtx.createImageData(patternSize, patternSize)
    const patternPixelDataLength = patternSize * patternSize * 4

    const resize = () => {
      const dpr = window.devicePixelRatio || 1
      let newCssWidth = window.innerWidth
      let newCssHeight = window.innerHeight

      if (canvas.parentElement) {
        const parentRect = canvas.parentElement.getBoundingClientRect()
        newCssWidth = parentRect.width
        newCssHeight = parentRect.height
      }

      canvasCssSizeRef.current = { width: newCssWidth, height: newCssHeight }
      canvas.width = newCssWidth * dpr
      canvas.height = newCssHeight * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const updatePattern = () => {
      for (let i = 0; i < patternPixelDataLength; i += 4) {
        const value = Math.random() * 255 * intensity
        patternData.data[i] = value
        patternData.data[i + 1] = value
        patternData.data[i + 2] = value
        patternData.data[i + 3] = patternAlpha
      }
      patternCtx.putImageData(patternData, 0, 0)
    }

    const drawGrain = () => {
      const { width: cssWidth, height: cssHeight } = canvasCssSizeRef.current
      if (cssWidth === 0 || cssHeight === 0) return

      ctx.clearRect(0, 0, cssWidth, cssHeight)
      ctx.save()

      const safePatternScaleX = Math.max(0.001, patternScaleX)
      const safePatternScaleY = Math.max(0.001, patternScaleY)
      ctx.scale(safePatternScaleX, safePatternScaleY)

      const fillPattern = ctx.createPattern(patternCanvas, 'repeat')
      if (fillPattern) {
        ctx.fillStyle = fillPattern
        ctx.fillRect(0, 0, cssWidth / safePatternScaleX, cssHeight / safePatternScaleY)
      }

      ctx.restore()
    }

    let animationFrameId: number

    const loop = () => {
      if (canvasCssSizeRef.current.width > 0 && canvasCssSizeRef.current.height > 0) {
        if (frame % patternRefreshInterval === 0) {
          updatePattern()
          drawGrain()
        }
      }
      frame++
      animationFrameId = window.requestAnimationFrame(loop)
    }

    window.addEventListener('resize', resize)
    resize()

    if (patternRefreshInterval > 0) {
      loop()
    } else {
      updatePattern()
      drawGrain()
    }

    return () => {
      window.removeEventListener('resize', resize)
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [
    patternSize,
    patternScaleX,
    patternScaleY,
    patternRefreshInterval,
    patternAlpha,
    intensity,
  ])

  return (
    <canvas
      className="pointer-events-none absolute inset-0 h-full w-full"
      ref={grainRef}
      aria-hidden
    />
  )
}

/** Default “Sunset Glow” stops from the component demo. */
export const FOOTER_SUNSET_GRADIENT: GradientColorStop[] = [
  { color: 'rgba(245,87,2,1)', stop: '10.5%' },
  { color: 'rgba(245,120,2,1)', stop: '16%' },
  { color: 'rgba(245,140,2,1)', stop: '17.5%' },
  { color: 'rgba(245,170,100,1)', stop: '25%' },
  { color: 'rgba(238,174,202,1)', stop: '40%' },
  { color: 'rgba(202,179,214,1)', stop: '65%' },
  { color: 'rgba(148,201,233,1)', stop: '100%' },
]

/** Green radial preset for Railse experience card. */
export const RAILSE_GREEN_GRADIENT: GradientColorStop[] = [
  { color: 'rgba(22,101,52,1)', stop: '12%' },
  { color: 'rgba(34,139,72,1)', stop: '22%' },
  { color: 'rgba(74,160,102,1)', stop: '35%' },
  { color: 'rgba(134,195,154,1)', stop: '55%' },
  { color: 'rgba(186,224,198,1)', stop: '78%' },
  { color: 'rgba(220,245,228,1)', stop: '100%' },
]

/** Blue radial preset for TechSPR experience card. */
export const TECHSPR_BLUE_GRADIENT: GradientColorStop[] = [
  { color: 'rgba(25,72,150,1)', stop: '12%' },
  { color: 'rgba(37,99,190,1)', stop: '22%' },
  { color: 'rgba(72,130,210,1)', stop: '35%' },
  { color: 'rgba(120,170,230,1)', stop: '55%' },
  { color: 'rgba(168,205,240,1)', stop: '78%' },
  { color: 'rgba(210,230,250,1)', stop: '100%' },
]

/** Purple / pink preset for Dhadkan (from sunset palette). */
export const DHADKAN_PURPLE_GRADIENT: GradientColorStop[] = [
  { color: 'rgba(110,55,130,1)', stop: '12%' },
  { color: 'rgba(160,90,175,1)', stop: '25%' },
  { color: 'rgba(202,179,214,1)', stop: '45%' },
  { color: 'rgba(220,195,228,1)', stop: '65%' },
  { color: 'rgba(238,174,202,1)', stop: '85%' },
  { color: 'rgba(245,225,238,1)', stop: '100%' },
]

/** Indigo → lavender preset for Quddle.ai. */
export const QUDDLE_INDIGO_GRADIENT: GradientColorStop[] = [
  { color: 'rgba(42,32,115,1)', stop: '12%' },
  { color: 'rgba(68,48,155,1)', stop: '28%' },
  { color: 'rgba(105,75,195,1)', stop: '45%' },
  { color: 'rgba(155,130,225,1)', stop: '68%' },
  { color: 'rgba(200,185,240,1)', stop: '85%' },
  { color: 'rgba(235,228,252,1)', stop: '100%' },
]

const EXPERIENCE_CARD_NOISE = {
  noiseIntensity: 0.35,
  noisePatternAlpha: 22,
  noisePatternSize: 120,
  noisePatternRefreshInterval: 4,
} as const

interface GradientBackgroundProps {
  gradientType?: GradientType
  gradientSize?: string
  gradientOrigin?: GradientOrigin
  colors?: GradientColorStop[]
  enableNoise?: boolean
  noisePatternSize?: number
  noisePatternScaleX?: number
  noisePatternScaleY?: number
  noisePatternRefreshInterval?: number
  noisePatternAlpha?: number
  noiseIntensity?: number
  className?: string
  style?: CSSProperties
  children?: ReactNode
  customGradient?: string | null
}

function GradientBackground({
  gradientType = 'radial-gradient',
  gradientSize = '125% 125%',
  gradientOrigin = 'bottom-middle',
  colors = FOOTER_SUNSET_GRADIENT,
  enableNoise = true,
  noisePatternSize = 100,
  noisePatternScaleX = 1,
  noisePatternScaleY = 1,
  noisePatternRefreshInterval = 1,
  noisePatternAlpha = 50,
  noiseIntensity = 1,
  className = '',
  style = {},
  children,
  customGradient = null,
}: GradientBackgroundProps) {
  const generateGradient = () => {
    if (customGradient) return customGradient

    const positions: Record<GradientOrigin, string> = {
      'bottom-middle': '50% 101%',
      'bottom-left': '0% 101%',
      'bottom-right': '100% 101%',
      'top-middle': '50% -1%',
      'top-left': '0% -1%',
      'top-right': '100% -1%',
      'left-middle': '-1% 50%',
      'right-middle': '101% 50%',
      center: '50% 50%',
    }

    const position = positions[gradientOrigin] ?? positions['bottom-middle']
    const colorStops = colors.map(({ color, stop }) => `${color} ${stop}`).join(',')

    if (gradientType === 'radial-gradient') {
      return `radial-gradient(${gradientSize} at ${position},${colorStops})`
    }

    if (gradientType === 'linear-gradient') {
      const angleMap: Record<GradientOrigin, string> = {
        'bottom-middle': '0deg',
        'bottom-left': '45deg',
        'bottom-right': '315deg',
        'top-middle': '180deg',
        'top-left': '135deg',
        'top-right': '225deg',
        'left-middle': '90deg',
        'right-middle': '270deg',
        center: '0deg',
      }
      const angle = angleMap[gradientOrigin] ?? angleMap['bottom-middle']
      return `linear-gradient(${angle},${colorStops})`
    }

    if (gradientType === 'conic-gradient') {
      return `conic-gradient(from 0deg at ${position},${colorStops})`
    }

    return `${gradientType}(${colorStops})`
  }

  const gradientStyle: CSSProperties = {
    background: generateGradient(),
    ...style,
  }

  return (
    <div className={`absolute inset-0 h-full w-full ${className}`} style={gradientStyle}>
      {enableNoise && (
        <Noise
          patternSize={noisePatternSize}
          patternScaleX={noisePatternScaleX}
          patternScaleY={noisePatternScaleY}
          patternRefreshInterval={noisePatternRefreshInterval}
          patternAlpha={noisePatternAlpha}
          intensity={noiseIntensity}
        />
      )}
      {children}
    </div>
  )
}

const EXPERIENCE_GRADIENTS = {
  'railse-green': RAILSE_GREEN_GRADIENT,
  'techspr-blue': TECHSPR_BLUE_GRADIENT,
  'dhadkan-purple': DHADKAN_PURPLE_GRADIENT,
  'quddle-indigo': QUDDLE_INDIGO_GRADIENT,
} as const

export type ExperienceGradientVariant = keyof typeof EXPERIENCE_GRADIENTS

export function ExperienceCardGradient({
  variant,
}: {
  variant: ExperienceGradientVariant
}) {
  return (
    <GradientBackground
      colors={EXPERIENCE_GRADIENTS[variant]}
      gradientOrigin="bottom-middle"
      {...EXPERIENCE_CARD_NOISE}
    />
  )
}

export { GradientBackground, Noise }

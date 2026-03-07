import { motion } from 'framer-motion'
import { cn } from '../../lib/utils'

const blurPresets = {
  softest: 'blur-sm',
  soft: 'blur',
  medium: 'blur-md',
  strong: 'blur-lg',
  stronger: 'blur-xl',
  strongest: 'blur-2xl',
  none: 'blur-none',
}

export function GlowEffect({
  className,
  style,
  colors = ['#00BCD4', '#4DD0E1', '#26C6DA', '#0097A7'],
  mode = 'rotate',
  blur = 'medium',
  transition,
  scale = 1,
  duration = 5,
}) {
  const BASE_TRANSITION = {
    repeat: Infinity,
    duration,
    ease: 'linear',
  }

  const animations = {
    rotate: {
      background: [
        `conic-gradient(from 0deg at 50% 50%, ${colors.join(', ')})`,
        `conic-gradient(from 360deg at 50% 50%, ${colors.join(', ')})`,
      ],
      transition: transition ?? BASE_TRANSITION,
    },
    pulse: {
      background: colors.map(
        (color) => `radial-gradient(circle at 50% 50%, ${color} 0%, transparent 100%)`,
      ),
      scale: [1 * scale, 1.1 * scale, 1 * scale],
      opacity: [0.5, 0.8, 0.5],
      transition: transition ?? { ...BASE_TRANSITION, repeatType: 'mirror' },
    },
    breathe: {
      background: colors.map(
        (color) => `radial-gradient(circle at 50% 50%, ${color} 0%, transparent 100%)`,
      ),
      scale: [1 * scale, 1.05 * scale, 1 * scale],
      transition: transition ?? { ...BASE_TRANSITION, repeatType: 'mirror' },
    },
    static: {
      background: `linear-gradient(to right, ${colors.join(', ')})`,
    },
  }

  const blurClass =
    typeof blur === 'number' ? `blur-[${blur}px]` : (blurPresets[blur] || 'blur-md')

  return (
    <motion.div
      style={{ ...style, '--scale': scale, willChange: 'transform', backfaceVisibility: 'hidden' }}
      animate={animations[mode]}
      className={cn(
        'pointer-events-none absolute inset-0 h-full w-full scale-[var(--scale)] transform-gpu',
        blurClass,
        className,
      )}
    />
  )
}

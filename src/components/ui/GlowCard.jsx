import { cn } from '../../lib/utils'
import { GlowEffect } from './GlowEffect'

const TEAL_COLORS = ['#00BCD4', '#4DD0E1', '#80DEEA', '#26C6DA']

export function GlowCard({
  children,
  className,
  glowColors = TEAL_COLORS,
  mode = 'static',
  blur = 'soft',
  scale = 1.04,
  ...props
}) {
  return (
    <div className={cn('group/glow relative', className)} {...props}>
      <GlowEffect
        colors={glowColors}
        mode={mode}
        blur={blur}
        scale={scale}
        className="opacity-0 transition-opacity duration-500 group-hover/glow:opacity-100"
      />
      {children}
    </div>
  )
}

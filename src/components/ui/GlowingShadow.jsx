import { cn } from '../../lib/utils'

export function GlowingShadow({ children, className }) {
  return (
    <div className={cn('glowing-shadow-wrap group/glow relative', className)}>
      <span className="glowing-shadow-orb" />
      <div className="glowing-shadow-border" />
      <div className="relative z-[1]">{children}</div>
    </div>
  )
}

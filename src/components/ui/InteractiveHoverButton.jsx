import { forwardRef, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { cn } from '../../lib/utils'

const InteractiveHoverButton = forwardRef(function InteractiveHoverButton(
  { text = 'Button', className, href, target, rel, onClick, variant = 'accent', ...props },
  ref,
) {
  const Tag = href ? 'a' : 'button'
  const [hovered, setHovered] = useState(false)

  const variantStyles = {
    accent: {
      border: 'border-[var(--color-accent)]/30',
      defaultColor: 'var(--color-accent)',
      dot: 'bg-[var(--color-accent)]',
      hoverColor: '#ffffff',
    },
    dark: {
      border: 'border-gray-900/30',
      defaultColor: '#111827',
      dot: 'bg-gray-900',
      hoverColor: '#ffffff',
    },
    white: {
      border: 'border-white/30',
      defaultColor: '#ffffff',
      dot: 'bg-white',
      hoverColor: '#111827',
    },
  }

  const v = variantStyles[variant] || variantStyles.accent

  return (
    <Tag
      ref={ref}
      href={href}
      target={target}
      rel={rel}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        'interactive-hover-btn group relative cursor-pointer overflow-hidden rounded-full border bg-white/80 backdrop-blur-sm p-3 px-8 text-center font-bold !no-underline hover:!no-underline transition-all duration-300 inline-flex items-center justify-center',
        v.border,
        className,
      )}
      style={{ color: hovered ? v.hoverColor : v.defaultColor }}
      {...props}
    >
      {/* Static text — visible by default, slides out on hover */}
      <span
        className="relative z-[1] inline-block translate-x-1 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0"
        style={{ color: hovered ? v.hoverColor : v.defaultColor }}
      >
        {text}
      </span>
      {/* Hover text + arrow — slides in on hover */}
      <div
        className="absolute top-0 z-[3] flex h-full w-full translate-x-12 items-center justify-center gap-2 opacity-0 transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100"
        style={{ color: v.hoverColor }}
      >
        <span>{text}</span>
        <ArrowRight className="h-5 w-5" />
      </div>
      {/* Expanding dot — behind text, expands to fill on hover */}
      <div className={cn(
        'absolute z-[2] left-[20%] top-[40%] h-2 w-2 scale-[1] rounded-full opacity-0 transition-all duration-300 group-hover:left-[0%] group-hover:top-[0%] group-hover:h-full group-hover:w-full group-hover:scale-[1.8] group-hover:opacity-100',
        v.dot,
      )} />
    </Tag>
  )
})

export { InteractiveHoverButton }

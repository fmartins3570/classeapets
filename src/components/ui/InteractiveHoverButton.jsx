import { forwardRef } from 'react'
import { ArrowRight } from 'lucide-react'
import { cn } from '../../lib/utils'

const InteractiveHoverButton = forwardRef(function InteractiveHoverButton(
  { text = 'Button', className, href, target, rel, onClick, variant = 'accent', ...props },
  ref,
) {
  const Tag = href ? 'a' : 'button'

  const variantStyles = {
    accent: {
      border: 'border-[var(--color-accent)]/30',
      text: 'text-[var(--color-accent)]',
      hoverText: 'text-white',
      dot: 'bg-[var(--color-accent)]',
    },
    dark: {
      border: 'border-gray-900/30',
      text: 'text-gray-900',
      hoverText: 'text-white',
      dot: 'bg-gray-900',
    },
    white: {
      border: 'border-white/30',
      text: 'text-white',
      hoverText: 'text-gray-900',
      dot: 'bg-white',
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
      className={cn(
        'group relative cursor-pointer overflow-hidden rounded-full border bg-white/80 backdrop-blur-sm p-3 px-8 text-center font-bold !no-underline hover:!no-underline transition-all duration-300 inline-flex items-center justify-center',
        v.border,
        v.text,
        className,
      )}
      {...props}
    >
      {/* Static text — visible by default, slides out on hover */}
      <span className="relative z-[1] inline-block translate-x-1 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
        {text}
      </span>
      {/* Hover text + arrow — slides in on hover */}
      <div className={cn(
        'absolute top-0 z-[3] flex h-full w-full translate-x-12 items-center justify-center gap-2 opacity-0 transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100',
        v.hoverText,
      )}>
        <span>{text}</span>
        <ArrowRight className="h-5 w-5" />
      </div>
      {/* Expanding dot — behind text, expands to fill on hover */}
      <div className={cn(
        'absolute z-0 left-[20%] top-[40%] h-2 w-2 scale-[1] rounded-full opacity-0 transition-all duration-300 group-hover:left-[0%] group-hover:top-[0%] group-hover:h-full group-hover:w-full group-hover:scale-[1.8] group-hover:opacity-100',
        v.dot,
      )} />
    </Tag>
  )
})

export { InteractiveHoverButton }

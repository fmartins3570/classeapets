import { cn } from '../../lib/utils'
import { useEffect, useRef, useState } from 'react'

export function BackgroundGradientAnimation({
  gradientBackgroundStart = 'rgb(5, 20, 25)',
  gradientBackgroundEnd = 'rgb(8, 40, 48)',
  firstColor = '27, 168, 184',
  secondColor = '46, 222, 240',
  thirdColor = '0, 151, 167',
  fourthColor = '77, 208, 225',
  fifthColor = '128, 222, 234',
  pointerColor = '46, 222, 240',
  size = '80%',
  blendingValue = 'hard-light',
  children,
  className,
  interactive = true,
  containerClassName,
}) {
  const interactiveRef = useRef(null)
  const curRef = useRef({ x: 0, y: 0 })
  const tgRef = useRef({ x: 0, y: 0 })
  const animRef = useRef(null)

  useEffect(() => {
    document.body.style.setProperty('--gradient-background-start', gradientBackgroundStart)
    document.body.style.setProperty('--gradient-background-end', gradientBackgroundEnd)
    document.body.style.setProperty('--first-color', firstColor)
    document.body.style.setProperty('--second-color', secondColor)
    document.body.style.setProperty('--third-color', thirdColor)
    document.body.style.setProperty('--fourth-color', fourthColor)
    document.body.style.setProperty('--fifth-color', fifthColor)
    document.body.style.setProperty('--pointer-color', pointerColor)
    document.body.style.setProperty('--size', size)
    document.body.style.setProperty('--blending-value', blendingValue)
  }, [])

  useEffect(() => {
    if (!interactive) return

    function animate() {
      if (!interactiveRef.current) return
      curRef.current.x += (tgRef.current.x - curRef.current.x) / 20
      curRef.current.y += (tgRef.current.y - curRef.current.y) / 20
      interactiveRef.current.style.transform = `translate(${Math.round(curRef.current.x)}px, ${Math.round(curRef.current.y)}px)`
      animRef.current = requestAnimationFrame(animate)
    }

    animRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animRef.current)
  }, [interactive])

  const handleMouseMove = (event) => {
    if (interactiveRef.current) {
      const rect = interactiveRef.current.getBoundingClientRect()
      tgRef.current.x = event.clientX - rect.left
      tgRef.current.y = event.clientY - rect.top
    }
  }

  const [isSafari, setIsSafari] = useState(false)
  useEffect(() => {
    setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent))
  }, [])

  return (
    <div
      className={cn(
        'relative h-full w-full overflow-hidden bg-[linear-gradient(40deg,var(--gradient-background-start),var(--gradient-background-end))]',
        containerClassName,
      )}
    >
      <svg className="hidden">
        <defs>
          <filter id="blurMe">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      <div className={cn('relative z-10', className)}>{children}</div>
      <div
        className={cn(
          'gradients-container absolute inset-0 h-full w-full blur-lg',
          isSafari ? 'blur-2xl' : '[filter:url(#blurMe)_blur(40px)]',
        )}
      >
        <div
          className={cn(
            'absolute [background:radial-gradient(circle_at_center,_rgba(var(--first-color),1)_0,_rgba(var(--first-color),0)_50%)_no-repeat]',
            '[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]',
            '[transform-origin:center_center]',
            'animate-[moveVertical_30s_ease_infinite]',
            'opacity-100',
          )}
        />
        <div
          className={cn(
            'absolute [background:radial-gradient(circle_at_center,_rgba(var(--second-color),0.8)_0,_rgba(var(--second-color),0)_50%)_no-repeat]',
            '[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]',
            '[transform-origin:calc(50%-400px)]',
            'animate-[moveInCircle_20s_reverse_infinite]',
            'opacity-100',
          )}
        />
        <div
          className={cn(
            'absolute [background:radial-gradient(circle_at_center,_rgba(var(--third-color),0.8)_0,_rgba(var(--third-color),0)_50%)_no-repeat]',
            '[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]',
            '[transform-origin:calc(50%+400px)]',
            'animate-[moveInCircle_40s_linear_infinite]',
            'opacity-100',
          )}
        />
        <div
          className={cn(
            'absolute [background:radial-gradient(circle_at_center,_rgba(var(--fourth-color),0.8)_0,_rgba(var(--fourth-color),0)_50%)_no-repeat]',
            '[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]',
            '[transform-origin:calc(50%-200px)]',
            'animate-[moveHorizontal_40s_ease_infinite]',
            'opacity-70',
          )}
        />
        <div
          className={cn(
            'absolute [background:radial-gradient(circle_at_center,_rgba(var(--fifth-color),0.8)_0,_rgba(var(--fifth-color),0)_50%)_no-repeat]',
            '[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]',
            '[transform-origin:calc(50%-800px)_calc(50%+800px)]',
            'animate-[moveInCircle_20s_ease_infinite]',
            'opacity-100',
          )}
        />
        {interactive && (
          <div
            ref={interactiveRef}
            onMouseMove={handleMouseMove}
            className={cn(
              'absolute [background:radial-gradient(circle_at_center,_rgba(var(--pointer-color),0.8)_0,_rgba(var(--pointer-color),0)_50%)_no-repeat]',
              '[mix-blend-mode:var(--blending-value)] w-full h-full -top-1/2 -left-1/2',
              'opacity-70',
            )}
          />
        )}
      </div>
    </div>
  )
}

import { forwardRef } from 'react'
import { motion } from 'framer-motion'
import { cn } from '../../lib/utils'

const itemVariants = {
  initial: { rotateX: 0, opacity: 1 },
  hover: { rotateX: -90, opacity: 0 },
}

const backVariants = {
  initial: { rotateX: 90, opacity: 0 },
  hover: { rotateX: 0, opacity: 1 },
}

const glowVariants = {
  initial: { opacity: 0, scale: 0.8 },
  hover: {
    opacity: 1,
    scale: 2,
    transition: {
      opacity: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
      scale: { duration: 0.5, type: 'spring', stiffness: 300, damping: 25 },
    },
  },
}

const navGlowVariants = {
  initial: { opacity: 0 },
  hover: {
    opacity: 1,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
  },
}

const sharedTransition = {
  type: 'spring',
  stiffness: 100,
  damping: 20,
  duration: 0.5,
}

export const GlowMenu = forwardRef(function GlowMenu(
  { className, items, activeItem, onItemClick, ...props },
  ref,
) {
  return (
    <motion.nav
      ref={ref}
      className={cn(
        'rounded-2xl bg-gradient-to-b from-white/80 to-white/40 backdrop-blur-lg border border-gray-200/40 shadow-lg relative overflow-hidden p-1.5',
        className,
      )}
      initial="initial"
      whileHover="hover"
      {...props}
    >
      <motion.div
        className="absolute -inset-2 bg-[radial-gradient(circle,transparent,rgba(0,188,212,0.12)_30%,rgba(0,188,212,0.06)_60%,transparent_90%)] rounded-3xl z-0 pointer-events-none"
        variants={navGlowVariants}
      />
      <ul className="flex items-center gap-0.5 relative z-10">
        {items.map((item) => {
          const Icon = item.icon
          const isActive = item.label === activeItem

          return (
            <motion.li key={item.label} className="relative">
              <a
                href={item.href}
                onClick={() => onItemClick?.(item.label)}
                className="block w-full !no-underline hover:!no-underline"
              >
                <motion.div
                  className="block rounded-xl overflow-visible group relative"
                  style={{ perspective: '600px' }}
                  whileHover="hover"
                  initial="initial"
                >
                  <motion.div
                    className="absolute inset-0 z-0 pointer-events-none"
                    variants={glowVariants}
                    animate={isActive ? 'hover' : 'initial'}
                    style={{
                      background: item.gradient,
                      opacity: isActive ? 1 : 0,
                      borderRadius: '16px',
                    }}
                  />
                  <motion.div
                    className={cn(
                      'flex items-center gap-1.5 px-3 py-1.5 relative z-10 bg-transparent transition-colors rounded-xl text-[0.8rem] font-semibold',
                      isActive ? 'text-gray-900' : 'text-gray-500 group-hover:text-gray-900',
                    )}
                    variants={itemVariants}
                    transition={sharedTransition}
                    style={{
                      transformStyle: 'preserve-3d',
                      transformOrigin: 'center bottom',
                    }}
                  >
                    {Icon && (
                      <span className={cn('transition-colors duration-300', isActive ? item.iconColor : 'text-gray-500', `group-hover:${item.iconColor}`)}>
                        <Icon className="h-4 w-4" />
                      </span>
                    )}
                    <span>{item.label}</span>
                  </motion.div>
                  <motion.div
                    className={cn(
                      'flex items-center gap-1.5 px-3 py-1.5 absolute inset-0 z-10 bg-transparent transition-colors rounded-xl text-[0.8rem] font-semibold',
                      isActive ? 'text-gray-900' : 'text-gray-500 group-hover:text-gray-900',
                    )}
                    variants={backVariants}
                    transition={sharedTransition}
                    style={{
                      transformStyle: 'preserve-3d',
                      transformOrigin: 'center top',
                      rotateX: 90,
                    }}
                  >
                    {Icon && (
                      <span className={cn('transition-colors duration-300', isActive ? item.iconColor : 'text-gray-500', `group-hover:${item.iconColor}`)}>
                        <Icon className="h-4 w-4" />
                      </span>
                    )}
                    <span>{item.label}</span>
                  </motion.div>
                </motion.div>
              </a>
            </motion.li>
          )
        })}
      </ul>
    </motion.nav>
  )
})

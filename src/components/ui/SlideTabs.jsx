import React, { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export function SlideTabs({ items, onSelect }) {
  const [position, setPosition] = useState({ left: 0, width: 0, opacity: 0 })
  const [selected, setSelected] = useState(null)
  const tabsRef = useRef([])

  useEffect(() => {
    if (selected !== null && tabsRef.current[selected]) {
      const tab = tabsRef.current[selected]
      const { width } = tab.getBoundingClientRect()
      setPosition({ left: tab.offsetLeft, width, opacity: 1 })
    }
  }, [selected])

  return (
    <ul
      onMouseLeave={() => {
        if (selected !== null && tabsRef.current[selected]) {
          const tab = tabsRef.current[selected]
          const { width } = tab.getBoundingClientRect()
          setPosition({ left: tab.offsetLeft, width, opacity: 1 })
        } else {
          setPosition((p) => ({ ...p, opacity: 0 }))
        }
      }}
      className="relative mx-auto flex w-fit rounded-full border border-[#2edef0]/30 bg-[#0a2a2f] p-1"
    >
      {items.map((item, i) => (
        <Tab
          key={item.label}
          ref={(el) => (tabsRef.current[i] = el)}
          setPosition={setPosition}
          onClick={() => {
            setSelected(i)
            onSelect?.(item)
          }}
          href={item.href}
        >
          {item.label}
        </Tab>
      ))}
      <Cursor position={position} />
    </ul>
  )
}

const Tab = React.forwardRef(function Tab({ children, setPosition, onClick, href }, ref) {
  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return
        const { width } = ref.current.getBoundingClientRect()
        setPosition({ left: ref.current.offsetLeft, width, opacity: 1 })
      }}
      className="relative z-10 block"
    >
      <a
        href={href}
        onClick={onClick}
        className="block cursor-pointer px-3 py-2 text-[0.78rem] font-bold tracking-wide !no-underline transition-colors duration-200 hover:!no-underline sm:px-5 sm:py-2.5 sm:text-[0.85rem]"
        style={{ color: '#ffffff' }}
      >
        {children}
      </a>
    </li>
  )
})

function Cursor({ position }) {
  return (
    <motion.li
      animate={position}
      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
      className="absolute z-0 h-full rounded-full"
      style={{ background: 'linear-gradient(135deg, #1BA8B8, #2edef0)' }}
    />
  )
}

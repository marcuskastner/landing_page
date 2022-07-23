import tw from "twin.macro"
import React from "react"
import { motion } from "framer-motion"
export const SideBarToggle = ({ isOpen, setIsOpen }) => {
  return (
    <button tw="px-4 py-4" onClick={setIsOpen}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#707070"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Middle Line */}
        <motion.line
          variants={{ open: { opacity: 0 }, closed: { opacity: 1 } }}
          animate={isOpen ? "open" : "closed"}
          x1={3}
          y1={12}
          x2={21}
          y2={12}
          transition={{ duration: 0.1 }}
        />
        {/* Top Line */}
        <motion.line
          variants={{
            open: { x2: 18, y2: 6, x1: 6, y1: 18 },
            closed: { x1: 3, y1: 6, x2: 21, y2: 6 },
          }}
          animate={isOpen ? "open" : "closed"}
        />
        {/* Bottom Line */}
        <motion.line
          variants={{
            open: { x1: 6, y1: 6, x2: 18, y2: 18 },
            closed: { x1: 3, y1: 18, x2: 21, y2: 18 },
          }}
          animate={isOpen ? "open" : "closed"}
        />
      </svg>
    </button>
  )
}

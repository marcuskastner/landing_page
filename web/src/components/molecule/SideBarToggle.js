import tw from "twin.macro"
import React from "react"
import { motion } from "framer-motion"
export const SideBarToggle = ({ toggle, isOpen }) => {
  return (
    <button tw="px-4 py-4" onClick={toggle}>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#f1f1f1"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        animate={isOpen ? "open" : "closed"}
        variants={{ open: { x: -200 }, closed: {} }}
      >
        {/* Middle Line */}
        <motion.line
          variants={{ open: { opacity: 0 }, closed: { opacity: 1 } }}
          x1={3}
          y1={12}
          x2={21}
          y2={12}
          transition={{ duration: 0.1 }}
        ></motion.line>
        {/* Top Line */}
        <motion.line
          variants={{
            open: { x2: 18, y2: 6, x1: 6, y1: 18 },
            closed: { x1: 3, y1: 6, x2: 21, y2: 6 },
          }}
        ></motion.line>
        {/* Bottom Line */}
        <motion.line
          variants={{
            open: { x1: 6, y1: 6, x2: 18, y2: 18 },
            closed: { x1: 3, y1: 18, x2: 21, y2: 18 },
          }}
        ></motion.line>
      </motion.svg>
    </button>
  )
}

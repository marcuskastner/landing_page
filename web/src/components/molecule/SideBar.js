import React from "react"
import { motion } from "framer-motion"

function SideBar({ isOpen }) {
  const sidebarVariants = {
    animate: {
      width: 420,

      transition: { duration: 1.5 },
    },

    initial: { width: 0, transition: { duration: 1.5 } },
  }

  return (
    <motion.div
      className="sidebar"
      animate={isOpen ? "animate" : "initial"}
      variants={sidebarVariants}
    >
      <div className="front">Front Text</div>
    </motion.div>
  )
}

export default SideBar

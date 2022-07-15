import React from "react"
import { motion } from "framer-motion"

function FadeIn({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  )
}

export default FadeIn

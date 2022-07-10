import React, { useState } from "react"
import tw from "twin.macro"
import Card from "../molecule/Card"
import { card_data } from "../atom/card_data"
import { motion, AnimatePresence } from "framer-motion"
import { wrap } from "popmotion"

function Work() {
  const [[page, direction], setPage] = useState([0, 0])

  const paginate = newDirection => {
    setPage([wrap(0, card_data.length, page + newDirection), newDirection])
  }

  const variants = {
    enter: direction => {
      return {
        x: direction < 0 ? "50%" : "-50%",
        opacity: 0,
        scale: 0.8,
      }
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: direction => {
      return {
        zIndex: 0,
        x: direction > 0 ? "50%" : "-50%",
        opacity: 0,
        scale: 0.8,
      }
    },
  }

  return (
    <Wrapper>
      <div tw="relative">
        <AnimatePresence initial={false} custom={direction} exitBeforeEnter>
          {card_data.map(
            (data, index) =>
              page === index && (
                <motion.div
                  variants={variants}
                  custom={direction}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  key={index}
                  transition={{ duration: 0.8 }}
                >
                  <Card data={data} />
                </motion.div>
              )
          )}
        </AnimatePresence>
        <div
          tw="absolute left-[-50%] top[50%]"
          onClick={() => {
            paginate(-1)
          }}
        >
          Left
        </div>
        <div
          tw="absolute right-[-50%] top[50%]"
          onClick={() => {
            paginate(1)
          }}
        >
          Right
        </div>
      </div>
    </Wrapper>
  )
}

export default Work

const Wrapper = tw.div`flex justify-center mx-14 mb-20 gap-20`

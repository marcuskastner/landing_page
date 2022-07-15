import React, { useState } from "react"
import tw from "twin.macro"
import Card from "../molecule/Card"
import { card_data } from "../atom/card_data"
import { motion, AnimatePresence } from "framer-motion"
import { wrap } from "popmotion"
import FadeIn from "./FadeIn"

function Work() {
  const [page, setPage] = useState(0)
  const variants = {
    enter: {
      z: 0,
      scale: 0.1,
      opacity: 0,
    },
    center: {
      z: 1,
      scale: 1,
      opacity: 1,
    },
    exit: {
      z: 0,
      scale: 1.5,
      opacity: 0,
    },
  }

  return (
    <FadeIn>
      <Wrapper>
        <PaginationContainer>
          <div tw="relative">
            <AnimatePresence initial={false} exitBeforeEnter>
              {card_data.map(
                (data, index) =>
                  page === index && (
                    <motion.div
                      variants={variants}
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
          </div>
        </PaginationContainer>
        <DotContainer>
          {card_data.map((_, index) => (
            <motion.div
              tw="w-4 h-4 border-2 border-white rounded-full"
              whileTap={{ scale: 0.8 }}
              onClick={() => setPage(index)}
              style={
                index === page
                  ? { backgroundColor: "white" }
                  : { backgroundColor: "transparent" }
              }
            />
          ))}
        </DotContainer>
      </Wrapper>
    </FadeIn>
  )
}

export default Work

const Wrapper = tw.div`h-[800px] relative`
const PaginationContainer = tw.div`absolute bottom-0 z-10 left-1/2 -translate-x-1/2 -translate-y-1/2`
const DotContainer = tw.div`absolute top-1/2  right-48 flex flex-col gap-4 border-2 rounded p-4`

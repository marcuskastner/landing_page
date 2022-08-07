import React, { useState } from "react"
import tw from "twin.macro"
import "../styles/module.card.css"
import { motion } from "framer-motion"
import { icons } from "../atom/logos"

function Card({ data }) {
  const [showFront, setShowFront] = useState(true)

  const cardVariants = {
    animate: {
      rotateY: 180,
      transition: { duration: 1.5 },
    },
    initial: { rotateY: 0, transition: { duration: 1.5 } },
  }

  return (
    <motion.div
      className="card_container"
      variants={cardVariants}
      animate={showFront ? "initial" : "animate"}
    >
      <FrontContainer
        className="card_background"
        style={{
          backfaceVisibility: "hidden",
        }}
        tw="flex flex-col items-center justify-around  bg-white h-[400px]"
      >
        <FrontTitle
          style={{
            transform: "translateZ(80px)",
            backfaceVisibility: "hidden",
            textShadow: "0 0 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          {data.title}
        </FrontTitle>
        <div tw="h-[50%]">
          <img src={data.background} tw="max-w-full max-h-full" />
        </div>
        <Button
          tw=" border-[var(--color-primary)] ease-in duration-300 hover:(bg-[var(--color-primary)] text-white ) "
          style={{
            transform: "translateZ(80px) ",
            backfaceVisibility: "hidden",
            textShadow: "0 0 6px rgba(0, 0, 0, 0.1)",
          }}
          onClick={() => setShowFront(!showFront)}
        >
          Details
        </Button>
      </FrontContainer>
      <BackContainer
        style={{ transform: " rotateY(180deg) ", backfaceVisibility: "hidden" }}
      >
        <BackContent
          style={{
            transform: "translateZ(80px)",
            backfaceVisibility: "hidden",
          }}
        >
          <BackTitle>{data.title}</BackTitle>

          <LogosContainer>
            {data.tech.map(cont => (
              <Logos src={icons[cont]} />
            ))}
          </LogosContainer>
          <Description>{data.description}</Description>
          <Button
            tw="border-[var(--color-primary)] ease-in duration-300 hover:(bg-[var(--color-primary)] text-white )"
            onClick={() => setShowFront(!showFront)}
          >
            &larr;
          </Button>
        </BackContent>
      </BackContainer>
    </motion.div>
  )
}

export default Card

const FrontTitle = tw.div`uppercase text-2xl font-semibold`

const Button = tw.div`px-8 py-4 border-2 rounded uppercase border-black`
const FrontContainer = tw.div` transform-style[preserve-3d]`
const BackContainer = tw.div`  transform-style[preserve-3d] rounded absolute top-0 left-0 border-2 bg-white `
const FrontContent = tw.div`relative`
const BackContent = tw.div`flex flex-col justify-around gap-6 items-center text-[var(--color-primary)] p-4`
const BackTitle = tw.div`align-self[flex-start] font-semibold text-xl`
const LogosContainer = tw.div`flex justify-center `
const Logos = tw.img`h-8 w-8 mx-8`
const Description = tw.div`overflow-scroll h-[200px]`

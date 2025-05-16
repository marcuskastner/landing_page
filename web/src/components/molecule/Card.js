import React, { useState } from "react"
import tw from "twin.macro"
import "../styles/module.card.css"
import { motion } from "framer-motion"
import { icons } from "../atom/logos"
import Github_Icon from "../../images/icons/github.png"
import Link_Icon from "../../images/icons/link.png"

function Card({ data }) {
  const [showFront, setShowFront] = useState(true)

  const [imageLoading, setImageLoading] = useState(true)
  const [pulsing, setPulsing] = useState(true)

  const imageLoaded = () => {
    setImageLoading(false)
    setTimeout(() => setPulsing(false), 600)
  }

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
        <div tw="h-[55%] w-[90%] flex flex-col items-center">
          <FrontTitle
            style={{
              transform: "translateZ(80px)",
              backfaceVisibility: "hidden",
              textShadow: "0 0 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            {data.title}
          </FrontTitle>
          {data.link ? (
            <a href={data.link}>
              <img
                src={data.background}
                tw="max-h-full max-w-full border-2 border-black"
              />
            </a>
          ) : (
            <img
              src={data.background}
              tw="max-h-full max-w-full border-2 border-black"
            />
          )}
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
        tw="h-[400px]"
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
            {data.tech && data.tech.map(cont => <Logos src={icons[cont]} />)}
          </LogosContainer>
          <Description className="description">{data.description}</Description>
          <LinksContainer>
            {data.github && (
              <a href={data.github} target="_blank">
                <img src={Github_Icon} tw="w-8 h-8" />
              </a>
            )}
            {data.link && (
              <a href={data.link} target="_blank">
                <img src={Link_Icon} tw="w-8 h-8" />
              </a>
            )}
            <LinkContainer>
              {data.links &&
                data.links.map(link => (
                  <a href={link[1]} target="_blank">
                    {link[0]}
                  </a>
                ))}
            </LinkContainer>
          </LinksContainer>
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
const BackContent = tw.div`flex flex-col justify-around gap-6 items-center text-[var(--color-primary)] p-4`
const BackTitle = tw.div`align-self[flex-start] font-semibold text-xl`
const LogosContainer = tw.div`flex justify-center `
const Logos = tw.img`h-8 w-8 mx-8`
const Description = tw.div` h-[125px] overflow-y-scroll`
const LinksContainer = tw.div`flex justify-between gap-8`
const LinkContainer = tw.div`flex flex-wrap gap-4`

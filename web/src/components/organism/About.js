import React from "react"
import tw from "twin.macro"
import { SectionTitle, SectionText } from "../styles/themes"
import Earth from "../../images/about/planet-earth.svg"
import Planet from "../../images/about/planet.svg"
import Rocket from "../../images/about/shuttle.svg"
import FadeIn from "./FadeIn"
import { motion, useTransform, useViewportScroll } from "framer-motion"

function About() {
  const ymin = 400
  const ymax = 800
  const { scrollY } = useViewportScroll()
  const y2 = useTransform(scrollY, [ymin, ymax], [0, 30])
  const y3 = useTransform(scrollY, [ymin, ymax], [0, -70])
  const y4 = useTransform(scrollY, [ymin, ymax], [0, -300])
  const scale = useTransform(scrollY, [ymin, ymax], [1, 0.4])

  return (
    <FadeIn>
      <Wrapper>
        <PlanetContainer>
          <img src={Earth} tw="w-20 top-0 left-0 absolute" />
          <motion.img
            src={Planet}
            tw="w-40 bottom-20 right-20 absolute"
            style={{ x: y2, y: y2, rotateZ: -90 }}
          />
          <motion.img
            src={Rocket}
            tw="w-14 bottom-0 left-40 absolute "
            style={{ x: y3, y: y4, scale: scale }}
          />
        </PlanetContainer>
        <TextContainer>
          <SectionTitle tw="max-w-sm mb-10 text-white">
            I enjoy learning and creating a safe environment
          </SectionTitle>
          <SectionText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            rem voluptate nisi dolores minima ad sunt maxime maiores non porro
            necessitatibus doloribus, minus ullam quam placeat tenetur, possimus
            aliquam unde?
          </SectionText>
        </TextContainer>
      </Wrapper>
    </FadeIn>
  )
}

export default About

const Wrapper = tw.div`flex justify-center mx-14 mb-20 gap-20`
const TextContainer = tw.div`flex flex-col flex-1`
const PlanetContainer = tw.div`w-1/2 relative`

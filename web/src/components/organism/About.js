import React from "react"
import tw from "twin.macro"
import { SectionTitle, SectionText } from "../styles/themes"
import Earth from "../../images/about/planet-earth.svg"
import Planet from "../../images/about/planet.svg"
import Rocket from "../../images/about/shuttle.svg"
import FadeIn from "./FadeIn"
import { motion, useTransform, useViewportScroll } from "framer-motion"

function About() {
  const ymin = 600
  const ymax = 1200
  const { scrollY } = useViewportScroll()
  const y2 = useTransform(scrollY, [ymin, ymax], [0, 30])
  const y3 = useTransform(scrollY, [ymin, ymax], [0, -70])
  const y4 = useTransform(scrollY, [ymin, ymax], [0, -500])
  const scale = useTransform(scrollY, [ymin, ymax], [1, 0.2])

  return (
    <FadeIn>
      <Wrapper id="about">
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
          <SectionTitle tw="mb-10">About Me</SectionTitle>
          <SectionText tw=" mb-10 lg:max-w-sm">
            I will bring curiosity, drive, and initiative to your team.
          </SectionText>
          <SectionText tw="mb-10">
            As a full stack developer with over 3 years of experience, I tackle
            technical challenges and collaborate seamlessly with
            cross-functional teams. My background as a science teacher has honed
            my communication skills, perseverance, and dedication.
          </SectionText>
          <SectionText tw=" mb-8">
            Technical Skills: HTML, CSS, Javascript, Typescript, PHP &#38; React
          </SectionText>
          <SectionText>
            Other Skills: RESTful API design, MySQL, Docker, Git, CI/CD, Testing
          </SectionText>
        </TextContainer>
      </Wrapper>
    </FadeIn>
  )
}

export default About

const Wrapper = tw.div`flex justify-between mx-14 mb-48 gap-20`
const TextContainer = tw.div`flex flex-col flex-1 `
const PlanetContainer = tw.div`hidden lg:(w-1/2 relative inline-block) `

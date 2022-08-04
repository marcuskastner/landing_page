import React from "react"
import tw from "twin.macro"
import Galaxy from "../../images/galaxy.svg"
import "../styles/module.hero.css"
import { motion, useTransform, useViewportScroll } from "framer-motion"
import FadeIn from "./FadeIn"
import { SectionText } from "../styles/themes"

function Hero() {
  const { scrollY } = useViewportScroll()
  const y1 = useTransform(scrollY, [0, 550], [0, 30])

  return (
    <FadeIn>
      <Wrapper>
        <HeroText>
          <div tw="text-white text-2xl mb-2">Hi, I'm Marcus</div>
          <div tw="text-7xl font-bold mb-10 text-white ">
            science teacher turned front-end developer
          </div>
          <SectionText tw="mb-10">
            I bring the same attention and detail that I dedicated to my
            students to my projects. I am dilligent, curious and detailed by
            nature and will bring an inquisitive, fun and can do attitude to
            your team.
          </SectionText>
          <a href="mailto:marcushkastner@gmail.com">
            <Button>Get in touch</Button>
          </a>
        </HeroText>
        <GalaxyContainer>
          <motion.img src={Galaxy} className="image" style={{ rotateZ: y1 }} />
        </GalaxyContainer>
      </Wrapper>
    </FadeIn>
  )
}

export default Hero

const Wrapper = tw.div`flex justify-between  mb-48 mx-14 gap-20`

const HeroText = tw.div`flex flex-col flex-1`

const Button = tw.button` w-52 h-16 font-bold bg-[var(--color-primary)] text-white rounded-full`

const GalaxyContainer = tw.div`hidden lg:(inline-block)`

import React from "react"
import tw from "twin.macro"
import Galaxy from "../../images/galaxy.svg"
import "../styles/module.hero.css"
import { motion, useTransform, useViewportScroll } from "framer-motion"
import FadeIn from "./FadeIn"

function Hero() {
  const { scrollY } = useViewportScroll()
  const y1 = useTransform(scrollY, [0, 550], [0, 30])

  return (
    <FadeIn>
      <Wrapper>
        <HeroText>
          <div tw="text-white text-2xl mb-2">Hi, I'm Marcus</div>
          <div tw="text-7xl font-bold mb-10 text-white ">
            science teacher turned web developer
          </div>
          <Button>Get in touch</Button>
        </HeroText>
        <GalaxyContainer>
          <motion.img src={Galaxy} className="image" style={{ rotateZ: y1 }} />
        </GalaxyContainer>
      </Wrapper>
    </FadeIn>
  )
}

export default Hero

const Wrapper = tw.div`flex justify-between  mb-20 mx-14 `

const HeroText = tw.div`flex flex-col flex-1`

const Button = tw.button` w-52 h-16 font-bold bg-[var(--color-primary)] text-white rounded-full`

const GalaxyContainer = tw.div`hidden lg:(inline-block)`

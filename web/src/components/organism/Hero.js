import React from "react"
import tw from "twin.macro"
import { motion, useTransform, useViewportScroll } from "framer-motion"
import FadeIn from "./FadeIn"
import { SectionText } from "../styles/themes"
import { StaticImage } from "gatsby-plugin-image"
import { AnchorLink } from "gatsby-plugin-anchor-links"

function Hero() {
  const { scrollY } = useViewportScroll()
  const y1 = useTransform(scrollY, [0, 550], [0, 30])

  return (
    <FadeIn>
      <Wrapper>
        <HeroText>
          <div tw="text-white text-2xl mb-2">Hi, I'm Marcus</div>
          <div tw="text-5xl md:text-7xl font-bold mb-10 text-white max-w-[400px]">
            I bring ideas to life
          </div>
          <SectionText tw="mb-10">
            Full Stack Engineer with a passion for design and creativity. I love
            creating interesting and unique experiences through software and
            work with designers.
          </SectionText>
          <AnchorLink to="/#contact">
            <Button>Get in touch</Button>
          </AnchorLink>
        </HeroText>
        <GalaxyContainer>
          <motion.div style={{ rotateZ: y1 }}>
            <StaticImage
              src="../../images/hero/galaxy.svg"
              placeholder="blurred"
              layout="fixed"
              width={500}
            />
          </motion.div>
        </GalaxyContainer>
      </Wrapper>
    </FadeIn>
  )
}

export default Hero

const Wrapper = tw.div`flex justify-between  mb-48 mx-14 gap-20`

const HeroText = tw.div`flex flex-col flex-1`

const Button = tw.button` w-52 h-16 font-bold text-[#241A60] bg-white rounded-full`

const GalaxyContainer = tw.div`hidden lg:(inline-block)`

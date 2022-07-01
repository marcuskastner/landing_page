import React from "react"
import tw from "twin.macro"
import avatar from "../../images/avatar2.png"
import { motion } from "framer-motion"
import { icons } from "../molecule/logos"

function Hero() {
  const incrementor = (Math.PI * 2) / icons.length
  const rotator = {
    animate: {
      rotate: 360,
    },
  }

  const itemVariant = {
    animate: i => ({
      x: Math.cos(incrementor * i) * 200 - 20,
      y: Math.sin(incrementor * i) * 200 - 20,

      rotate: -360,
      transition: {
        rotate: { repeat: Infinity, ease: "linear", duration: 25 },
      },
    }),
  }
  return (
    <Wrapper>
      <GreyBackground>
        <LogoContainer>
          <Avatar src={avatar} />
          <motion.div
            className="rotator"
            variants={rotator}
            animate={"animate"}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 25,
            }}
          >
            {icons.map((icon, i) => (
              <motion.img
                src={icon}
                className="item"
                variants={itemVariant}
                custom={i}
              />
            ))}
          </motion.div>
        </LogoContainer>
      </GreyBackground>
    </Wrapper>
  )
}

export default Hero

const Wrapper = tw.div`h-[600px] `
const GreyBackground = tw.div`h-1/2 bg-[var(--grey-background)] relative`

const Avatar = tw.img`w-[352px] h-[352px] rounded-full bg-white border-8 border-solid border-white`

const LogoContainer = tw.div`absolute left-1/2 -translate-x-1/2 top-1/4`

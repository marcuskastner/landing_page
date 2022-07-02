import React from "react"
import tw from "twin.macro"
import avatar from "../../images/avatar2.png"
import { icons } from "../molecule/logos"
import "../styles/module.hero.css"

function Hero() {
  return (
    <Wrapper>
      <HeroText>
        <div tw="text-[var(--color-secondary)] text-2xl mb-2">
          Hi, I'm Marcus
        </div>
        <div tw="text-7xl font-bold mb-10">
          chemistry teacher turned web developer
        </div>
        <Button>Get in touch</Button>
      </HeroText>
      <AvatarContainer>
        <img className="avatar" src={avatar} />
        <OrbitContainer>
          <div className="orbit orbit0">
            <img src={icons[0]} className="electron electron0" />
          </div>
        </OrbitContainer>
        <OrbitContainer>
          <div className="orbit orbit1">
            <img src={icons[1]} className="electron electron1" />
          </div>
        </OrbitContainer>
        <OrbitContainer>
          <div className="orbit orbit2">
            <img src={icons[2]} className="electron electron2" />
          </div>
        </OrbitContainer>
      </AvatarContainer>
    </Wrapper>
  )
}

export default Hero

const Wrapper = tw.div`flex justify-between mx-14 mb-20`

const HeroText = tw.div`flex flex-col flex-1`

const Button = tw.button` w-52 h-16 font-bold bg-[var(--color-primary)] text-white rounded-full`

const AvatarContainer = tw.div`w-[400px] h-[400px] relative transform-style[preserve-3d]`

const OrbitContainer = tw.div`absolute top-0 left-0`

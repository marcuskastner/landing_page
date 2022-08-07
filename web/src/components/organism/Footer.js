import React from "react"
import tw from "twin.macro"
import LinkedIn from "../../images/footer/linkedin.png"
import Github from "../../images/footer/github.png"

function Footer() {
  return (
    <Wrapper>
      <div tw="flex justify-between items-center px-8">
        <a href="mailto:marcushkastner@gmail.com" tw="text-white">
          marcushkastner@gmail
        </a>
        <div tw="flex gap-4">
          <a href="https://www.linkedin.com/in/marcus-kastner/">
            <img src={LinkedIn} />
          </a>
          <a href="https://github.com/marcuskastner">
            <img src={Github} />
          </a>
        </div>
      </div>
    </Wrapper>
  )
}

export default Footer

const Wrapper = tw.div`bg-[#14263D]`

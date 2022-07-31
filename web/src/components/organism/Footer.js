import React from "react"
import tw from "twin.macro"
import LinkedIn from "../../images/footer/linkedin.png"
import Github from "../../images/footer/github.png"

function Footer() {
  return (
    <Wrapper>
      <div tw="flex justify-between px-8">
        <a href="mailto:marcushkastner@gmail.com" tw="text-white">
          marcushkastner@gmail
        </a>
        <div tw="flex gap-4">
          <img src={LinkedIn} />
          <img src={Github} />
        </div>
      </div>
    </Wrapper>
  )
}

export default Footer

const Wrapper = tw.div`bg-[#14263D]`

import React from "react"
import tw from "twin.macro"
import media from "../../images/avatar2.png"
import { SectionTitle, SectionText } from "../styles/themes"

function About() {
  return (
    <Wrapper>
      <Image src={media} />
      <TextContainer>
        <SectionTitle tw="max-w-sm mb-10">
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
  )
}

export default About

const Wrapper = tw.div`flex justify-center mx-14 mb-20 gap-20`
const Image = tw.img`max-w-md rounded`
const TextContainer = tw.div`flex flex-col`

import React from "react"
import tw from "twin.macro"
import Card from "../molecule/Card"

function Work() {
  return (
    <Wrapper>
      <Card index={0} />
    </Wrapper>
  )
}

export default Work

const Wrapper = tw.div`flex justify-center mx-14 mb-20 gap-20`

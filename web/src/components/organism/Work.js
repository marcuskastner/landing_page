import React from "react"
import tw from "twin.macro"
import Card from "../molecule/Card"
import { card_data } from "../atom/card_data"

function Work() {
  return (
    <Wrapper>
      {card_data.map((data, index) => (
        <Card data={data} index={index} />
      ))}
    </Wrapper>
  )
}

export default Work

const Wrapper = tw.div`flex justify-center mx-14 mb-20 gap-20`

import React from "react"
import tw from "twin.macro"
import "../styles/module.card.css"

function Card({ index }) {
  const bg_Colors = ["#E9F8FF"]
  return (
    <CardContainer style={{ backgroundColor: bg_Colors[index] }}>
      Card
    </CardContainer>
  )
}

export default Card

const CardContainer = tw.div`w-[450px] h-[600px] rounded transform-style[preserve-3d]`

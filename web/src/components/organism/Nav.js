import React, { useState } from "react"
import tw from "twin.macro"
import { QRCodeSvg } from "../atom/svg"
import { SideBarToggle } from "../molecule/SideBarToggle"
import { motion } from "framer-motion"

function Nav() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Wrapper>
      <LogoContainer>
        <QRCodeSvg />
        <LogoText>Marcus Kastner</LogoText>
      </LogoContainer>
      <SideBarToggle toggle={() => setIsOpen(!isOpen)} isOpen={isOpen} />
      <motion.div
        style={{
          position: "absolute",
          height: "100%",
          width: "0",
          top: "0",
          right: "0",
          backgroundColor: "var(--nav-background)",
        }}
        animate={isOpen ? "open" : "closed"}
        variants={{
          open: {
            width: "200px",
          },
          closed: {
            width: "0px",
          },
        }}
      />
    </Wrapper>
  )
}

export default Nav

const Wrapper = tw.div`w-full h-16 bg-[var(--nav-background)] text-[var(--nav-primary)] flex items-center justify-between px-8`
const LogoText = tw.div``
const LogoContainer = tw.div`flex gap-4 items-center`

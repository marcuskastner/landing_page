import React, { useState } from "react"
import tw from "twin.macro"
import { QRCodeSvg } from "../atom/svg"
import { SideBarToggle } from "../molecule/SideBarToggle"
import { motion } from "framer-motion"
import SideBar from "../molecule/SideBar"

function Nav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Wrapper>
      <NavContainer>
        <LogoContainer>
          <QRCodeSvg />
          <LogoText>Marcus Kastner</LogoText>
        </LogoContainer>

        <SideBarToggle toggle={() => setIsOpen(!isOpen)} isOpen={isOpen} />
      </NavContainer>
      <SideBar isOpen={isOpen} />
    </Wrapper>
  )
}

export default Nav

const NavContainer = tw.div`w-full h-16 bg-[var(--nav-background)] text-[var(--nav-primary)] flex items-center justify-between px-8`
const LogoText = tw.div``
const LogoContainer = tw.div`flex gap-4 items-center`

const Wrapper = tw.div`flex justify-between`

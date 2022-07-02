import React from "react"
import tw from "twin.macro"
import { QRCodeSvg } from "../atom/svg"

function Nav() {
  return (
    <NavContainer>
      <LogoContainer>
        <QRCodeSvg />
      </LogoContainer>
      <SectionContainer>
        <Section>Home</Section>
        <Section>About Me</Section>
        <Section>Work</Section>
        <Section>Contact</Section>
      </SectionContainer>
      <EmailContainer>email</EmailContainer>
    </NavContainer>
  )
}

export default Nav

const NavContainer = tw.div`flex items-center justify-between px-8 mb-20 py-2`

const LogoContainer = tw.div`flex gap-4 items-center`
const Section = tw.div`hover:(underline text-underline-offset[2px]) `
const SectionContainer = tw.div`flex justify-between gap-10`
const EmailContainer = tw.div``

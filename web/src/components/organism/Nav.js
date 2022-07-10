import React, { useState } from "react"
import tw from "twin.macro"
import { QRCodeSvg } from "../atom/svg"
import "../styles/module.nav.css"
import { motion } from "framer-motion"
import Email from "../../images/email.svg"

function Nav() {
  const lineVariants = {
    animate: {
      opacity: 1,
      y: 0,
    },
    initial: {
      opacity: 0,
      y: 5,
    },
  }
  const [hoverHome, setHoverHome] = useState(false)
  const [hoverAbout, setHoverAbout] = useState(false)
  const [hoverWork, setHoverWork] = useState(false)
  const [hoverContact, setHoverContact] = useState(false)
  return (
    <NavContainer>
      <LogoContainer>
        <QRCodeSvg />
      </LogoContainer>
      <SectionContainer>
        <Section
          onMouseLeave={() => setHoverHome(false)}
          onMouseEnter={() => setHoverHome(true)}
        >
          Home
          <motion.div
            className="line"
            variants={lineVariants}
            animate={hoverHome ? "animate" : "initial"}
          />
        </Section>
        <Section
          onMouseLeave={() => setHoverAbout(false)}
          onMouseEnter={() => setHoverAbout(true)}
        >
          About Me
          <motion.div
            className="line"
            variants={lineVariants}
            animate={hoverAbout ? "animate" : "initial"}
          />
        </Section>
        <Section
          onMouseLeave={() => setHoverWork(false)}
          onMouseEnter={() => setHoverWork(true)}
        >
          Work
          <motion.div
            className="line"
            variants={lineVariants}
            animate={hoverWork ? "animate" : "initial"}
          />
        </Section>
        <Section
          onMouseLeave={() => setHoverContact(false)}
          onMouseEnter={() => setHoverContact(true)}
        >
          Contact
          <motion.div
            className="line"
            variants={lineVariants}
            animate={hoverContact ? "animate" : "initial"}
          />
        </Section>
      </SectionContainer>
      <EmailContainer className="email" src={Email} />
    </NavContainer>
  )
}

export default Nav

const NavContainer = tw.div`flex items-center justify-between px-8 mb-20 py-2`

const LogoContainer = tw.div`flex gap-4 items-center`
const Section = tw.div`text-white relative`
const SectionContainer = tw.div`flex justify-between gap-10`
const EmailContainer = tw.img`w-6 h-6`

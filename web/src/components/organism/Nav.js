import React, { useState, useEffect } from "react"
import tw from "twin.macro"
import "../styles/module.nav.css"
import { AnimatePresence, motion } from "framer-motion"
import Email from "../../images/nav/email.svg"
import { SideBarToggle } from "../molecule/SideBarToggle"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { StaticImage } from "gatsby-plugin-image"

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

  const menuBackground = {
    open: {
      opacity: 1,
      transition: { when: "beforeChildren" },
    },
    initial: {
      opacity: 0,
    },
    exit: {
      opacity: 0,
      transition: { when: "afterChildren" },
    },
  }

  const listVariants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    initial: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    exit: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  }

  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    initial: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
    exit: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
    tap: {
      scale: 0.9,
    },
    hover: {
      scale: 1.2,
    },
  }

  const linksArr = [
    { name: "About Me", link: "/#about" },
    { name: "Work", link: "/#work" },
    { name: "Contact", link: "/#contact" },
  ]
  const [hoverAbout, setHoverAbout] = useState(false)
  const [hoverWork, setHoverWork] = useState(false)
  const [hoverContact, setHoverContact] = useState(false)
  const [isDesktop, setDesktop] = useState(true)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined") {
      setDesktop(window.innerWidth > 650)
    }
  }, [])

  const updateMedia = () => {
    if (typeof window !== `undefined`) {
      setDesktop(window.innerWidth > 650)
    }
  }

  useEffect(() => {
    if (typeof window !== `undefined`) {
      window.addEventListener("resize", updateMedia)
      return () => window.removeEventListener("resize", updateMedia)
    }
  })
  return (
    <>
      {isDesktop ? (
        <NavContainer>
          <LogoContainer>
            <StaticImage src="../../images/nav/marcuskastner.svg" width={200} />
          </LogoContainer>
          <SectionContainer>
            <Section
              onMouseLeave={() => setHoverAbout(false)}
              onMouseEnter={() => setHoverAbout(true)}
            >
              <AnchorLink to="/#about">About Me</AnchorLink>
              <motion.div
                className="line"
                variants={lineVariants}
                initial={false}
                animate={hoverAbout ? "animate" : "initial"}
              />
            </Section>
            <Section
              onMouseLeave={() => setHoverWork(false)}
              onMouseEnter={() => setHoverWork(true)}
            >
              <AnchorLink to="/#work">Work</AnchorLink>

              <motion.div
                className="line"
                variants={lineVariants}
                initial={false}
                animate={hoverWork ? "animate" : "initial"}
              />
            </Section>
            <Section
              onMouseLeave={() => setHoverContact(false)}
              onMouseEnter={() => setHoverContact(true)}
            >
              <AnchorLink to="/#contact">Contact</AnchorLink>

              <motion.div
                className="line"
                variants={lineVariants}
                initial={false}
                animate={hoverContact ? "animate" : "initial"}
              />
            </Section>
          </SectionContainer>
          <a href="mailto:marcushkastner@gmail.com">
            <EmailContainer className="email" src={Email} />
          </a>
        </NavContainer>
      ) : (
        <>
          <div
            tw="bg-white z-10 absolute "
            style={{ clipPath: "circle(24px at 31px 31px)" }}
          >
            <SideBarToggle
              isOpen={isOpen}
              setIsOpen={() => setIsOpen(!isOpen)}
            />
          </div>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                tw="w-full h-full bg-white absolute top-0 flex justify-center "
                variants={menuBackground}
                initial="initial"
                animate="open"
                exit="exit"
              >
                <motion.ul
                  variants={listVariants}
                  tw="font-bold text-[#142846] text-3xl py-20"
                >
                  {linksArr.map(link => (
                    <motion.li variants={itemVariants}>
                      <motion.button
                        whileHover="hover"
                        whileTap="tap"
                        variants={itemVariants}
                        onClick={() => setIsOpen(false)}
                      >
                        <AnchorLink to={link.link}>{link.name}</AnchorLink>
                      </motion.button>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            )}
          </AnimatePresence>
          <div tw="mb-32" />
        </>
      )}
    </>
  )
}

export default Nav

const NavContainer = tw.div`flex items-center justify-between px-8 mb-20 py-2 `

const LogoContainer = tw.div`flex gap-4 items-center`
const Section = tw.div`text-white relative`
const SectionContainer = tw.div`flex justify-between gap-10 -translate-x-1/4`
const EmailContainer = tw.img`w-6 h-6`

import React, { useState } from "react"
import tw from "twin.macro"
import { SectionTitle } from "../styles/themes"

function Contact() {
  const [name, setName] = useState("Full Name")
  const [email, setEmail] = useState("email")
  const [phone, setPhone] = useState("phone")
  return (
    <Wrapper>
      <SectionTitle>Contact Me</SectionTitle>
      <FormContainer>
        <form name="contact" method="POST" data-netlify="true">
          <FieldContainer>
            <Label>
              Name
              <Input
                type="text"
                name="name"
                onChange={e => setName(e.target.value)}
              />
            </Label>
            <Label>
              Email
              <Input
                type="email"
                name="email"
                onChange={e => setEmail(e.target.value)}
              />
            </Label>
            <Label>
              Phone
              <Input
                type="phone"
                name="phone"
                onChange={e => setPhone(e.target.value)}
              />
            </Label>
            <Label>
              Subject
              <Input type="" name="phone" />
            </Label>
          </FieldContainer>
        </form>
      </FormContainer>
    </Wrapper>
  )
}

export default Contact

const Wrapper = tw.div`flex flex-col gap-8 items-center`
const FormContainer = tw.div`border-2 border-[var(--color-secondary)] rounded p-8`
const FieldContainer = tw.div`grid grid-cols-2`
const Label = tw.label`flex flex-col`
const Input = tw.input`border-2 border-[var(--color-secondary)] rounded`

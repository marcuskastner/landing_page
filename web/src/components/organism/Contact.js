import React, { useState } from "react"
import tw from "twin.macro"
import { SectionTitle } from "../styles/themes"
import FadeIn from "./FadeIn"

function Contact() {
  const [name, setName] = useState("Full Name")
  const [email, setEmail] = useState("email")
  const [phone, setPhone] = useState("phone")
  return (
    <FadeIn>
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
                  placeholder="full name"
                  // onChange={e => setName(e.target.value)}
                />
              </Label>
              <Label>
                Email
                <Input
                  type="email"
                  name="email"
                  placeholder="me@sample.com"
                  // onChange={e => setEmail(e.target.value)}
                />
              </Label>
              <Label>
                Phone
                <Input
                  type="phone"
                  name="phone"
                  placeholder="123-456-789"
                  // onChange={e => setPhone(e.target.value)}
                />
              </Label>
              <Label>
                Subject
                <Input
                  type="text"
                  name="subject"
                  placeholder="type subject here"
                />
              </Label>
              <Label tw="col-span-2">
                Message
                <textarea
                  tw="rounded p-2 text-black"
                  maxLength={375}
                  placeholder="type message here"
                  rows={5}
                  cols={75}
                />
              </Label>
              <BtnContainer>
                <SubmitBtn type="submit">Submit</SubmitBtn>
              </BtnContainer>
            </FieldContainer>
          </form>
        </FormContainer>
      </Wrapper>
    </FadeIn>
  )
}

export default Contact

const Wrapper = tw.div`flex flex-col gap-8 items-center text-white relative mb-52 px-10`
const FormContainer = tw.div`border-2 border-white rounded p-4 lg:p-12 `
const FieldContainer = tw.div`grid grid-cols-2 gap-x-8 gap-y-8 lg:gap-x-20`
const Label = tw.label`flex flex-col gap-2`
const Input = tw.input` rounded p-2 text-black`
const SubmitBtn = tw.button`no-underline bg-white text-black px-16 py-2 rounded`
const BtnContainer = tw.div`col-span-2 flex justify-center`

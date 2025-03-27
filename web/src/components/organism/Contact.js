import React, { useState } from "react"
import tw from "twin.macro"
import { SectionTitle } from "../styles/themes"
import FadeIn from "./FadeIn"

function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleChange = e => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  const handleSubmit = e => {
    if (Object.values(formState).some(value => value === "")) {
      alert("Please fill out all sections")
      e.preventDefault()
    } else {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...formState }),
      })
        .then(() => alert("Success!"))
        .catch(error => alert(error))

      e.preventDefault()
    }
  }

  return (
    <FadeIn>
      <Wrapper id="contact">
        <SectionTitle>Contact Me</SectionTitle>
        <FormContainer>
          <form
            name="contact"
            method="POST"
            netlify="true"
            onSubmit={handleSubmit}
          >
            <FieldContainer>
              <input type="hidden" name="form-name" value="contact" />
              <Label>
                Name
                <Input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  onChange={handleChange}
                  value={formState.name}
                />
              </Label>
              <Label>
                Email
                <Input
                  type="email"
                  name="email"
                  placeholder="me@sample.com"
                  onChange={handleChange}
                  value={formState.email}
                />
              </Label>
              <Label>
                Phone
                <Input
                  type="phone"
                  name="phone"
                  placeholder="123-456-789"
                  onChange={handleChange}
                  value={formState.phone}
                />
              </Label>
              <Label>
                Subject
                <Input
                  type="text"
                  name="subject"
                  placeholder="Type subject here"
                  onChange={handleChange}
                  value={formState.subject}
                />
              </Label>
              <Label tw="col-span-2">
                Message
                <textarea
                  tw="rounded p-2 text-black w-full"
                  maxLength={375}
                  placeholder="Type message here"
                  rows={5}
                  cols={75}
                  name="message"
                  onChange={handleChange}
                  value={formState.message}
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
const FieldContainer = tw.div`flex flex-col items-center gap-8 sm:(grid  grid-cols-2 ) lg:gap-x-20`
const Label = tw.label`flex flex-col gap-2 w-full`
const Input = tw.input` rounded p-2 text-black`
const SubmitBtn = tw.button`no-underline bg-white text-black px-16 py-2 rounded`
const BtnContainer = tw.div`col-span-2 flex justify-center`

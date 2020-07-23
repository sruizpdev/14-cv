import React from "react"

import styled from "@emotion/styled"
import Layout from "../components/layout"
import ColLeft from "../components/col-left"
import ContactForm from "../components/contact-form"

const H3 = styled.h3`
  font-family: "PT Sans", sans-serif;
  text-transform: uppercase;
  text-transform: uppercase;
  margin: 20px;
`
const Separator = styled.div`
  border-bottom: 2px solid #f5f5f5;
`

const ContactMePage = () => (
  <Layout>
    <div className="container">
      <div className="row">
        <div className="col-left">
          <ColLeft></ColLeft>
        </div>
        <div className="col-right">
          <H3>Contact me</H3>
          <Separator></Separator>
          <ContactForm></ContactForm>
          <div className="line"></div>
        </div>
      </div>
    </div>
  </Layout>
)

export default ContactMePage

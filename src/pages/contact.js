import React from "react"

import styled from "@emotion/styled"
import Layout from "../components/layout"
import ColLeft from "../components/col-left"
import ContactForm from "../components/contact-form"

const Separator = styled.div`
  border-bottom: 2px solid #f5f5f5;
`

const ContactMePage = () => (
  <Layout>
    <div className="container">
      <div className="row">
        <div className="three column">
          <ColLeft></ColLeft>
        </div>
        <div className="nine column">
          <h3>Contact me</h3>
          <Separator></Separator>
          <ContactForm></ContactForm>
        </div>
      </div>
    </div>
  </Layout>
)

export default ContactMePage

import React from "react"

import styled from "@emotion/styled"
import Layout from "../components/layout"
import GeneralInfo from "../components/general-info"
import ContactForm from "../components/contact-form"

const Separator = styled.div`
  border-bottom: 2px solid #f5f5f5;
`

const ContactMePage = () => (
  <Layout>
    <div className="parent">
      <div className="col-left">
        <GeneralInfo />
      </div>
      <div className="col-right">
        <div className="container">
          <div className="title ml-20">Contact me</div>
          <div className="content">
            <ContactForm></ContactForm>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default ContactMePage

import React from "react"

import Layout from "../components/layout"
import GeneralInfo from "../components/general-info"
import ContactForm from "../components/contact-form"

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

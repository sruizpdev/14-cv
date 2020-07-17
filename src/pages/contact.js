import React from "react"

import { css } from "@emotion/core"
import Layout from "../components/layout"
import ColLeft from "../components/col-left"
import ContactForm from "../components/contact-form"

const ContactMePage = () => (
  <Layout>
    <div className="container">
      <div className="row">
        <div className="col-left">
          <ColLeft></ColLeft>
        </div>
        <div className="col-right">
          <h1
            css={css`
              text-transform: uppercase;
              margin: 0;
            `}
          >
            Contact me
          </h1>
          <ContactForm></ContactForm>
          <div className="line"></div>
        </div>
      </div>
    </div>
  </Layout>
)

export default ContactMePage

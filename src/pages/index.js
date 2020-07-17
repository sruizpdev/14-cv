import React from "react"
import Layout from "../components/layout"
import PersonalInfo from "../components/personal-info"
import Attachments from "../components/attachments"
import SocialProfiles from "../components/social-profiles"
import ContactForm from "../components/contact-form"
import Skills from "../components/skills"
import { css } from "@emotion/core"
import AboutMe from "../components/about-me"

const IndexPage = () => (
  <Layout>
    <div className="container">
      <div className="row">
        <div className="column-one">
          <PersonalInfo />
          <Attachments />
          <SocialProfiles />
          <ContactForm />
        </div>
        <div className="column-two">
          <h1
            css={css`
              text-transform: uppercase;
              margin: 0;
            `}
          >
            About me
          </h1>
          <div className="line"></div>
          <AboutMe />
          <Skills />
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage

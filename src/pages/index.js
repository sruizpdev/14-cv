import React from "react"
import Layout from "../components/layout"
import Skills from "../components/skills"
import AboutMe from "../components/about-me"
import GeneralInfo from "../components/general-info"

const IndexPage = () => (
  <Layout>
    <div className="parent">
      <div className="col-left">
        <GeneralInfo />
      </div>
      <div className="col-right">
        <AboutMe />
        <Skills />
      </div>
    </div>
  </Layout>
)
export default IndexPage

import React from "react"
import Layout from "../components/layout"
import Skills from "../components/skills"
import AboutMe from "../components/about-me"
import ColLeft from "../components/col-left"

const IndexPage = () => (
  <Layout>
    <div className="container">
      <div className="row">
        <div className="three column">
          <ColLeft />
        </div>
        <div className="nine column">
          <span className="title">About me</span>
          <div className="separator"></div>
          <AboutMe />
          <span className="title">Skills</span>
          <div className="separator"></div>
          <Skills />
        </div>
      </div>
    </div>
  </Layout>
)
export default IndexPage

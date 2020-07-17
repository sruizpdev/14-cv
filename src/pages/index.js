import React from "react"
import Layout from "../components/layout"

import Skills from "../components/skills"
import AboutMe from "../components/about-me"

import ColLeft from "../components/col-left"

const IndexPage = () => (
  <Layout>
    <div className="container">
      <div className="row">
        <div className="col-left">
          <ColLeft></ColLeft>
        </div>
        <div className="col-right">
          <h1>About me</h1>
          <AboutMe />
          <Skills />
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage

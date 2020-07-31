import React from "react"
import Layout from "../components/layout"
import Skills from "../components/skills"
import AboutMe from "../components/about-me"
import ColLeft from "../components/col-left"

const IndexPage = () => (
  <Layout>
    <div class="parent">
      <div class="col-left bg-white">
        <ColLeft />
      </div>
      <div class="col-right bg-white">
        <AboutMe />
        <Skills />
      </div>
    </div>
  </Layout>
)
export default IndexPage

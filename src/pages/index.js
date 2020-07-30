import React from "react"
import Layout from "../components/layout"
import Skills from "../components/skills"
import AboutMe from "../components/about-me"
import ColLeft from "../components/col-left"
import styled from "@emotion/styled"

const Separator = styled.div`
  border-bottom: 2px solid #f5f5f5;
`

const IndexPage = () => (
  <Layout>
    <div className="container">
      <div className="row">
        <div className="three column">
          <ColLeft></ColLeft>
        </div>
        <div className="nine column">
          <h4>About me</h4>
          <Separator></Separator>
          <AboutMe />
          <h4>Skills</h4>

          <Skills />
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage

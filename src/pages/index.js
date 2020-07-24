import React from "react"
import Layout from "../components/layout"
import Skills from "../components/skills"
import AboutMe from "../components/about-me"
import ColLeft from "../components/col-left"
import styled from "@emotion/styled"

const H3 = styled.h3`
  font-family: "PT Sans", sans-serif;
  text-transform: uppercase;
  text-transform: uppercase;
  margin: 30px;
`
const Separator = styled.div`
  border-bottom: 2px solid #f5f5f5;
`
const BigSeparator = styled.div`
  border-bottom: 30px solid #f5f5f5;
`
const IndexPage = () => (
  <Layout>
    <div className="container">
      <div className="row">
        <div className="col-left">
          <ColLeft></ColLeft>
        </div>
        <div className="col-right">
          <H3>About me</H3>
          <Separator></Separator>
          <AboutMe />
          <BigSeparator></BigSeparator>
          <H3>Skills</H3>
          <Separator></Separator>

          <Skills />
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage

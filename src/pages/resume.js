import React from "react"
import Layout from "../components/layout"
import ColLeft from "../components/col-left"
import styled from "@emotion/styled"
import ProfessionalExperience from "../components/prof-experience"

const H3 = styled.h3`
  font-family: "PT Sans", sans-serif;
  text-transform: uppercase;
  text-transform: uppercase;
  margin: 20px;
`
const Separator = styled.div`
  border-bottom: 2px solid #f5f5f5;
`

const ResumePage = () => (
  <Layout>
    <div className="container">
      <div className="row">
        <div className="col-left">
          <ColLeft></ColLeft>
        </div>
        <div className="col-right">
          <H3>Resume</H3>
          <Separator></Separator>
          <ProfessionalExperience />
        </div>
      </div>
    </div>
  </Layout>
)

export default ResumePage

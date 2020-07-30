import React from "react"
import Layout from "../components/layout"
import ColLeft from "../components/col-left"
import styled from "@emotion/styled"
import ProfessionalExperience from "../components/prof-experience"
import Education from "../components/education"

const Separator = styled.div`
  border-bottom: 2px solid #f5f5f5;
`

const ResumePage = () => (
  <Layout>
    <div className="container">
      <div className="row">
        <div className="three column">
          <ColLeft></ColLeft>
        </div>
        <div className="nine column">
          <h3>Resume</h3>
          <Separator></Separator>
          <ProfessionalExperience />
          <h3>Education</h3>
          <Education />
        </div>
      </div>
    </div>
  </Layout>
)

export default ResumePage

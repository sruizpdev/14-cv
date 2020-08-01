import React from "react"
import Layout from "../components/layout"
import GeneralInfo from "../components/general-info"
import ProfessionalExperience from "../components/prof-experience"
import Education from "../components/education"
import styled from "@emotion/styled"

const Parent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  @media (min-width: 425px) {
    flex-direction: row;
  }
`
const ColLeft = styled.div`
  flex: 1;
`
const ColRight = styled.div`
  flex: 1;
  @media (min-width: 425px) {
    flex: 3;
  }
`

const ResumePage = () => (
  <Layout>
    <Parent>
      <ColLeft>
        <GeneralInfo />
      </ColLeft>
      <ColRight>
        <span className="title">Resume</span>
        <div className="separator"></div>
        <ProfessionalExperience />
        <span className="title">Education</span>
        <Education />
      </ColRight>
    </Parent>
  </Layout>
)

export default ResumePage

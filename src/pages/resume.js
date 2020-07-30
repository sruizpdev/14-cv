import React from "react"
import Layout from "../components/layout"
import ColLeft from "../components/col-left"
import ProfessionalExperience from "../components/prof-experience"
import Education from "../components/education"

const ResumePage = () => (
  <Layout>
    <div className="container">
      <div className="row">
        <div className="three column">
          <ColLeft />
        </div>
        <div className="nine column">
          <span className="title">Resume</span>
          <div className="separator"></div>
          <ProfessionalExperience />
          <span className="title">Education</span>
          <Education />
        </div>
      </div>
    </div>
  </Layout>
)

export default ResumePage

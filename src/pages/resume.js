import React from "react"
import Layout from "../components/layout"
import GeneralInfo from "../components/general-info"
import ProfessionalExperience from "../components/prof-experience"
import Education from "../components/education"

const ResumePage = () => (
  <Layout>
    <div className="parent">
      <div className="col-left">
        <GeneralInfo />
      </div>
      <div className="col-right">
        <ProfessionalExperience />
        <Education />
      </div>
    </div>
  </Layout>
)

export default ResumePage

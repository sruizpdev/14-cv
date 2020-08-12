import React from "react"
import Layout from "../components/layout"
import GeneralInfo from "../components/general-info"
import Works from "../components/works"

const PortfolioPage = () => (
  <Layout>
    <div className="parent">
      <div className="col-left">
        <GeneralInfo />
      </div>
      <div className="col-right">
        <Works />
      </div>
    </div>
  </Layout>
)

export default PortfolioPage

import React from "react"
import styled from "@emotion/styled"
import Layout from "../components/layout"
import ColLeft from "../components/col-left"
import Portfolio from "../components/portfolio"

const Separator = styled.div`
  border-bottom: 2px solid #f5f5f5;
`

const PortfolioPage = () => (
  <Layout>
    <div className="container">
      <div className="row">
        <div className="three column">
          <ColLeft></ColLeft>
        </div>
        <div className="nine column">
          <span className="title">Portfolio</span>
          <Separator></Separator>
          <Portfolio />
        </div>
      </div>
    </div>
  </Layout>
)

export default PortfolioPage

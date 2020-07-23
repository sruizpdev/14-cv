import React from "react"
import styled from "@emotion/styled"
import Layout from "../components/layout"
import ColLeft from "../components/col-left"

const H3 = styled.h3`
  font-family: "PT Sans", sans-serif;
  text-transform: uppercase;
  text-transform: uppercase;
  margin: 20px;
`
const Separator = styled.div`
  border-bottom: 2px solid #f5f5f5;
`

const PortfolioPage = () => (
  <Layout>
    <div className="container">
      <div className="row">
        <div className="col-left">
          <ColLeft></ColLeft>
        </div>
        <div className="col-right">
          <H3>Portfolio</H3>
          <Separator></Separator>
          <div className="line"></div>
        </div>
      </div>
    </div>
  </Layout>
)

export default PortfolioPage

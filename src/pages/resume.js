import React from "react"

import { css } from "@emotion/core"
import Layout from "../components/layout"

import ColLeft from "../components/col-left"

const ResumePage = () => (
  <Layout>
    <div className="container">
      <div className="row">
        <div className="col-left">
          <ColLeft></ColLeft>
        </div>
        <div className="col-right">
          <h1
            css={css`
              text-transform: uppercase;
              margin: 0;
            `}
          >
            Resume
          </h1>
        </div>
      </div>
    </div>
  </Layout>
)

export default ResumePage

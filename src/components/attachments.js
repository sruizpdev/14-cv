import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

const Curriculum = styled.div`
  padding: 1rem;
  background-color: #f5f5f5;
  width: 80%;
  margin: 20px auto;
  text-align: center;
`
const Attachments = () => {
  return (
    <>
      <Curriculum>
        <a
          css={css`
            color: black;
            text-decoration: none;
          `}
          href="http://google.es"
        >
          Curriculum-Vitae.pdf
        </a>
      </Curriculum>
    </>
  )
}

export default Attachments

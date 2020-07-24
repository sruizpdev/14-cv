import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

const Container = styled.div`
  margin: 30px;
`
const DrawEdu = ({ edu_item }) => {
  const { school, date, description } = edu_item
  return (
    <>
      <Container>
        <h4
          css={css`
            margin: 0;
          `}
        >
          {school} ( {date} )
        </h4>

        {description}
      </Container>
    </>
  )
}

export default DrawEdu

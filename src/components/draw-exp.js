import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

const Container = styled.div`
  margin: 20px;
`

const DrawExperience = ({ exp }) => {
  const { company, date, rol, description } = exp
  return (
    <>
      <Container>
        <h4
          css={css`
            margin: 0;
          `}
        >
          {company} ( {date} )
        </h4>
        <h3
          css={css`
            margin: 0;
          `}
        >
          {rol}
        </h3>

        {description}
      </Container>
    </>
  )
}

export default DrawExperience

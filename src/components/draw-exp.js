import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

const Container = styled.div`
  margin: 30px;
  text-align: justify;
`

const DrawExperience = ({ exp }) => {
  const { company, date, rol, description, technologies } = exp
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
        <p
          css={css`
            font-weight: bold;
          `}
        >
          Technologies:
        </p>
        {technologies}
      </Container>
    </>
  )
}

export default DrawExperience

import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

const Container = styled.div`
  margin: 10px 20px 10px 20px;
`
const Knowledge = styled.div`
  width: 100%;
  height: 25px;
  background-color: #f5f5f5;
  margin-top: 5px;
`

const DrawSkill = ({ skill }) => {
  const { skillName, skillKnowledge } = skill
  return (
    <>
      <Container>
        <h4
          css={css`
            margin: 0;
          `}
        >
          {skillName}
        </h4>
        <Knowledge>
          <div
            css={css`
              width: ${skillKnowledge}%;
              background-color: #337ab7;
              height: 25px;
            `}
          ></div>
        </Knowledge>
      </Container>
    </>
  )
}

export default DrawSkill

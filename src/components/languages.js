import React from "react"
import styled from "@emotion/styled"

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  line-height: 3rem;
`
const Col = styled.div`
  padding-left: 20px;
  display: flex;
  flex-direction: col;
  flex-basis: 100%;
  flex: 1;
  font-weight: bold;
`
const Col2 = styled.div`
  flex: 2;
`

const Languages = () => {
  return (
    <>
      <Row>
        <Col>Spanish</Col>
        <Col2>Native</Col2>
      </Row>
      <Row>
        <Col>English</Col>
        <Col2>B2</Col2>
      </Row>
    </>
  )
}

export default Languages

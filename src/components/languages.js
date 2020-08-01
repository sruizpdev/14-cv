import React from "react"
import styled from "@emotion/styled"

const LanguagesLevel = styled.div`
  display: grid;
  grid-template-columns: 2fr 10px 5fr;
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 10px;
`
const SpanishTitle = styled.div`
  grid-area: 1 / 1 / 2 / 2;
`
const SpanishLevel = styled.div`
  grid-area: 1 / 3 / 2 / 4;
`
const EnglishTitle = styled.div`
  grid-area: 2 / 1 / 3 / 2;
`
const EnglishLevel = styled.div`
  grid-area: 2 / 3 / 3 / 4;
`

const Languages = () => {
  return (
    <>
      <LanguagesLevel>
        <SpanishTitle>Spanish:</SpanishTitle>
        <SpanishLevel>Native</SpanishLevel>

        <EnglishTitle>English:</EnglishTitle>
        <EnglishLevel>B2</EnglishLevel>
      </LanguagesLevel>
    </>
  )
}

export default Languages

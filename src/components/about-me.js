import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "@emotion/styled"

const Container = styled.div`
  margin: 20px;
`
const AboutMe = () => {
  const aboutMe = useStaticQuery(graphql`
    query {
      allDatoCmsAboutMe {
        edges {
          node {
            me
          }
        }
      }
    }
  `)
  const { me } = aboutMe.allDatoCmsAboutMe.edges[0].node
  return (
    <>
      <Container>{me}</Container>
    </>
  )
}

export default AboutMe

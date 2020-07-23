import React from "react"
import { graphql, useStaticQuery } from "gatsby"

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
  return <>{me}</>
}

export default AboutMe

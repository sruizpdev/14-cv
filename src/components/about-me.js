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
  return (
    <>
      <div className="container">
        <div className="title ml-20">About me</div>
        <div className="content">{me}</div>
      </div>
    </>
  )
}

export default AboutMe

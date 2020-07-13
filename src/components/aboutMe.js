import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const AboutMe = () => {
  const aboutInfo = useStaticQuery(graphql`
    query {
      allDatoCmsAboutMe {
        edges {
          node {
            name
            phone
            email
            github
            description
          }
        }
      }
    }
  `)
  const {
    name,
    phone,
    email,
    github,
    description,
  } = aboutInfo.allDatoCmsAboutMe.edges[0].node

  return (
    <>
      {name}
      {phone}
      {email}
      {github}
      {description}
    </>
  )
}

export default AboutMe

import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

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
            picture {
              fluid {
                ...GatsbyDatoCmsFluid
              }
            }
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
    picture,
  } = aboutInfo.allDatoCmsAboutMe.edges[0].node

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="column-one">
            <Image fluid={picture.fluid} alt="" />
            {name}
            {phone}
            {email}
            {github}
            {description}
          </div>
          <div className="column-two">dgdhdfgh</div>
        </div>
      </div>
    </>
  )
}

export default AboutMe

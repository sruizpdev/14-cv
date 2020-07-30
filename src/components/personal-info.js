import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import { css } from "@emotion/core"

const PersonalInfo = () => {
  const personalInfo = useStaticQuery(graphql`
    query {
      allDatoCmsPersonalInfo {
        edges {
          node {
            picture {
              fluid {
                ...GatsbyDatoCmsFluid
              }
            }
            name
            phone
            email
            github
            web
          }
        }
      }
    }
  `)
  const {
    picture,
    name,
    phone,
    email,
    github,
    web,
  } = personalInfo.allDatoCmsPersonalInfo.edges[0].node

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="twelve column">
            <Image
              css={css`
                margin-bottom: 20px;
              `}
              fluid={picture.fluid}
              alt="name"
            />
          </div>
        </div>
        <div className="row">
          <div className="four column">Name</div>
          <div className="eight column">{name}</div>
        </div>
        <div className="row">
          <div className="four column">Phone</div>
          <div className="eight column">{phone}</div>
        </div>
        <div className="row">
          <div className="four column">Email</div>
          <div className="eight column">{email}</div>
        </div>
        <div className="row">
          <div className="four column">GitHub</div>
          <div className="eight column">{github}</div>
        </div>
        <div className="row">
          <div className="four column">Web</div>
          <div className="eight column">{web}</div>
        </div>
      </div>
    </>
  )
}
export default PersonalInfo

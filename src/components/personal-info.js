import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import { css } from "@emotion/core"

const PersonalInfo = () => {
  const aboutInfo = useStaticQuery(graphql`
    query {
      allDatoCmsAboutMe {
        edges {
          node {
            name
            phone
            email
            github
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
    picture,
  } = aboutInfo.allDatoCmsAboutMe.edges[0].node

  return (
    <>
      <h3
        css={css`
          color: gray;
          font-family: "PT Sans", sans-serif;
          text-transform: uppercase;
          text-align: center;
        `}
      >
        Personal information
      </h3>
      <Image fluid={picture.fluid} alt="" />
      <div className="row">
        <div className="column">Name</div>
        <div className="column-2">{name}</div>
      </div>
      <div className="row">
        <div className="column">Phone</div>
        <div className="column-2">{phone}</div>
      </div>
      <div className="row">
        <div className="column">Email</div>
        <div className="column-2">{email}</div>
      </div>
      <div
        className="row"
        css={css`
          border-bottom: 1px solid #f5f5f5;
        `}
      >
        <div className=" column">GitHub</div>
        <div className=" column-2">{github}</div>
      </div>
      <h3
        css={css`
          color: gray;
          font-family: "PT Sans", sans-serif;
          text-transform: uppercase;
          text-align: center;
          border-bottom: 1px solid #f5f5f5;
        `}
      >
        Attachments
      </h3>
    </>
  )
}

export default PersonalInfo

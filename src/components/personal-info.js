import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

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

const PersonalInfo = () => {
  const aboutInfo = useStaticQuery(graphql`
    query {
      allDatoCmsAboutMe {
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
            website
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
    website,
  } = aboutInfo.allDatoCmsAboutMe.edges[0].node

  return (
    <>
      <div className="animated fadeIn ">
        <Image
          css={css`
            margin-bottom: 20px;
          `}
          fluid={picture.fluid}
          alt="name"
        />
        <Row>
          <Col>Name</Col>
          <Col2>{name}</Col2>
        </Row>
        <Row>
          <Col>Phone</Col>
          <Col2>{phone}</Col2>
        </Row>
        <Row>
          <Col className="col">Email</Col>
          <Col2>{email}</Col2>
        </Row>
        <Row>
          <Col>GitHub</Col>
          <Col2>{github}</Col2>
        </Row>
        <Row
          css={css`
            margin-bottom: 20px;
          `}
        >
          <Col>Web</Col>
          <Col2>{website}</Col2>
        </Row>
      </div>
    </>
  )
}

export default PersonalInfo

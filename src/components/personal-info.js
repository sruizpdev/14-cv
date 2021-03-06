import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import styled from "@emotion/styled"

const ContainerInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto;
  grid-column-gap: 0px;
  grid-row-gap: 10px;
`
const Photo = styled.div`
  grid-area: 1 / 1 / 2 / 2;
`
const ContainerData = styled.div`
  grid-area: 2 / 1 / 3 / 2;
  display: flex;
  align-items: center;
`
const PersonalData = styled.div`
  display: grid;
  grid-template-columns: 3fr 10px 3fr;
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 10px;
`
const NameTitle = styled.div`
  grid-area: 1 / 1 / 2 / 2;
`
const Name = styled.div`
  grid-area: 1 / 3 / 2 / 4;
`
const PhoneTitle = styled.div`
  grid-area: 2 / 1 / 3 / 2;
`
const Phone = styled.div`
  grid-area: 2 / 3 / 3 / 4;
`
const EmailTitle = styled.div`
  grid-area: 3 / 1 / 4 / 2;
`
const Email = styled.div`
  grid-area: 3 / 3 / 4 / 4;
`
const GitHubTitle = styled.div`
  grid-area: 4 / 1 / 5 / 2;
`
const GitHub = styled.div`
  grid-area: 4 / 3 / 5 / 4;
`

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
  } = personalInfo.allDatoCmsPersonalInfo.edges[0].node

  return (
    <>
      <ContainerInfo>
        <Photo>
          <Image fluid={picture.fluid} alt="name" />
        </Photo>
        <ContainerData>
          <PersonalData>
            <NameTitle>Name:</NameTitle>
            <Name>{name}</Name>
            <PhoneTitle>Phone:</PhoneTitle>
            <Phone>{phone}</Phone>
            <EmailTitle>Email:</EmailTitle>
            <Email>{email}</Email>
            <GitHubTitle>GitHub:</GitHubTitle>
            <GitHub>{github}</GitHub>
          </PersonalData>
        </ContainerData>
      </ContainerInfo>
    </>
  )
}
export default PersonalInfo

import React from "react"
import styled from "@emotion/styled"
import Attachments from "./attachments"
import SocialProfiles from "./social-profiles"
import PersonalInfo from "./personal-info"
import Languages from "./languages"

const Separator = styled.div`
  border-bottom: 2px solid #f5f5f5;
`
const H3 = styled.h3`
  font-family: "PT Sans", sans-serif;
  text-transform: uppercase;
  text-align: center;
  margin: 1rem;
`
const ColLeft = () => {
  return (
    <>
      <H3>Professional Details</H3>
      <Separator></Separator>
      <PersonalInfo />
      <Separator></Separator>
      <H3>Attachments</H3>
      <Separator></Separator>
      <Attachments />
      <Separator></Separator>
      <H3>Social Profiles</H3>
      <Separator></Separator>
      <SocialProfiles />
      <Separator></Separator>
      <H3>Languages</H3>
      <Separator></Separator>
      <Languages />
    </>
  )
}

export default ColLeft

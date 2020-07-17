import React from "react"
import styled from "@emotion/styled"
import Attachments from "./attachments"
import SocialProfiles from "./social-profiles"
import PersonalInfo from "./personal-info"

const Separator = styled.div`
  border-bottom: 1px solid #f5f5f5;
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
      <H3>Personal information</H3>
      <PersonalInfo />
      <Separator></Separator>
      <H3>Attachments</H3>
      <Separator></Separator>
      <Attachments />
      <Separator></Separator>
      <H3>Social Profiles</H3>
      <Separator></Separator>
      <SocialProfiles />
    </>
  )
}

export default ColLeft

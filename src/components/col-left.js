import React from "react"
import styled from "@emotion/styled"
import Attachments from "./attachments"
import SocialProfiles from "./social-profiles"
import PersonalInfo from "./personal-info"
import Languages from "./languages"

const Separator = styled.div`
  border-bottom: 2px solid #f5f5f5;
`

const ColLeft = () => {
  return (
    <>
      <h3>Professional Details</h3>
      <Separator></Separator>
      <PersonalInfo />
      <Separator></Separator>
      <h3>Attachments</h3>
      <Separator></Separator>
      <Attachments />
      <Separator></Separator>
      <h3>Social Profiles</h3>
      <Separator></Separator>
      <SocialProfiles />
      <Separator></Separator>
      <h3>Languages</h3>
      <Separator></Separator>
      <Languages />
    </>
  )
}

export default ColLeft

import React from "react"
import Attachments from "./attachments"
import SocialProfiles from "./social-profiles"
import PersonalInfo from "./personal-info"
import Languages from "./languages"

const ColLeft = () => {
  return (
    <>
      <div className="container">
        <div className="title">Professional Details</div>
        <div className="content">
          <PersonalInfo />
        </div>
      </div>

      <div className="separator"></div>
      <span className="title center">Attachments</span>
      <div className="separator"></div>
      <Attachments />
      <div className="separator"></div>
      <span className="title center">Social Profiles</span>
      <div className="separator"></div>
      <SocialProfiles />
      <div className="separator"></div>
      <span className="title center">Languages</span>
      <div className="separator"></div>
      <Languages />
    </>
  )
}

export default ColLeft

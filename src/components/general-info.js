import React from "react"
import Attachments from "./attachments"
import SocialProfiles from "./social-profiles"
import PersonalInfo from "./personal-info"
import Languages from "./languages"

const GeneralInfo = () => {
  return (
    <>
      <div className="container">
        <div className="title center">Professional Details</div>
        <div className="content">
          <PersonalInfo />
        </div>
      </div>
      <div className="container">
        <span className="title center">Attachments</span>
        <div className="content">
          <Attachments />
        </div>
      </div>
      <div className="container">
        <span className="title center">Social Profiles</span>
        <div className="content">
          <SocialProfiles />
        </div>
      </div>
      <div className="container">
        <span className="title center">Languages</span>
        <div className="content">
          <Languages />
        </div>
      </div>
    </>
  )
}

export default GeneralInfo

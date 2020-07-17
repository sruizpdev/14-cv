import React from "react"
import styled from "@emotion/styled"

const Social = styled.div`
  display: flex;
  justify-content: space-around;
`
const SocialProfiles = () => {
  return (
    <>
      <Social>
        <span
          class="iconify"
          data-icon="ant-design:linkedin-outlined"
          data-inline="false"
        ></span>
        <span
          class="iconify"
          data-icon="ant-design:github-filled"
          data-inline="false"
        ></span>
        <span
          class="iconify"
          data-icon="ant-design:skype-outlined"
          data-inline="false"
        ></span>
      </Social>
    </>
  )
}

export default SocialProfiles

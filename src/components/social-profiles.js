import React from "react"
import { css } from "@emotion/core"

const SocialProfiles = () => {
  return (
    <>
      <div
        css={css`
          display: flex;
          justify-content: space-around;
        `}
      >
        <a href="https://www.linkedin.com/in/sergio-ruiz-perez/">
          <span
            className="iconify"
            data-icon="ant-design:linkedin-outlined"
            data-inline="false"
          ></span>
        </a>
        <a href="https://github.com/sruizpdev">
          <span
            className="iconify"
            data-icon="ant-design:github-filled"
            data-inline="false"
          ></span>
        </a>
      </div>
    </>
  )
}

export default SocialProfiles

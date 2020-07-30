import React from "react"
import { css } from "@emotion/core"

const Attachments = () => {
  return (
    <>
      <div className="container center">
        <a
          css={css`
            color: black;
            text-decoration: none;
            background-color: #f5f5f5;
            padding: 1rem 2rem;
          `}
          href="https://mega.nz/file/oup0lSwB#0AQkoycO3hmvuD_xHnUlAX-SuVWI3rvgUXoZRi8sFl8"
          target="_blank"
        >
          Curriculum-Vitae.pdf
        </a>
      </div>
    </>
  )
}

export default Attachments

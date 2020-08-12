import React from "react"
import { css } from "@emotion/core"

const Attachments = () => {
  return (
    <>
      <div
        css={css`
          text-align: center;
          background-color: #f5f5f5;
          padding: 1rem;
        `}
      >
        <a
          css={css`
            color: black;
            text-decoration: none;
          `}
          href="https://www.datocms-assets.com/31437/1597234065-sergioruizcv.pdf"
          target="_blank"
        >
          Curriculum-Vitae.pdf
        </a>
      </div>
    </>
  )
}

export default Attachments

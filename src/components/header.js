import React from "react"
import { css } from "@emotion/core"
import Navigation from "./navigation"

const Header = () => {
  return (
    <header
      css={css`
        background-color: white;
      `}
    >
      <Navigation />
    </header>
  )
}

export default Header

import React from "react"
import { css } from "@emotion/core"
import Navegacion from "./nav"

const Header = () => {
  return (
    <header
      css={css`
        background-color: white;
      `}
    >
      <Navegacion />
    </header>
  )
}

export default Header

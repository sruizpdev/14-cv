import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

const NavLink = styled(Link)`
  color: grey;
  text-decoration: none;
  font-family: "Roboto", serif;
  font-weight: 700;
`

const Navegacion = () => {
  return (
    <>
      <nav
        css={css`
          max-width: 1200px;
          margin: 0 auto;
          @media (min-width: 768px) {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
        `}
      >
        <NavLink to={"/"}>About me</NavLink>
        <NavLink to={"/resume"}>Resume</NavLink>
        <NavLink to={"/portfolio"}>Portfolio</NavLink>
        <NavLink to={"/contact"}>Contact me</NavLink>
      </nav>
    </>
  )
}

export default Navegacion

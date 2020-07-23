import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

const NavLink = styled(Link)`
  color: grey;
  text-decoration: none;
  font-family: "PT Sans", sans-serif;

  padding: 2rem;
  &:hover {
    color: white;
    background-color: #337ab7;
  }
`

const Navigation = () => {
  return (
    <>
      <nav
        css={css`
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;

          @media (min-width: 480px) {
            flex-direction: row;
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

export default Navigation

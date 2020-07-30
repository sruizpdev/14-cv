import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

const NavLink = styled(Link)`
  text-decoration: none;

  &:hover {
    border-bottom: 2px solid #d5d5d5;
  }
`
const Navigation = () => {
  return (
    <>
      <div className="container menu">
        <span>
          <NavLink to={"/"}>About me</NavLink>
        </span>
        <span>
          <NavLink to={"/resume"}>Resume</NavLink>
        </span>
        <span>
          <NavLink to={"/portfolio"}>Portfolio</NavLink>
        </span>
        <span>
          <NavLink to={"/contact"}>Contact me</NavLink>
        </span>
      </div>
    </>
  )
}

export default Navigation

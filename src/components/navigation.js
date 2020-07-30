import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

const NavLink = styled(Link)`
  text-decoration: none;
  padding: 1rem;

  &:hover {
    color: white;
    background-color: #337ab7;
  }
`
const Navigation = () => {
  return (
    <>
      <div className="container">
        <NavLink to={"/"}>About me</NavLink>
        <NavLink to={"/resume"}>Resume</NavLink>
        <NavLink to={"/portfolio"}>Portfolio</NavLink>
        <NavLink to={"/contact"}>Contact me</NavLink>
      </div>
    </>
  )
}

export default Navigation

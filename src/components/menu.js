import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

const ContainerNavBar = styled.div`
  background-color: white;
  @media (min-width: 425px) {
    height: 50px;
  }
`
const NavBar = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 50px);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  @media (min-width: 425px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 50px;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  }
`
const AboutMe = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  @media (min-width: 425px) {
    grid-area: 1 / 1 / 2 / 2;
  }
`
const Resume = styled.div`
  grid-area: 2 / 1 / 3 / 2;
  @media (min-width: 425px) {
    grid-area: 1 / 2 / 2 / 3;
  }
`
const Portfolio = styled.div`
  grid-area: 3 / 1 / 4 / 2;
  @media (min-width: 425px) {
    grid-area: 1 / 3 / 2 / 4;
  }
`
const ContactMe = styled.div`
  grid-area: 4 / 1 / 5 / 2 @media (min-width: 425px) {
    grid-area: 1 / 4 / 2 / 5;
  }
`
const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  width: 100%;
  height: 100%;
  color: #337ab7;
  &:hover {
    color: white;
    background-color: #337ab7;
  }
`
const Menu = () => {
  return (
    <>
      <ContainerNavBar>
        <NavBar>
          <AboutMe>
            <NavLink to={"/"}>About me</NavLink>
          </AboutMe>
          <Resume>
            <NavLink to={"/resume"}>Resume</NavLink>
          </Resume>
          <Portfolio>
            <NavLink to={"/portfolio"}>Portfolio</NavLink>
          </Portfolio>
          <ContactMe>
            <NavLink to={"/contact"}>Contact me</NavLink>
          </ContactMe>
        </NavBar>
      </ContainerNavBar>
    </>
  )
}

export default Menu

import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

const Skill = styled.div`
  display: grid;
  grid-template-columns: 1fr 11fr;
  grid-template-rows: 1fr;
  margin-bottom: 20px;
`
const Logo = styled.div`
  grid-area: 1 / 1 / 2 / 2;
`
const Percentage = styled.div`
  display: flex;
  align-items: center;
  grid-area: 1 / 2 / 2 / 3;
`

const Skills = () => {
  const skills = useStaticQuery(graphql`
    query {
      allDatoCmsSkill {
        edges {
          node {
            skill {
              skillName
              skillKnowledge
              logo {
                fluid {
                  ...GatsbyDatoCmsFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  const array_skills = skills.allDatoCmsSkill.edges[0].node.skill

  const Knowledge = styled.div`
    width: 100%;
    height: 30px;
    background-color: #f5f5f5;
  `

  return (
    <>
      <div className="container">
        <div className="title ml-20">Skills</div>
        <div className="content">
          {array_skills.map(skill => {
            const { skillName, skillKnowledge } = skill
            return (
              <>
                <Skill>
                  <Logo>
                    <Image
                      css={css`
                        width: 60px;
                      `}
                      fluid={skill.logo.fluid}
                      alt={skill.skill_name}
                    />
                  </Logo>
                  <Percentage>
                    <Knowledge>
                      <div
                        css={css`
                          display: flex;
                          align-items: center;
                          padding-left: 10px;
                          width: ${skillKnowledge}%;
                          background-color: #337ab7;
                          height: 30px;
                          color: white;
                        `}
                      >
                        {skillName} - {skillKnowledge}%
                      </div>
                    </Knowledge>
                  </Percentage>
                </Skill>
              </>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Skills

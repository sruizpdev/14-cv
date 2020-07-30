import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

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
        {array_skills.map(skill => {
          const { skillName, skillKnowledge } = skill
          return (
            <>
              <div className="row">
                <div className="one column">
                  <Image
                    css={css`
                      width: 100%;
                    `}
                    fluid={skill.logo.fluid}
                    alt={skill.skill_name}
                  />
                </div>
                <div className="eleven column">
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
                </div>
              </div>
            </>
          )
        })}
      </div>
    </>
  )
}

export default Skills

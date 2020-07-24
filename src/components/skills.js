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
  const Row = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    margin: 20px 0;
    align-items: center;
  `
  const ColLeft = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    flex: 1;
    padding-left: 30px;
  `
  const ColRight = styled.div`
    flex-direction: column;
    flex-basis: 100%;
    flex: 11;
    padding-right: 30px;
  `
  const Container = styled.div`
    margin-top: 30px;
  `

  return (
    <>
      <Container>
        {array_skills.map(skill => {
          const { skillName, skillKnowledge } = skill
          return (
            <>
              <Row>
                <ColLeft>
                  <Image
                    css={css`
                      width: 40px;
                    `}
                    fluid={skill.logo.fluid}
                    alt={skill.skill_name}
                  />
                </ColLeft>
                <ColRight>
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
                </ColRight>
              </Row>
            </>
          )
        })}
      </Container>
    </>
  )
}

export default Skills

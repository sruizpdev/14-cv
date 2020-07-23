import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const Skills = () => {
  const skills = useStaticQuery(graphql`
    query {
      allDatoCmsSkill {
        edges {
          node {
            skill
          }
        }
      }
    }
  `)
  const skills_array = skills.allDatoCmsSkill.edges

  return (
    <>
      {skills_array.map(skill => {
        return (
          <ul>
            <li>{skill.node.skill}</li>
          </ul>
        )
      })}
    </>
  )
}

export default Skills

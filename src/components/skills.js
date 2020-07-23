import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import DrawSkill from "./draw-skill"

const Skills = () => {
  const skills = useStaticQuery(graphql`
    query {
      allDatoCmsSkill {
        edges {
          node {
            skill {
              skillId
              skillName
              skillKnowledge
            }
          }
        }
      }
    }
  `)

  const array_skills = skills.allDatoCmsSkill.edges[0].node.skill
  console.log(array_skills)
  return (
    <>
      {array_skills.map(skill => (
        <DrawSkill key={skill.skillName} skill={skill} />
      ))}
    </>
  )
}

export default Skills

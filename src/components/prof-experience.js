import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import DrawExperience from "./draw-exp"

const ProfessionalExperience = () => {
  const profExp = useStaticQuery(graphql`
    query {
      allDatoCmsExperience {
        edges {
          node {
            experience {
              company
              date
              rol
              description
              technologies
            }
          }
        }
      }
    }
  `)
  const experience = profExp.allDatoCmsExperience.edges[0].node.experience

  return (
    <>
      {experience.map(exp => (
        <DrawExperience key={exp.company + exp.date} exp={exp} />
      ))}
    </>
  )
}

export default ProfessionalExperience

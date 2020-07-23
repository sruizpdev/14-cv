import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import DrawEdu from "./draw-edu"

const Education = () => {
  const edu = useStaticQuery(graphql`
    query {
      allDatoCmsEducation {
        edges {
          node {
            education {
              school
              date
              description
            }
          }
        }
      }
    }
  `)
  const edu_array = edu.allDatoCmsEducation.edges[0].node.education

  return (
    <>
      {edu_array.map(edu_item => (
        <DrawEdu edu_item={edu_item} />
      ))}
    </>
  )
}

export default Education

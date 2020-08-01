import React from "react"
import { graphql, useStaticQuery } from "gatsby"

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
      <div className="container">
        <div className="title ml-20">Professional experience</div>
        <div className="content">
          {experience.map(exp => {
            const { company, date, rol, description, technologies } = exp
            return (
              <div key={exp.company + exp.date}>
                <h3>
                  {company} ( {date} )
                </h3>
                <h3>{rol}</h3>
                {description}
                <p>Technologies: {technologies}</p>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default ProfessionalExperience

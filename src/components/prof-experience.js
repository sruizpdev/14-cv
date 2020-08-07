import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { css } from "@emotion/core"

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
                <span
                  css={css`
                    color: #337ab7;
                    font-size: 1.5rem;
                    display: block;
                  `}
                >
                  {rol}
                </span>
                <span
                  css={css`
                    color: gray;
                  `}
                >
                  {company} ( {date} )
                </span>

                <p>{description}</p>
                <p>
                  {" "}
                  <span
                    css={css`
                      font-weight: bold;
                    `}
                  >
                    Technologies:
                  </span>{" "}
                  {technologies}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default ProfessionalExperience

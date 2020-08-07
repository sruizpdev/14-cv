import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { css } from "@emotion/core"

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
      <div className="container">
        <div className="title ml-20">Education</div>
        <div className="content">
          {edu_array.map(edu_item => {
            const { school, date, description } = edu_item
            return (
              <div key={edu_item.description}>
                <span
                  css={css`
                    color: #337ab7;
                    font-size: 1.5rem;
                    display: block;
                  `}
                >
                  {school} ( {date} )
                </span>
                <span
                  css={css`
                    display: block;
                    margin-bottom: 20px;
                  `}
                >
                  {description}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Education

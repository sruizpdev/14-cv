import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import { css } from "@emotion/core"

const Portfolio = () => {
  const portfolioData = useStaticQuery(graphql`
    query {
      allDatoCmsPortfolio {
        edges {
          node {
            portfolio {
              title
              image {
                fluid {
                  ...GatsbyDatoCmsFluid
                }
              }
              description
              link
            }
          }
        }
      }
    }
  `)

  const listPages = portfolioData.allDatoCmsPortfolio.edges[0].node.portfolio

  return (
    <>
      {listPages.map(page => {
        const { title, description, image, link } = page
        return (
          <>
            <span className="title">{title}</span>
            <div className="row">
              <div className="four column">
                <a href={link}>
                  <Image
                    css={css`
                      width: 100%;
                    `}
                    fluid={image.fluid}
                    alt={title}
                  />
                </a>
              </div>
              <div className="eight column">{description}</div>
            </div>
          </>
        )
      })}
    </>
  )
}
export default Portfolio

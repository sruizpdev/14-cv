import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

const Thumb = styled.div`
  padding: 10px;
  border: 1px solid #f5f5f5;
`

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
            <Thumb key={page.link}>
              {title}
              <a href={link}>
                <Image
                  css={css`
                    width: 200px;
                  `}
                  fluid={image.fluid}
                  alt=""
                />
              </a>
              {description}
            </Thumb>
          </>
        )
      })}
    </>
  )
}

export default Portfolio

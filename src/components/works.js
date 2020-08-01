import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

const Work = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, 1fr);

  @media (min-width: 768px) {
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr;
  }
`
const ImageWork = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  margin-bottom: 20px;
  @media (min-width: 768px) {
    grid-area: 1 / 1 / 2 / 2;
  }
`
const DescriptionWork = styled.div`
  grid-area: 2 / 1 / 3 / 2;
  margin-top: 20px;
  @media (min-width: 768px) {
    margin-top: 0;
    padding-left: 20px;
    grid-area: 1 / 2 / 2 / 3;
  }
`
const Works = () => {
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
              technologies
              github
            }
          }
        }
      }
    }
  `)

  const listPages = portfolioData.allDatoCmsPortfolio.edges[0].node.portfolio

  return (
    <>
      <div className="container">
        <div className="title ml-20">Works</div>
        <div className="content">
          {listPages.map(page => {
            const {
              title,
              description,
              image,
              link,
              technologies,
              github,
            } = page
            return (
              <>
                <Work>
                  <ImageWork>
                    <Image
                      css={css`
                        width: 100%;
                      `}
                      fluid={image.fluid}
                      alt={title}
                    />
                  </ImageWork>
                  <DescriptionWork>
                    {description}
                    {technologies}
                    <a
                      css={css`
                        text-decoration: none;
                        color: #337ab7;
                      `}
                      href={github}
                    >
                      GitHub >>
                    </a>

                    <p>
                      <a
                        css={css`
                          text-decoration: none;
                          color: #337ab7;
                        `}
                        href={link}
                      >
                        Open >>
                      </a>
                    </p>
                  </DescriptionWork>
                </Work>
              </>
            )
          })}
        </div>
      </div>
    </>
  )
}
export default Works

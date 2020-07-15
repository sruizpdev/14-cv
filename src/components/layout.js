import React from "react"
import { Helmet } from "react-helmet"
import { Global, css } from "@emotion/core"
import Header from "./header"
const Layout = props => {
  return (
    <>
      <Global
        styles={css`
          html {
            font-size: 62.5%;
          }
          body {
            background-color: #f5f5f5;
            font-size: 16px;
            font-size: 1.6rem;
          }
          h1 {
            font-family: "Roboto", serif;
          }
          .container {
            background-color: white;
            max-width: 1200px;
            margin: 0 auto;
            padding: 2rem;
            margin-top: 2rem;
          }
          .row {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            width: 100%;
          }
          .column-one {
            display: flex;
            flex-direction: column;
            flex-basis: 100%;
            flex: 1;
          }
          .column-two {
            display: flex;
            flex-direction: column;
            flex-basis: 100%;
            flex: 3;
          }
        `}
      />

      <Helmet>
        <title>Sergio Ruiz Pérez - CV</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Header />
      {props.children}
    </>
  )
}

export default Layout

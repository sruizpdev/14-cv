import React from "react"
import { Helmet } from "react-helmet"
import { Global, css } from "@emotion/core"
import Header from "./header"
import bg from "../images/bg.jpg"
const Layout = props => {
  return (
    <>
      <Global
        styles={css`
          html {
            font-size: 62.5%;
            font-family: "PT Sans", sans-serif;
          }
          body {
            background-color: #f5f5f5;
            font-size: 16px;
            font-size: 1.6rem;
          }

          .container {
            max-width: 1200px;
            margin: 0 auto;
            margin-top: 30px;
          }
          .row {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            width: 100%;
          }
          .col-left,
          .col-right {
            display: flex;
            flex-direction: column;
            flex-basis: 100%;
            flex: 1.5;
            background-color: white;
          }
          .col-right {
            margin-left: 30px;
            @media (min-width: 480px) {
              flex: 3.5;
            }
          }
          .iconify {
            width: 40px;
            height: 40px;
            color: gray;
            border: 1px solid #f5f5f5;
            padding: 10px;
            margin: 10px;
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
          href="https://fonts.googleapis.com/css2?family=PT+Sans&display=swap"
          rel="stylesheet"
        />
        <script src="https://code.iconify.design/1/1.0.7/iconify.min.js"></script>
      </Helmet>
      <Header />

      {props.children}
    </>
  )
}

export default Layout

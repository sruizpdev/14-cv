import React from "react"
import { Helmet } from "react-helmet"
import Menu from "./menu"
import { Global, css } from "@emotion/core"

const Layout = props => {
  return (
    <>
      <Global
        styles={css`
          @import url("https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap");
          html {
            font-size: 62.5%;
            box-sizing: border-box;
          }
          *,
          *:before,
          *:after {
            box-sizing: inherit;
          }
          body {
            font-size: 18px;
            font-size: 1.8rem;
            line-height: 1.5;
            font-family: "PT Sans", sans-serif;
            background-color: #f5f5f5;
          }
          .parent {
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            margin-top: 100px;
            flex-direction: column;

            @media (min-width: 768px) {
              flex-direction: row;
            }
          }
          .col-left {
            flex: 1;
            background-color: white;
          }
          .col-right {
            flex: 1;
            background-color: white;
            @media (min-width: 768px) {
              margin-left: 20px;

              flex: 3;
            }
          }
          .container {
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: 50px 1px 1fr;
            grid-column-gap: 0px;
            grid-row-gap: 0px;
          }
          .title {
            grid-area: 1 / 1 / 2 / 2;
            display: flex;
            align-items: center;
          }

          .content {
            grid-area: 3 / 1 / 4 / 2;
            background-color: white;
            border-bottom: 3px solid #f5f5f5;
            border-top: 3px solid #f5f5f5;
            padding: 20px;
          }

          .iconify {
            width: 60px;
            height: 60px;
            color: gray;
            border: 1px solid #f5f5f5;
          }
          .center {
            justify-content: center;
          }
          .ml-20 {
            margin-left: 20px;
          }
          .bg-white {
            background-color: white;
          }
          .title {
            font-weight: 700;
          }
          h4 {
            margin: 0;
          }
        `}
      />
      <Helmet>
        <title>Sergio Ruiz Pérez - CV</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
        />
        <script src="https://code.iconify.design/1/1.0.7/iconify.min.js"></script>
      </Helmet>
      <Menu />

      {props.children}
    </>
  )
}

export default Layout

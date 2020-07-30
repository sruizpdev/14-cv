import React from "react"
import { Helmet } from "react-helmet"
import Header from "./header"
const Layout = props => {
  return (
    <>
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
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/skeleton-framework/1.1.1/skeleton.min.css"
        />

        <script src="https://code.iconify.design/1/1.0.7/iconify.min.js"></script>
      </Helmet>
      <Header />

      {props.children}
    </>
  )
}

export default Layout

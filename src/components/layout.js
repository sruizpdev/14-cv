import React from "react"
import { Helmet } from "react-helmet"
import Menu from "./menu"

const Layout = props => {
  return (
    <>
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

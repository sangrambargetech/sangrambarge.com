import React from "react"

import "./footer.css"

const Footer = ({ title }) => (
  <footer>
    { title }  © {new Date().getFullYear()}
  </footer>
)

export default Footer
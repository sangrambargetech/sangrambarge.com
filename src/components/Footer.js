import React from "react"

import "./footer.css"

const Footer = ({ title }) => (
  <footer>
    { title }  © {new Date().getFullYear()} 
 

<h4 className="footer">
MADE IN INDIA -  Made with ❤️
</h4>   
</footer>
)

export default Footer
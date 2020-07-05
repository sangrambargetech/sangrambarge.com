import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import  "./header.css"


function Header({ siteTitle }){
  const [isHover,setHover] = useState(false)
  const isHoverHandler=()=>{
    //setHover(true)
    if(isHover){
      setHover(false)
    }else {
      setHover(true)
    }
  } 

return (
  
  <header
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
      <Link
      className="header-text"
        to="/"
        style={{
          color:`#2b2b2b`,
          textDecoration: `none`,
        }}
      >
          {siteTitle}
        </Link>
      </h1>

      <nav
       style={{textAlign: `right`}}
      >
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
      </nav>

    </div>
  </header>
)
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

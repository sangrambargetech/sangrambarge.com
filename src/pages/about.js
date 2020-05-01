import React from "react"

import Layout from "../components/layout"

import { SocialLinks } from "../styled-components/about"


const About = () => (
  <Layout>
    <p>
      It is a long established fact that a reader will be distracted by the
      readable content of a page when looking at its layout. The point of using
      Lorem Ipsum is that it has a more-or-less normal distribution of letters,
      as opposed to using 'Content here, content here', making it look like
      readable English
    </p>
    
    <SocialLinks>
      <a href="https://sangrambarge.com">Website</a>
     
      <a href="https://github.com/sangrambarge">Github</a>
    </SocialLinks>
     
   
  </Layout>
)

export default About
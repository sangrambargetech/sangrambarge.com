import React from "react"

import Layout from "../components/layout"

import { SocialLinks } from "../styled-components/about"


const About = () => (
  <Layout>
    <p>
     Hi I am a Software Engineer with Interest in Javascript
     In the Part time I like Hacking in React and Node.js
    </p>
    
    <SocialLinks>
      <a href="https://sangrambarge.com">Website</a>
     
      <a href="https://github.com/sangrambarge">Github</a>
    </SocialLinks>
     
   
  </Layout>
)

export default About
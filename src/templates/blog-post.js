import React from "react"
import { graphql } from "gatsby"
import Layout from '../components/layout'
// import '../css/blog-post.css';
import SEO  from '../components/seo'

export default function Template({ data }) {
  const { markdownRemark: post } = data
  return (
    <Layout>
      <div style={{ maxWidth: `800`, marginBottom: `1.45rem` }}>
    <div className="blog-post-container">
    <SEO 
      title={post.frontmatter.title}
      description={post.frontmatter.excerpt}
    />
      <div className="blog-post">
        <h1>{post.frontmatter.title}</h1>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </div>
    </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`

import React from "react"
import { Link } from "gatsby"
import Layout from "../layouts/layout"
import Image from "../gatsby-components/image"
import SEO from "../gatsby-components/seo"
import { graphql } from 'gatsby'
import {Button, IconButton} from "../components/Element"


const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    
    
    
    <div style={{  maxWidth: `auto`, marginBottom: `1.45rem` }}>
      
      
     
      <br/>
      {data.allMarkdownRemark.edges.map(post => (
        <div key ={post.node.id}>
        <a  href={post.node.frontmatter.path}>{post.node.frontmatter.title}</a>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{post.node.frontmatter.date}
        </div>
      ))}
      
    </div>
   
  </Layout>
)

export const pageQuery = graphql`
query IndexQuery {
  allMarkdownRemark {
    edges {
      node {
        id
        frontmatter {
          path
          title
          tags
          date
          excerpt
        }
        html
      }
    }
  }
}
`
export default IndexPage

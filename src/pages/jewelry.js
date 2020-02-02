import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

export const query = graphql`
  query {
    file(relativePath: { eq: "jewelry.jpg" }) {
      childImageSharp {
        fixed(width:800) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

const JewelryPage = ({data}) => (
  <Layout>
    <SEO title="Page two" />
    <Img 
      fixed={data.file.childImageSharp.fixed}
      alt="assortment of fine jewelry" />
    <h2>Studio Jewelry</h2>
    <p>Did you know that I am an amateur silversmith?</p>
  </Layout>
)

export default JewelryPage

import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import Helmet from 'react-helmet';

const IndexPage = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title
  return (
    <Layout>
      <Helmet htmlAttributes={{ lang: 'en' }}>
        <title>${siteTitle}</title>
        <link href="https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css" rel="stylesheet" type="text/css" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
        <script id="snipcart" src="https://cdn.snipcart.com/scripts/2.0/snipcart.js" data-api-key="YTMxMmM2NTctOGM5OC00MDVlLWFjYTMtNGM0MGJhNjQzNjZjNjM3MTMxNTMyMTg5Mzc0Mjc4"></script>
      </Helmet>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <button
        className='snipcart-add-item buyBtn'
        data-item-id="3"
        data-item-price="55"
        // data-item-image={post.frontmatter.image}
        data-item-name="snipcart tutorial"
        data-item-description="the best snipcart"
        data-item-url={"https://jaksik-snipcart-demo.netlify.com"}>
        Buy
</button>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        author
      }
    }
  }
`

import React, { useState, useEffect } from "react"
import { Link, graphql } from "gatsby"
import Layout from '../components/Layout'
import Img from "gatsby-image"

const Theme = (props) => {
  const { title, description, logo } = props.data;

  return (
    <Layout>
      <div className="content">
        <Img fluid={logo.staticImage.childImageSharp.fluid} style={{ 'height': '150px', width: '150px', margin: '0 auto 24px ' }} />
        <div>
          {description}
        </div>
        <div className="title m-b-md">
          {title} world!
        </div>
        <div className="links">
          <Link to="/">world</Link>
          <Link to="/wide">wide</Link>
          <Link to="/web">web</Link>
        </div>

      </div>
    </Layout>
  )
}

Theme.defaultProps = {

}


export default Theme

export const pageQuery =
  graphql`
    query {
      logo: setting(key: {eq: "logo"}) {
        localImage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      title: setting(key: {eq: "title"}) {
        value
      }
      description: setting(key: {eq: "description"}) {
        value
      }
    }
`
import React, { useState, useEffect } from "react"
import { Link, graphql } from "gatsby"
import Layout from '../components/Layout'
import Img from "gatsby-image"

const Theme = (props) => {
  const { allSetting, logo } = props.data;
  let settings = allSetting.edges.reduce((a, x) => ({ ...a, [x.node.key]: x.node.value }), {})

  return (
    <Layout>
      <div className="content">
        <Img fluid={logo.staticImage.childImageSharp.fluid}  style={{ 'height': '150px', width: '150px', margin: '0 auto 24px ' }}  />
        <div>
          {settings.description}
        </div>
        <div className="title m-b-md">
          {settings.title} world!
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
  settings: {
    title: "",
    description: "",
    logo: ""
  }
}


export default Theme

export const pageQuery =
  graphql`
    query {
      allSetting {
        edges {
          node {
            value
            key
          }
        }
      },
      logo: setting(key: {eq: "logo"}) {
        staticImage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
`
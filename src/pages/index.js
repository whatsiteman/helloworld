import React, { useState, useEffect } from "react"
import { Link, graphql } from "gatsby"
import Layout from '../components/Layout'

const Theme = (props) => {
  const { allSetting } = props.data;
  let settings = allSetting.edges.reduce((a, x) => ({ ...a, [x.node.key]: x.node.value }), {})

  return (
    <Layout>
      <div className="content">
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
    description: ""
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
      }
    }
`
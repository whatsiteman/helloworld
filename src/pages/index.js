import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Router } from "@reach/router"
import Home from "../components/Home"
import Post from "../components/Post"

const IndexPage = () => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        pathPrefix
      }
    }
  `);

  return (
    <Router basepath={site.pathPrefix}>
      <Home path="/" /> 
      <Post path="/posts/:slug" />
    </Router>
  )
}

export default IndexPage

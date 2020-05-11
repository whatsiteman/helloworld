import React, { useEffect, useState } from "react";
import { graphql } from "gatsby";
import { Router } from "@reach/router";
import Home from "../clients/Home";
import Post from "../clients/Post";
import { isLocalPreview, getSettings } from "../service/DataService";

const IndexPage = ({ data }) => {
  const { site, allSetting } = data;
  const [settings, setSettings] = useState(
    allSetting.edges.reduce(
      (a, x) => ({ ...a, [x.node.key]: x.node.value }),
      {}
    ) || {}
  );
  useEffect(() => {
    getSettings((resultData) => {
      setSettings(resultData);
    });
  }, []);

  return isLocalPreview() ? (
    <Router basepath={site.pathPrefix}>
      <Home settings={settings} path="/" />
      <Post settings={settings} path="/posts/:slug" />
    </Router>
  ) : (
    <Home settings={settings} />
    // <Post /> Create blog posts dynamic pages at gatsby-node.js
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query {
    site {
      pathPrefix
    }
    allSetting {
      edges {
        node {
          key
          value
        }
      }
    }
  }
`;

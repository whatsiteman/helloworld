import React, { useEffect, useState } from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { getSettings } from "../service/DataService";

const NotFoundPage = ({ data }) => {
  const { allSetting } = data;
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

  return (
    <Layout settings={settings}>
      <SEO settings={settings} title="404" className="stretched" />
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  );
};

export default NotFoundPage;

export const pageQuery = graphql`
  query {
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

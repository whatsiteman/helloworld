import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Post from "../components/Post";

const PostTemplate = ({ data, pageContext }) => {
  const { post } = data;
  const { settings } = pageContext;
  return (
    <Layout settings={settings}>
      <SEO settings={settings} title={post.title} description={post.excerpt} />
      <Post settings={settings} post={post} />
    </Layout>
  );
};

export default PostTemplate;

export const pageQuery = graphql`
  query PostBySlug($slug: String!) {
    post(slug: { eq: $slug }) {
      id
      title
      excerpt
      image
    }
  }
`;

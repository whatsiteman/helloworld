import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Post from "../components/Post";
import { getPost } from "../service/DataService";

const PostPage = ({ settings, slug }) => {
  const [post, setPost] = useState({
    title: "",
    image: "",
    excerpt: "",
    html: {
      blocks: [],
    },
  });
  useEffect(() => {
    getPost(slug, (resultData) => {
      setPost(resultData);
    });
  }, [slug]);

  return (
    <Layout settings={settings}>
      <SEO settings={settings} title={post.title} description={post.excerpt} />
      <Post settings={settings} post={post} />
    </Layout>
  );
};

export default PostPage;

import React, { useEffect, useState } from "react";
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
    <>
      <SEO
        settings={settings}
        title={post.title}
        description={post.excerpt}
        className="stretched"
      />
      <Post settings={settings} post={post} />
    </>
  );
};

export default PostPage;

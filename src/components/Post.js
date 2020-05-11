import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import Image from "./Image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";

const Post = ({ post }) => {
  const [html, setHtml] = useState("");
  useEffect(() => {
    var html = "";
    if (post.html) {
      post.html.blocks.forEach(function (block) {
        switch (block.type) {
          case "header":
            html += `<h${block.data.level}>${block.data.text}</h${block.data.level}>`;
            break;
          case "paragraph":
            html += `<p>${block.data.text}</p>`;
            break;
          case "delimiter":
            html += "<hr />";
            break;
          case "image":
            html += `<img class="img-fluid" src="${block.data.file.url}" title="${block.data.caption}" /><br /><em>${block.data.caption}</em>`;
            break;
          case "list":
            html += "<ul>";
            block.data.items.forEach(function (li) {
              html += `<li>${li}</li>`;
            });
            html += "</ul>";
            break;
          default:
            console.log("Unknown block type", block.type);
            break;
        }
      });
      setHtml(html);
    }
  }, [post]);

  return (
    <section>
      <Image className="blog-post-header" src={post.image} alt={post.title} />
      <div
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: "42rem",
          padding: "2.625rem 1.3125rem",
        }}
      >
        <article>
          <header>
            <h1 className="nobottommargin">{post.title}</h1>
            <p>{post.excerpt}</p>
          </header>
          <hr />
          <section dangerouslySetInnerHTML={{ __html: html }} />
        </article>
      </div>
      <div
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: "50rem",
        }}
      >
        <Link to="/">
          <FontAwesomeIcon icon={faLongArrowAltLeft} size="3x" />
        </Link>
      </div>
    </section>
  );
};

export default Post;

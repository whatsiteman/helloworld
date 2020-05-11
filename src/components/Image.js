import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { isLocalPreview } from "../service/DataService";
import Img from "gatsby-image";
import path from "path";

function Image({ className, alt, src }) {
  const { allFile } = useStaticQuery(graphql`
    query {
      allFile {
        edges {
          node {
            base
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  const image = allFile.edges.find(
    (edge) => edge.node.base === path.basename(src)
  );

  return isLocalPreview() && src ? (
    <img className={className} src={src} alt={alt} />
  ) : image ? (
    <Img
      className={className}
      alt={alt}
      fluid={image.node.childImageSharp.fluid}
    />
  ) : null;
}

export default Image;

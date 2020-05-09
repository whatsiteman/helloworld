import React, { useEffect, useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby';
import { isLocalPreview } from '../service/DataService'
import Img from "gatsby-image"

function Image({ className, alt, src }) {

    const { allFile } = useStaticQuery(graphql`
        query {
            allFile {
                edges {
                    node {
                    url
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

    const [image, setImage] = useState(null);
    useEffect(() => {
        const image = allFile.edges.find(
            edge => edge.node.url === src
        )
        setImage(image);
    }, [allFile, src]);

    return (
        <>
            {isLocalPreview() ? < img className={className} src={src} alt={alt} />
                : <Img className={className} alt={alt} fluid={image.node.childImageSharp.fluid} />}
        </>
    );
}
export default Image
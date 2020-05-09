import React, { useEffect, useState } from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { getPosts } from '../service/DataService'
import Layout from "./Layout"
import Image from "./Image"
import SEO from "./SEO"

const IndexPage = () => {
    const { allPost } = useStaticQuery(graphql`
    query {
      allPost {
        edges {
          node {
            id
            title
            slug
            excerpt
            image
          }
        }
      }
    }
  `);

    const [posts, setPosts] = useState([]);
    useEffect(() => {
        getPosts(allPost)
            .then((resultData) => {
                setPosts(resultData);
            });
    }, [allPost]);

    return (
        <Layout>
            <SEO title="Home" />
            <section className="pt-40" style={{ margin: '0 auto', maxWidth: "750px" }}>
                <div className="container">
                    {posts.map((node, i) => {
                        const title = node.title || node.slug
                        return (
                            <Link className="row mb-3" key={node.slug} to={`posts/${node.slug}`} >
                                {node.image ? <div className={`col-12 col-lg-5`}>
                                    <Image src={node.image} alt={title} />
                                </div> : null}
                                <div className={`col-12 ${node.image ? 'col-lg-7' : 'col-lg-12'}`} key={node.slug}>
                                    <div className="heading-block">
                                        <h2>{title}</h2>
                                    </div>
                                    <p className="lead" dangerouslySetInnerHTML={{
                                        __html: node.excerpt
                                    }} />
                                </div>

                            </Link>
                        )
                    })}
                </div>
            </section>
        </Layout>
    )
}

export default IndexPage

const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const postTemplate = path.resolve(`./src/components/Post.js`)
  const result = await graphql(
    `query {
        allPost(
          sort: { order: DESC },
          limit: 1000
        ) {
          edges {
            node {
              title
              slug
              excerpt
              image
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blog posts pages.
  const posts = result.data.allPost.edges
  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    createPage({
      path: "/posts/" + post.node.slug,
      component: postTemplate,
      context: {
        slug: post.node.slug,
        previous,
        next
      },
    })
  })
}

exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions
  // Make the front page match everything client side.
  // Normally your paths should be a bit more judicious.
  if (page.path === `/`) {
    page.matchPath = `/*`
    createPage(page)
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
      type post implements Node {
        title: String
        slug: String!
        excerpt: String
        image: String
        published_at: Date
      }
    `
  createTypes(typeDefs)
}
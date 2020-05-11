const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allSetting {
        edges {
          node {
            key
            value
          }
        }
      }
      allPost(sort: { order: DESC }, limit: 1000) {
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
  `);

  if (result.data) {
    const postTemplate = path.resolve(`./src/templates/Post.js`);
    // Create blog posts pages.
    const settings = result.data.allSetting.edges.reduce(
      (a, x) => ({ ...a, [x.node.key]: x.node.value }),
      {}
    );
    const posts = result.data.allPost.edges;
    posts.forEach(({ node }, index) => {
      const previous =
        index === posts.length - 1 ? null : posts[index + 1].node;
      const next = index === 0 ? null : posts[index - 1].node;

      createPage({
        path: "/posts/" + node.slug,
        component: postTemplate,
        context: {
          settings,
          slug: node.slug,
          previous,
          next,
        },
      });
    });
  }
};

exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions;
  if (page.path === `/`) {
    page.matchPath = `/*`;
    createPage(page);
  }
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
      type post implements Node {
        title: String
        slug: String!
        excerpt: String
        image: String
        html: String
        published_at: String
      }
    `;
  createTypes(typeDefs);
};

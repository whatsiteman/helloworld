
const activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"

require("dotenv").config({
  path: `.env.${activeEnv}`,
})

module.exports = {
  pathPrefix: process.env.PREFIX,
  siteMetadata: {
    title: `Hello world`,
    description: ``,
    author: `@whatsiteman`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      // Querying to a SQLite database
      resolve: `gatsby-source-sql`,
      options: {
        typeName: 'Setting',
        fieldName: 'setting',
        dbEngine: {
          client: 'sqlite3',
          connection: {
            filename: './content/database.sqlite',
          },
          useNullAsDefault: true
        },
        queryChain: function(x) {
          return x.select("key", "value").from("settings")
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `whatsiteman-helloworld`,
        short_name: `helloworld`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    }
  ],
}

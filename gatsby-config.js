
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
      resolve: `gatsby-source-sql`,
      options: {
        typeName: 'setting',
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
      resolve: `gatsby-plugin-remote-images`,
      options: {
        nodeType: 'setting',
        imagePath: 'value',
        prepareUrl: url => (url.startsWith(process.env.BASE_URL) ? url : process.env.BASE_URL + "images/logo.png"),
      },
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
        icon: `src/images/logo.png`
      },
    }
  ],
}

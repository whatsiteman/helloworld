const activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development";

require("dotenv").config({
  path: `.env.${activeEnv}`,
});

module.exports = {
  pathPrefix: process.env.PREFIX,
  //pathPrefix: '/preview/helloworld',
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
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-sql`,
      options: {
        typeName: "setting",
        fieldName: "setting",
        dbEngine: {
          client: "sqlite3",
          connection: {
            filename: "./content/database.sqlite",
          },
          useNullAsDefault: true,
        },
        queryChain: function (x) {
          return x.select("key", "value").from("settings");
        },
      },
    },
    {
      resolve: `gatsby-source-sql`,
      options: {
        typeName: "post",
        fieldName: "post",
        dbEngine: {
          client: "sqlite3",
          connection: {
            filename: "./content/database.sqlite",
          },
          useNullAsDefault: false,
        },
        queryChain: function (x) {
          return x
            .select("title", "slug", "excerpt", "image", "html", "published_at")
            .from("posts")
            .orderBy("published_at", "desc");
        },
      },
    },
    {
      resolve: `gatsby-plugin-remote-images`,
      options: {
        nodeType: "setting",
        imagePath: "value",
        prepareUrl: (url) =>
          url.startsWith(process.env.BASE_URL)
            ? url
            : process.env.BASE_URL + "images/example.jpg",
      },
    },
    {
      resolve: `gatsby-plugin-remote-images`,
      options: {
        nodeType: "post",
        imagePath: "image",
        prepareUrl: (url) =>
          url.startsWith(process.env.BASE_URL)
            ? url
            : process.env.BASE_URL + "images/example.jpg",
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
        icon: `src/images/logo.png`,
      },
    },
  ],
};

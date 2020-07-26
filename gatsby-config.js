module.exports = {
  pathPrefix: `/portfolio`,
  siteMetadata: {
    title: `Alexandre LAM | Portfolio`,
    description: ``,
    author: `Alexandre LAM`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Alexandre LAM | Portfolio`,
        short_name: `portfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `source code pro\:300,400,700`,
          `source sans pro\:300,400,700` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    }
  ],
}

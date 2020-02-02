module.exports = {
  siteMetadata: {
    title: `Karaoke Queen`,
    description: `This site chronicles Aisha's favorite karaoke spots.`,
    author: `Aisha Blake`,
    social: [
      {
        name: `Twitter`,
        url: `https://twitter.com/AishaBlake`
      },
      {
        name: `GitHub`,
        url: `https://github.com/AishaBlake`
      }
    ],
    menuLinks: [
      {
        name: `Home`,
        link: `/`
      },
      {
        name: `Blog`,
        link: `/blog`
      },
      {
        name: `Speaking`,
        link: `/speaking`
      },
      {
        name: `Page`,
        link: `/page-2`
      },
      {
        name: `Jewelry`,
        link: `/jewelry`
      },
    ]
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-theme-blog`,
      options: {
        basePath: `/blog`
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

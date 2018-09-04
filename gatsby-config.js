module.exports = {
  siteMetadata: {
    title: 'ak&co',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-page-transitions`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/`,
        name: 'markdown-pages',
      },
    },
    `gatsby-transformer-remark`,
  ],
}

/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
});
module.exports = {
  /* Your site config here */
  // iteMetadata: {
  //   stitle: "Gatsby Default Starter",
  // },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        // your WordPress source
        baseUrl: `www.okaraherbal.com`,
        protocol: `https`,
        // is it hosted on wordpress.com, or self-hosted?
        hostingWPCOM: false,
        // does your site use the Advanced Custom Fields Plugin?
        useACF: true,
        verboseOutput: true,
        auth:{
          htaccess_user: process.env.WP_USERNAME,
          htaccess_pass: process.env.WP_PASSWORD,

          // htaccess_pass: process.env.WP_PASSWORD,
          // htaccess_user: process.env.WP_USERNAME,

          htaccess_sendImmediately: false,
        },
        includedRoutes: [
          '**/posts',
          "**/pages",
          "**/categories",
          "**/tags",
          "**/users",
        ],
        excludedRoutes: ["**/posts/1456"],
        keepMediaSizes: false,
        normalizer: function({ entities }) {
          return entities
        },
        normalizers: normalizers => [
          ...normalizers,
          {
            name: "nameOfTheFunction",
            normalizer: function({ entities }) {
              // manipulate entities here
              return entities
            },
          },
        ],
      }
    },
  ],
}

// next.config.js
const withPlugins = require('next-compose-plugins')
const path = require('path')
const withSass = require('@zeit/next-sass')
const images = require('next-images')

const nextConfig = {
  distDir: 'build',
  /* config options here */
  webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
    // Perform customizations to webpack config
    // Important: return the modified config

    config.resolve.alias = {
      '<components>': path.resolve(__dirname, './components'),
      '<static>': path.resolve(__dirname, './static'),
      '<styles>': path.resolve(__dirname, './styles'),
    }

    return config
  },
}

module.exports = withPlugins(
  [
    [
      withSass,
      {
        cssModules: true,
        cssLoaderOptions: {
          localIdentName: '[local]___[hash:base64:5]',
        },
      },
    ],

    images,
  ],
  nextConfig,
)

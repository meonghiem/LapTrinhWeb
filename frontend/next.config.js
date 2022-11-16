const path = require('path')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: !!process.env.ANALYZE,
})

const env = {
  ENVIRONMENT: process.env.ENVIRONMENT || '',
}

const sassConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles/sass')],
  },
}

const webpack = (config, _options) => {
  config.module.rules.push({
    test: /\.html$/i,
    use: 'raw-loader',
  })
  config.module.rules.push({
    test: /\.svg$/,
    issuer: /\.[jt]sx?$/,
    use: [
      {
        loader: '@svgr/webpack',
        options: {
          svgoConfig: {
            plugins: [
              {
                name: 'removeViewBox',
                active: false,
              },
            ],
          },
        },
      },
    ],
    exclude: /(\/fonts)/,
  })
  return config
}

const settings = {
  reactStrictMode: false,
  env,
  generateBuildId: async () => {
    return 'hgm'
  },
  ...sassConfig,
  webpack,
}

module.exports = withBundleAnalyzer(settings)

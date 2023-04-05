const path = require('path')

module.exports = {
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  staticPageGenerationTimeout: 300000,
  swcMinify: false,
  exclude: /\.svg$/,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  inlineImageLimit: false,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '153.92.209.247',
        port: '',
      },
    ],
  },

  webpack(config, options) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack', 'url-loader'],
    })

    return config
  },
}

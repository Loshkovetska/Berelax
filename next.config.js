const path = require('path')

module.exports = {
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },

  swcMinify: false,
  exclude: /\.svg$/,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  inlineImageLimit: false,

  webpack(config, options) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack', 'url-loader'],
    })

    config.module.rules.push({
      test: /\.mp3|ogg$/,
      use: ['file-loader'],
    })

    return config
  },
}

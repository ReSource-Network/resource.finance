// const isDev = process.env.NODE_ENV === 'development' || !process.env.NODE_ENV

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true"
})

module.exports = withBundleAnalyzer({
  images: {
    domains: ["pbs.twimg.com"]
  },

  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {

    return config
  }
})

// deafult
const withCSS = require("@zeit/next-css");

// default Config 
// module.exports = withCSS({});
// Custom Config
// module.exports = withCSS({
//   cssModules: true
// })

module.exports = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: {
    domains: [
      "images.unsplash.com",
      "links.papareact.com",
      'platform-lookaside.fbsbx.com',
      "firebasestorage.googleapis.com",
      "scontent.fpat3-3.fna.fbcdn.net",
      "source.unsplash.com",
      "pbs.twimg.com",
      "lh3.googleusercontent.com",
      "avatars.githubusercontent.com"
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });
    
    return config;
  }
}

const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");

const nextConfig = {
  reactStrictMode: true,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
  images: {
    disableStaticImages: true,
  },
};
module.exports = withPlugins(
  [
    [
      withImages({
        webpack(config, options) {
          return config;
        },
      }),
    ],
  ],
  nextConfig
);

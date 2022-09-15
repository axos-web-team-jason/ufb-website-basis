/** @type {import('next').NextConfig} */

const path = require("path");

const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")], // SCSS/SASS options
  },
  images: {
    domains: ["images.ctfassets.net", "axosbank.com", "ufbdirect.com"],
  },
};

module.exports = nextConfig;

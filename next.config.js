const isProd = process.env.NODE_ENV === "production";
const repoName = "pack4travel.github.io";

console.log('isProd', isProd)

const nextConfig = {
  output: "export",
  basePath: isProd ? "/pack4travel.github.io" : "",
  assetPrefix: isProd ? "/pack4travel.github.io/" : "",
};

module.exports = nextConfig;

const isProd = process.env.NODE_ENV === "production";
const repoName = "pack4travel.github.io";

const nextConfig = {
  output: "export",
  basePath: isProd ? `/${repoName}` : "",
  assetPrefix: isProd ? `/${repoName}` : "",
};

module.exports = nextConfig;

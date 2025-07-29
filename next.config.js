const isProd = process.env.NODE_ENV === "production";
const repoName = "pack4travel";

const nextConfig = {
  output: "export",
  basePath: isProd ? "/pack4travel" : "",
  assetPrefix: isProd ? "/pack4travel/" : "",
};

module.exports = nextConfig;

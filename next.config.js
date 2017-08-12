const webpack = require("webpack");
require("dotenv").config();

const GA_KEY = process.env.NODE_ENV === "production" ? "UA-92022203-3" : "NONE";

module.exports = {
  webpack: (config, { dev }) => {
    config.plugins.push(
      new webpack.DefinePlugin({
        "process.env.DOMAIN": JSON.stringify(process.env.DOMAIN),
        "process.env.SERVER": JSON.stringify(process.env.SERVER),
        "process.env.STRIPE_PUBLIC_KEY": JSON.stringify(process.env.STRIPE_PUBLIC_KEY),
        "process.env.GA_KEY": JSON.stringify(GA_KEY),
      })
    );
    return config;
  },
};

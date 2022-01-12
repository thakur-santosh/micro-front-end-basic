const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  mode: 'development',
  devServer: {
    port: 8082,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'cart',
      filename: 'remoteEntry.js',
      exposes: {
        './CartShow': './src/bootstrap.js',
      },
      shared: ['faker'],
      // shared: {
      // sharing common dependencies
      // faker: {
      //   singleton: true, // singleton is use to load just one version of library no matter what
      // },
      //},
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};

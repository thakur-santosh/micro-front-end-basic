const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
module.exports = {
  mode: 'development',
  devServer: {
    port: 8081,
  },
  plugins: [
    // file emitted by Module federation plugin "remoteEntry.js" which indicated where to get the file and how to get them .\
    // src_index.js webpack version of index.js which are executable by browser
    new ModuleFederationPlugin({
      name: 'products',
      filename: 'remoteEntry.js',
      exposes: {
        './ProductsIndex': './src/bootstrap',
        // file needs to expose when ever  federation ask for "ProductsIndex"
        // we can expose many files
        // check container bootstrap file there we have ProductsIndex
      },
      shared: ['faker'],
      // shared: {
      // sharing common dependencies
      //   faker: {
      //     singleton: true, // singleton is use to load just one version of library no matter what
      //   },
      // },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};

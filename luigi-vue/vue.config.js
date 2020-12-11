const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  pages: {
    sampleapp: {
      entry: 'src/main.js',
      template: 'public/sampleapp.html',
      filename: 'sampleapp.html'
    }
  },
  lintOnSave:true,
  runtimeCompiler: true,
  outputDir: 'dist',
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ['css-loader']
        },
        {
          test: /\.scss$/,
          use: ['sass-loader']
        }
      ]
    },
    plugins: [
      new CopyWebpackPlugin(
        [
          {context:'public',to:'index.html',from:'index.html'},
          {context:'node_modules/@luigi-project/core',to:'./luigi-core',from:{glob:'**',dot:true}},
          {context:'node_modules/@luigi-project/client',to:'./luigi-client',from:{glob:'**',dot:true}},
          {
            from: 'node_modules/fundamental-styles/dist',
            to: './fundamental-styles'
          },
          {
            from: 'node_modules/@sap-theming/theming-base-content',
            to: './fonts'
          }
        ],
        {ignore:['.gitkeep','**/.DS_Store','**/Thumbs.db'],debug:'warning'}
      )]
    }
  };

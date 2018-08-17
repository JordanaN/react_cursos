// esse a rquivo é executado pelo node

const webpack = require('webpack')

// esse plugin le e interpreta os arquivos .css
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  // configuração da aplicação
  // arquivo de entrada e saida do webpack
  entry: './ex/index.js',
    output: {
      path: __dirname + '/public',
      filename: './bundle.js'
    },
  //config do servidor
  devServer: {
    port: 8080,
    contentBase: './public'
  },
  plugins: [
    new ExtractTextPlugin('app.css')
  ],
  //transpailer usando babel, o webpack é configurado para ler o es2015 e arquivos .css
  module:{
    loaders:[{
      test: /.js?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query:{
        presets: ['es2015', 'react'],
        plugins: ['transform-object-rest-spread']
      }
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract("style-loader", "css-loader")
    }]
  }
}

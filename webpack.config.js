const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './handler.js', // Ange din ingångsfil (t.ex., handler.js)
  target: 'node', // Gör att Webpack bygger för Node.js
  externals: [nodeExternals()], // Exkludera Node-moduler från bundlen
  output: {
    path: path.resolve(__dirname, 'build'), // Sätt outputmapp till "build"
    filename: 'handler.js', // Namn på den utgående bundlen
    libraryTarget: 'commonjs2' // Gör det kompatibelt med Lambda-funktioner
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Hantera alla .js-filer
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Använd Babel för att transpila, om du använder ES6+
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};

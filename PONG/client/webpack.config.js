// const path = require('path');
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';

const PRODUCTION = true;
export default {
  entry: './src/scripts/pong.js',
  mode :  (PRODUCTION ? 'production' : 'development'),
  watch: false,
  output: {
    path: path.resolve('../server/public'),
    filename: 'bundle.js'
  },
  devtool : (PRODUCTION ? undefined : 'eval-source-map'),
  devServer: {
    static: {
       publicPath: path.resolve('dist'),
       watch : false
    },
    host: 'localhost',
    port : 8888,
    open : true
},
  module: {
    rules : [{
      test: /\.css$/,
      use: [
        { loader: 'style-loader' },
        { loader: 'css-loader' }
      ]
    },
      {
        test: /\.(png|jpg|gif)/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name : '[name].[ext]',
              outputPath : 'images'
            }
          }
        ]
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
    }),
    new CopyPlugin({
      patterns: [
	{
    from: './src/*.html',
	  to:   'html/[name].html'
	},
	{
	  from: './src/images/*',
	  to:   'images/[name][ext]'
	},
	{
	  from: './src/style/*',
	  to:   'style/[name][ext]'
	},
      ]
   })
]
};
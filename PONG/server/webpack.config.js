// const path = require('path');
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';

const PRODUCTION = true;
export default {
  entry: '../client/src/scripts/pong.js',
  mode :  (PRODUCTION ? 'production' : 'development'),
  output: {
    path: (PRODUCTION ? path.resolve('./public') : path.resolve('../client/dist')),
    filename: (PRODUCTION ? 'bundle.js' : 'scripts/bundle.js')
  },
  devtool : (PRODUCTION ? undefined : 'eval-source-map'),
  devServer: {
    static: {
       publicPath: path.resolve('../client/dist'),
       watch : true
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
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
  template: "../client/src/index.html",
  filename: "./index.html"
    }),
    new CopyPlugin({
      patterns: [
	{
    from: '../client/src/*.html',
	  to:   'html/[name].html'
	},
	{
	  from: '../client/src/images/*',
	  to:   'images/[name][ext]'
	},
	{
	  from: '../client/src/style/*',
	  to:   'style/[name][ext]'
	},
      ]
   })
]
};
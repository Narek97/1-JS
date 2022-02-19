const path = require('path');
// HTML stextelu hamar vor avtomat bolor scriptnery vonch petqa miachni
const HTMLWebpackPlugin = require('html-webpack-plugin')
// amen angam nor script stexteluc hin scriptnery jnji
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin')
//  elementnery copi naelu hamar
const CopyWevpackPligin = require('copy-webpack-plugin')
// css miachnelu hamar
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// css y optimachnelu hamar
const OptimizeCssAssetWebpackPlugin = require('optimize-css-assets-webpack-plugin')

const TerserWebpackPlugin = require('terser-webpack-plugin')



const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev

console.log(isDev)

const optimization = () => {
  const config = {
    splitChunks: {
      chunks: 'all'
    }
  }

  if (isProd) {
    config.minimizer = [
      new OptimizeCssAssetWebpackPlugin(),
      new TerserWebpackPlugin()
    ]
  }

  return config
}

// babeli optinons dashty anyndhat chgrelu hamar or js,react.js,tye.scrpti stex enq grum tali 
const babelOptions = preset => {
  const opts = {
    presets: [
      '@babel/preset-env'
    ],
    plugins: [
      '@babel/plugin-proposal-class-properties'
    ]
  }

  if (preset) {
    opts.presets.push(preset)
  }

  return opts
}


module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: {
    main: ['@babel/polyfill', './index.jsx'],
    analitics: './analitics.js'
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    // import aneluch vorpeszi verji .json,.js cgrenq stex enq grum
    extensions: ['.js', '.json', '.png'],
    // importi jamanak hascen grely karanq stex grenq u undex uxaki grenq anuny orinak @models
    alias: {
      '@models': path.resolve(__dirname, 'src/models'),
      "@": path.resolve(__dirname, 'src'),
    }
  },
  // optimizachnelu hamar
  optimization: optimization(),

  // kodum popoxutyun naeluch miangamich ejy refresh lini dra hamar nstachnum neq npm i webpack-dev-server
  devServer: {
    port: 4200,
    hot: isDev
  },
  plugins: [
    new HTMLWebpackPlugin({
      //  src-i html um grat tegery vorpesi dist - i htmlum cuych ta
      template: './index.html',
      minify: {
        collapseWhitespace: isProd
      }
    }),
    //  hin scriptnery jnjelu hamar
    new CleanWebpackPlugin(),
    //  elementnery copi naelu hamar
    new CopyWevpackPligin([{
      from: path.resolve(__dirname, 'src/favicon.ico'),
      to: path.resolve(__dirname, 'dist'),
    }]),
    //  css i hamar
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    })
  ],
  // webpack ashaxatuma menak js i ev jsoni het css nkrneri het ashxatelu hamar
  // 'style-loader','css-loader' petqa nstachnenq npm - ov
  module: {
    rules: [
      // css - i hamar
      {
        test: /\.css$/,
        use: [{
            loader: MiniCssExtractPlugin.loader,
            options: {
              hrm: isDev,
              reloadAll: true
            },

          },
          'css-loader'
        ]
      },
      // nkarneri hamar
      {
        test: /\.{png|jpg|svg|gif}$/,
        use: ['file-loader']
      },
      // babely miachnelu hamar
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: {
          loader: 'babel-loader',
          options: babelOptions()
        },
      },
      // reactin miachnelu hamar
      // instal enq anum npm install --save-dev @babel/preset-react
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: {
          loader: 'babel-loader',
          options: babelOptions('@babel/preset-react')
        }
      }


    ]
  }
};


// npx webpack - run talu hamar
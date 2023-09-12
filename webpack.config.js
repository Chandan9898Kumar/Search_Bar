const path = require('path');
const webpack = require('webpack');
const isProd = process.env.NODE_SHELL_ENV === 'production';
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HappyPack = require('happypack');

const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;

const extractCSS = new MiniCssExtractPlugin({
  filename: '[name]-css.css',
  chunkFilename: "[id].css"
});

const devtool = isProd ?
  'source-map' :
  'cheap-module-eval-source-map';

const mode = isProd ? 'production' : 'development';

const entry = {
  bundle: ['.src/index.js']
};

const output = {
  path: path.resolve('./public/assets/'),
  library: `contactcenter`,
  publicPath: '/',
  libraryTarget: `umd`,
  chunkFilename: 'chunk.[name].[chunkhash].js'
};

const modules = {
  rules: [
    {
      test: cssRegex,
      exclude: cssModuleRegex,
      loader: ['style-loader', 'css-loader']
    },
    {
     test: /\.(scss)$/,
     use: [{
        loader: 'style-loader', // inject CSS to page
    },{
      loader: 'css-loader', // translates CSS into CommonJS modules
    }, {
      loader: 'postcss-loader', // Run post css actions
      options: {
        plugins: function () { // post css plugins, can be exported to postcss.config.js
          return [
            require('precss'),
            require('autoprefixer')
          ];
        }
      }
    }, {
      loader: 'sass-loader' // compiles Sass to CSS
    }]

    },
  
    {
      test: /\.(js|jsx)$/,
      use: [{
        loader: 'babel-loader',
        query: getBabelConfig()
      }],
      exclude: /node_modules/
    },
    {
      test: /\.svg($|\?)/,
      loader: 'file-loader?limit=65000&mimetype=image/svg+xml&name=[name].[ext]'
    }, {
      test: /\.woff($|\?)/,
      loader: 'file-loader?limit=65000&mimetype=application/font-woff&name=[name].[ext]'
    }, {
      test: /\.woff2($|\?)/,
      loader: 'file-loader?limit=65000&mimetype=application/font-woff2&name=[name].[ext]'
    }, {
      test: /\.[ot]tf($|\?)/,
      loader: 'file-loader?limit=65000&mimetype=application/octet-stream&name=[name].[ext]'
    }, {
      test: /\.eot($|\?)/,
      loader: 'file-loader?limit=65000&mimetype=application/vnd.ms-fontobject&name=[name].[ext]'
    }, {
      test: /\.html$/,
      loader: 'ngtemplate-loader!html-loader'
    },
    {
      test: /\.(png|jpg|gif)($|\?)/,
      loader: 'url-loader?limit=65000&name=[name].[ext]'
    },
    {
      test: require.resolve('jquery'),
      loader: 'expose-loader?jQuery!expose-loader?$'
    }
  ]
};

const plugins = [
  new HappyPack({
    loaders: [{
      loader: 'babel-loader',
      query: getBabelConfig()
    }]
  }),
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery'
  }),
  extractCSS,
  new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  new webpack.LoaderOptionsPlugin({
    minimize: true,
    debug: false
  })
];


// Production configs and setup
if (isProd) {
  plugins.push(
    new UglifyJsPlugin({
      uglifyOptions: {
        ecma: 8
      }
    })
  );
}

function getBabelConfig() {
  return {
    presets: [
      'env',
      'react', ['babel-preset-env', {
        targets: {
          browsers: ["last 2 versions"],
        },
      }],
    ],
    ignore: [
      "d3"
    ],
    plugins: [
      ["transform-strict-mode", {
        strict: false
      }],
      'transform-object-rest-spread',
      'transform-class-properties',
      'syntax-dynamic-import',
      'transform-function-bind',
    ],
  };
}

module.exports = {
  context: path.resolve(__dirname, './'),
  devtool,
  mode,
  entry,
  output,
  module: modules,
  plugins,
  watch: true,
  resolve: {
    modules: ['node_modules'],
    extensions: ['.min.js', '.js', '.json', '.scss', '.css']
  },
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
      umd: 'react',
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom',
      umd: 'react-dom',
    },
    
  }
};

/*var webpack = require('webpack');

module.exports = {
    //插件项
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE.ENV':"development"
        }),
        new webpack.HotModuleReplacementPlugin(),
        //提公用js到common.js文件中
        new webpack.optimize.CommonsChunkPlugin('common.js'),
        //将样式统一发布到style.css中
        new ExtractTextPlugin("style.css", {
            allChunks: true,
            disable: false
        }),
        //使用ProvidePlugin加载使用频率高的模块
        new webpack.ProvidePlugin({
            $: "webpack-zepto"
        })
    ],
    //页面入口文件配置
    entry: {
        index : './src/main.js'
    },
    //入口文件输出配置
    output: {
        path: __dirname +'/dist/',
        filename: 'bundle.js'//[name].js'
    },
    module: {
        //加载器配置
        loaders: [
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
        ]
    },
    devServer:{
        historyApiFallback:true,
        hot:true,
        inline:true,
        progress:true,//报错无法识别，删除后也能正常刷新
    },
    //其它解决方案配置
    resolve: {
        extensions: ['', '.js', '.json', '.scss'],
        alias: {
            filter: path.join(__dirname, 'src/filters')
        }
    }
};*/





var webpack = require("webpack");
var path = require("path");

module.exports = {
    entry: {
        "app": "./src/views/index.js"
    },
    output: {
        filename: "[name].js",
        path: __dirname + "/dist",
        publicPath: "/dist/"
    },
    devServer:{
        inline: false,
        contentBase: "./dist"
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: "babel-loader",
                query: {
                    presets: ["react", "es2015", "stage-0"],
                    cacheDirectory: true
                },
                exclude: /node_modules/
            }
        ]
    },
    plugins: []
}
/*var webpack = require("webpack");
var webpackBase = require("./webpack.config.base.js");

var cfg = Object.assign(webpackBase, {
    devtool: "cheap-module-eval-source-map"
});

module.exports = cfg;

module.exports = {
    entry: "./src/js/main.js",
    output: {
        path: '/Users/admin/Git/react-flux-architecture-es6/dist/',
        filename: "bundle.js",
        publicPath: '/'
    },
    devServer: {
        inline: false,
        contentBase: "./dist",
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude:/(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }

};*/

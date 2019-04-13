const path=require('path');
const glob=require('glob');
const HtmlPlugin=require('html-webpack-plugin');
const ExtractTextPlugin=require('extract-text-webpack-plugin');
const PurifyCSSPlugin=require('purifycss-webpack');
const webpack=require('webpack');
const entry=require('./entry');
const CopyWebpackPlugin=require('copy-webpack-plugin');
module.exports={
    mode:'development',
    entry:entry,
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'index.js',
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                // use:['style-loader','css-loader']
                use:ExtractTextPlugin.extract({
                    fallback:'style-loader',
                    use:[{
                        loader:'css-loader',
                        options:{importLoaders:1}
                    },'postcss-loader']
                })
            },
            {
                test:/\.scss$/,
                use:ExtractTextPlugin.extract({
                    fallback:'style-loader',
                    use:['css-loader','sass-loader'],
                })
            },
            {
                test:/\.(png|jpg|gif)$/,
                use:[{
                    loader:'url-loader',
                    options:{
                        limit:500,
                        outputPath:'img/'
                    }
                }]
            },
            {
                test:/\.(htm|html)/i,
                use:['html-withimg-loader']
            },
            {
                test:/\.js$/i,
                use:[{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-env']
                    }
                }],
                exclude:/node_modules/
            }
        ]
    },
    plugins:[
        new HtmlPlugin({
            minify:{
                removeAttributeQuotes:true
            },
            template:'./src/index.html',
            hash:true
        }),
        new ExtractTextPlugin('index.css'),
        new PurifyCSSPlugin({
            paths:glob.sync(path.join(__dirname,'src/*.html')),
        }),
        new webpack.BannerPlugin('打包注释啊！！！！！！！'),
        new CopyWebpackPlugin([{
            from:__dirname+'/src/public',
            to:'./public'
        }])
    ],  
    devServer:{
        contentBase:path.resolve(__dirname,'dist'),
        host:'localhost',
        compress:true,
        port:8081,
        open:true
    }
}
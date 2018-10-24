/**
 * @file devServer
 * @author luwenlong
 */

const WebpackDevServer = require('webpack-dev-server')
const webpack = require('webpack')
const config = require('./webpack.config')
const host = require('./getHost')

const compiler = webpack({...config, mode: 'development'})

const port = '9045'

const server = new WebpackDevServer(compiler, {
    open: false,
    compress: true,
    historyApiFallback: {
        index: 'tpl/index.html'
    },
    contentBase: "../",
    quiet: false,
    noInfo: false,
    hot: true,
    hotOnly: true,
    inline: true,
    lazy: false,
    progress: false,
    disableHostCheck: true,
    watchOptions: {
        aggregateTimeout: 300
    },
    host: host,
    port: port,
    proxy: {
        '/napi/cuser': {
            // target: 'https://www.dingdangbao.com',
            target: 'http://test.dingdangbao.com',
            changeOrigin: true,
            secure: false
        },
        '/napi/sms': {
            // target: 'https://www.dingdangbao.com',
            target: 'http://test.dingdangbao.com',
            changeOrigin: true,
            secure: false
        },
        '/napi/innosps': {
            // target: 'https://www.dingdangbao.com',
            target: 'https://www.inno-life.cc/api',
            changeOrigin: true,
            secure: false,
            pathRewrite: {
                '/napi': ''
            }
        },
        '/diagnosis/productList': {
            target: 'http://iapi.innolife.org.cn',
            changeOrigin: true,
            secure: false
        },
        '/diagnosis/sendSms': {
            target: 'http://iapi.innolife.org.cn',
            changeOrigin: true,
            secure: false
        },
        '/diagnosis/save': {
            target: 'http://iapi.innolife.org.cn',
            changeOrigin: true,
            secure: false
        },
        '/diagnosis/diagnosisResult': {
            target: 'http://iapi.innolife.org.cn',
            changeOrigin: true,
            secure: false
        },
        '/api/user/trace': {
            target: 'https://www.inno-life.cc',
            changeOrigin: true,
            secure: false
        }
    }
})

server.listen(port, host, function() {
    console.log('server is running on\nhttp://%s:%s', host, port)
})

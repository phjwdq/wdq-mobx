module.exports = {
    //parser: 'sugarss',
    plugins: [
        require('precss'),
        require('postcss-import'),
        require('postcss-preset-env'),
        require('cssnano')
    ]
}

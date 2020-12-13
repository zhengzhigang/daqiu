module.exports = {
    lintOnSave: false,//关闭eslint
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    require('postcss-px2rem')({remUnit:75}), // 换算的基数
                ]
            }
        }
    }
}

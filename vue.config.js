module.exports = {
    configureWebpack:{
        resolve:{
            alias:{
                "vue$":"vue/dist/vue.esm.js"
            }
        }
    },
    devServer:{
        proxy:{
            "/data":{
                "target":"http://www.bjlink32.com/data9.php",
                "changeOrigin":true,
                "pathRewrite":{"^/data":""}
            }
        }
    }
}
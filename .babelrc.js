module.exports = {
    // TODO: 如果是type=mode 就不编译
    // <script src="//polyfill.io/v3/polyfill.min.js"></script>
    // <script type="moudle" src="/main.js"></script>
    // <script nomodule src="/main.es5.js"></script> 
    presets: [
        // [
        //     "@babel/preset-env", {
        //         "modules": false
        //     }
        // ],
        "react-app"
    ],
    // 使用 https://polyfill.io/v3/polyfill.min.js 替代
    //     plugins: [
    //         [
    //             "@babel/plugin-transform-runtime",
    //             {
    //                 "absoluteRuntime": false,
    //                 "corejs": false,
    //                 "helpers": false,
    //                 "regenerator": true,
    //                 "useESModules": false,
    //                 "version": "7.0.0-beta.0"
    //             }
    //         ]
    //     ]
};

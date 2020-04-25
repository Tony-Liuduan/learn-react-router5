module.exports = {
    // TODO: 如果是type=mode 就不编译
    // <script src="//polyfill.io/v3/polyfill.min.js"></script>
    // <script type="moudle" src="/main.js"></script>
    // <script nomodule src="/main.es5.js"></script> 
    "presets": [
        [
            "@babel/preset-env",
            {
                "useBuiltIns": "usage",// usage 会根据配置的浏览器兼容，以及你代码中用到的 API 来进行 polyfill，实现了按需添加。
                "corejs": 3,
                "targets": {
                    "chrome": "58",
                    // "ie": "11",
                }
            }
        ],
        "react-app",
    ],
    "plugins": [
        [
            "@babel/plugin-transform-runtime",
        ]
    ]
}

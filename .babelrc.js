// .babelrc.js

module.exports = {
    plugins: [
        [
            'import',
            {
                libraryName: 'lodash-es',
                libraryDirectory: '',
                camel2DashComponentName: false,
            },
            'lodash-es',
        ],
        ['@babel/plugin-proposal-decorators', { legacy: true }],
    ],
    env: {
        development: {
            presets: ['react-app'],
        },
        production: {
            presets: [
                [
                    '@babel/preset-env',
                    {
                        modules: false, //设置ES6 模块转译的模块格式 默认为 commonjs
                        debug: false, // debug，编译时打印处理过程
                        useBuiltIns: 'usage', // 配合 browserList 自动按需导入 polyfill
                        corejs: { version: 3, proposals: true },
                        // targets: {
                        //     android: '6',
                        //     ios: '10',
                        //     edge: '17',
                        //     chrome: '67',
                        // },
                    },
                ],
                'react-app',
            ],
        },
        test: {},
    },
};

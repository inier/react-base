// .env-cmdrc.js
// 环境变量值会被识别为string，在使用时需要处理类型，特别是bool值，需要 === "true"判断真值。
module.exports = {
    development: {
        REACT_APP_HMR: true,
        EXTEND_ESLINT: true,
    },
    production: {
        GENERATE_SOURCEMAP: false,
        BUNDLE_VISUALIZE: true,
        STYLELINT: false,
    },
    test: {
        VCONSOLE: true, // 开启Vconsole
    },
    uat: {},
};

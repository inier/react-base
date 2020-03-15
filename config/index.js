// react-hot-loader
const rewireReactHotLoader = require('./rewireReactHotLoader');
// 增加stylelint
const addStylelint = require('./addStyleLint');
// 代码优化压缩: 在react-scripts 2.1.5的基础上增加了去除console的功能
const minimizer = require('./minimizer');
// moduleIds和chunkIds固化
const namedOptimize = require('./namedOptimize');
// 优化lodash打包
const optimizeLodash = require('./optimizeLodash');
// prerender SPA
const prerender = require('./prerender');
// 构建显示优化
const buildFriendly = require('./buildFriendly');
// webpack alias
const webpackAlias = require('./aliasConfig');
// Moment库语言包优化
const optimizeMoment = require('./optimizeMoment');
// 构建速度分析
const speedMeasure = require('./speedMeasure');
// 开启移动端调试面板
const vConsole = require('./vConsole');
// dropConsole
const dropConsole = require('./dropConsole');
// 提取第三方库（暂停用）
// const extractVendors = require('./extractVendors');
// 抽出第三方库的配置
const vendorConfig = require('./vendorConfig');

module.exports = {
    webpackAlias,
    vendorConfig,
    prerender,
    rewireReactHotLoader,
    addStylelint,
    minimizer,
    // extractVendors,
    namedOptimize,
    optimizeLodash,
    optimizeMoment,
    buildFriendly,
    speedMeasure,
    vConsole,
    dropConsole,
};

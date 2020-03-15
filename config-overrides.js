// Migrating from create-react-app without ejecting

// https://github.com/timarney/react-app-rewired/
// https://github.com/arackaf/customize-cra
const {
    override,
    addBabelPlugin,
    addBabelPlugins,
    addBundleVisualizer,
    addDecoratorsLegacy,
    addWebpackAlias,
    addWebpackExternals,
    adjustWorkbox,
    addPostcssPlugins,
    disableEsLint,
    enableEslintTypescript,
    fixBabelImports,
    useBabelRc,
    setWebpackOptimizationSplitChunks,
} = require('customize-cra');

// 自定义配置
const {
    buildFriendly,
    speedMeasure,
    webpackAlias,
    addStylelint,
    minimizer,
    namedOptimize,
    optimizeLodash,
    optimizeMoment,
    prerender,
    vConsole,
    dropConsole,
    vendorConfig,
    rewireReactHotLoader,
} = require('./config');

// https://github.com/postcss/postcss
const postcssPlugins = [
    // 合并重复项
    require('css-mqpacker')(),
    // px2rem
    // require('postcss-px2rem')({ remUnit: 37.5 }),
];

const { BUNDLE_VISUALIZE, STYLELINT, VCONSOLE, DROP_CONSOLE } = process.env;
console.log('当前环境：', process.env.NODE_ENV);

module.exports = override(
    vConsole(VCONSOLE),
    // dropConsole(DROP_CONSOLE),
    buildFriendly(),
    addWebpackAlias(webpackAlias),
    addPostcssPlugins(postcssPlugins),
    addStylelint(STYLELINT),
    // addWebpackExternals({
    //     react: 'React',
    //     'react-dom': 'ReactDom',
    // }),    
    setWebpackOptimizationSplitChunks(vendorConfig),
    useBabelRc(),
    namedOptimize(),
    optimizeLodash(),
    // optimizeMoment(),
    // minimizer(),
    // 开启打包速度分析
    // speedMeasure(),
    BUNDLE_VISUALIZE === 'true' && addBundleVisualizer()
    // prerender(),
);

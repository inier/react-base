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
    useEslintRc,
    useBabelRc,
    setWebpackOptimizationSplitChunks,
} = require('customize-cra');

// 自定义配置
const {
    prerender,
    rewireReactHotLoader,
    dropConsole,
    extractVendors,
    checkCLIOptions,
    buildFriendly,
    speedMeasure,
    vConsole,
    getWebpackAlias,
    addStylelint,
    minimizer,
    namedOptimize,
    optimizeLodash,
    optimizeMoment,
    rewireThemeIce,
    rewireThemeFusion,
    getVendorConfig,
} = require('@ozo/cra-rewired');

const pkgJSON = require(`${__dirname}/package.json`);

// https://github.com/postcss/postcss
const postcssPlugins = [
    // 合并重复项
    require('css-mqpacker')(),
    // px2rem
    // require('postcss-px2rem')({ remUnit: 37.5 }),
];

const { BUNDLE_VISUALIZE, STYLELINT, VCONSOLE, DROP_CONSOLE } = process.env;
const hasVisualizer =
    process.env.NODE_ENV === 'production' || BUNDLE_VISUALIZE === 'true' || checkCLIOptions('--visualize');
console.log('当前环境：', process.env.NODE_ENV);

module.exports = override(
    vConsole(VCONSOLE),
    rewireThemeIce(pkgJSON),
    rewireThemeFusion(pkgJSON),
    buildFriendly(),
    addWebpackAlias(getWebpackAlias(pkgJSON)),
    addPostcssPlugins(postcssPlugins),
    addStylelint(STYLELINT),
    setWebpackOptimizationSplitChunks(getVendorConfig()),
    // addWebpackExternals({
    //     react: 'React',
    //     'react-dom': 'ReactDom',
    // }),
    // extractVendors(),
    useEslintRc(),
    useBabelRc(),
    namedOptimize(),
    optimizeLodash(),
    optimizeMoment(),
    minimizer({
        drop_console: DROP_CONSOLE,
    }),
    // 开启打包速度分析
    speedMeasure(),
    prerender(),
    hasVisualizer && addBundleVisualizer()
);

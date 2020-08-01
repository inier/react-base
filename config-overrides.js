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
    useEslintConfig,
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
    process.env.NODE_ENV === 'production' || BUNDLE_VISUALIZE === 'true' || checkCLIOptions('--analyze');
console.log('当前环境：', process.env.NODE_ENV);

module.exports = {
    webpack: override(
        buildFriendly(),
        // 开启打包速度分析
        speedMeasure(),
        hasVisualizer && addBundleVisualizer(),
        addWebpackAlias(getWebpackAlias(pkgJSON)),
        vConsole(VCONSOLE),
        addStylelint(STYLELINT),
        addPostcssPlugins(postcssPlugins),
        // 使用.eslintrc.js 覆盖CRA的eslint规则
        useEslintConfig(require('./.eslintrc.js')),
        useBabelRc(),
        setWebpackOptimizationSplitChunks(getVendorConfig()),
        // addWebpackExternals({
        //     react: 'React',
        //     'react-dom': 'ReactDom',
        // }),
        namedOptimize(),
        optimizeLodash(),
        optimizeMoment(),
        minimizer({
            drop_console: DROP_CONSOLE,
        })
    ),
    jest: override(
        (() => (config) => {
            const jestExtLibs = ['lodash-es'].join('|');
            const key = 'transformIgnorePatterns';

            if (key === 'transformIgnorePatterns' && Array.isArray(config[key]) && config[key].length) {
                const tIndex = config[key].findIndex((item) => {
                    return item.includes('node_modules');
                });
                if (tIndex !== -1) {
                    config[key].splice(tIndex, 1, `/node_modules/(?!(${jestExtLibs}))`);
                }
            }

            return config;
        })()
    ),
};

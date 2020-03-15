const resolve = require('./paths');

// webpack alias
/* eslint-disable no-useless-computed-key */
module.exports = {
    // src目录别名
    ['@']: resolve('src'),
    // api目录别名：接口相关
    ['@api']: resolve('src/api'),
    // mock目录别名：模拟数据相关
    ['@mock']: resolve('src/mock'),
    // 项目公共资源目录别名
    ['@assets']: resolve('src/assets'),
    // 项目组件文件夹别名
    ['@components']: resolve('src/components'),
    // layouts文件夹别名
    ['@layouts']: resolve('src/layouts'),
    // modules文件夹别名
    ['@modules']: resolve('src/modules'),
    // pages文件夹别名
    ['@pages']: resolve('src/pages'),
    // routes文件夹别名
    ['@routes']: resolve('src/routes'),
    // stores文件夹别名
    ['@stores']: resolve('src/stores'),
    // utils文件夹别名
    ['@utils']: resolve('src/utils'),
    // style样式重置文件别名
    ['@reset']: resolve('style/_reset.scss'),
    // style公共配置文件别名，包括mixins和utils等
    ['@settings']: resolve('src/_settings.scss'),
    // 路由配置文件别名
    ['@routerConfig']: resolve('src/routerConfig.js'),
    // 菜单配置文件别名
    ['@menuConfig']: resolve('src/menuConfig.js'),
    // node_modules目录别名
    ['@node_modules']: resolve('node_modules'),
};

const resolve = require('./paths');

// webpack alias
/* eslint-disable no-useless-computed-key */
module.exports = {
    // src目录别名
    ['@']: resolve('src'),
    // style文件夹别名
    ['@style']: resolve('style'),
    ['lodash-es']: 'lodash',
};

/**
 * 用于将需要的数据保存到本地存储，如LocalStorage等
 */
import { autorun } from 'mobx';

/**
 * 设置对某个Store下的某个字段进行监听，如果该字段有变化就存储到LocalStorage
 * 注:尽量不要使用Object对象来进行持久化，因为对象中的某个值改变不会触发反应函数。
 * 如果必须使用对象，那请使用深拷贝对对象赋值
 * @param {String} store Store名
 * @param {string} name 字段名
 * @param {boolean} inSessionStorage 是否存放到sessionStorage
 * @param {boolean} global 是否用于全局，true则存入storage时不携带store名
 */
function persistItem(store, name, inSessionStorage = false, global = false) {
    const storeage = inSessionStorage ? window.sessionStorage : window.localStorage;
    // 避免名称冲突
    const keyName = global ? `${name}` : `${store.constructor.name}_${name}`;
    const persistedData = storeage.getItem(keyName);

    //如果本地已经存在数据，将数据初始化到store变量上
    if (persistedData !== null) {
        // 如果能转换为对象，则会自动转换为对象
        try {
            store[name] = JSON.parse(persistedData);
        } catch (error) {
            store[name] = persistedData;
        }
    }

    autorun(() => {
        let data = store[name];
        if (typeof data !== 'undefined' && typeof data !== 'function' && data !== null) {
            storeage.setItem(keyName, typeof data === 'object' ? JSON.stringify(data) : data);
        } else {
            storeage.removeItem(keyName);
        }
    });
}

/**
 * @description 设置需要持久化数据(localstorage或者sessionstorage)
 * @param {String} store Store名
 * @param {string|array} paramNames 需要持久化的参数的名称
 * @param {boolean} inSessionStorage 是否持久化到sessionStorage
 * @param {boolean} global 是否用于全局，true则存入storage时不携带store名
 */
export function persistParam(store, paramNames, inSessionStorage = false, global = false) {
    if (!paramNames) {
        return;
    }

    if (typeof paramNames === 'string') {
        persistItem(store, paramNames, inSessionStorage, global);
    } else {
        paramNames.forEach((keyName) => persistItem(store, keyName, inSessionStorage, global));
    }
}

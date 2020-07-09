[TOC]

# React 模板工程

本模板工程是通用工程，支持前端开发和中后台开发。

基于 create-react-app v3(简称 cra3)创建，整合了 react router 等基础组件，旨在作为基础工程以便能快速衍生其他复杂工程模板。

本文档部分内容来自官方文档，如需查看原版请[点击这里](https://github.com/facebookincubator/create-react-app/blob/master/README.md)

CRA3 升级的特性，可以参考 releases[https://github.com/facebook/create-react-app/releases/tag/v3.0.1], [英文文档](https://www.colabug.com/6107594.html) ，[中文文档](https://www.oschina.net/news/106172/create-react-app-3-released)

CRA2 升级的特性，可以参考[英文文档](https://reactjs.org/blog/2018/10/01/create-react-app-v2.html) ，[中文文档](https://www.css88.com/archives/9739)

## 技术特性

该工程的主要技术特性如下：

-   [SCSS](http://sass.bootcss.com/) / CSS Modules 样式处理（不熟悉的同学，先学习下：）
-   公共 SCSS mixins 支持
-   基于 fetch 数据请求
-   支持 mobx 状态管理\*
-   支持 Fusion Design 平台，UI 和前端协同\*
-   支持公共主题可配置
-   Eslint / Stylelint / Prettier 代码检查
-   Markdownlint 规范 [详情](https://github.com/ruanyf/document-style-guide/) [规则](https://github.com/hustcc/lint-md/tree/master/packages/lint-md)
-   代码提交日志规范
-   支持[装饰器 @](https://segmentfault.com/a/1190000018313262) @babel/plugin-proposal-decorators
-   支持[可选链运算符 ?.](https://segmentfault.com/a/1190000021167608?utm_source=tag-newest) @babel/plugin-proposal-optional-chaining
-   支持[空位合并运算符 ??](https://segmentfault.com/a/1190000021167608?utm_source=tag-newest) @babel/plugin-proposal-nullish-coalescing-operator

更多特性，赶快体验！

## 依赖环境

-   node 8+
-    babel 7
-   webpack 4
-   React 16+
-   ES6+
-   node-sass 4+

## 项目规范

### 文件结构

```plain
├── .vscode/          			 # vscode相关
│   └── launch.json  		  	 # 存放调试配置，如Debugger for Chrome调试配置等
├── build/          		  	 # 构建目录，构建后创建
├── config/      		       	 # 脚手架自定义配置目录等
│   ├── xxx.js  	 	       	 # 各自定义配置项
│   └── index.js	  	     	 # 自定义配置项的统一export
│
├── doc/            		  	 # 文档目录，存放项目相关文档
├── node_modules/   		  	 # node依赖模块，安装组件后自动创建
├── public/         		  	 # 静态文件
│   ├── favicon.ico 		  	 # H5 icon，浏览器地址栏图标
│   ├── ie.html  		       	 # ie及低版本浏览器兼容提示
│   ├── index.html  		  	 # 应用入口页模板，如果要引入第三方JS可以放在这个目录*
│   ├── logo*.png  		     	 # Web App应用图标，默认包括1x和3x两种尺寸
│   ├── manifest.json		  	 # Web App配置文件
│   └── robots.txt		    	 # robots协议配置文件
│
├── src/             		  	 # 项目root
│   ├── mock/           		 # mock目录，根据项目需要创建
│   ├── api/         		  	 # 项目api相关
│   	├── Agent.js    	  	 # 接口请求处理逻辑，默认采用fetch
│   	├── ApiUrl.js   	  	 # 接口请求api地址注册
│   	├── ResponseCode.js	     # 错误码定义
│   	└── index.js      		 # 接口的统一export
│
│   ├── assets/      		  	 # 公共静态资源（组件除外），如图片/字体/json等，文件名一律小写
│   	├── font/      		  	 # 公共字体
│   	├── img/      		  	 # 公共图片，应当按模块分文件夹存放
│   	└── index.js    	  	 # 公共资源的统一export
│
│   ├── components/	       	 # 组件集合，用于存放与业务无关的（展示型组件）、可复用的组件
│   	├── xxx/      		  	 # xxx组件
│   		├── components/   	 # 组件独有的子组件，目录结构与父级一致
│   		├── img/      	  	 # 组件的图片目录
│   		├── xxx.jsx	      	 # 组件的jsx文件
│   		├── xxx.scss    	 # 组件的scss文件，按需选择
│   		├── xxx.module.scss* # 组件的scss文件，开启css-modules，按需选择
│   		├── xxx.mdx	  	  	 # 组件的说明文档（功能复杂组件可选）
│   	  	└── index.js 	     # 组件的export
│   	└── index.js    	  	 # 所有组件的统一export
│
│   ├── layouts/     		  	 # 项目布局集合，用于路由分层
│   	├── xxxLayout/  	  	 # xxx布局组件
│   		├── components/   	 # 布局独有的子组件，目录结构与通用组件一致
│   		├── style/    	     # 布局主题scss文件
│   		├── xxx.jsx	      	 # 组件的jsx文件
│   		├── xxx.scss      	 # 组件的scss文件
│   		├── xxx.module.scss* # 组件的scss文件,开启css-modules
│       ├── menuConfig.js 		 # 菜单配置（顶部导航/侧边导航/底部导航等）
│   	  └── index.js 	    	 # 布局的export
│   	└── index.js    	  	 # 布局的统一export
│
│   ├── modules/    		  	 # 业务组件集合（目录结构与layouts一致）
│   	├── xxx/  		  	  	 # 各模块目录
│   	└── index.js	  	  	 # 容器组件相关的统一export
│
│   ├── pages/      		  	 # 页面级组件，用于组合modules/layouts等，目录结构=通用组件
│   	├── xxx/  			  	 # 各页面目录
│   	└── index.js      		 # 页面的统一export
│
│   ├── stores/      		  	 # 数据store相关，与mobx等库配合
│   	├── Store.js    	 	 # 数据层的基础类
│   	├── xxxStore.js  	  	 # 各业务store，需要继承Store基类
│   	└── index.js	  	  	 # store相关的统一export
│
│   ├── utils/      		  	 # 辅助工具集合，项目通用方法、函数等
│   	├── xxx.js  	 	   	 # 各辅助工具
│   	├── polyfill.js    		 # 浏览器补丁相关
│   	└── index.js	  	  	 # 辅助工具类的统一export
│
│   ├── settings.scss			 # 项目scss变量定义，用于重置基础变量
│   ├── App.js      		  	 # 应用入口组件
│   ├── App.css / .scss*
│   ├── App.test.js
│   ├── index.js    		  	 # React入口js
│   ├── index.css / .scss

│   ├── router.js		 	   	 # 全局路由处理逻辑
│   ├── routerConfig.js 		 # 全局路由配置
│   ├── serviceWorker.js
│   ├── setupProxy.js 			 # 全局代理配置
│   └── vendorConfig.js 		 # 用于配置第三方库splitting的范围
│
├── style/           		     # style相关
│   ├── default.scss  			 # 默认出口，包含全局变量覆盖、全部基础组件，用于编译css
│   ├── reset.scss 		   		 # 全局reset规则，项目不可修改
│   └── settings.scss  			 # 基础变量出口，用于组件开发引入，仅包括公用的 mixins 和utils
│
├── tests/          		  	 # 存放测试用例
├── .babelrc.js			         # babel 自定义配置文件
├── .commitlintrc.js	    	 # 提交日志规范相关
├── .editorconfig       		 # 编辑器配置文件
├── .env		       	      	 # 环境变量配置文件，公共变量配置
├── .env-cmdrc.test.js  		 # 环境变量测试文件
├── .env-cmdrc.js      			 # 环境变量配置文件，不同环境的变量配置
├── .eslintignore     			 # eslint 忽略配置，类似 .gitignore
├── .eslintrc.js       			 # eslint 配置文件
├── .gitattributes     		     # 指定由 git 使用的文件和路径的属性
├── .gitignore          	     # git 提交忽略配置文件
├── .lintmdrc           	     # markdownlint 配置文件
├── .lintstagedrc.js    	     # lint-staged 配置文件
├── .npmignore          	     # npm 提交忽略配置文件
├── .nvmrc             		     # 配置项目所使用的 node 版本（采用nvm管理node版本）
├── .prettierignore     		 # prettier 忽略配置，类似 .gitignore
├── .prettierrc.js   	  		 # prettier 配置文件
├── .stylelintignore	  		 # stylelint 忽略配置，类似 .gitignore
├── .stylelintrc.js			     # stylelint 配置文件
├── .yarnrc              	     # yarn 配置文件
├── config-overrides.js			 # 在不eject的情况下，扩展webpack配置
├── jsconfig.json        	     # 指定根文件和js语言服务提供的功能选项
├── package.json		      	 # 包含项目的基本信息、项目的依赖以及项目的相关执行命令等
├── package-lock.json     	     # npm 依赖包版本lock
├── README.md				     # 描述此项目的功能、特点、API 等信息
├── server.js       	  		 # 本地构建服务器
├── server.test.js  	  		 # 本地开发测试服务器
└── yarn.lock            	     # yarn 依赖包版本lock
```

> 以上结构是项目的推荐结构；带有 * 的文件为可选。
>
> 以上未提及的文件夹或文件，不用关注。
> 以上各目录中的统一 export 不包括第三方组件，且未使用的组件应避免在此导出。

### 命名规范

详情参见[项目级规范](doc/前端开发规范.md)。

### 组件分类

规范中将组件划分为通用组件和业务组件两大类。

#### 通用组件（复用级别：框架级）

通用组件也叫**展示型**组件，与具体业务解耦，只负责接收指定格式的数据进行 UI 展示。可在大多数项目中通用。约定存放在**`src/components`**目录中。

为便于沉淀通用组件库，并提高其可维护性。约定将通用组件划分以下 4 类：

+ **basis**：基础型组件，构成网页的基本元素。例如图标、按钮等；
+ **layout**：布局型组件，用于组织页面布局，例如网格系统、两侧留白、水平留白等；
+ **block**：区块/模块型组件，具有独立的功能，低于页面级的组件，例如支持筛选和分页的表格，可以嵌套；
+ **template**：模板型组件，可重用的复杂 UI 结构，一般为页面级组件，例如支付成功页等。

#### 业务组件（复用级别：项目级）

业务组件是指与项目紧密相关的组件，一般会捆绑具体的数据或状态，也叫**容器型**组件。分为以下 3 类：

- **modules（`src/modules`）**：功能组件，用于归类项目开发中，无法沉淀为框架级的、但项目内可复用的功能块，一般由**数据或状态** + **通用组件**组成。例如购物车模块、用户登录等。

- **pages （`src/pages`）**：页面组件，用于归类按页面流划分的页面组件，一般由**项目级 modules** + **通用组件（布局类组件等）**组成。

- **layouts（`src/layouts`）**：结构组件，主要用于对整个项目的页面结构做归类，抽出公共的页面级容器组件。例如可定义：

  ```
  - MainLayout：用于一级页面，带有一级导航、标题栏、底部导航等。
  - BaseLayout：用于二级页面，如商品列表、商品详情等。
  - BlankLayout：什么都不带，100%高的容器，用于404 等特殊页面布局等。
  
  当然，也可以根据业务需求划分，如 GoodDetailLayout 商品详情模块、UserLayout 登录/注册/忘记密码等。其原则是可重用，便于组织页面。
  ```

### 开发须知

-   推荐通过各类目录下的index.js统一export。便于对该目录下的资源或组件进行统一注册、替换和添加描述备注等，提高可维护性。
-   通过@、@/components、@components等别名来引入组件。

-   开发前先根据页面梳理组件，并对组件分级；做好 store 划分，提取公共数据处理逻辑。
-   尽量做到页面均由**布局组件**+ **通用组件/项目级功能组件**组成，不含原子标签（div、span 等）。



## 开发调试

### 安装依赖

国内推荐使用 yarn 或 cnpm，npm 可能无法正常安装 node-sass。

```plain
> yarn
```

### 命令行

+ yarn start/npm start  启动开发环境，会自动在浏览器打开 [http://localhost:3000](http://localhost:3000)，支持热更新。
+ yarn build 生产环境打包
+ yarn test 进行测试
+ yarn commit 命令行提交，类型选择
+ yarn version changlog 及版本管理

> 推荐编辑器 [Visual Studio Code](https://code.visualstudio.com/)，如果出现 vscode 占用系统资源 100%的情况，请检查是否安装了 SCSS InterliSense 、IntelliSense for CSS class names in HTML 插件，若存在，请关闭这类插件。****

### 使用全局别名

已定义以下全局别名：

```js
{
    ['@']: resolve('src'),
    ['@style']: resolve('style'),  // style样式重置文件别名
}
```

> 使用别名，scss 名称@import 时需要写完整，文件名中的\_ 和 .scss 后缀名不能少。
> 使用第三方库的 css 时，可以通过`~`引入或写全`node_modules`的路径。

### 修改入口页标题

如果要修改网页标题，请修改package.json的title字段；或者修改 public/index.html中的<title>标签内容。
还可替换 favicon.ico 为自己的 ico。
manifest.json 中的信息也一并修改。

### 设计与开发协同

详情参见[UI设计与前端协同](https://zhuanlan.zhihu.com/p/158206021)。

### CSS 样式编写

##### 定义 SCSS 变量

项目开发中，对于在主题包之外的公共特性，如颜色、字号等，可以统一定义到`src/settings.scss`文件中，以便于后期维护和管理。注意命名规范和分组。

```scss
// ./src/settings.scss
$modal-color: #f33;

// 组件的xxx.scss
@import '@settings'; //引入路径根据组件scss文件位置进行修正
.content {
    color: $modal-color;
}
```

##### 使用 SCSS mixins

脚手架默认引入了一些常用的 mixins，使用方法参考：https://github.com/inier/mixins。

```scss
@import '~@style/settings'; //引入路径根据组件scss文件位置进行修正

/*-------- 极细边框 --------*/
// 上、右、下、左边框
.border-t {
    @include onepx-scale(#eee, top, after, 2px);
}

.border-r {
    @include onepx-scale(#eee, right, after, 2px);
}
```

此外，也可以在`style/settings.scss`文件中自定义 mixins。

##### 不开启 CSS-Module

css 样式可以选择是否开启 CSS-Module 功能，先介绍不开启的方式。

第 1 步： 样式文件命名为 xxx.scss;

```scss
.content {
    padding: 10px;
    .logo {
        width: 40px;
    }
}
```

第 2 步：在 jsx 中引入时使用`import './xxx.scss';`

```js
import './xxx.scss';
...
<main className="content">
	<div className="logo"></div>
</main>
```

> 未开启 CSS-Module 功能，将需要注意避免各组件间的样式冲突，推荐 BEM 命名规范，用法自行搜索。

##### 开启了 CSS-Module 功能

第 1 步： 样式文件命名为 xxx.module.scss;

```scss
.content {
    padding: 10px;
    .logo {
        width: 40px;
    }
}
```

第 2 步：在 jsx 中引入时使用`import styles from './xxx.module.scss';`

```js
import styles from './xxx.module.scss';
...
<main className={styles.content}>
	<div className={styles.logo}></div>
</main>
```

> 开启 CSS-Module 功能后，将不在支持直接用引号引入该文件的样式；
>
> 如果要使用全局样式，请在样式文件中使用 :global，并在引用时，使用字符串而不是变量应用。

样式继承：开启 CSS-Module 功能后，样式继承请使用[如下方法](https://github.com/css-modules/css-modules#dependencies)。



使用字体图标

##### 平台型协同方式的字体图标

采用平台型协同方式时，可在 fusion 平台统一管理字体图标（同样依赖 iconfont.cn 库）。不用像上面一样单独引入 iconfont.css。

##### 引入在线字体图标

推荐使用[阿里巴巴 iconfont](http://www.iconfont.cn)库来管理项目的图标。

上传好图标后，在网站上生成在线链接（font class），复制该链接，使用它替换掉`.env`文件中的`REACT_APP_ICONFONT_URL`字段：

```plain
# REACT_APP_ICONFONT_URL="//at.alicdn.com/t/font_xxx_xxx.css"
```

然后修改`public/index.html`即可。

```html
<!-- <link rel="stylesheet" href="%REACT_APP_ICONFONT_URL%"> -->
变为
<link rel="stylesheet" href="%REACT_APP_ICONFONT_URL%" />
```

> 本地引入方式：[仅自建 CDN 的情况下使用]。在[阿里巴巴 iconfont](http://www.iconfont.cn)中上传图标，然后在网站上生成在线链接（font class），访问该链接并复制其中的内容。在`public`目录中新建`iconfont.css`，将刚复制的内容粘贴到该文件中，然后在`public/index.html`目录中引入该链接即可。

```html
<link rel="stylesheet" href="./iconfont.css" />
```

> 这种方式需要注意 cdn 缓存问题，建议在 CDN 规则中不缓存该文件的图标。对于频繁更新的情况，可以采用其他手段将其 hash 化。

##### 引入本地字体图标文件

对于本地化字体文件，可将该资源放入到`src/assets`目录中，然后在`src/index.scss`中引入其样式文件即可。

> 这种情况下，本地字体图标文件，一般会被完整打包到 js 中，也可通过打包手段分离出来。

### 引入图片等资源

为了减小 Http 的请求数目，在打包时 webpack 会将小于 10k 的图片直接转换成 base64 字符串放在 html 中。
**目前只支持 bmp,gif,jpg,jpeg,png**

写法如下：

```js
import React from 'react';
import logo from './logo.png'; // Tell Webpack this JS file uses this image

console.log(logo); // /logo.84287d09.png

function Header() {
    // Import result is the URL of your image
    return <img src={logo} alt="Logo" />;
}

export default Header;
```

```css
.Logo {
    background-image: url(./logo.png);
}
```

### 异步加载组件

因为默认情况下，webpack 会将引用到的包都打包到同一个 JS 文件中，所以可能入口 js 文件可能会很大。
为了使用之变小，在使用 react-router 打开组件时，请使用如下方法引入

```js
const Login =()=><Async load={import('./Login')}/>

<Route  path='/Login' component={Login}/>
```

### 调用接口

在本地开发时，将相对路径配`./src/apiApiUrl.js`中即可。
例如：`LOGIN: '/login'`

> 由于现在都是前后的分离的，前端调用的接口都是跨域的，所以需要进行代理。

### 配置代理

在`src/setupProxy.js`中参照一下配置：

```js
module.exports = function (app) {
    app.use(
        proxy('/api', {
            target: 'http://localhost',
            changeOrigin: true,
            pathRewrite: {
                '^/api': '',
            },
        })
    );
};
```

> 具体代理规则，请先到接口通用处理逻辑中根据自己接口返回结果的格式情况，进行修改。

这样配置后所有带有`/api`的接口请求都会被代理到`http://localhost`。

具体用法请参考`http-proxy-middleware`组件的官方使用方法https://github.com/chimurai/http-proxy-middleware。

### mobx 开发相关

采用主流的 mobx4， 支持 es5。

mobx5 新增，因采用 Proxy 对象，部分机型不支持。

详情请参考[mobx 开发手册](https://cn.mobx.js.org/)。

##### mobx 开启严格模式

mobx 开启严格模式，必须使用@action 来修改数据

```js
// mobx5 特定值，  //https://cn.mobx.js.org/refguide/api.html  +  https://blog.csdn.net/smk108/article/details/83185745
configure({
    enforceActions: 'observed',
});
// mobx4
configure({
    enforceActions: true,
});

// mobx3及以下
useStrict(true);
```

### 调试相关

#### 使用 VSCode 调试

本工程可以使用 VSCode 进行调试。但需要先安装这个[Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome)

## 软件测试（待更新）

### 单元测试

测试：`yarn test` 或者 `npm test`，See the section about [running tests](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#running-tests) for more information.

详情请参考[create-react-app 官方文档](https://facebook.github.io/create-react-app/docs/running-tests)

> 集成测试/功能测试/性能测试/渲染测试

## 代码提交

### 提交时自动格式化

> 只有使用 Git 作为代码服务器时有效

使用以下插件 husky lint-staged prettier 实现在提交代码时，自动进行格式化
To format our code whenever we make a commit in git, we need to install the following dependencies:

### 规范提交记录

使用一个规范的提交记录是很有必要的，这不仅让多人开发中的参与者能更好地了解项目的迭代历史和进程，也能在出现问题时快速定位，找到问题代码的提交记录。

在提交代码时，应遵守以下规范：

-   修改的文件如果涉及多个板块，应单独先提交。

-   规范提交信息格式：<type>(<scope>): <subject> ,具体参考[提交记录规范指南](doc/提交日志规范.md)。例如:

```plain
    fix(发票信息页面):修改返回字段。
    feat(SingleInput组件):扩展xxx功能，增加size属性用于设置输入框高度，默认为md [44px]，目前支持lg [54px]
    chore: 新增scss支持（支持 scss 并兼容css-modules）
```

### 自动生成更新说明（待更新）

此外，还可以使用工具根据提交记录自动生成更新说明 (CHANGELOG)，免去手动更新的痛苦，也方便用户了解每次更新的具体内容。具体参考[更新说明规范指南](doc/分支及版本发布规范.md)。

## 构建发布

-   构建：`yarn build`或`npm run build`，App 构建出发布的文件到 `build` 目录.

-   发布：将 build 目录下的文件发布到服务器上即可；该环节推荐通过搭建 CI/CD 平台来自动完成。

## Code Review

CodeReview 的目的是提升代码质量，尽早发现潜在缺陷与 BUG，降低修复成本，同时促进团队内部知识共享，帮助更多人更好地理解系统，这也是帮助新人成长最快的方式之一。

详情参考[CodeReview 规范](doc/CodeReview规范.md)。

参考文章：

https://www.zhihu.com/question/41089988?sort=created

https://blog.csdn.net/uxyheaven/article/details/49773619

http://www.cnblogs.com/cnblogsfans/p/5075073.html

## 进阶配置

### 国际化

项目的国际化，根据场景主要分为组件国际化、日期国际化、内容国际化。

- **组件国际化**

  很多 UI 框架或组件自身已提供国际化方案，可以参考使用，如[Fusion Design UI](https://fusion.design/component/doc/107)。

* **日期国际化**

  对于日期来说，可以借助 [moment](https://github.com/moment/moment) 库，其自带国际化相关能力。目前社区比较主流的解决方案有以下两种：

  方法一：

  ```js
  const webpack = require('webpack');
  
  module.exports = {
      // ...
      plugins: [
          // 打包指定需要的语言文件
          new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /zh-cn|ja/),
      ],
  };
  ```

  方法二：

  ```js
  const webpack = require('webpack');
  
  module.exports = {
      // ...
      plugins: [
          // 只打包有过引用的语言文件，应用中需要添加如：`import 'moment/locale/zh-cn';`
          // new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
      ],
  };
  ```

- **内容国际化**

  主流的内容国际化方案有：

  [kiwi](https://github.com/nefe/kiwi) [有配套的 vscode 工具，持续关注]

  [react-intl](https://github.com/yahoo/react-intl) [yahoo]

  [react-intl-universal](https://github.com/alibaba/react-intl-universal) [alibaba]

  [react-i18next](https://react.i18next.com/) [i18next.js]

  [i18n-pick](https://github.com/ProtoTeam/i18n-pick) [蚂蚁金服团队]

  [react-i18n](https://juejin.im/post/5c24a09d5188252a9412fabf) [腾讯 webnovel 团队，暂未开源]

### 自定义 webpack 配置

本脚手架采用了 react-script，自定义 webpack 的配置有两种方式：

-   **eject：**该方式可获得 webpack 的完全控制权，具体用法参见[http://www.geekjc.com/post/5b74e06ac827d41a704bac62(http://www.geekjc.com/post/5b74e06ac827d41a704bac62)
-   **不 eject：**推荐方式，引入`react-app-rewired`和`customize-cra`插件，具体用法请参见： [https://github.com/timarney/react-app-rewired](https://github.com/timarney/react-app-rewired) / https://github.com/arackaf/customize-cra

### 添加自定义的环境变量

你可以在工程设置环境变量，默认的环境变量有 `NODE_ENV`，它的值有`development` / `production` / `test` 分别对应运行的命令行`yarn start` / `yarn build` / `yarn test`。

> 环境变量的值会在打包阶段被动态的替换掉；
> 要在 React 的环境下生效，自定义的环境变量必须以 `REACT_APP_` 开头；
> 不以 `REACT_APP_`开头的自定义环境变量，只会在后续执行的 nodejs 脚本中生效，而不会置入到 React 的运营环境中。例如 `BUNDLE_VISUALIZE`，只能用于开启脚手架中的`webpack-bundle-analyzer`。

#### 设置环境变量

环境变量有以下几种设置方式：

##### env-cmd 的 rc 文件集中管理【推荐】

使用[env-cmd](https://github.com/toddbluhm/env-cmd)工具可以方便的对文件进行管理。

1. 安装 env-cmd

2. 在根目录新建**.env-cmdrc.js**文件，用于自定义不同环境的环境变量，这里配置的变量会覆盖`.env.local`文件中的对应变量，内容类似：

    ```js
    {
      "development": {
      },
      "test": {
      },
      "production": {
        "BUNDLE_VISUALIZE": "1"
      },
       "h5": {
        "PORT": 8080
      }
    }
    ```

3. 在 package.json 中注册脚本命令，根据自己的需要指定环境，多个环境可以共用，用`,`分隔：

    ```js
    "scripts": {
        "start": "env-cmd development,h5 react-app-rewired start",
        "build": "env-cmd production react-app-rewired build",
        "test": "env-cmd test react-app-rewired test",
        ...
    }
    ```

> 如果需要自定义通用环境变量，可在根目录新建**.env.local**文件，内容类似：

```plain
# NODE_ENV=development
# PORT=3000
# API_SERVER=192.168.0.100
# API_PORT=9000

# 应用名称
REACT_APP_TITLE=toxic
# 应用版本
REACT_APP_VERSION=1.0
```

##### 文件内定义

可以在项目根目录下新建如下的文件（不同命令，会读取不同的文件）

-   `.env： 默认使用`
-   `.env.local：用于本地变量覆盖，这个文件会在除了test环境的所有环境加载`
-   `.env.development,.env.test,.env.production：在对应的环境加载`
-   `.env.development.local,.env.test.local,.env.production.local：在对应的环境加载，最高优先级，会覆盖.env.*的配置`

加载的优先级从高到低，依次为：

-   `npm start`: `.env.development.local`, `.env.development`, `.env.local`, `.env`
-   `npm run build`: `.env.production.local`, `.env.production`, `.env.local`, `.env`
-   `npm test`: `.env.test.local`, `.env.test`, `.env` (注意没有 `.env.local`)

##### 命令行直接设置

环境变量还可以在运行命令行的时候直接设置

-   Windows(cmd.ext): `set REACT_APP_SECRET_CODE=123&&npm start`
-   Mac: `REACT_APP_SECRET_CODE=123 npm start`



#### 使用环境变量

jsx 中使用：

```jsx
render() {
  return (
    <div>
      <small>You are running this application in <b>{process.env.NODE_ENV}</b> mode.</small>
      <form>
        <input type="hidden" defaultValue={process.env.REACT_APP_SECRET_CODE} />
      </form>
    </div>
  );
}
```

js 中使用：

```js
if (process.env.NODE_ENV !== 'production') {
    analytics.disable();
}
```

html 中使用：

```html
<title>%REACT_APP_WEBSITE_NAME%</title>
```

### 启用 PWA 特性

CRA 支持 workbox，可以一键开启 PWA（Progressive Web App）。在`src/index.js` 文件中有以下代码：

```js
serviceWorker.unregister();
```

如果要使用 CRA 提供的 PWA 特性的话，我们需要将`serviceWorker.unregister()` 改为`serviceWorker.register()`。打包项目后，在`build`文件夹下有以下几个文件：

-   asset-manifest.json // 存放本次打包后资源的路径及 hash，用于区分版本
-   server-worker.js // 规定了资源缓存策略
-   preche-manifest.xxxxxxxxx.js // 静态资源版本记录
-   manifest.json // Web 应用程序清单,可以配置在系统桌面上的图标等，参考[文档](https://developer.mozilla.org/zh-CN/docs/Web/Manifest)

> 在 src 文件目录下有一个 serviceWorker.js 文件，用于检查环境变量是否为“production”，且当前浏览器是否兼容 service worker。

### ESLint 禁用检查

http://eslint.cn/docs/user-guide/configuring#disabling-rules-with-inline-comments

### Stylelint 禁用检查

跟 eslint 类似，通过 `stylelint-disable` 注释来局部禁用某一项规则。通过 `stylelint-enable` 可以把之前忽略的规则重新开启。一定要注意，只 enable 对应的规则，形成呼应：

```html
<style>
    .classA {
        /* stylelint-disable declaration-block-no-duplicate-properties */
        transition-property: transform;
        transition-property: transform, -webkit-transform;
        /* stylelint-enable declaration-block-no-duplicate-properties */
    }
</style>
```

### 开启/关闭 sourcemap

cra 通过 GENERATE_SOURCEMAP 来控制 sourcemap 的开启和关闭，在.env-cmdrc 文件中对应的环境下，增加"GENERATE_SOURCEMAP": false, false 为关闭 sourcemap，true 为开启 sourcemap。

```js
{
  "development": {
    "REACT_APP_HMR": false
  },
  "production": {
    "GENERATE_SOURCEMAP": false,
    "BUNDLE_VISUALIZE": true
  },
  "test": {
  },
  "uat": {
    "PORT": 8080
  }
}
```

### 低版本浏览器兼容

详情参见[低版本浏览器兼容](doc/低版本浏览器兼容.md)。

### 在开发中使用 https

#### Windows (cmd.exe)

```cmd
set HTTPS=true&&npm start
```

(Note: the lack of whitespace is intentional.)

#### Linux, macOS (Bash)

```bash
HTTPS=true npm start
```

### 应用第三方 JS

#### node 模块引用

使用 npm 安装后，直接在 js 文件中 import 即可。

#### 单个 JS 文件引用

如果文件符合 AMD/CMD 规范可以直接 import，如果不符合请在 public/index.html 中引入

### 推荐库

详情请见[推荐库](doc/推荐库.md)

## 附录

### 开发规范

关于工程目录介绍和代码规范等。

[前端开发规范](./doc/前端开发规范.md)

### bug 记录

记录各种 bug。

[bug 记录](./doc/bug记录.md)

### 踩坑日记

存放各种坑及填坑方法。

[踩坑日记](./doc/踩坑日记.md)

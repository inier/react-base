// 组件的统一出口

/*
 * basis 单体组件（原子性）
 * 网页构成的基本元素。例如图标、按钮、字体、色调等。
 */
export { default as Icon } from './Icon/index';
export { default as CloseIcon } from './CloseIcon/index';
export { default as Button } from './Button/index';
export { default as InputSingle } from './InputSingle/index';
export { default as Prompt } from './Prompt/index';
export { default as Modal } from './Modal/index';
export { Card, CardLite } from './Card/index';
export { default as Collapse } from './Collapse/index';
export { default as List } from './List/index';
export { default as Tabs } from './Tabs/index';
export { default as Timer } from './Timer/index';

/*
 * module 模块组件
 * 具备独立的功能，由一个以上的 basis 或 block 组件组成。例如整站头部（包括导航菜单、搜索框等）、支持筛选和分页的表格、对话框等。
 */

/*
 * layout 布局组件
 * 用于组织页面框架布局的组件。例如，一个实现底部按钮的容器、左右侧边栏等。
 */
export { default as ErrorBoundary } from './ErrorBoundary/index';
export { default as BasePage } from './BasePage/index';
export { default as PageContainer } from './PageContainer/index';
export { default as Iframe } from './Iframe/index';
export { default as Header } from './Header/index';
export { default as Heading } from './Heading/index';
export { default as Placeholder } from './Placeholder/index';
export { default as WingBlank } from './WingBlank/index';
export { default as WhiteSpace } from './WhiteSpace/index';

/*
 * template 模板组件
 * 可重用的复杂UI结构，一般为页面级组件。由1个以上 module 及多个 basis/block 组件组成，例如支付成功页等。
 */
export { default as BasicNotFound } from './BasicNotFound/index';

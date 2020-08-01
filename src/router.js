// router.js 定义应用路由

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { BasicLayout, MainLayout, BlankLayout } from '@/layouts';

// 应用路由：配合routerConfig进行配置
// 按照 Layout 分组路由，适合复杂项目
const Routers = () => {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <Switch>
                <Route path="/demo" component={BasicLayout} />
                <Route path="/view" component={BlankLayout} />
                <Route path="/" component={MainLayout} />
            </Switch>
        </Router>
    );
};

export default Routers;

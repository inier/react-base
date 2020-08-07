// App.js 应用顶层组件，用于接驳数据层等

import React, { Component } from 'react';
import ThemeAdapter from '@/components/ThemeAdapter';
import ErrorBoundary from '@/components/ErrorBoundary';
import ToastAndLoading from '@/components/ToastAndLoading';
// 应用路由
import Router from './router';

class App extends Component {
    render() {
        return (
            <ErrorBoundary>
                <ThemeAdapter>
                    <Router />
                    <ToastAndLoading />
                </ThemeAdapter>
            </ErrorBoundary>
        );
    }
}

export default App;

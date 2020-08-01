// App.js 应用顶层组件，用于接驳数据层等

import React, { Component } from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider as MUIThemeProvider } from '@material-ui/styles';
import ErrorBoundary from '@/components/ErrorBoundary';
import ToastAndLoading from '@/components/ToastAndLoading';
// 应用路由
import Router from './router';
import rewireThemeMUI from './rewireTheme';

class App extends Component {
    render() {
        return (
            <ErrorBoundary>
                <MUIThemeProvider theme={createMuiTheme(rewireThemeMUI)}>
                    <Router />
                    <ToastAndLoading />
                </MUIThemeProvider>
            </ErrorBoundary>
        );
    }
}

export default App;

import React from 'react';
import PropTypes from 'prop-types';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider as MUIThemeProvider } from '@material-ui/styles';
import rewireThemeMUI from './rewireTheme';

function ThemeAdapter(props) {
    const { theme = rewireThemeMUI, children } = props;
    return <MUIThemeProvider theme={createMuiTheme(theme)}>{children}</MUIThemeProvider>;
}

ThemeAdapter.propTypes = {
    /**
     * 组件主题，默认通过组件目录中的rewireTheme.js维护
     */
    theme: PropTypes.object,
};

export default ThemeAdapter;

// rewireTheme.js 重载 MaterialUI 样式
import themeVars from '@theme/variables';

export default {
    palette: {
        primary: { main: themeVars['$color-brand1-6'], contrastText: '#fff' },
    },
    overrides: {
        MuiButton: {
            contained: {
                boxShadow: 'none',
            },
            text: {
                color: '#666',
            },
            //重置按钮样式
            sizeSmall: {
                height: '27px',
                minWidth: '70px',
                borderRadius: '3px',
                '& span': {
                    fontSize: '12px',
                    lineHeight: '12px',
                },
            },
            sizeLarge: {
                minWidth: '120px',
                height: '47px',
                borderRadius: '5px',
                '& span': {
                    fontSize: '16px',
                },
            },
        },
        MuiCircularProgress: {
            //重置进度条颜色
            colorPrimary: {
                color: themeVars['$color-brand1-6'],
            },
        },
    },
};

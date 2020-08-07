// rewireTheme.js 重载 MaterialUI 样式
import uniThemeVars from '@theme/variables';

const themeVars = {
    ...uniThemeVars,
    // 布局上下留白
    '$layout-padding-tb': '14px',
    // 布局左右留白
    '$layout-padding-lr': '20px',
};

export default {
    breakpoints: {
        keys: {
            0: 'xs',
            1: 'sm',
            2: 'md',
            3: 'lg',
            4: 'xl',
            5: 'tablet',
            6: 'laptop',
            7: 'desktop',
        },
        values: {
            xs: 0,
            sm: 320,
            md: 375,
            lg: 414,
            xl: 640,
            tablet: 768,
            laptop: 1024,
            desktop: 1920,
        },
    },
    palette: {
        primary: {
            light: themeVars['$color-brand1-1'],
            main: themeVars['$color-brand1-6'],
            dark: themeVars['$color-brand1-9'],
            contrastText: themeVars['$color-text1-5'],
        },
        secondary: {
            light: themeVars['$color-error-2'],
            main: themeVars['$color-error-3'],
            dark: themeVars['$color-error-4'],
            contrastText: themeVars['$color-text1-4'],
        },
        background: {
            default: themeVars['$color-fill1-1'],
        },
        text: {
            primary: themeVars['$color-text1-4'],
            secondary: themeVars['$color-text1-3'],
            disabled: themeVars['$color-text1-1'],
        },
        divider: themeVars['$color-line1-1'],
        action: {
            disabled: themeVars['$color-white'],
            disabledBackground: themeVars['$color-fill1-4'],
        },
    },
    typography: {
        h1: {
            fontSize: themeVars['$font-size-display-2'],
            lineHeight: themeVars['$font-lineheight-1'],
            letterSpacing: 'initial',
        },
        h2: {
            fontSize: themeVars['$font-size-display-1'],
            lineHeight: themeVars['$font-lineheight-1'],
            letterSpacing: 'initial',
        },
        h3: {
            fontSize: themeVars['$font-size-headline'],
            lineHeight: themeVars['$font-lineheight-1'],
            letterSpacing: 'initial',
        },
        h4: {
            fontSize: themeVars['$font-size-subhead'],
            lineHeight: themeVars['$font-lineheight-1'],
            letterSpacing: 'initial',
        },
        h5: {
            fontSize: themeVars['$font-size-body-2'],
            lineHeight: themeVars['$font-lineheight-1'],
            letterSpacing: 'initial',
        },
        h6: {
            fontSize: themeVars['$font-size-body-1'],
            lineHeight: themeVars['$font-lineheight-1'],
            letterSpacing: 'initial',
        },
        subtitle1: {
            fontSize: themeVars['$font-size-subhead'],
            lineHeight: themeVars['$font-lineheight-1'],
            letterSpacing: 'initial',
        },
        subtitle2: {
            fontSize: themeVars['$font-size-title'],
            lineHeight: themeVars['$font-lineheight-1'],
            letterSpacing: 'initial',
        },
        body1: {
            fontSize: themeVars['$font-size-body-2'],
            lineHeight: themeVars['$font-lineheight-1'],
            letterSpacing: 'initial',
            color: themeVars['$color-text1-4'],
        },
        body2: {
            fontSize: themeVars['$font-size-body-1'],
            lineHeight: themeVars['$font-lineheight-2'],
            letterSpacing: 'initial',
        },
        caption: {
            fontSize: themeVars['$font-size-body-2'],
            lineHeight: themeVars['$font-lineheight-1'],
            letterSpacing: 'initial',
            color: themeVars['$color-text1-3'],
        },
    },
    spacing: 4,
    shape: {
        borderRadius: 2,
    },
    props: {
        // 组件的名称
        MuiButtonBase: {
            // 需要修改的默认属性
            disableRipple: true, // 禁止 ripple 效果
        },
        MuiButton: {
            disableElevation: true, //取消阴影
        },
        MuiAppBar: {
            elevation: 0, //取消阴影
        },
        MuiPaper: {
            elevation: 0, //取消阴影
        },
        MuiCard: {
            elevation: 0, //取消阴影
        },
    },
    overrides: {
        MuiContainer: {
            root: {
                paddingLeft: '20px',
                paddingRight: '20px',
            },
        },

        // 重置Typography组件样式
        MuiTypography: {
            root: {
                color: themeVars['$color-text1-4'],
            },
            gutterBottom: {
                marginBottom: '0.1em',
            },
        },
        MuiInputBase: {
            inputMultiline: {
                lineHeight: themeVars['$font-lineheight-1'],
            },
            multiline: {
                padding: 0,
            },
        },
        //重置Button组件样式
        MuiButton: {
            root: {
                flexShrink: 0,
                lineHeight: themeVars['$font-lineheight-3'],
            },
            sizeSmall: {
                height: themeVars['$btn-size-s-height'],
                minWidth: '72px',
                borderRadius: themeVars['$corner-1'],
                '& span': {
                    fontSize: themeVars['$btn-size-s-font'],
                    lineHeight: themeVars['$btn-size-s-height'],
                },
            },
            sizeLarge: {
                height: themeVars['$btn-size-l-height'],
                minWidth: '128px',
                borderRadius: themeVars['$corner-1'],
                '& span': {
                    fontSize: themeVars['$btn-size-l-font'],
                    lineHeight: themeVars['$btn-size-l-height'],
                },
            },
            contained: {
                color: themeVars['$color-text1-4'],
            },
            outlined: {
                borderColor: themeVars['$color-line1-4'],
                '&$disabled': {
                    color: themeVars['$color-text1-1'],
                    borderColor: themeVars['$color-line1-2'],
                },
            },
            outlinedPrimary: {
                border: `1px solid ${themeVars['$color-brand1-6']}`,
            },
            containedSizeSmall: {
                padding: '5px 10px',
            },
            outlinedSizeSmall: {
                padding: '4px 9px',
            },
            containedSizeLarge: {
                padding: '7px 22px',
            },
            outlinedSizeLarge: {
                padding: '6px 21px',
            },
        },
        MuiCheckbox: {
            root: {
                color: themeVars['$color-text1-2'],
            },
            colorSecondary: {
                '&$checked': {
                    color: themeVars['$color-brand1-6'],
                },
            },
        },
        // 重置Card组件样式
        MuiCard: {},
        MuiCardHeader: {
            root: {
                padding: `15px ${themeVars['$layout-padding-lr']}`,
            },
            title: {
                fontSize: '15px',
                lineHeight: 1,
            },
        },
        MuiCardContent: {
            root: {
                padding: `${themeVars['$layout-padding-tb']} ${themeVars['$layout-padding-lr']}`,
            },
        },
        MuiCardActions: {
            root: {
                padding: `9px ${themeVars['$layout-padding-lr']}`,
                float: 'right',
            },
            spacing: {
                '& > :not(:first-child)': {
                    marginLeft: '10px',
                },
            },
        },
        // 重置List组件样式
        MuiList: {
            root: {
                paddingLeft: themeVars['$layout-padding-lr'],
                backgroundColor: themeVars['$color-white'],
            },
            padding: {
                paddingTop: 0,
                paddingBottom: 0,
            },
        },
        MuiListItem: {
            root: {
                paddingTop: themeVars['$layout-padding-tb'],
                paddingBottom: themeVars['$layout-padding-tb'],
                paddingRight: themeVars['$layout-padding-lr'],
                minHeight: '48px',
            },
            gutters: {
                paddingLeft: 0,
                paddingRight: themeVars['$layout-padding-lr'],
            },
            secondaryAction: {
                paddingRight: '48px',
            },
        },
        MuiListItemText: {
            root: {
                marginTop: 0,
                marginBottom: 0,
            },
            multiline: {
                marginTop: 0,
                marginBottom: 0,
            },
        },
        MuiListItemSecondaryAction: {
            root: {
                right: themeVars['$layout-padding-lr'],
            },
        },
    },
};

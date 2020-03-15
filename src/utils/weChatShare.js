import { addQueryParams } from '@utils';
/**
 * @description
 * @class WXShare
 */
class WXShare {
    constructor(params, inWeChat, biz) {
        this.defaultObj = {
            title: '标题', // 分享标题
            desc: '描述', // 分享描述
            link: '', // 分享链接
            param: '', //需要传的参数，拼接到link上，在使用微信方法时会将其删除
            imgUrl: '', // 分享图标
            // success: () => {},
            // cancel: () => {}
        };
        this.biz = biz;
        if (inWeChat) {
            Object.assign(this.defaultObj, params);
        }
    }
    //点击分享
    goShare = () => {
        //设置默认分享图标
        if (!this.defaultObj.imgUrl) {
            const imgUrl = `${process.env.PUBLIC_URL}/static/media/imgs/share_main.jpg`;
            this.defaultObj.imgUrl = imgUrl;
        }

        //给基础链接加上时间戳，解决android手机微信分享问题
        this.defaultObj.link = addQueryParams(this.defaultObj.link, { time: +new Date() });
        delete this.defaultObj.param;

        //显示微信分享等菜单
        // window.wx.showOptionMenu();
        //隐藏微信在浏览器中打开功能
        //在QQ浏览器中打开: "menuItem:openWithQQBrowser"
        //在Safari中打开: "menuItem:openWithSafari"
        /*window.wx.hideMenuItems({
            menuList: [
                'menuItem:openWithQQBrowser',
                'menuItem:openWithSafari',
                'menuItem:copyUrl'
            ]
        });*/

        //分享到朋友圈
        window.wx.onMenuShareTimeline(this.defaultObj);

        //分享给朋友
        window.wx.onMenuShareAppMessage(this.defaultObj);

        //分享到QQ
        window.wx.onMenuShareQQ(this.defaultObj);

        //分享到腾讯微博
        window.wx.onMenuShareWeibo(this.defaultObj);

        //分享到QQ空间
        window.wx.onMenuShareQZone(this.defaultObj);
    };
}
export default WXShare;

// 网站标题控制

let routerTitle = "",
    siteTitle   = "";

function setTitle () {
    if ( !routerTitle && !siteTitle ) {
        document.title = "loading...";
    } else if ( routerTitle && !siteTitle ) {
        document.title = routerTitle;
    } else if ( !routerTitle && siteTitle ) {
        document.title = siteTitle;
    } else {
        document.title = `${ routerTitle }-${ siteTitle }`;
    }
}

export default {
    // 设置路由标题
    setRouteTitle ( title ) {
        routerTitle = title;
        setTitle ();
    },
    setSiteTitle ( title ) {
        siteTitle = title;
        setTitle ();
    }
};
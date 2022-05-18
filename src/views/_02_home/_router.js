const subrouters = {
    name: "home02",
    component: () => import("./_02_home"),
    children: [
        {
            name: "home02/home",                    // 首页
            meta: {keepAlive: false, scrollTop: 0},
            component: () => import( "./home")
        },
        {
            name: "home02/mypage",                  // 我的页面
            meta: {keepAlive: false, scrollTop: 0},
            component: () => import( "./mypage")
        },
    ]
};

// 处理路由path
subrouters.path = "/" + subrouters.name
subrouters.children.forEach(item => {
    item.path = "/" + item.name
})

export default subrouters;
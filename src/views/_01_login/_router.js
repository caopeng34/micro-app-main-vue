const subrouters = {
    name: "login01",
    component: () => import("./_01_login"),
    children: [
        {
            name: "login01/login",      // 登录
            meta: {keepAlive: false, scrollTop: 0},
            component: () => import( "./login")
        }
    ]
};

// 处理路由path
subrouters.path = "/" + subrouters.name
subrouters.children.forEach(item => {
    item.path = "/" + item.name
})

export default subrouters;
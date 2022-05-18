const subrouters = {
    name: "ceshi99",
    component: () => import("./_99_ceshi"),
    children: [
        {
            name: "ceshi99/ceshi1",                 // 测试-1
            meta: {keepAlive: false, scrollTop: 0},
            component: () => import( "./ceshi1")
        },
    ]
};

// 处理路由path
subrouters.path = "/" + subrouters.name
subrouters.children.forEach(item => {
    item.path = "/" + item.name
})

export default subrouters;
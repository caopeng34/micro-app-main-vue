const subrouters = {
    name: "submodule1",
    path: "/submodule1/*",
    component: () => import("./index")
};

export default subrouters;
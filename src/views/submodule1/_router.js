const subrouters = {
    name: `${process.env.VUE_APP_MICROAPPBASEROUTE}`,
    path: `/${process.env.VUE_APP_MICROAPPBASEROUTE}/*`,
    component: () => import("./index")
};

export default subrouters;
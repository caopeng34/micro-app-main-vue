/**
 * 在带命名空间的模块内访问全局内容
 * 如果你希望使用全局 state 和 getter，rootState 和 rootGetters 会作为第三和第四参数传入 getter，也会通过 context 对象的属性传入 action。
 * 若需要在全局命名空间内分发 action 或提交 mutation，将 { root: true } 作为第三参数传给 dispatch 或 commit 即可。
 */
export default {
    namespaced: true,
    state: {},
    mutations: {},
    actions: {
    }
}

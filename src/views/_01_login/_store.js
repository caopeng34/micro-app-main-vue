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
        // 有token则使用token查询人员信息，返回home，无token返回login
        getuserinfo({state, rootState, commit, dispatch}, obj) {
            return new Promise(resolve => {
                if (!rootState.accesstoken) {
                    resolve('login')
                    return false
                }
                // 调用接口查询人员信息，token无效则返回login，有效则返回home
                let res = {
                    username: '15230834693',
                    realname: '柯南',
                    phone: '15230834693'
                }
                commit('updateuserinfo', res, {root: true})
                resolve('home')
            })
        },
        // 登录接口
        loginapi({state, rootState, commit, dispatch}, obj) {
            return new Promise(resolve => {
                // 缓存账号
                commit('updateusername', obj.username, {root: true})
                commit('updatepassword', obj.password, {root: true})
                // 调用接口
                let tmpdata = {
                    token: '12345678901234567890',
                    userinfo: {
                        username: '15230834693',
                        realname: '柯南',
                        phone: '15230834693'
                    }
                }
                commit('updateaccesstoken', tmpdata.token, {root: true})
                commit('updateuserinfo', tmpdata.userinfo, {root: true})
                // 接口成功
                resolve(null)
                // 接口失败
                // resolve('密码错误')
            })
        }
    }
}

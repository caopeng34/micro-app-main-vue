import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import {ls} from "../../submodules/micro-app-common-vue/src/plugins/storage.js"
// 子模块
import login01 from "../views/_01_login/_store"
import home02 from "../views/_02_home/_store";
import ceshi99 from "../views/_99_ceshi/_store";

export default new Vuex.Store({
  state: {
    accesstoken: ls.get("accesstoken") || "",       // token
    userinfo: ls.get("userinfo") || {},             // 用户信息
    username: ls.get("uword1") || "",               // 登录用户账号
    password: ls.get("uword2") || "",               // 登录用户密码
    failuretime: 1000 * 60 * 60 * 24 * 7,           // localstorage失效时间，配合storage使用
    // -- 页面 --
    loginpage: 'login01/login' || '',               // 登录路由
    registerpage: 'login01/register' || '',         // 注册路由
    homepage: 'home02/home' || '',                  // 首页路由
    mypage: 'home02/mypage' || '',                  // 我的路由

  },
  mutations: {
    updateaccesstoken(state, obj) {
      ls.set("accesstoken", obj, state.failuretime)
      state.accesstoken = ls.get("accesstoken")
    },
    updateuserinfo(state, obj) {
      ls.set("userinfo", obj, state.failuretime)
      state.userinfo = ls.get("userinfo")
    },
    updateusername(state, obj) {
      ls.set("uword1", obj, state.failuretime)
      state.username = ls.get("uword1")
    },
    updatepassword(state, obj) {
      ls.set("uword2", obj, state.failuretime)
      state.password = ls.get("uword2")
    },
  },
  actions: {
  },
  modules: {
    login01,        // 登录业务
    home02,         // 首页业务
    ceshi99,        // 测试业务
  }
})

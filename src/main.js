import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 本项目组件
import "./plugins/vant";
// 引入git子模块-公共模块功能
import "microcommon/src/assets/less/index.less";
import "microcommon/src/plugins/http.js";  // 里面含vue-ls引入
import "microcommon/src/mixins/index.js"
import GLoad from "microcommon/src/components/global-load/index"
Vue.use(GLoad)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')

// 微前端
import microApp from '@micro-zoe/micro-app'

microApp.start({
    // 全局监听会在每个应用的生命周期执行时都会触发。
    lifeCycles: {
        created(e) {
            Vue.prototype.$gload.gload('')  // 显示加载中
            console.log('micro-app:global:created')
        },
        beforemount(e) {
            console.log('micro-app:global:beforemount')
        },
        mounted(e) {
            Vue.prototype.$gload.gload(false)  // 关闭加载中
            console.log('micro-app:global:mounted')
        },
        unmount(e) {
            console.log('micro-app:global:unmount')
        },
        error(e) {
            console.log('micro-app:global:error')
        }
    }
})
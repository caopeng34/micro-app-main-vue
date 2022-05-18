<!--该页面的目的：路由指向根路径，防止业务操作中直接修改URL至根路径导致无法加载App.vue-->
<template>
  <span></span>
</template>

<script>
import appvue from '../App'

export default {
  name: "firstpage",
  created() {
    // 设置路由返回名（公共mixins中）
    this.returnroute = ''
  },
  mounted() {
    // 进入系统
    appvue.methods.enterSystem(this)
  },
  methods: {}
}
</script>

<style scoped>

</style>
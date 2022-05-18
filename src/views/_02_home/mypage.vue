<template>
  <div>
    mypage
  </div>
</template>

<script>
export default {
  name: "mypage",
  created() {
    // 设置路由返回名（公共mixins中）
    this.returnroute = 'home02/home'
  },
}
</script>

<style scoped lang="less">
@import "./mypage";
</style>
<style scoped lang="less">

</style>
<template>
  <div>
    <van-grid :column-num="3">
      <van-grid-item icon="photo-o" text="我的" @click="onMypage"/>
      <van-grid-item icon="photo-o" text="测试1" @click="onCeshi1"/>
      <van-grid-item icon="photo-o" text="文字" />
      <van-grid-item icon="photo-o" text="文字" />
      <van-grid-item icon="photo-o" text="文字" />
      <van-grid-item icon="photo-o" text="文字" />
    </van-grid>
  </div>
</template>

<script>
export default {
  name: "home",
  created() {
    // 设置路由返回名（公共mixins中）
    this.returnroute = ''
  },
  methods: {
    // 我的页面
    onMypage() {
      this.$router.push({name: 'home02/mypage'})
    },
    // 测试页面
    onCeshi1() {
      this.$router.push({name: 'ceshi99/ceshi1'})
    },
  }
}
</script>

<style scoped lang="less">
@import "./home";
</style>
<style scoped lang="less">

</style>
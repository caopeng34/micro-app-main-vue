<template>
  <div class="pagerootdiv">
    <v-vant-pack-page
        navbartitle="测试1页面"
        navbarleft="返回"
        navbarright=""
        pageareaid="editid"
        pagebackgroundColor="#f4f4f4"
        @navbarOnLeft="back"
        @navbarOnRight="console.log()"
    >

    </v-vant-pack-page>
  </div>
</template>

<script>
import VVantPackPage from "microcommon/src/components/v-vant-pack/page/index1";
export default {
  name: "ceshi1",
  components: {
    VVantPackPage,
  },
  created() {
    // 设置路由返回名（公共mixins中）
    this.returnroute = 'home02/home'
    console.log(this.currentroute)
  },
}
</script>

<style scoped>

</style>
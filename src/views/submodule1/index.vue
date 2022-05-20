<template>
  <div>
    <!--
      name(必传)：应用名称
      url(必传)：应用地址，会被自动补全为http://localhost:3000/index.html
      baseroute(可选)：基座应用分配给子应用的基础路由，就是上面的 `/my-page`
     -->
    <micro-app
        :name='microappname'
        :url='microappurl'
        :baseroute='microappbaseroute'
        :data='dataForChild'
        @datachange='handleDataChange'
        @created='created'
        @beforemount='beforemount'
        @mounted='mounted'
        @unmount='unmount'
        @error='error'
    ></micro-app>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      // -- 基座应用设置 --
      microappname: process.env.VUE_APP_MICROAPPNAME,                           // 子应用名称
      microappurl: process.env.VUE_APP_MICROAPPURL,                             // 子应用地址
      microappbaseroute: '/' + process.env.VUE_APP_MICROAPPBASEROUTE + '/',     // 子应用的基础路由
      // -- 基座应用向子应用发送数据 --
      dataForChild: {},                                                         // data只接受对象类型，数据变化时会重新发送
    }
  },
  created() {
    // 设置路由返回名（公共mixins中）
    this.returnroute = ''
    // 初始化子应用应接收的数据
    this.initsubdata()
  },
  methods: {
    // 子应用生命周期
    created() {
      console.log(`micro-app:${this.microappname}:created`)
    },
    beforemount() {
      console.log(`micro-app:${this.microappname}:beforemount`)
    },
    mounted() {
      console.log(`micro-app:${this.microappname}:mounted`)
    },
    unmount() {
      console.log(`micro-app:${this.microappname}:unmount`)
    },
    error() {
      console.log(`micro-app:${this.microappname}:error`)
    },
    // 初始化子应用应接收的数据
    initsubdata() {
      this.dataForChild = {
        subbackmain: this.$store.state.homepage,
      }
    },
    // 基座应用获取来自子应用的数据，数据在事件对象的detail.data字段中，子应用每次发送数据都会触发datachange
    handleDataChange (e) {
      // console.log('来自子应用的数据：', e.detail.data)
      // 子应用出发返回
      if (e.detail.data && e.detail.data.type === 'back') {
        e.detail.data.subbackmain && this.$router.push({name: e.detail.data.subbackmain})
      }
    }
  }
}
</script>

<style scoped>

</style>
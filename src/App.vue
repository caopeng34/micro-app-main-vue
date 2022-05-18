<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  async mounted() {
    await this.enterSystem(this)
  },
  methods: {
    // 进入系统
    async enterSystem(_this) {
      _this.$store.dispatch("login01/getuserinfo", {}).then(res => {
        if (res) {
          if (res === 'home') {        // 跳转首页
            _this.$router.push({name: _this.$store.state.homepage})
          } else if (res === 'login') { // 跳转登录
            _this.$router.push({name: _this.$store.state.loginpage})
          }
        }
      });
    }
  }
}
</script>
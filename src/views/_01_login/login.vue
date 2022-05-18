<template>
  <div class="vlesslogin">
    <div class="vlogin-1">
      <img src="../../assets/img/logo.png"/>
    </div>
    <div class="vlogin-2">
      <van-form validate-first @failed="onFailed" @submit="onSubmit">
        <van-field
            v-model="username" name="username" label=""
            placeholder="账号" :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
            v-model="password" type="password" name="password" label=""
            placeholder="密码" :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div class="vlogin-2-button">
          <van-button round block type="info" native-type="submit">登 录</van-button>
        </div>
      </van-form>
    </div>

  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      username: '',
      password: '',
    };
  },
  created() {
    // 设置路由返回名（公共mixins中）
    this.returnroute = ''
  },
  methods: {
    // 登录处理
    onSubmit(values) {
      console.log('submit', values);
      // 调用接口
      this.$store.dispatch('login01/loginapi', {
        username: this.username,
        password: this.password,
      }).then(res => {
        if (!res) {
          this.$router.push({name: this.$store.state.homepage})
        } else {
          this.$toast(res)
        }
      })
    },
    // 表单报错处理
    onFailed(errorInfo) {
      console.log('failed', errorInfo);
    },
  },
}
</script>

<style scoped lang="less">
@import "./login";
</style>
<style scoped lang="less">
.vlesslogin {
  background: var(--root_bg_color);

  .vlogin-1 {
    margin-top: 100px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 80px;
      height: 80px;
    }
  }

  .vlogin-2 {
    margin: 80px 30px;

    .vlogin-2-button {
      margin-top: 16px;
    }
  }
}
</style>
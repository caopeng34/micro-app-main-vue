<template>
  <div>
    <!--这里是会被缓存的组件-->
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <!--这里是不会被缓存的组件-->
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>
<script>
export default {}
</script>

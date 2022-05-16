import Vue from "vue";
import VueStorage from "vue-ls";
import pkg from "../../package";


// this.$storage
Vue.use(VueStorage, {
  namespace: `${pkg.name}_${pkg.version}_`,
  name: "storage",
  storage: "local"    // 存储名称: session, local, memory
});

export const storage = Vue.storage;

// root index
import Vue from "vue";
import App from "./pages/test/index/App.vue";
console.log("vue", Vue);

new Vue({
  render: (h) => h(App)
}).$mount("#app");

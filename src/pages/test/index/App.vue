<script setup>
import HelloWorld from "components/HelloWorld?inline";
import Shared from "components/shared?inline";
import TestVue3 from "components/TestVue3?inline";
import Aloha from "components/Aloha?inline";
import Chao from "components/Chao?inline";
import env from "utility/env?inline";
// import HelloWorld from "components/HelloWorld";
// import Shared from "components/shared";
// import TestVue3 from "components/TestVue3";
// import Aloha from "components/Aloha";
// import Chao from "components/Chao";
// import env from "utility/env";

const a = 1;
</script>

<template>
  <div>
    <a href="https://vuejs.org/" target="_blank">
      <img
        :src="`${env.VUE_APP_CDN_STATIC_URL}vue.svg`"
        class="logo vue"
        alt="Vue logo"
      />
    </a>
  </div>
  <HelloWorld msg="test/index" />
  <Shared />
  <TestVue3 />
  <Aloha />
  <Chao />
  <router-view />
</template>

<style scoped lang="scss">
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;

  &:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }

  &.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
  }
}

.should-be-purged {
  color: red;
}
</style>

<script setup>
import HelloWorld from "components/HelloWorld?inline";
import Shared from "components/shared?inline";
import TestVue3 from "components/TestVue3?inline";
import Chao from "components/Chao?inline";
import Adios from "components/Adios?inline";
import env from "utility/env?inline";

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
  <HelloWorld msg="test/master" />
  <Shared />
  <TestVue3 />
  <Chao />
  <Adios />
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
</style>

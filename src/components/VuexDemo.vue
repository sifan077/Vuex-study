<template>
  <hr>
  <h1>Hello,Vue</h1>
  <hr>
  <button @click="add">点击增加:{{ store.state.count }}</button>
  <button @click="assign">赋固定值为5</button>
  <br>
  <button @click="change">改变</button>
  <h1 v-if="store.state.flag">Hello,Vuex</h1>
  <br>
  <button @click="countAndFlag">getter</button>
  <hr>
</template>

<script setup>

import {useStore} from "vuex";

const store = useStore();

const change = () => {
  store.commit('change');
  console.log(store.state.flag);
}
const add = () => {
  store.commit('increment');
  console.log(store.state.count)
}
const countAndFlag = () => {
  console.log(store.getters.countAndFlag)
}

const assign = () => {
  store.commit("assign", 5);
  console.log(store.state.count);
}
</script>
<style scoped>
</style>
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <button @click="getES6Feature(`进入debugger`)">设置断点</button>
    <button @click="getES6Feature(`加载断点`)">加载断点</button>
  </div>
</template>


<script lang="ts">
import Vue from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

export default Vue.extend({
  name: "home",
  methods: {
    getES6Feature (message:string) {
      if (message) {
          console.log(message);
          return ;
      }

      console.log(`I am VScode`);
    },
  },
  components: {
    HelloWorld
  },
  created () {
    //   this.getES6Feature();
  },
});
</script>

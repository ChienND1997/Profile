<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import viewLanding from "./layouts/viewLanding.vue";
export default {
  name: "App",
  components: { viewLanding },
};
</script>

<style>
body {
  background: #fff;
  font-family: Open Sans, sans-serif;
  font-weight: 300;
  position: relative;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
}
</style>

<template>
  <div id="app">
    <WishList />
  </div>
</template>

<script>
import WishList from "./components/WishList.vue";

export default {
  name: "App",
  components: {
    WishList,
  },
};
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  text-align: center;
  margin-top: 0;
}
</style>

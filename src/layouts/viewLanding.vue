<template>
  <div class="container-grid">
    <navigation></navigation>
    <home></home>
    <feature></feature>
    <favourite></favourite>
    <contact></contact>
    <pageFooter></pageFooter>
  </div>
</template>

<script>
import contact from "../components/contact/contact.vue";
import favourite from "../components/favourite/favourite.vue";
import feature from "../components/feature/feature.vue";
import home from "../components/home/home.vue";
import navigation from "../components/navigation/navigation.vue";
import pageFooter from "../components/pageFooter/pageFooter.vue";
export default {
  name: "viewLanding",
  components: {
    contact,
    favourite,
    feature,
    home,
    navigation,
    pageFooter
  },
};
</script>

<style scoped>
.container-grid {
  content: '';
  width: 100%;
  height: 100%;
  height: 100vh;
}
</style>

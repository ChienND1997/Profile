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
import pricing from "../components/pricing/pricing.vue";
export default {
  name: "viewLanding",
  components: {
    contact,
    favourite,
    feature,
    home,
    navigation,
    pageFooter,
    pricing,
  },
};
</script>

<style lang="scss" scoped>
.container-grid {
  content: '';
  position: fixed;
  left: 0;
  top: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  height: 100vh;
  background: -webkit-gradient(linear,left top,right bottom,from(#6d327c),color-stop(#485DA6),color-stop(#00a1ba),color-stop(#01b18e),to(#32b37b));
  background: -o-linear-gradient(left top,#6d327c,#485DA6,#00a1ba,#01b18e,#32b37b);
  background: linear-gradient(to right bottom,#6d327c,#485DA6,#00a1ba,#01b18e,#32b37b);
}
</style>

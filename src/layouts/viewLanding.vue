<template>
  <div>
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

<style>
</style>

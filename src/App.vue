<template>
  <v-app id="inspire">
    <!-- main content start-->
    <v-content style="padding-left:390px; padding-right:190px; background-color:#52606b">
      <router-view></router-view>
    </v-content>
    <!-- main content end-->
  </v-app>
</template>

<script>
import bus from "./eventBus";
export default {
  data: () => ({
    drawer: null,
    bus: bus,
    right: false,
    left: false
  }),
  props: {
    source: String
  }
};
</script>

<style>
</style>
<template>
  <main-header />
  <div class="page">
    <div class="observer_block"></div>
    <router-view />
  </div>
  <footer-component />
</template>

<script>
import FooterComponent from "@/components/FooterComponent";
import MainHeader from "@/components/header/MainHeader";

export default {
  components: {
    FooterComponent,
    MainHeader,
  },
};
</script>

<style lang="scss">
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow: hidden;
  position: relative;
  background: linear-gradient(
    179.87deg,
    #e6eaf0 1.02%,
    #e6eaf1 4.79%,
    #e7ebf1 8.76%,
    #eaeef4 14.75%,
    #e8ecf2 19.07%
  );
  width: 100vw;
}

.all-link {
  width: 100%;
  display: block;
  text-align: center;
}
</style>

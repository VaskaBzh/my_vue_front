<template>
  <div class="account">
    <div class="account__container">
      <nav-tabs />
      <router-view class="padding" />
    </div>
  </div>
</template>
<script>
import NavTabs from "@/components/navs/NavTabs";

export default {
  components: {
    NavTabs,
  },
};
</script>
<style lang="scss">
.account {
  margin-top: 32px;
  &__container {
    display: flex;
    justify-content: space-between;
    position: relative;
    .padding {
      @media (min-width: 1271px) {
        padding-left: 330px;
      }
    }
  }
}
</style>

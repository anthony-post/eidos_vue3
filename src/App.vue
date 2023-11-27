<script setup>
import { RouterView } from 'vue-router'
import SideBar from './components/SideBar.vue'
</script>

<template>
  <SideBar></SideBar>
  <RouterView class="body-view"></RouterView>
</template>

<style scoped lang="scss">
@import '@/assets/base.scss';
@import '@/assets/main.scss';

.body-view {
  margin: 8px 8px 0 8px;
  border-radius: 12px 12px 0px 0px;
  background: $color-background;
  padding: 24px;
}

</style>

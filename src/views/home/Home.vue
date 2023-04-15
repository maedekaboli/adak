<script setup>
import { defineAsyncComponent } from 'vue'
const HomeHeader = defineAsyncComponent(() => import('./HomeHeader.vue'))
const HomeSlider = defineAsyncComponent(() => import('./HomeSlider.vue'))

</script>

<template>
  <HomeHeader />
  <HomeSlider />
</template>
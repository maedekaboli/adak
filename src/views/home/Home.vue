<script setup>
import { defineAsyncComponent } from 'vue'
const HomeHeader = defineAsyncComponent(() => import('./HomeHeader.vue'))
const HomeSlider = defineAsyncComponent(() => import('./HomeSlider.vue'))
const CallForPrice = defineAsyncComponent(() => import('./CallForPrice.vue'))
const WhyUs = defineAsyncComponent(() => import('./WhyUs.vue'))
</script>

<template>
  <HomeHeader />
  <HomeSlider />
  <CallForPrice />
  <WhyUs />
</template>
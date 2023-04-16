<script setup>
import { defineAsyncComponent } from 'vue'
const HomeHeader = defineAsyncComponent(() => import('./HomeHeader.vue'))
const HomeSlider = defineAsyncComponent(() => import('./HomeSlider.vue'))
const CallForPrice = defineAsyncComponent(() => import('./CallForPrice.vue'))
const WhyUs = defineAsyncComponent(() => import('./WhyUs.vue'))
const OurClients = defineAsyncComponent(() => import('./OurClients.vue'))
const Circles = defineAsyncComponent(() => import('./Circles.vue'))
</script>

<template>
  <HomeHeader />
  <HomeSlider />
  <CallForPrice />
  <WhyUs />
  <OurClients />
  <Circles />
</template>
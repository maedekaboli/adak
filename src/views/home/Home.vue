<script setup>
import { ref, defineAsyncComponent, onMounted } from 'vue'
import api from '../../api/api';

const HomeHeader = defineAsyncComponent(() => import('./HomeHeader.vue'))
const HomeSlider = defineAsyncComponent(() => import('./HomeSlider.vue'))
const CallForPrice = defineAsyncComponent(() => import('./CallForPrice.vue'))
const WhyUs = defineAsyncComponent(() => import('./WhyUs.vue'))
const OurClients = defineAsyncComponent(() => import('./OurClients.vue'))
const Circles = defineAsyncComponent(() => import('./Circles.vue'))

const data = ref({})
onMounted(() => {
  api.get(`initialize-site`).then(res => {
    data.value = res?.data?.data
  })
})

</script>

<template>
  <HomeHeader />
  <HomeSlider :items="data.sliders" />
  <CallForPrice />
  <WhyUs />
  <OurClients :items="data.customers" />
  <Circles :items="data.countStat" />
</template>
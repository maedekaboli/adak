<script setup>
import { defineAsyncComponent } from 'vue'

const AboutUsHeader = defineAsyncComponent(() => import('./AboutUsHeader.vue'))
const AboutBottomSection = defineAsyncComponent(() => import('./AboutBottomSection.vue'))
</script>

<template>
    <AboutUsHeader />
    <AboutBottomSection />
</template>
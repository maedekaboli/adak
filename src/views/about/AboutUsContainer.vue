<script setup>
import { defineAsyncComponent } from 'vue'

const AboutUsHeader = defineAsyncComponent(() => import('./AboutUsHeader.vue'))
const AboutMainSection = defineAsyncComponent(() => import('./AboutMainSection.vue'))
const AboutBottomSection = defineAsyncComponent(() => import('./AboutBottomSection.vue'))
</script>

<template>
    <AboutUsHeader />
    <AboutMainSection />
    <AboutBottomSection />
</template>
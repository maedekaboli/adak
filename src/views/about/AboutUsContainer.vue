<script setup>
import { defineAsyncComponent } from 'vue'

const AboutBottomSection = defineAsyncComponent(() => import('./AboutBottomSection.vue'))
</script>

<template>
    <AboutBottomSection />
</template>
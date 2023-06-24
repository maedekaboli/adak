<script setup>
import { defineAsyncComponent } from 'vue'
const ServiceHeader = defineAsyncComponent(() => import('./ServiceHeader.vue'))
const ServiceBottomHeader = defineAsyncComponent(() => import('./ServiceBottomHeader.vue'))
const ServiceMainSection = defineAsyncComponent(() => import('./ServiceMainSection.vue'))
const ServiceLastSection = defineAsyncComponent(() => import('./ServiceLastSection.vue'))
</script>
<template>
    <ServiceHeader />
    <ServiceBottomHeader />
    <ServiceMainSection />
    <ServiceLastSection />
</template>
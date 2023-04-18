<script setup>
import { defineAsyncComponent } from 'vue'

const BlogHeaderSlider = defineAsyncComponent(() => import('./BlogHeaderSlider.vue'))
const BlogBottomSection = defineAsyncComponent(() => import('./BlogBottomSection.vue'))
</script>

<template>
    <BlogHeaderSlider />
    <BlogBottomSection />
</template>

<script setup>
import { defineAsyncComponent } from 'vue'

const BlogHeaderSlider = defineAsyncComponent(() => import('./BlogHeaderSlider.vue'))
const BlogSecondSection = defineAsyncComponent(() => import('./BlogSecondSection.vue'))
const BlogBottomSection = defineAsyncComponent(() => import('./BlogBottomSection.vue'))
</script>

<template>
    <BlogHeaderSlider />
    <BlogSecondSection />
    <BlogBottomSection />
</template>

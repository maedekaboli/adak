<script setup>
import { defineAsyncComponent } from 'vue'

const BlogBottomSection = defineAsyncComponent(() => import('./BlogBottomSection.vue'))
</script>

<template>
    <BlogBottomSection />
</template>

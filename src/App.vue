<script setup>
import { defineAsyncComponent } from 'vue'
const TheLayout = defineAsyncComponent(() => import('./views/layout/TheLayout.vue'))
</script>

<template>
  <TheLayout></TheLayout>
</template>

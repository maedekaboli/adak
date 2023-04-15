<script setup>
import { defineAsyncComponent } from 'vue'
const TheHeader = defineAsyncComponent(() => import('./TheHeader.vue'))
</script>

<template>
  <TheHeader></TheHeader>
</template>
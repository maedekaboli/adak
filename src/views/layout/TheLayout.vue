<script setup>
import TheNavbar from './TheNavbar.vue'
import TheFooter from './TheFooter.vue'
</script>

<template>
    <v-layout>
        <TheNavbar />
        <v-main>
            <RouterView></RouterView>
            <TheFooter />
        </v-main>
    </v-layout>
</template>
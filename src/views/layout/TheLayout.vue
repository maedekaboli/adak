<script setup>
import TheNavbar from './TheNavbar.vue'
import TheFooter from './TheFooter.vue'
</script>

<template>
    <v-layout>
        <TheNavbar />
        <v-main>
            <v-container fluid class="pa-0">
                <RouterView></RouterView>
            </v-container>
            <TheFooter />
        </v-main>
    </v-layout>
</template>
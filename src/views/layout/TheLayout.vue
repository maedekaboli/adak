<script setup>
import TheNavbar from './TheNavbar.vue'
</script>

<template>
    <v-layout>
        <TheNavbar />
        <v-main>
            <v-container fluid class="pa-0">
                <RouterView></RouterView>
            </v-container>
        </v-main>
    </v-layout>
</template>
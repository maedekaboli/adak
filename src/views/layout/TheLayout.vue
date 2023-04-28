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

<style>
@media only screen and (max-width:768px) {
    .v-main {
        padding-top: 0;
    }
}
</style>
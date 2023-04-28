<script setup>
import { defineAsyncComponent } from 'vue'
import data from '../../json/about/aboutUs.json'

const TitleAndText = defineAsyncComponent(() => import('../../components/TitleAndText.vue'))
</script>
<template>
    <div class="AboutMainSection">
        <v-container>
            <v-row>
                <v-col cols="md-6" sm="12">
                    <h2>{{ data.title }}</h2>
                    <v-row>
                        <v-col cols="md-6" sm="12" v-for="(item, i) in data.items" :key="i">
                            <TitleAndText :title="item.title" :desc="item.desc">
                            </TitleAndText>
                        </v-col>
                    </v-row>
                    <v-btn color="#3B5099" class="text-white mt-10">{{ data.buttontext }}</v-btn>
                </v-col>
                <v-col cols="md-6" sm="12">
                    <v-img :src="data.image"></v-img>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<style scoped lang="scss">
.AboutMainSection {
    direction: rtl;
    display: flex;
    align-items: center;
    background-position: center;
    background-image: url('/aboutBg.svg');
    background-size: contain;
    height: 1070px;
    width: 100%;
    z-index: 1;
    position: relative;
}
</style>
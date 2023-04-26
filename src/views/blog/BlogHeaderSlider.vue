<script setup>
import { ref } from 'vue'

const items = ref([
    { img: '/blog1.svg', title: 'لورم ایپسوم متن ساختگی با تولید سادگیلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ نامفهوم از صنعت چاپ' },
    { img: '/blog2.svg', title: 'لورم ایپسوم' },
    { img: '/blog1.svg', title: 'لورم ایپسوم' },
    { img: '/blog2.svg', title: 'لورم ایپسوم' }
])
</script>

<template>
    <div class="BlogHeaderSlider">
        <v-container fluid>
            <v-row>
                <v-carousel height="510" hide-delimiters>
                    <template v-slot:prev="{ props }">
                        <v-btn size="40" variant="outlined" color="white" @click="props.onClick"
                            icon="mdi-chevron-left"></v-btn>
                    </template>
                    <template v-slot:next="{ props }">
                        <v-btn size="40" variant="outlined" color="white" @click="props.onClick"
                            icon="mdi-chevron-right"></v-btn>
                    </template>
                    <v-carousel-item class="d-flex align-center" v-for="(item, i) in items" :key="i" :src="item.img" cover>
                        <div class="overlay"></div>
                        <h1> {{ item.title }}</h1>
                    </v-carousel-item>
                </v-carousel>
            </v-row>
        </v-container>
    </div>
</template>

<style scoped lang="scss">
.BlogHeaderSlider {
    h1 {
        font-weight: 700;
        font-size: 32px;
        line-height: 50px;
        color: #FFFFFF;
        position: relative;
        direction: rtl;
        width: 655px;
        margin: auto;
        text-align: center;
    }

    .v-btn {
        border-radius: 50% !important;
    }

    .overlay {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        background: #3B5099;
        opacity: 0.4;
    }
}
</style>
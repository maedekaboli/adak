<script setup>
import { ref, defineAsyncComponent } from 'vue'
import { Carousel, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import items from '../../json/service/serviceMainSection'

const ServiceCard = defineAsyncComponent(() => import('./ServiceCard.vue'))
const breakpoints = ref({

    768: {
        itemsToShow: 1.5,
    },
    1280: {
        itemsToShow: 4,
    },
})
const settings = ref({
    itemsToShow: 1,
})
</script>

<template>
    <div class="ServiceMainSection">
        <v-container>
            <h2>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</h2>
            <ServiceCard :items="items" :settings="settings" :breakpoints="breakpoints"></ServiceCard>
        </v-container>
    </div>
</template>

<style lang="scss">
.ServiceMainSection {
    h2 {
        text-align: center;
        margin-bottom: 30px;
    }

    @media only screen and (min-width:768px) {
        .carousel__track {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 24px;

            .carousel__slide {
                width: 100% !important;
            }
        }
    }
}</style>
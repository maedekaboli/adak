<script setup>
import { ref } from 'vue'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

const items = ref([
    { title: 'کانتینر در انبار ', amount: 200 },
    { title: 'دفتر فعال در جهان', amount: 100 },
    { title: 'کشتیرانی', amount: 500 },
    { title: 'مشتری', amount: 3480 }
])
const breakpoints = ref({
    0: {
        itemsToShow: 1,
    },
    500: {
        itemsToShow: 2,
    },
    960: {
        itemsToShow: 3,
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
    <div class="Circles">
        <v-container>
            <Carousel v-bind="settings" :breakpoints="breakpoints">
                <Slide v-for="(item, i) in items" :key="i">
                    <div class="carousel__item">
                        <div class="d-flex justify-center circle-and-line">
                            <v-img class="top-blue-line" src="/blue-line.svg"></v-img>
                            <v-sheet class="d-flex align-center justify-center" height="141" width="141">{{ item.amount
                            }}</v-sheet>
                            <v-img class="bottom-blue-line" src="/light-blue-line.svg"></v-img>
                        </div>
                        <div class="Circles-title">{{ item.title }}</div>
                    </div>
                </Slide>
                <template #addons>
                    <Navigation class="d-lg-none d-block" />
                </template>
            </Carousel>
        </v-container>
    </div>
</template>


<style lang="scss">
.Circles {
    padding-top: 46px;

    .carousel__icon {
        border: 1.5px solid #292D32;
        border-radius: 50%;
        margin: 0 -10px;
    }

    .carousel__prev,
    .carousel__next {
        top: 44%;
    }

    .carousel__slide {
        padding-top: 26px;

        .circle-and-line {
            position: relative;

            .top-blue-line {
                width: 100%;
                position: absolute;
                padding: 100px;
                top: -30px;
            }

            .bottom-blue-line {
                width: 100%;
                position: absolute;
                padding: 100px;
                bottom: -30px;
            }

            .v-sheet {
                border-radius: 50%;
                box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                font-size: 40px;
                line-height: 62px;
            }

        }

        .Circles-title {
            margin-top: 60px;
            font-weight: 700;
            font-size: 24px;
            line-height: 37px;
            text-align: center;
            color: #000000;
            letter-spacing: normal !important;
        }
    }
}</style>
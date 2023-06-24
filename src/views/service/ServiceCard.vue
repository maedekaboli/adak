<script setup lang="ts">
import { Carousel, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

defineProps<{
    settings: any,
    breakpoints: any,
    items: any
}>()
</script>

<template>
    <Carousel class="ServiceCard" dir="rtl" v-bind="settings" :breakpoints="breakpoints">
        <Slide v-for="(item, i) in items.items" :key="i">
            <v-card variant="flat">
                <v-card-title class="d-flex align-center">
                    <v-img :src="item.img"></v-img>
                    <h2>{{ item.title }}</h2>
                </v-card-title>
                <v-card-text>
                    <p>{{ item.desc }}</p>
                </v-card-text>
            </v-card>
        </Slide>
    </Carousel>
</template>

<style lang="scss">
.ServiceCard {
    .carousel__track {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 24px;

        .v-card-title {
            color: #3B5099;
        }

        li:nth-child(odd) {
            .v-card-title {
                background-color: #f1e5d3;
                color: #FC9802;
            }
        }

    }

    .carousel__slide {
        width: 100% !important;
    }

    .v-card {
        background: #F0F0F0;
        border-radius: 16px;

        .v-card-title {
            background: #e7eaf3;
            border-radius: 16px;

            h2 {
                font-weight: 900;
                font-size: 32px;
                line-height: 50px;
                text-align: right;
            }

            .v-img {
                height: 64px;
                width: 64px;
                flex: unset;
                margin-left: 20px;
            }
        }

        p {
            font-weight: 700;
            font-size: 14px;
            line-height: 33px;
            text-align: right;
            color: #808080;
            padding-top: 20px;
        }

    }

    @media only screen and (max-width:768px) {
        .carousel__track {
            display: flex !important;
        }

        .v-card-title {

            h2 {
                font-size: 18px !important;
            }
        }

        .v-img {
            margin-left: 10px !important;
            width: 33px !important;
            height: 33px !important;
        }

        p {
            font-size: 12px !important;
        }
    }

}</style>
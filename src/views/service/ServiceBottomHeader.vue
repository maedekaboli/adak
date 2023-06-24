<script setup>
import { ref, defineAsyncComponent } from 'vue'
import { Carousel, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

const bottomItems = ref([
    { value: 213, title: 'لورم ایپسوم متن ساختگی' },
    { value: 213, title: 'لورم ایپسوم متن ساختگی' },
    { value: 213, title: 'لورم ایپسوم متن ساختگی' },
    { value: 213, title: 'لورم ایپسوم متن ساختگی' },
    { value: 213, title: 'لورم ایپسوم متن ساختگی' }
])
const BlogTitleAndText = defineAsyncComponent(() => import('../../components/TitleAndText.vue'))
const breakpoints = ref({
    0: {
        itemsToShow: 1.5,
    },
    500: {
        itemsToShow: 2.5,
    },
    960: {
        itemsToShow: 3.5,
    },
    1280: {
        itemsToShow: 5,
    },
})
const settings = ref({
    itemsToShow: 1,
})
</script>

<template>
    <div class="ServiceBottomHeader">
        <v-container>
            <Carousel dir="rtl" v-bind="settings" :breakpoints="breakpoints">
                <Slide v-for="(item, i) in bottomItems" :key="i">
                    <div class="carousel__item">
                        <div class="numbers">{{ item.value }}</div>
                        <span>{{ item.title }}</span>
                    </div>
                </Slide>
            </Carousel>
        </v-container>
    </div>
</template>

<style lang="scss">
.ServiceBottomHeader {
    margin-bottom: 40px;
    margin-top: 30px;

    .carousel__track {
        height: 130px !important;

        .numbers {
            font-weight: 700;
            font-size: 62px;
            line-height: 24px;
            text-align: center;
            color: #FC9802;
            margin-bottom: 38px;

            &::after {
                content: '+';
            }
        }

        span {
            font-weight: 700;
            font-size: 16px;
            line-height: 25px;
            text-align: center;
            color: #808080;
        }
    }
}
</style>
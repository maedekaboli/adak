<script setup>
import { ref, defineAsyncComponent } from 'vue'
import { Carousel, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

const bottomItems = ref([
    { img: '/blog1.svg', title: 'لورم ایپسوم', desc: 'و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز' },
    { img: '/blog2.svg', title: 'لورم ایپسوم', desc: 'و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز' },
    { img: '/blog1.svg', title: 'لورم ایپسوم', desc: 'و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز' },
    { img: '/blog2.svg', title: 'لورم ایپسوم', desc: 'و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز' }
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
        itemsToShow: 4,
    },
})
const settings = ref({
    itemsToShow: 1,
})
</script>

<template>
    <div class="BlogBottomSection">
        <v-container>
            <Carousel dir="rtl" v-bind="settings" :breakpoints="breakpoints">
                <Slide v-for="(item, i) in bottomItems" :key="i">
                    <div class="carousel__item">
                        <v-img width="100%" cover :src="item.img"></v-img>
                        <BlogTitleAndText :title="item.title" :desc="item.desc"></BlogTitleAndText>
                    </div>
                </Slide>
            </Carousel>
        </v-container>
    </div>
</template>

<style lang="scss" scoped>
.BlogBottomSection {
    direction: rtl;
    background: #EFEFEF;
    padding-top: 50px;
    padding-bottom: 80px;

    .carousel__item {
        padding: 0 12px;
        text-align: right;
    }
}
</style>
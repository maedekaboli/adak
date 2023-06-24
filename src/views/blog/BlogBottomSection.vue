<script setup>
import { ref, defineAsyncComponent } from 'vue'
import { Carousel, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import api from '../../api/api'

const items = ref([])
api.get(`posts`).then(res => {
    items.value = res?.data?.data
})
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
                <Slide v-for="(item, i) in items" :key="i">
                    <RouterLink :to="`/blogs/${item.slug}`">
                        <div class="carousel__item">
                            <v-img width="100%" cover :src="item.featured_image"></v-img>
                            <BlogTitleAndText :title="item.title" :desc="item.content"></BlogTitleAndText>
                        </div>
                    </RouterLink>
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

    .carousel__slide {
        a {
            text-decoration: none;
        }
    }

    .carousel__item {
        padding: 0 12px;
        text-align: right;

        .v-img {
            border-radius: 8px;
        }
    }

    @media only screen and (max-width:360px) {
        & {
            padding: 35px 0;
        }
    }
}
</style>
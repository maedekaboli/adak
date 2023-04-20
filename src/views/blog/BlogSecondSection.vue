<script setup>
import { ref, defineAsyncComponent } from 'vue'

const BlogTitleAndText = defineAsyncComponent(() => import('./BlogTitleAndText.vue'))
const itemsWithImg = ref([
    { img: '/blog1.svg', title: 'لورم ایپسوم', desc: 'و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز' },
    { img: '/blog2.svg', title: 'لورم ایپسوم', desc: 'و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز' },
])
const itemsWithoutImg = ref([
    { img: '/blog1.svg', title: 'لورم ایپسوم', desc: 'و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز' },
    { img: '/blog2.svg', title: 'لورم ایپسوم', desc: 'و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز' },
])
</script>

<template>
    <div class="BlogSecondSection">
        <v-container>
            <v-row>
                <v-col cols="md-4" v-for="(item, i) in itemsWithImg" :key="i">
                    <v-img width="100%" cover :src="item.img"></v-img>
                    <BlogTitleAndText :title="item.title" :desc="item.desc"></BlogTitleAndText>
                </v-col>
                <v-col cols="md-4">
                    <h2 class="main-title">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</h2>
                    <BlogTitleAndText v-for="(item, i) in itemsWithoutImg" :key="i" :title="item.title" :desc="item.desc">
                    </BlogTitleAndText>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<style scoped lang="scss">
.BlogSecondSection {
    direction: rtl;
    padding: 30px 0;

    .main-title {
        font-weight: 700;
        font-size: 24px;
        line-height: 37px;
        margin-bottom: 30px;
        color: #181818;
    }
}
</style>
<script setup>
import { ref, defineAsyncComponent } from 'vue'

const BlogTitleAndText = defineAsyncComponent(() => import('../../components/TitleAndText.vue'))
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
                <v-col cols="md-4" sm="6" v-for="(item, i) in itemsWithImg" :key="i">
                    <v-img width="100%" cover :src="item.img"></v-img>
                    <BlogTitleAndText :title="item.title" :desc="item.desc"></BlogTitleAndText>
                </v-col>
                <v-col cols="md-4">
                    <h2 class="main-title">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</h2>
                    <v-row>
                        <v-col class="pt-0" cols="md-12" sm="6" v-for="(item, i) in itemsWithoutImg" :key="i">
                            <BlogTitleAndText :title="item.title" :desc="item.desc">
                            </BlogTitleAndText>
                        </v-col>
                    </v-row>
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

    @media only screen and (max-width:360px) {
        .main-title {
            font-size: 16px;
            line-height: 25px;
            margin-bottom: 8px;
        }
    }
}
</style>
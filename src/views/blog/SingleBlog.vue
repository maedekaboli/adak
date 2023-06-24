<script setup>
import { useRoute } from 'vue-router'
import api from '../../api/api'
import { ref, defineAsyncComponent } from 'vue'
import items from '../../json/blog/singleBlog.json'

const BlogTitleAndText = defineAsyncComponent(() => import('../../components/TitleAndText.vue'))
const BlogBottomSection = defineAsyncComponent(() => import('./BlogBottomSection.vue'))
const route = useRoute()
const blog = ref({})

if (route.params.slug) {
    api.get(`post/${route.params.slug}`).then(res => {
        blog.value = res?.data?.data
    })
}
</script>

<template>
    <div class="SingleBlog">
        <v-container>
            <v-row>
                <v-col class="blog-detail" cols="12">
                    <h1>{{ blog.title }}</h1>
                    <v-img height="400" :src="blog.featured_image"></v-img>
                    <p>{{ blog.content }}</p>
                </v-col>
            </v-row>
        </v-container>
        <div class="center-section" v-for="(item, index) in items.items" :key="index">
            <v-container>
                <v-row>
                    <v-col cols="md-5" sm="12">
                        <v-img :src="item.img"></v-img>
                    </v-col>
                    <v-col cols="md-7" sm="12">
                        <BlogTitleAndText :title="item.title" :desc="item.desc"></BlogTitleAndText>
                    </v-col>
                </v-row>
            </v-container>
        </div>
    </div>
    <BlogBottomSection></BlogBottomSection>
</template>

<style lang="scss">
.SingleBlog {
    direction: rtl;
    padding: 24px 0 0 0;

    .TitleAndText {
        h2 {
            margin-top: 0 !important;
        }

        h2,
        p {
            display: block !important;
        }
    }

    .blog-detail {
        h1 {
            font-weight: 700;
            font-size: 32px;
            line-height: 50px;
            text-align: center;
            color: #181818;
            margin: 24px 0;
        }

        p {
            margin-top: 40px;
            font-weight: 700;
            font-size: 14px;
            line-height: 33px;
            text-align: right;
            color: #808080;
            margin-bottom: 24px;
        }
    }

    .center-section {
        padding: 58px 0;

        &:nth-child(even) {
            background-color: #d6daea;
        }

        &:nth-child(odd) {
            .v-row {
                flex-flow: row-reverse;
            }
        }
    }

    @media only screen and (max-width:768px) {
        .blog-detail {
            h1 {
                font-size: 24px;
            }
        }

        .center-section {
            padding: 28px 0;

            &:nth-child(odd) {
                .v-row {
                    flex-flow: column;
                }
            }
        }
    }

    @media only screen and (max-width:360px) {
        .center-section {
            padding: 22px 0;
        }

        .blog-detail {
            .v-img {
                height: auto !important;
            }

            h1 {
                font-size: 14px;
                line-height: 22px;
            }

            p {
                margin-top: 20px;
                font-size: 12px;
                line-height: 33px;
            }
        }
    }
}</style>
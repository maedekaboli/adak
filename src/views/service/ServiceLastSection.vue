<script setup>
import { ref, onMounted } from 'vue'
import api from '../../api/api';

const items = ref([])
onMounted(() => {
    api.get(`services`).then(res => {
        items.value = res?.data?.data
    })
})
</script>

<template>
    <div class="ServiceLastSection">
        <v-container>
            <v-row>
                <h1>خدمات مجموعه ما</h1>
                <v-col class="py-1 service" v-for="(item, index) in items" :key="index" cols="sm-12">
                    <v-card class="service-detail" variant="flat">
                        <div class="index-img">
                            <div class="index">{{ ++index }}</div>
                            <v-img :src="index % 2 !== 0 ? '/cup.svg' : '/setting-2.svg'"></v-img>
                        </div>
                        <div class="d-flex flex-wrap">
                            <v-card-title>{{ item.title }} </v-card-title>
                            <v-card-text>{{ item.content }}
                            </v-card-text>
                            <v-card-actions class="justify-end w-100">
                                <RouterLink :to="`/services/${item.slug}`">
                                    <v-btn>مشاهده جزئیات</v-btn>
                                </RouterLink>
                            </v-card-actions>
                        </div>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<style lang="scss">
.ServiceLastSection {
    direction: rtl;
    margin-bottom: 65px;

    h1 {
        margin-bottom: 33px;
        color: #181818;
        font-size: 32px;
        font-weight: 900;
        word-wrap: break-word
    }

    .service {
        .service-detail {
            display: flex;
            align-items: center;
        }

        &:nth-child(odd) {
            .v-card {
                border-bottom-color: #FC9802 !important;
            }

            .index {
                color: #FC9802 !important;
                border-left-color: #FC9802 !important;
            }

            .v-btn {
                color: #FC9802 !important;
            }
        }

        .v-card {
            padding-left: 30px;
            background: #F9F9F9;
            border-bottom: 2px solid #3B5099;
            border-radius: 8px;

            .index-img {
                display: flex;
                align-items: center;

                .index {
                    font-weight: 900;
                    font-size: 64px;
                    line-height: 99px;
                    text-align: right;
                    color: #3B5099;
                    padding: 40px 80px;
                    border-left: 1px dotted #3B5099;
                }

                .v-img {
                    width: 64px;
                    height: 64px;
                    margin: 0 33px;
                }
            }

            .v-card-title {
                color: #181818;
                font-size: 16px;
                font-weight: 700;

                &::before {
                    content: '\2022';
                    display: inline-block;
                    margin-left: 20px;
                    transform: scale(2.5);
                }
            }

            .v-card-text {
                color: #808080;
                font-size: 14px;
                font-weight: 700;
                line-height: 33px;
                padding-bottom: 0;
                display: -webkit-box;
                -webkit-line-clamp: 3;
                -webkit-box-orient: vertical;
                overflow: hidden;
            }

            .v-card-actions {
                .v-btn {
                    font-weight: 900;
                    font-size: 24px;
                    line-height: 37px;
                    text-align: right;
                    letter-spacing: normal;
                    color: #3B5099;
                    margin-bottom: 26px;
                }
            }
        }
    }

    @media only screen and (max-width:768px) {
        .service:nth-child(even) {
            .index-img {
                border-bottom: 1px dotted #3B5099;
            }
        }
        .service:nth-child(odd) {
            .index-img {
                border-bottom: 1px dotted #FC9802 ;
            }
        }

        .service-detail {
            display: block !important;
        }

        .index-img {

            .index {
                border-left: none !important;
                padding: 20px 50px 20px 25px !important;
            }

            .v-img {
                margin: 0 !important;
            }
        }
    }
}
</style>
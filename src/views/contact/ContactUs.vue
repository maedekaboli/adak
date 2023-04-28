<script setup>
import { ref, defineAsyncComponent } from 'vue'
import data from '../../json/contact.json'

const SocialMedia = defineAsyncComponent(() => import('../../components/SocialMedia.vue'))
const tab = ref(null)
</script>

<template>
    <div class="ContactUs">
        <v-container>
            <v-row>
                <v-col cols="12">
                    <h2>{{ data.title }}</h2>
                    <p>{{ data.text }}</p>
                </v-col>
            </v-row>
            <div class="d-flex flex-wrap justify-center">
                <v-col cols="md-8" class="pa-0">
                    <v-tabs v-model="tab" color="deep-purple-accent-4" align-tabs="center">
                        <v-tab class="ml-sm-6 ml-0 mr-1" v-for="(item, i) in data.tabItems" :value="i" :key="item.value">
                            <v-img class="mb-sm-2 mb-0 ml-sm-2 ml-1" :width="22" :src="item.img"></v-img>
                            {{ item.title }}
                        </v-tab>
                    </v-tabs>
                    <v-window v-model="tab">
                        <v-window-item v-for="(item, i) in data.tabItems" :key="i" :value="item.value">
                            <v-card class="mt-4 py-9 px-15">
                                <div class="mb-7" v-for="(inf, i) in item.items" :key="i">
                                    <h2>{{ inf.title }}</h2>
                                    <div class="d-inline-flex align-center">
                                        <v-img class="mb-1 ml-1" :width="24" :src="inf.img"></v-img>
                                        <p class="mb-0">{{ inf.info }}</p>
                                    </div>
                                </div>
                            </v-card>
                        </v-window-item>
                    </v-window>
                    <SocialMedia class="justify-center mt-7" />
                </v-col>
            </div>
        </v-container>
    </div>
</template>

<style lang="scss">
.ContactUs {
    background: #EFEFEF;
    direction: rtl;
    padding: 52px 0;

    h2 {
        font-weight: 700;
        font-size: 24px;
        line-height: 37px;
        text-align: center;
        color: #181818;
        width: 100%;
        margin-bottom: 28px;
    }

    p {
        font-weight: 700;
        font-size: 14px;
        line-height: 33px;
        text-align: center;
        color: #808080;
        margin-bottom: 28px;
    }

    .v-slide-group__content {
        display: flex;
        flex: none;
        justify-content: right;
    }

    .v-tabs--density-default {
        --v-tabs-height: 85px;
    }

    .v-tab {
        width: 181px;
        height: 74px;
        background: #EFEFEF;
        border: 1px solid #D9D9D9;
        border-radius: 16px;
        color: #3B5099;
        font-weight: 700;
        font-size: 24px;
        line-height: 37px;
        letter-spacing: normal;

        .v-btn__content {
            color: #3B5099;
        }


    }

    .v-card--variant-elevated {
        box-shadow: none;
    }

    .v-tab--selected {
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25) !important;
    }

    .v-tab__slider {
        opacity: 0 !important;
    }

    .v-window-item {

        .v-card {
            border-radius: 16px;

            h2 {
                font-weight: 700;
                font-size: 20px;
                line-height: 31px;
                margin-bottom: 8px;
                text-align: right;
                color: #3B5099;
            }

            p {
                font-weight: 500;
                font-size: 16px;
                line-height: 31px;
                text-align: right;
                color: #5A5A5A;
            }
        }
    }

    @media only screen and (max-width:360px) {
        .v-card {
            padding: 12px !important;

            h2 {
                font-size: 16px !important;
                line-height: 25px !important;
            }

            p {
                font-size: 12px !important;
                line-height: 19px !important;
            }
        }

        h2 {
            font-size: 16px;
            line-height: 25px;
            margin-bottom: 12px;
        }

        p {
            font-size: 12px;
            line-height: 33px;
            margin-bottom: 0;
        }

        .v-tabs--density-default {
            --v-tabs-height: 55px;
        }

        .v-tab {
            width: 99px;
            height: 48px;
            border-radius: 8px !important;
            font-size: 16px;
            line-height: 25px;

            .v-img__img--contain {
                width: 17px;
                height: 17px;
            }
        }
    }

}
</style>
<script setup>
import { ref, defineAsyncComponent } from 'vue'

const SocialMedia = defineAsyncComponent(() => import('../../components/SocialMedia.vue'))
const tab = ref(null)
const tabItems = ref([
    { value: 1, img: '/location-blue.svg', title: 'آدرس ' },
    { value: 2, img: '/sms-blue.svg', title: 'ایمیل' },
    { value: 3, img: '/call-calling-blue.svg', title: 'تلفن' }
])
</script>

<template>
    <div class="ContactUs">
        <v-container>
            <v-row>
                <h2>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</h2>
                <p>و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و
                    برای
                    شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در
                    شصت
                    و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد</p>
            </v-row>
            <v-row class="justify-center">
                <v-col cols="md-8">
                    <v-tabs v-model="tab" color="deep-purple-accent-4" align-tabs="center">
                        <v-tab class="ml-6 mr-1" v-for="item in tabItems" :value="item.value" :key="item.value">
                            <v-img class="mb-2 ml-2" :width="22" :src="item.img"></v-img>
                            {{ item.title }}
                        </v-tab>
                    </v-tabs>
                    <v-window v-model="tab">
                        <v-window-item v-for="item in tabItems" :key="item.value" :value="item.value">
                            <v-card class="mt-4 py-9 px-15">
                                xxx
                            </v-card>
                        </v-window-item>
                    </v-window>
                    <SocialMedia class="justify-center mt-7" />
                </v-col>
            </v-row>
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
        }
    }

}
</style>
<script setup>
import { ref, defineAsyncComponent } from 'vue'

const SocialMedia = defineAsyncComponent(() => import('../../components/SocialMedia.vue'))
const tab = ref(null)
const tabItems = ref([
    { value: 1, img: '/location.svg', title: 'آدرس ' },
    { value: 2, img: '/sms.svg', title: 'ایمیل' },
    { value: 3, img: '/call-calling.svg', title: 'تلفن' }
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
            <v-tabs v-model="tab" color="deep-purple-accent-4" align-tabs="center">
                <v-tab v-for="item in tabItems" :value="item.value" :key="item.value">
                    <v-btn size="large" variant="outlined">
                        <v-img :width="20" :src="item.img"></v-img>
                        {{ item.title }}</v-btn>
                </v-tab>
            </v-tabs>
            <v-window v-model="tab">
                <v-window-item v-for="item in tabItems" :key="item.value" :value="item.value">
                    <v-card class="mt-4">dd</v-card>
                </v-window-item>
            </v-window>
        </v-container>
        <SocialMedia />
    </div>
</template>

<style scoped lang="scss">
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
}
</style>
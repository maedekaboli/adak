<script setup>
import { defineAsyncComponent } from 'vue'
import data from '../../json/about/aboutUs.json'

const TitleAndText = defineAsyncComponent(() => import('../../components/TitleAndText.vue'))
</script>
<template>
    <div class="AboutMainSection">
        <v-img src="/aboutBg.png"></v-img>
        <div class="AboutMainSection-bg">
            <v-container>
                <v-row>
                    <v-col class="order-md-1 order-2" cols="md-6" sm="12">
                        <h2>{{ data.title }}</h2>
                        <v-row>
                            <v-col class="v-col-12" cols="sm-6" v-for="(item, i) in data.items" :key="i">
                                <TitleAndText :title="item.title" :desc="item.desc">
                                </TitleAndText>
                            </v-col>
                        </v-row>
                        <v-btn color="#3B5099" class="text-white mt-10">{{ data.buttontext }}</v-btn>
                    </v-col>
                    <v-col class="order-md-2 order-1" cols="md-6" sm="12">
                        <v-img :src="data.image"></v-img>
                    </v-col>
                </v-row>
            </v-container>
        </div>
    </div>
</template>

<style scoped lang="scss">
.AboutMainSection {
    direction: rtl;

    .AboutMainSection-bg {
        background: #D9D9D9;
        padding-bottom: 156px;
        position: relative;

        .v-btn {
            width: 180px;
            height: 44.29px;
            background: #3B5099;
            border-radius: 8px;
        }
    }

    @media only screen and (max-width:768px) {
        .AboutMainSection-bg {
            padding-bottom: 25px;

            h2 {
                font-size: 16px;
                line-height: 25px;
            }

            .v-btn {
                width: 328px;
                height: 48px;
            }
        }
    }
}
</style>
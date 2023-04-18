<script setup>
import { ref } from 'vue'

const contactUs = ref([
    { prependAvatar: '/location.svg', title: 'تهران - خیابان جمالزاده شمالی .......' },
    { prependAvatar: '/call-calling.svg', title: '021-44444444' },
    { prependAvatar: '/sms.svg', title: 'elham.ajami96@gmail.com' }
])
</script>


<template>
    <div class="TheFooter">
        <div class="top-footer w-100">
            <v-row>
                <v-col cols="6">
                    <v-list :items="contactUs" item-props lines="three">
                        <template v-slot:title="{ title }">
                            <div>{{ title }}</div>
                        </template>
                        <template v-slot:prependAvatar="{ prependAvatar }">
                            <div>{{ prependAvatar }}</div>
                        </template>
                    </v-list>
                </v-col>
                <v-col cols="6">1</v-col>
            </v-row>
        </div>
        <div class="bottom-footer">تمامی حقوق متعلق به سایت ....... می باشد </div>
    </div>
</template>


<style lang="scss">
.TheFooter {
    direction: rtl;

    .top-footer {
        .v-list {
            background-color: inherit;

            .v-list-item-title{
                font-weight: 500;
                font-size: 16px;
                line-height: 25px;
                /* identical to box height */

                text-align: right;

                /* gray color/7 */

                color: #F9F9F9;
            }
        }

        background: #3B5099;
    }

    .bottom-footer {
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 500;
        font-size: 14px;
        width: 100vw;
        line-height: 22px;
        text-align: right;
        color: #373C3F;
        background: #E6EAEE;
        height: 59px;
    }
}</style>
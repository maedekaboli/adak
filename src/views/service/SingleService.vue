<script setup>
import { useRoute } from 'vue-router'
import api from '../../api/api'
import { ref, onMounted } from 'vue'
import items from '../../json/service/singleService.json'
import ServiceCard from './ServiceCard.vue'

const route = useRoute()
const service = ref({})
onMounted(() => {
    if (route.params.slug) {
        api.get(`service/${route.params.slug}`).then(res => {
            service.value = res?.data?.data
        })
    }
})

const breakpoints = ref({
    768: {
        itemsToShow: 1.5,
    },
    1280: {
        itemsToShow: 2,
    },
})
const settings = ref({
    itemsToShow: 1,
})
</script>

<template>
    <div class="SingleService">
        <v-container>
            <v-row>
                <v-col cols="12">
                    <h1>{{ service.title }}</h1>
                    <v-img height="400" :src="service.featured_image"></v-img>
                    <p>{{ service.content }}</p>
                </v-col>
            </v-row>
            <v-row>
                <ServiceCard :items="items" :settings="settings" :breakpoints="breakpoints"></ServiceCard>
            </v-row>
        </v-container>
    </div>
</template>

<style lang="scss">
.SingleService {
    direction: rtl;
    padding: 24px 0;

    h1 {
        font-weight: 700;
        font-size: 32px;
        line-height: 50px;
        text-align: center;
        color: #181818;
        margin: 24px 0;
    }

    p {
        font-weight: 700;
        font-size: 14px;
        line-height: 33px;
        text-align: right;
        color: #808080;
        margin-bottom: 24px;
    }

    @media only screen and (max-width:360px) {
        .v-img{height: auto !important;}
        h1 {
            font-size: 14px;
            line-height: 22px;
        }

        p {
            font-size: 12px;
            line-height: 33px;
        }
    }
}
</style>
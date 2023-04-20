<script setup>
import { ref } from 'vue'

const socialMedias = ref([
    { img: '/facebook.svg', title: 'Facebook' },
    { img: '/whatsapp.svg', title: 'Whatsapp' },
    { img: '/twitter.svg', title: 'Twitter' },
    { img: '/linkedin.svg', title: 'Linkedin' },

])
</script>

<template>
    <ul class="SocialMedia">
        <li v-for="(item, i) in socialMedias" :key="i">
            <v-img :src="item.img"></v-img>
        </li>
    </ul>
</template>

<style scoped lang="scss">
.SocialMedia {
    display: flex;

    li {
        width: 40px;
        height: 40px;
        background: #122771;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 15px;

        .v-img {
            width: 15px;
            height: 15px;
        }
    }
}
</style>
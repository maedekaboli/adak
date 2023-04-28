<script setup>
import data from '../json/layout/socialMedias.json'
</script>

<template>
    <ul class="SocialMedia">
        <RouterLink v-for="(item, i) in data" :key="i" :to="item.link" custom v-slot="{ navigate }">
            <li @click="navigate" role="link">
                <v-img :src="item.img"></v-img>
            </li>
        </RouterLink>
    </ul>
</template>

<style scoped lang="scss">
.SocialMedia {
    display: flex;

    li {
        cursor: pointer;
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
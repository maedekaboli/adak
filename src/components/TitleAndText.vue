<script setup>
defineProps({
    title: String,
    desc: String
})
</script>

<template>
    <div class="TitleAndText">
        <h2>{{ title }}</h2>
        <p>{{ desc }}</p>
    </div>
</template>

<style lang="scss" scoped>
.TitleAndText {
    h2 {
        margin-bottom: 12px;
        margin-top: 20px;
        font-weight: 700;
        font-size: 16px;
        line-height: 25px;
        color: #3B5099;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;

        &::before {
            content: " ";
            display: inline-block;
            margin-left: 12px;
            width: 11px;
            height: 11px;
            border-radius: 50%;
            background: #FC9802;
        }
    }

    p {
        font-weight: 700;
        font-size: 14px;
        color: #808080;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
    }

    @media only screen and (max-width:768px) {
        h2 {
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
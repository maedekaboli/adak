<script setup>
let t = 1800
for (let i = 0; i <= 18; i++)
    t = t + t * 20 / 100 + 100
console.log(t)
</script>

<template>
    <v-container class="AboutBottomSection">
        <v-row>
            <v-col cols="5">
                <v-img src="/team.svg"></v-img>
            </v-col>
            <v-col cols="7">
                <h1 class="mb-12">تیم ما</h1>
                <h1 class="mb-6">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</h1>
                <p>و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و
                    برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
                    زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد</p>
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped lang="scss">
.AboutBottomSection {
    padding: 45px 0;
    direction: rtl;
}
</style>
<script setup>
import { ref } from 'vue'

const items = ref([
    { title: 'لورم ایپسوم', img: 'ss', text: 'و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، ' },
    { title: 'لورم ایپسوم', img: 'ss', text: 'و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، ' },
    { title: 'لورم ایپسوم', img: 'ss', text: 'و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، ' }
])
</script>

<template>
    <div class="OurClients">
        <v-container class="py-0">
            <h2>مشتریان ما</h2>
            <v-row>
                <v-col class="d-flex flex-wrap justify-center" v-for="(item, i) in items" :key="i" cols="md-4">
                    <v-sheet class="mb-4 OurClients-img">
                        <v-img cover src="/circle-pointer.svg" class="circle-question"></v-img>
                    </v-sheet>
                    <v-sheet>
                        {{ item.text }}
                    </v-sheet>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>


<style scoped lang="scss">
.OurClients {
    padding: 33px 0 46px 0;
    background: #F0F0F0;
    text-align: center;

    h2 {
        line-height: 37px;
        color: #3B5099;
        margin-bottom: 44px;
    }

    .v-sheet {
        direction: rtl;
        border-radius: 16px;
        padding: 24px;
    }

    .OurClients-img {
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 68px;
        height: 122px;
        width: 297px;
    }
}
</style>
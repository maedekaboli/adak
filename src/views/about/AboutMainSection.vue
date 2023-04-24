<script setup>
import { ref, defineAsyncComponent } from 'vue'

const TitleAndText = defineAsyncComponent(() => import('../../components/TitleAndText.vue'))
const items = ref([
    { title: 'لورم ایپسوم', desc: 'و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز' },
    { title: 'لورم ایپسوم', desc: 'و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز' },
    { title: 'لورم ایپسوم', desc: 'و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز' },
    { title: 'لورم ایپسوم', desc: 'و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز' }
])
</script>
<template>
    <div class="AboutMainSection">
        <v-container>
            <v-row>
                <v-col cols="md-6">
                    <h2>درباره ما</h2>
                    <v-row>
                        <v-col cols="md-6" v-for="(item, i) in items" :key="i">
                            <TitleAndText :title="item.title" :desc="item.desc">
                            </TitleAndText>
                        </v-col>
                    </v-row>
                    <v-btn color="#3B5099" class="text-white mt-10">باتن</v-btn>
                </v-col>
                <v-col cols="md-6">
                    <v-img src="/blog1.svg"></v-img>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<style scoped lang="scss">
.AboutMainSection {
    direction: rtl;
    background-image: url('/mainBg.svg');
    background-size: cover;
}
</style>
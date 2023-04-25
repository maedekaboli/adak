<script setup>
import { ref } from 'vue'

const items = ref([
    { title: 'کانتینر در انبار ', amount: 200 },
    { title: 'دفتر فعال در جهان', amount: 100 },
    { title: 'کشتیرانی', amount: 500 },
    { title: 'مشتری', amount: 3480 }
])
</script>

<template>
    <div class="Circles">
        <v-container>
            <v-row>
                <v-col cols="md-3" v-for="(item, i) in items" :key="i">
                    <div class="d-flex justify-center circle-and-line">
                        <v-img class="top-blue-line" src="/blue-line.svg"></v-img>
                        <v-sheet class="d-flex align-center justify-center" height="141" width="141">{{ item.amount
                        }}</v-sheet>
                        <v-img class="bottom-blue-line" src="/light-blue-line.svg"></v-img>
                    </div>
                    <div class="Circles-title">{{ item.title }}</div>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>


<style scoped lang="scss">
.Circles {
    padding-top: 46px;

    .circle-and-line {
        position: relative;

        .top-blue-line {
            width: 100%;
            position: absolute;
            padding: 100px;
            top: -30px;
        }

        .bottom-blue-line {
            width: 100%;
            position: absolute;
            padding: 100px;
            bottom: -30px;
        }

        .v-sheet {
            border-radius: 50%;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            font-size: 40px;
            line-height: 62px;
        }

    }

    .Circles-title {
        margin-top: 60px;
        font-weight: 700;
        font-size: 24px;
        line-height: 37px;
        text-align: center;
        color: #000000;
    }
}
</style>
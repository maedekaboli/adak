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
                <v-col class="d-flex flex-wrap justify-center" cols="md-3" v-for="(item, i) in items" :key="i">
                    <v-sheet class="d-flex align-center justify-center" height="141" width="141">{{ item.amount }}</v-sheet>
                    <div class="Circles-title">sss</div>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>


<style scoped lang="scss">
.Circles {
    .v-sheet {
        border-radius: 50%;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        font-size: 40px;
        line-height: 62px;
    }

    .Circles-title {
        font-weight: 700;
        font-size: 24px;
        line-height: 37px;
        text-align: center;
        color: #000000;
    }
}
</style>
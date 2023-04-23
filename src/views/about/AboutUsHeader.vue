<template>
    <div class="AboutUsHeader">
        <v-container>
            <v-row>
                <div class="title-and-btn">
                    <h1 class="mb-13">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</h1>
                    <v-btn size="large" color="#3B5099">ورود</v-btn>
                </div>
                <div class="images">
                    <v-img src="/mosalas.svg"></v-img>
                    <v-img src="/polygon.svg"></v-img>
                </div>
            </v-row>
        </v-container>
    </div>
</template>

<style scoped lang="scss">
.AboutUsHeader {
    direction: rtl;
    position: relative;

    .title-and-btn {
        h1 {
            width: 590px;
        }
    }

    .images {
        left: 0;
        position: absolute;

        .v-img {
            width: 100px;
        }
    }
}
</style>
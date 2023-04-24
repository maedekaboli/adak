<template>
    <div class="AboutUsHeader">
        <v-container>
            <v-row>
                <div class="title-and-btn">
                    <h1 class="mb-13">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</h1>
                    <v-btn size="large" color="#3B5099" class="text-white">ورود</v-btn>
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
    margin: 33px 0;

    .title-and-btn {
        h1 {
            width: 590px;
        }
    }

    .images {
        left: 70px;
        top: 220px;
        position: absolute;
        transform: scale(2.5);
        z-index: 0;

        .v-img:first-child {
            position: absolute;
            left: 50px;
            top: -40px;
        }

        .v-img {
            width: 100px;
        }
    }
}
</style>
<template>
    <div class="AboutUsHeader">
        <v-container>
            <v-row>
                <div class="title-and-btn px-3">
                    <h1 class="mb-13">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</h1>
                    <v-btn width="252" height="62" color="#3B5099" class="text-white">ورود</v-btn>
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
            position: relative;
            z-index: 1;
            width: 590px;
        }

        .v-btn {
            position: relative;
            z-index: 1;
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
            z-index: 2;
        }

        .v-img:last-child {
            position: relative;
            z-index: 1;
        }

        .v-img {
            width: 100px;
        }
    }

    @media only screen and (max-width:768px) {
        .images[data-v-0ac1398f] {
            left: 0px;
            top: 50px;
            transform: unset;
        }

        .title-and-btn {
            h1 {
                width: 410px;
                font-size: 24px;
                line-height: 37px;
            }
        }
    }

    @media only screen and (max-width:360px) {
        .images {
            left: -24px !important;
            top: 25px !important;
            transform: scale(0.55) !important;
        }

        .title-and-btn {
            h1 {
                width: 100%;
                font-size: 16px;
                line-height: 25px;
                text-align: center;
                margin-bottom: 46px !important;
            }

            .v-btn {
                width: 100% !important;
                height: 48px !important;
            }
        }
    }
}
</style>
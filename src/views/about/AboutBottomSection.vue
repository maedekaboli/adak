<template>
    <div class="AboutBottomSection">
        <v-container class="">
            <v-row>
                <v-col cols="md-5" sm="6">
                    <v-img src="/team.svg"></v-img>
                </v-col>
                <v-col cols="md-7" sm="6">
                    <h1 class="mb-12 first-title">تیم ما</h1>
                    <h1 class="mb-6 second-title">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</h1>
                    <p>و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم
                        است، و
                        برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
                        زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد</p>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<style scoped lang="scss">
.AboutBottomSection {
    padding: 45px 0;
    direction: rtl;

    .v-img {
        width: 423px;
        height: 423px;
    }

    @media only screen and (max-width:768px) {
        .second-title {
            font-size: 20px;
            line-height: 31px;
            margin-bottom: 15px !important;
        }

        .first-title {
            font-size: 24px;
            line-height: 37px;
            margin-bottom: 15px !important;
        }

        p {
            font-size: 14px;
            line-height: 33px;
        }

        .v-img {
            width: 286px;
            height: 286px;
        }
    }

    @media only screen and (max-width:360px) {
        .second-title {
            text-align: center;
            font-size: 14px;
            line-height: 22px;
            margin-bottom: 10px !important;
        }

        .first-title {
            text-align: center;
            font-size: 16px;
            line-height: 25px;
            margin-bottom: 10px !important;
        }

        p {
            text-align: center;
            font-size: 12px;
            line-height: 33px;
        }

        .v-img {
            width: 100%;
            height: 328px;
        }
    }
}
</style>
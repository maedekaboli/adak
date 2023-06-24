<template>
    <div class="ServiceHeader">
        <div class="top-header">
            <v-container>
                <v-row>
                    <v-col cols="md-6" sm="12">
                        <h1 class="mb-13">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ لورم ایپسوم متن ساختگی
                        </h1>
                    </v-col>
                    <v-col cols="md-6" sm="12" class="d-flex flex-wrap justify-end">
                        <p>
                            و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
                            لازم
                            است، و
                            برای
                            شرایط فعلی تکنولوژی مورد نیاز و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                            مجله
                            در
                            ستون
                            و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد سطرآنچنان که لازم است، و برای شرایط
                            فعلی
                            تکنولوژی
                            مورد نیاز و با استفاده از طراحان گرافیک است، ز
                        </p>
                        <v-btn variant="flat">عنوان دکمه</v-btn>
                    </v-col>

                </v-row>
            </v-container>
        </div>

        <v-container>
            <v-row>
                <v-col cols="sm-12">
                    <video class="service-video" controls>
                        <source src="https://www.aparat.com/v/qXnZ8" type="video/mp4">
                        <source src="https://www.aparat.com/v/qXnZ8" type="video/ogg">
                        Your browser does not support the video tag.
                    </video>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<style scoped lang="scss">
.ServiceHeader {
    direction: rtl;
    background-color: #3B5099;

    .top-header {
        position: relative;
        padding-top: 32px;

        h1 {
            color: #EFEFEF;
            font-size: 32px;
            font-weight: 900;
        }

        p {
            color: #EFEFEF;
            font-size: 14px;
            font-weight: 700;
            line-height: 33px;
            margin-bottom: 38px;
            word-wrap: break-word
        }

        .v-btn {
            background: #FC9802;
            border-radius: 16px;
            width: 232px;
            height: 62px;
        }
    }

    .service-video {
        color: #EFEFEF !important;
        font-size: 14px;
        line-height: 21.7px;
        width: 100%;
        height: 647px;
        border-radius: 24px;
    }

}
</style>
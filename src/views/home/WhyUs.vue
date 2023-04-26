<template>
    <div class="WhyUs">
        <v-container class="py-0">
            <v-img cover src="/whyUs.svg" class="circle-pointer"></v-img>
            <v-row class="align-end">
                <v-col cols="7">
                    <h1>چرا ما ؟</h1>
                    <h2>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</h2>
                    <p class="mb-16">و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم
                        است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                        کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد و با
                        استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و
                        برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
                        زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد</p>
                </v-col>
                <v-col cols="5">
                    <video class="WhyUs-video" controls>
                        <source src="movie.mp4" type="video/mp4">
                        <source src="movie.ogg" type="video/ogg">
                        Your browser does not support the video tag.
                    </video>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>


<style scoped lang="scss">
.WhyUs {
    text-align: right;
    position: relative;
    padding: 60px 0 46px 0;

    .v-container {
        position: relative;
    }

    .circle-pointer {
        width: 172px;
        height: 172px;
        position: absolute;
        top: -130px;
        right: 12px;

        &::after {
            top: 30%;
            content: "?";
            font-size: 70px;
            color: white;
            display: flex;
            left: 43%;
            position: absolute;
            align-items: center;
        }
    }

    .circle-question {
        position: absolute;
    }

    h1 {
        margin-bottom: 22px;
        font-weight: 700;
        font-size: 36px;
        line-height: 56px;
        color: #3B5099;
    }

    h2 {
        margin-bottom: 22px;
        font-weight: 700;
        font-size: 24px;
        line-height: 37px;
        color: #181818;
    }

    p {
        font-weight: 700;
        font-size: 14px;
        line-height: 33px;
        color: #808080;
    }

    .WhyUs-video {
        height: 310px;
        width: 100%;
        border-radius: 16px;
    }

    @media only screen and (max-width:768px) {
        .circle-pointer {
            width: 111px;
            height: 111px;
            top: -100px;

            &::after {
                top: 21%;
                font-size: 60px;
                left: 39%;
            }
        }
    }

    @media only screen and (max-width:360px) {
        .circle-pointer {
            width: 48px;
            height: 48px;
            top: -70px;

            &::after {
                top: 23%;
                font-size: 25px;
                left: 39%;
            }
        }
    }
}
</style>
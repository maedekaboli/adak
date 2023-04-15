<template>
    <div class="WhyUs">
        <v-container class="py-0">
            <v-img cover src="/circle-pointer.svg" class="circle-question"></v-img>
            <v-row class="align-end">
                <v-col cols="7">
                    <h1>چرا ما ؟</h1>
                    <h2>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</h2>
                    <p>و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم
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
        margin-bottom: 56px;
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
}
</style>
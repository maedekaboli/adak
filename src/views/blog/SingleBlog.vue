<template>
    <div class="SingleBlog">
        <v-container>
            <v-row>
                <v-col cols="12">
                    <v-img height="400" src="/blog2.svg"></v-img>
                    <h1>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</h1>
                    <p>و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم
                        است، و
                        برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
                        زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد و با استفاده از
                        طراحان
                        گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                        تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و
                        سه
                        درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد</p>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<style lang="scss">
.SingleBlog {
    background: #F0F0F0;
    direction: rtl;
    padding: 24px 0;

    h1 {
        font-weight: 700;
        font-size: 32px;
        line-height: 50px;
        text-align: right;
        color: #181818;
        margin: 24px 0;
    }

    p {
        font-weight: 700;
        font-size: 14px;
        line-height: 33px;
        text-align: right;
        color: #808080;
        margin-bottom: 24px;
    }

    @media only screen and (max-width:360px) {
        h1 {
            font-size: 14px;
            line-height: 22px;
        }

        p {
            font-size: 12px;
            line-height: 33px;
        }
    }
}</style>
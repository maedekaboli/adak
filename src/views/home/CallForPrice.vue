<template>
    <div class="CallForPrice">
        <v-container>
            <v-img cover src="/circle-pointer.svg" class="circle-pointer"></v-img>
            <h2>استعلام قیمت </h2>
            <p>و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای
                شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت
                و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد</p>
            <v-btn variant="tonal">
                استعلام
            </v-btn>
        </v-container>
    </div>
</template>

<style scoped lang="scss">
.CallForPrice {
    background: #D9D9D9;
    position: relative;
    padding-bottom: 28px;
    padding-top: 15px;
    direction: rtl;
    text-align: center;

    .v-container {
        position: relative;
    }

    .circle-pointer {
        width: 109px;
        height: 109px;
        position: absolute;
        top: -70px;
        left: 12px;
        background-color: white;
        z-index: 1;
        border-radius: 50%;
    }

    h2 {
        line-height: 37px;
        text-align: center;
        color: #3B5099;
        font-weight: 700;
        margin-bottom: 20px;
    }

    p {
        font-weight: 700;
        font-size: 16px;
        line-height: 33px;
        color: #5A5A5A;
        margin-bottom: 30px;
    }

    .v-btn {
        background: #3B5099;
        color: white;
        width: 252px;
        height: 62px;
    }

    @media only screen and (max-width:768px) {
        .circle-pointer {
            width: 85px;
            height: 85px;
            top: -60px
        }

        h2 {
            font-size: 20px;
            line-height: 31px;
            margin-bottom: 16px;
        }

        p {
            font-size: 14px;
            margin-bottom: 22px;
        }
    }

    @media only screen and (max-width:360px) {
        .circle-pointer {
            width: 52px;
            height: 52px;
            top: -45px
        }

        h2 {
            font-size: 16px;
            line-height: 25px;
            margin-bottom: 8px;
        }

        p {
            font-size: 12px;
            margin-bottom: 8px;
            text-align: justify;
        }

        .v-btn {
            width: 100%;
            height: 48px;
        }
    }
}
</style>
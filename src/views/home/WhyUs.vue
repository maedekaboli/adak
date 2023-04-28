<script setup>
import data from '../../json/home/whyUs.json'
</script>

<template>
    <div class="WhyUs">
        <v-container class="py-0">
            <v-img cover src="/whyUs.svg" class="circle-pointer"></v-img>
            <v-row>
                <v-col cols="lg-5" sm="6" class="mt-sm-16 mt-2">
                    <video class="WhyUs-video" controls>
                        <source src="https://www.aparat.com/v/qXnZ8" type="video/mp4">
                        <source src="https://www.aparat.com/v/qXnZ8" type="video/ogg">
                        Your browser does not support the video tag.
                    </video>
                </v-col>
                <v-col cols="lg-7" sm="6">
                    <h1>{{ data.firstTitle }}</h1>
                    <h2>{{ data.secondTitle }}</h2>
                    <p>{{ data.text }}</p>
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
    direction: rtl;

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

        h1 {
            margin-bottom: 12px;
            font-size: 24px;
            line-height: 37px;
        }

        h2 {
            font-size: 16px;
            line-height: 25px;
        }

        p {
            font-size: 12px;
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

        h1 {
            margin-bottom: 8px;
            font-size: 16px;
            line-height: 25px;
        }

        h2 {
            font-size: 14px;
            line-height: 22px;
            margin-bottom: 16px;
        }

        p {
            font-size: 12px;
        }
    }
}
</style>
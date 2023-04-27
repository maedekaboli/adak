<template>
    <div class="TheHeader">
        <v-container class="pa-0">
            <div class="TheHeader-title">ADAKMARIN</div>
        </v-container>
    </div>
</template>

<style scoped lang="scss">
.TheHeader {
    background: #F0F0F0;
    width: 100vw;
    height: 82px;

    .TheHeader-title {
        display: flex;
        justify-content: center;
        font-style: normal;
        font-weight: 700;
        font-size: 122px;
        line-height: 129px;
        letter-spacing: 0.4em;
        color: #122771;
    }

    @media only screen and (max-width:1280px) {

        .TheHeader-title {
            font-size: 100px;
            line-height: 124px;
        }

    }

    @media only screen and (max-width:960px) {

        .TheHeader-title {
            font-size: 80px;
            line-height: 112px;
        }

    }

    @media only screen and (max-width:768px) {
        & {
            height: 56px;

            .TheHeader-title {
                font-size: 50px;
                line-height: 79px;
            }
        }
    }

    @media only screen and (max-width:360px) {
        & {
            height: 38px;

            .TheHeader-title {
                font-size: 30px;
                line-height: 53px;
            }
        }
    }
}
</style>
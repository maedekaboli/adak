<template>
    <div class="NotFound">
        <v-container>
            <v-row class="justify-center">
                <v-col cols="sm-8">
                    <v-img class="ma-auto" width="500" src="/404.jpg"></v-img>
                    <h2>صفحه مورد نظر پیدا نشد</h2>
                    <RouterLink to="/">
                        <v-btn color="#3B5099" height="62" width="150" class="text-white">صفحه اصلی</v-btn>
                    </RouterLink>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<style lang="scss">
.NotFound {
    direction: rtl;
    text-align: center;
    margin-bottom: 24px;

    h2 {
        font-weight: 700;
        font-size: 24px;
        line-height: 37px;
        margin-bottom: 24px;
        color: #181818;
    }

    @media only screen and (max-width:360px) {
        .v-img {
            width: 100% !important;
        }

        h2 {
            font-size: 14px;
            line-height: 22px;
        }

        .v-btn {
            height: 48px !important;
        }
    }
}
</style>
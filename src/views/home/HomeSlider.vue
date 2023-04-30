<script setup>
defineProps({
    items: Array
})
</script>

<template>
    <div class="HomeSlider">
        <v-container class="pt-0" fluid>
            <v-carousel hide-delimiter-background cycle height="400">
                <template v-slot:next="{ props }">
                    <v-btn class="d-lg-block d-none" size="33" variant="outlined" color="black" @click="props.onClick"
                        icon="mdi-chevron-left"></v-btn>
                </template>
                <template v-slot:prev="{ props }">
                    <v-btn class="d-lg-block d-none" size="33" variant="outlined" color="black" @click="props.onClick"
                        icon="mdi-chevron-right"></v-btn>
                </template>
                <v-carousel-item class="v-window-item--active" v-for="(item, i) in items" :key="i">
                    <v-container class="pa-0">
                        <v-row>
                            <v-col cols="sm-7">
                                <h1>{{ item.title }}</h1>
                                <p>{{ item.description }}</p>
                            </v-col>
                            <v-col cols="sm-5" class="d-sm-block d-none">
                                <v-img :src="item.featured_image"></v-img>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-carousel-item>
            </v-carousel>
        </v-container>
    </div>
</template>

<style lang="scss">
.HomeSlider {
    direction: rtl;

    .v-btn {
        border-radius: 50% !important;
    }

    .v-responsive__content {
        align-items: center;
        display: flex;
    }

    .v-carousel__controls {

        .v-btn {
            width: 20px;
            height: 20px;
        }

        .v-btn--active {
            .v-btn__overlay {
                display: none;
            }

            .v-icon {
                color: #122771;
            }
        }

        .v-icon {
            font-size: 10px;
            color: #C6C6C6;
        }

    }

    h1 {
        font-weight: 700;
        font-size: 32px;
        line-height: 50px;
        text-align: right;
        margin-bottom: 27px;
        color: #181818;
    }

    p {
        font-weight: 700;
        font-size: 14px;
        line-height: 33px;
        text-align: right;
        color: #808080;
    }

    @media only screen and (max-width:768px) {
        .v-carousel {
            height: 290px !important;
        }

        h1 {
            font-size: 20px;
            line-height: 31px;
            margin-bottom: 12px;
        }

        p {
            font-size: 12px;
            line-height: 33px;
        }

    }

    @media only screen and (max-width:360px) {
        .v-carousel {
            height: 290px !important;
        }

        h1 {
            font-size: 16px;
            line-height: 25px;
            text-align: center;
            margin-bottom: 8px;
        }

        p {
            font-size: 12px;
            line-height: 33px;
            text-align: center;
        }

        .v-window__controls {
            display: none;
        }
    }
}
</style>
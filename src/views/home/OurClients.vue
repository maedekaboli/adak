<script setup>
defineProps({
    items: Array
})
</script>

<template>
    <div class="OurClients">
        <v-container class="py-0">
            <h2>مشتریان ما</h2>
            <v-row class="justify-center">
                <v-col class="d-flex flex-wrap justify-center" v-for="(item, i) in items" :key="i" cols="md-4" sm="6">
                    <v-sheet class="mb-4 OurClients-img">
                        <v-img width="68" height="68" cover :src="item.featured_image" class="circle-question"></v-img>
                    </v-sheet>
                    <v-sheet>
                        <h3>{{ item.name }}</h3>
                        <p>
                            {{ item.description }}
                        </p>
                    </v-sheet>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>


<style scoped lang="scss">
.OurClients {
    padding: 33px 0 46px 0;
    background: #F0F0F0;
    text-align: center;

    h2 {
        line-height: 37px;
        color: #3B5099;
        margin-bottom: 44px;
    }

    .v-sheet {
        direction: rtl;
        border-radius: 16px;
        padding: 24px;

        .v-img {
            margin: auto;
        }
    }

    h3 {
        font-weight: 700;
        font-size: 16px;
        line-height: 25px;
        text-align: center;
        color: #3B5099;
        margin-bottom: 12px;
    }

    p {
        font-weight: 700;
        font-size: 14px;
        line-height: 33px;
        text-align: center;
        color: #808080;
    }

    .OurClients-img {
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 68px;
        padding: 27px 0;
        width: 297px;
    }

    @media only screen and (max-width:360px) {
        h2 {
            font-size: 16px !important;
            margin-bottom: 24px;
        }
    }

    @media only screen and (max-width:768px) {
        p {
            font-size: 12px;
        }

        h3 {
            font-size: 14px;
            margin-bottom: 8px;
        }

        .OurClients-img {
            width: 201px;
            padding: 20px 0;
        }

        .v-sheet {
            padding: 17px;

            .v-img {
                width: 34px !important;
                height: 34px !important;
            }
        }
    }
}
</style>
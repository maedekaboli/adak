<script setup>
import { defineAsyncComponent } from 'vue'
import data from '../../json/layout/footer.json'

const SocialMedia = defineAsyncComponent(() => import('../../components/SocialMedia.vue'))
</script>


<template>
    <div class="TheFooter">
        <div class="top-footer">
            <v-container>
                <v-row>
                    <v-col cols="md-6" sm="6" class="contact-us">
                        <h2>{{ data.contactUs.title }}</h2>
                        <v-list :items="data.contactUs.info" item-props lines="three">
                            <template v-slot:title="{ title }">
                                <div>{{ title }}</div>
                            </template>
                            <template v-slot:prependAvatar="{ prependAvatar }">
                                <div>{{ prependAvatar }}</div>
                            </template>
                        </v-list>
                        <SocialMedia />
                    </v-col>
                    <v-col cols="md-6" sm="6" class="cooperation">
                        <v-col cols="md-8" sm="12" xs="8">
                            <h2>{{ data.cooperation.title }} </h2>
                            <v-form>
                                <v-text-field class="mb-3" variant="solo" hide-details
                                    :label="data.cooperation.familyName"></v-text-field>
                                <v-text-field class="mb-3" variant="solo" hide-details
                                    :label="data.cooperation.mobile"></v-text-field>
                                <v-select class="mb-5" :label="data.cooperation.city" hide-details
                                    :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
                                    variant="solo"></v-select>
                                <v-btn color="#122771" class="w-100 text-white" size="large">
                                    {{ data.cooperation.buttonText }}
                                </v-btn>
                            </v-form>
                        </v-col>
                    </v-col>
                </v-row>
            </v-container>
        </div>
        <div class="bottom-footer">{{ data.copyRight }} </div>
    </div>
</template>


<style lang="scss">
.TheFooter {
    direction: rtl;
    border-top: 7px solid #122771;

    .top-footer {
        background: #3B5099;
        padding-top: 55px;
        padding-bottom: 62px;
        display: flex;
        flex-wrap: wrap;

        h2 {
            font-weight: 700;
            font-size: 24px;
            line-height: 37px;
        }

        .contact-us {
            .v-avatar {
                margin-left: 4px;
                margin-top: -10px;
                width: 24px;
                height: 24px;
            }

            h2 {
                margin-bottom: 33px;
                color: #DCDCDC;
            }
        }

        .cooperation {
            display: flex;
            padding-top: 0;
            justify-content: end;

            .v-btn {
                border-radius: 8px !important;
            }

            h2 {
                color: #F9F9F9;
                margin-bottom: 22px;
            }
        }

        .v-list {
            background-color: inherit;

            .v-list-item {
                padding-top: 0;
                min-height: 31px;
                margin-bottom: 30px;
                padding-right: 0;
                padding-bottom: 0;
            }

            .v-list-item-title {
                font-weight: 500;
                font-size: 16px;
                line-height: 25px;
                text-align: right;
                color: #F9F9F9;
            }
        }

    }

    .bottom-footer {
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 500;
        font-size: 14px;
        width: 100%;
        line-height: 22px;
        text-align: right;
        color: #373C3F;
        background: #E6EAEE;
        height: 59px;
    }
}
</style>
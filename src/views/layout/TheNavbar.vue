<script setup>
import { ref } from 'vue'

const navItems = ref([
    { title: 'صفحه اصلی', path: '/' },
    { title: 'خدمات ما', path: '/' },
    { title: 'مقالات', path: '/blog' },
    { title: 'تماس با ما', path: '/contactUs' },
    { title: 'درباره ما', path: '/aboutUs' },
    { title: 'راهنما', path: '/' },

])
</script>

<template>
    <div class="TheNavbar">
        <v-app-bar flat height="88">
            <v-toolbar absolute color="white" density="compact" height="88">
                <v-container class="d-flex align-center mx-md-16 mx-auto">
                    <v-menu width="100%" transition="slide-y-transition">
                        <template v-slot:activator="{ props }">
                            <v-app-bar-nav-icon v-bind="props" class="d-lg-none d-block"></v-app-bar-nav-icon>
                        </template>

                        <v-list>
                            <RouterLink v-for="(item, i) in navItems" :key="i" :to="item.path" custom v-slot="{ navigate }">
                                <v-list-item class="dir-rtl" @click="navigate" role="link">
                                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                                </v-list-item>
                            </RouterLink>
                            <v-list-item class="dir-rtl">
                                <v-btn variant="outlined" rounded="xl" color="#122771">
                                    استعلام محصول
                                </v-btn>
                            </v-list-item>
                        </v-list>
                    </v-menu>

                    <v-toolbar-title class="text-md-right text-center">Adakmarin</v-toolbar-title>

                    <ul class="navbar-items d-lg-flex d-none">
                        <RouterLink v-for="(item, i) in navItems" :key="i" :to="item.path" custom v-slot="{ navigate }">
                            <li @click="navigate" role="link" class="mb-2"> {{ item.title }}
                            </li>
                        </RouterLink>
                    </ul>
                    <v-spacer></v-spacer>

                    <v-btn class="ml-2 d-md-block d-none" variant="outlined" rounded="xl" color="#122771">
                        استعلام محصول
                    </v-btn>

                    <v-btn variant="text">
                        <span class="d-md-block d-none">
                            ورود / ثبت نام
                        </span>
                        <v-img width="24" class="mr-1" src="/login.svg"></v-img>
                    </v-btn>
                </v-container>
            </v-toolbar>
        </v-app-bar>
    </div>
</template>

<style lang="scss">
.TheNavbar {
    direction: rtl;

    .v-app-bar {
        border-bottom: 1px solid #EFEFEF;
    }

    .navbar-items {
        list-style: none;

        li {
            font-style: normal;
            font-weight: 700;
            font-size: 16px;
            line-height: 25px;
            margin-left: 50px;
            cursor: pointer;
            color: #5A5A5A;
        }
    }

    .v-toolbar {
        .v-toolbar__content {
            justify-content: center;
        }

        .flex-grow-1 {
            flex-grow: unset !important;
        }
    }

    .v-toolbar-title {
        font-style: normal;
        font-weight: 900;
        font-size: 30px;
        line-height: 70px;
        color: #181818;

        &::first-letter {
            text-transform: uppercase;
            color: #122771;
            font-size: 45px !important;

        }
    }

    @media only screen and (max-width:768px) {
        & {
            .v-toolbar__content {
                height: 36px !important;

                .v-toolbar-title {
                    margin-top: 10px;
                    font-size: 20px;
                    line-height: 31px;

                    &::first-letter {
                        font-size: 30px !important;
                    }
                }
            }

        }
    }
}</style>
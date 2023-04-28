<script setup>
import { ref } from 'vue'
import * as yup from 'yup';
import { Form, Field } from 'vee-validate'

const product = ref({
    name: '',
    source: '',
    destination: '',
    weight: '',
    volume: '',
    packageType: '',
    numberOfPackages: '',
    container: '',
    shippingMethod: '',
    desc: '',
    file: ''
})
const schema = yup.object({
    name: yup.string().required('نام تجاری کالا اجباری است').label('نام تجاری کالا'),
    source: yup.string().required('مبدا اجباری است').label('مبدا'),
    destination: yup.string().required('مقصد اجباری است').label('مقصد'),
    weight: yup.string().required('وزن اجباری است').label('وزن')
});

const onSubmit = (values) => {
    console.log(product.value)
}
</script>

<template>
    <div class="CreateProduct py-5">
        <v-container>
            <v-card class="pa-5">
                <v-card-title>استعلام محصول</v-card-title>
                <Form as="v-form" :validation-schema="schema" @submit="onSubmit">
                    <v-row class="ma-auto">
                        <v-col cols="lg-3" md="4" sm="6">
                            <Field name="name" v-model="product.name" v-slot="{ field, errors }">
                                <v-text-field v-bind="field" v-model.trim="product.name" label="نام تجاری کالا"
                                    variant="outlined" :error-messages="errors"></v-text-field>
                            </Field>
                        </v-col>
                        <v-col cols="lg-3" md="4" sm="6">
                            <Field name="source" v-model="product.source" v-slot="{ field, errors }">
                                <v-text-field v-bind="field" v-model.trim="product.source" label="مبدا" variant="outlined"
                                    :error-messages="errors"></v-text-field>
                            </Field>
                        </v-col>
                        <v-col cols="lg-3" md="4" sm="6">
                            <Field name="destination" v-model="product.destination" v-slot="{ field, errors }">
                                <v-text-field v-bind="field" v-model.trim="product.destination" label="مقصد"
                                    variant="outlined" :error-messages="errors"></v-text-field>
                            </Field>
                        </v-col>
                        <v-col cols="lg-3" md="4" sm="6">
                            <Field name="weight" v-model="product.weight" v-slot="{ field, errors }">
                                <v-text-field v-bind="field" v-model.trim="product.weight" label="وزن" variant="outlined"
                                    :error-messages="errors"></v-text-field>
                            </Field>
                        </v-col>
                        <v-col cols="lg-3" md="4" sm="6">
                            <v-text-field v-model.trim="product.volume" label="حجم" variant="outlined"></v-text-field>
                        </v-col>
                        <v-col cols="lg-3" md="4" sm="6">
                            <v-text-field v-model.trim="product.packageType" label="نوع بسته بندی"
                                variant="outlined"></v-text-field>
                        </v-col>
                        <v-col cols="lg-3" md="4" sm="6">
                            <v-text-field v-model.trim="product.numberOfPackages" label="تعداد بسته بندی"
                                variant="outlined"></v-text-field>
                        </v-col>
                        <v-col cols="lg-3" md="4" sm="6">
                            <v-text-field v-model.trim="product.container" label="ظرف حمل"
                                variant="outlined"></v-text-field>
                        </v-col>
                        <v-col cols="lg-3" md="4" sm="6">
                            <v-text-field v-model.trim="product.shippingMethod" label="روش حمل"
                                variant="outlined"></v-text-field>
                        </v-col>
                        <v-col cols="lg-3" md="4" sm="6">
                            <v-text-field v-model.trim="product.file" label="آپلود فایل" variant="outlined"></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-textarea label="توضیحات" auto-grow variant="outlined" rows="5" row-height="15"></v-textarea>
                        </v-col>
                    </v-row>

                    <v-btn type="submit" class="mt-5" size="large" color="primary">
                        ثبت کالا
                    </v-btn>
                </Form>
            </v-card>
        </v-container>
    </div>
</template>

<style lang="scss">
.CreateProduct {
    direction: rtl;
    background: #EFEFEF;
}
</style>
<template>
    <div class="CallForPrice">
        <v-container>
            <v-img cover src="/circle-pointer.svg" class="circle-pointer"></v-img>
            <h2>استعلام قیمت </h2>
            <p>و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای
                شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت
                و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد</p>
            <v-btn variant="tonal">
                Button
            </v-btn>
        </v-container>
    </div>
</template>

<style scoped lang="scss">
.CallForPrice {
    background: #D9D9D9;
    text-align: center;
    position: relative;

    .circle-pointer {
        width: 109px;
        height: 109px;
        position: absolute;
        top: -50%;
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
}
</style>
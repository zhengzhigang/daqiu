<template>
    <div class="about">
        <div class="wrap">
            <div class="img-list">
                <img src="../assets/img/des1.jpg" alt="">
                <img src="../assets/img/des2.jpg" alt="">
            </div>
            <div>
                <p class="section">
                    这里是简介这里是简介这里是简介这里是简介,这里是简介这里是简介这里是简介这里是简介,这里是简介这里是简介这里是简介这里是简介
                </p>
                <p class="section">
                    这里是简介这里是简介这里是简介这里是简介,这里是简介这里是简介这里是简介这里是简介,这里是简介这里是简介这里是简介这里是简介
                </p>
                <p class="section">
                    这里是简介这里是简介这里是简介这里是简介,这里是简介这里是简介这里是简介这里是简介,这里是简介这里是简介这里是简介这里是简介
                </p>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
    import 'swiper/dist/css/swiper.css'
    import Swiper from 'swiper';
    import { defineComponent } from 'vue'
    import CountDown from '@/components/CounDown.vue'
    const countDownProducer = require('../utils/countDown').default
    export default defineComponent({
        name: 'About'
    });
</script>
<style lang="scss" scoped>
.about {
    padding: 0 30px;
    background: #eee;
    .wrap {
        padding: 40px 20px;
        background: #fff;
    }
    .img-list {
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin-bottom: 40px;
        overflow: hidden;
        img {
            display: inline-block;
            width: 300px;
            height: 200px;
        }
    }
    .section {
        text-indent: 56px;
        font-size: 28px;
        color: #181818;
        line-height: 1.4;
        margin-bottom: 20px;
        text-align: left;
    }
}
</style>
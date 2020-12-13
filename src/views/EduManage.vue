<template>
    <div class="home">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div
                    class="swiper-slide"
                    v-for="(item, index) in swiperList"
                    :key="index"
                >
                    <img class="swiper-img" :src="item.img">
                </div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
        </div>
        <ul class="bean-list">
            <li
                class="bean-item"
                v-for="(item, index) in beanList"
                :key="index"
            >
                <div class="bean-icon" :style="{backgroundColor: item.color}">{{item.icon}}</div>
                <p class="bean-text">{{item.text}}</p>
            </li>
        </ul>
    </div>
</template>
<script lang="ts">
    import 'swiper/dist/css/swiper.css'
    import Swiper from 'swiper';
    import { defineComponent } from 'vue'
    import CountDown from '@/components/CounDown.vue'
    const countDownProducer = require('../utils/countDown').default
    export default defineComponent({
        name: 'Home',
        components: {
            CountDown
        },
        setup() {
            const swiperList = [
                {img: require('../assets/img/img_02Pro Intro.jpg')}
            ]
            const beanList = [
                {img: require('../assets/img/home/nav0.png'), text: '课时统计', icon: '课时', color: '#ff2995'},
                {img: require('../assets/img/home/nav1.png'), text: '添加成绩', icon: '成绩', color: '#f5b502'},
                {img: require('../assets/img/home/nav2.png'), text: '发布公告', icon: '公告', color: '#02b2f5'},
                {img: require('../assets/img/home/nav3.png'), text: '信息添加', icon: '信息', color: '#b145f5'},
                {img: require('../assets/img/home/nav4.png'), text: '管理权限', icon: '权限', color: '#149dff'},
                {img: require('../assets/img/home/nav6.png'), text: '请假申请', icon: '请假', color: '#ff8a52'},
                {img: require('../assets/img/home/nav5.png'), text: '课程表', icon: '课表', color: '#42da86'},
                {img: require('../assets/img/home/nav7.png'), text: '学生列表', icon: '学生', color: '#da4242'}
            ]
            return {
                swiperList,
                beanList
            }
        },

        data() {
            return {
                timer: null,
                countDownTime: 0,
                countDown: {}
            }
        },

        mounted() {
            new Swiper('.swiper-container', {
                spaceBetween: 30,
                centeredSlides: true,
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                }
            })
            this.initCountDown()
        },

        methods: {
            initCountDown() {
                const time = new Date('2020-12-31 10:00:00').getTime() / 1000
                this.timer = countDownProducer(time, (date: any) => {
                    this.countDown = date
                })
            }
        }
    });
</script>
<style lang="scss" scoped>
.home {
    .swiper-img {
        display: block;
        width: 100%;
    }
    .content {
        padding: 30px 15px;
        background: #ddd;
    }
}
.bean-list {
    display: flex;
    flex-wrap: wrap;
    padding-top: 40px;
}
.bean-item {
    display: inline-flex;
    align-items: center;
    flex-direction: column;
    width: 25%;
    margin-bottom: 40px;
}
.bean-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    color: #fff;
    width: 90px;
    height: 90px;
    margin-bottom: 20px;
    border-radius: 30px;
    background: #fff;
}
.bean-text {
    font-size: 24px;
    color: #333;
}
</style>
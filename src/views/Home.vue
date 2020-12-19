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
                @click="jumpDetail(item)"
            >
                <img class="bean-icon" :src="item.img" alt="">
                <p class="bean-text">{{item.text}}</p>
            </li>
        </ul>
        <div class="content">
            <div class="help-block">
                <div class="help-top">
                    <i class="icon"></i>
                    <span class="title">助力高考</span>
                    <count-down showCountDown :countDown="countDown"></count-down>
                    <router-link class="more-link" to="/article-list">更多>></router-link>
                </div>
                <div class="help-rec">
                    <div class="help-rec-item" @click="jumpArticle">
                        <div class="help-img">
                            <img src="../assets/img/home/detail01.jpg" alt="">
                        </div>
                        <p class="help-text">艺术生复习问题</p>
                    </div>
                    <div class="help-rec-item" @click="jumpArticle">
                        <div class="help-img">
                            <img src="../assets/img/home/detail02.jpg" alt="">
                        </div>
                        <p class="help-text">文化课复习学案</p>
                    </div>
                    <div class="help-rec-item" @click="jumpArticle">
                        <div class="help-img">
                            <img src="../assets/img/home/detail03.jpg" alt="">
                        </div>
                        <p class="help-text">大球教育师资</p>
                    </div>
                </div>
            </div>
            <div class="article-block">
                <h4 class="article-title">推荐阅读</h4>
                <ul class="article-list">
                    <li class="article-item">
                        “分不够，钱来凑”？高考后一定要谨防这10大骗局。
                    </li>
                    <li class="article-item">
                        “分不够，钱来凑”？高考后一定要谨防这10大骗局。
                    </li>
                </ul>
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
        name: 'Home',
        components: {
            CountDown
        },
        setup() {
            const swiperList = [
                {img: require('../assets/img/home/Rot01.jpg')},
                {img: require('../assets/img/home/Rot02.jpg')},
                {img: require('../assets/img/home/Rot03.jpg')}
            ]
            const beanList = [
                {
                    img: require('../assets/img/home/nav0.png'),
                    text: '学校简介',
                    link: '/about'
                },
                {
                    img: require('../assets/img/home/nav1.png'),
                    text: '课程设置',
                    link: '/edu-manage'
                },
                {
                    img: require('../assets/img/home/nav2.png'),
                    text: '教研活动',
                    link: ''
                },
                {
                    img: require('../assets/img/home/nav3.png'),
                    text: '专用教材',
                    link: ''
                },
                {
                    img: require('../assets/img/home/nav4.png'),
                    text: '学校公告',
                    link: ''
                },
                {
                    img: require('../assets/img/home/nav6.png'),
                    text: '分数查询',
                    link: '/score-search'
                },
                {
                    img: require('../assets/img/home/nav5.png'),
                    text: '许个愿吧',
                    link: ''
                },
                {
                    img: require('../assets/img/home/nav7.png'),
                    text: '咨询报名',
                    link: '/course-list'
                }
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
            jumpDetail(item: any) {
                this.$router.push(item.link)
            },

            jumpArticle() {
                this.$router.push('/article-detales')
            },

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
    .help-block {
        padding:  20px 0 80px;
        background: #fff;
    }
    .help-top {
        display: flex;
        margin: 0 20px 40px;
        .icon {
            display: inline-block;
            width: 30px;
            height: 30px;
        }
        .title {
            font-size: 28px;
            color: tomato;
        }
        .more-link {
            font-size: 28px;
            margin-left: auto;
            color: #0e8af7;
        }
    }
    .help-rec {
        display: flex;
        flex: 1;
    }
    .help-rec-item {
        display: inline-flex;
        flex: 1;
        flex-direction: column;
        align-items: center;
    }
    .help-img {
        width: 100%;
        margin-bottom: 20px;
        border-right: 1px solid #ddd;
        img {
            height: 110px;
        }
    }
    .help-text {
        font-size: 24px;
        color: tomato;
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
    display: block;
    width: 90px;
    height: 90px;
    margin-bottom: 20px;
}
.bean-text {
    font-size: 24px;
    color: #333;
}
.article-block {
    margin-top: 30px;
    padding: 20px 20px 60px;
    background: #fff;
}
.article-title {
    position: relative;
    margin-bottom: 30px;
    font-size: 34px;
    color: #999;
    padding-left: 20px;
    text-align: left;
    &::after {
        content: '';
        position: absolute;
        width: 6px;
        height: 100%;
        left: 0;
        top: 0;
        background: tomato;
    }
}
.article-list {
    padding-left: 80px;
}
.article-item {
    position: relative;
    margin-bottom: 20px;
    font-size: 24px;
    color: #333;
    &::before {
        content: "";
        width: 10px;
        height: 10px;
        top: 0.1rem;
        left: 0;
        position: absolute;
        background: #000;
    }
}
</style>
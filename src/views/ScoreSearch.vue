<template>
    <div class="score">
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
        <div class="score-content">
            <div class="score-filter">
                <div>
                    <span class="key">选择考试日期</span>
                    <input class="value" type="date">
                </div>
                <div>
                    <span class="key">选择班级</span>
                    <div class="value"></div>
                </div>
            </div>
            <div class="score-table">
                <table>
                    <thead>
                        <tr>
                            <th v-for="(item, index) in column" :key="index">{{item}}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in data" :key="index">
                            <td>{{item.number}}</td>
                            <td>{{item.chinese}}</td>
                            <td>{{item.math}}</td>
                            <td>{{item.english}}</td>
                            <td>{{item.politics}}</td>
                            <td>{{item.history}}</td>
                            <td>{{item.geography}}</td>
                            <td>{{item.score}}</td>
                            <td>{{item.order}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
    import 'swiper/dist/css/swiper.css'
    import Swiper from 'swiper';
    import { defineComponent } from 'vue'

    const column = ['学号', '语文', '数学', '英语', '政治', '历史', '地理', '总分', '排名']

    export default defineComponent({
        name: 'ScoreSearch',
        setup() {
            const swiperList = [
                {img: require('../assets/img/home/Rot01.jpg')}
            ]
            const data = [
                {number: '001', chinese: 120, math: 130, english: 140, politics: 78, history: 68, geography: 88, score: 550, order: 1},
                {number: '002', chinese: 120, math: 130, english: 140, politics: 78, history: 68, geography: 88, score: 550, order: 2},
                {number: '006', chinese: 120, math: 130, english: 140, politics: 78, history: 68, geography: 88, score: 550, order: 3},
                {number: '008', chinese: 120, math: 130, english: 140, politics: 78, history: 68, geography: 88, score: 550, order: 4},
                {number: '009', chinese: 120, math: 130, english: 140, politics: 78, history: 68, geography: 88, score: 550, order: 5},
                {number: '003', chinese: 120, math: 130, english: 140, politics: 78, history: 68, geography: 88, score: 550, order: 6},
                {number: '004', chinese: 120, math: 130, english: 140, politics: 78, history: 68, geography: 88, score: 550, order: 7},
                {number: '005', chinese: 120, math: 130, english: 140, politics: 78, history: 68, geography: 88, score: 550, order: 8},
                {number: '007', chinese: 120, math: 130, english: 140, politics: 78, history: 68, geography: 88, score: 550, order: 9},
                {number: '010', chinese: 120, math: 130, english: 140, politics: 78, history: 68, geography: 88, score: 550, order: 10},
                {number: '011', chinese: 120, math: 130, english: 140, politics: 78, history: 68, geography: 88, score: 550, order: 11},
                {number: '012', chinese: 120, math: 130, english: 140, politics: 78, history: 68, geography: 88, score: 550, order: 12}
            ]
            return {
                swiperList,
                data,
                column
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
        },

        methods: {
        }
    });
</script>
<style lang="scss" scoped>
.score {
    .swiper-img {
        display: block;
        width: 100%;
    }
    &-content {
        padding: 20px 30px;
    }
    &-filter {
        display: flex;
        margin-bottom: 20px;
        & > div {
            flex: 1;
        }
        .key {
            font-size: 12px;
            color: #181818;
        }
    }
    &-table {
        width: 100%;
        font-size: 12px;
        table {
            width: 100%;
        }
        color: #181818;
        th {
            padding: 12px 0;
        }
        td {
            width: 11.11111%;
            padding: 12px 0;
            border-top: 1px solid #ddd;
        }
    }
}
</style>
<template>
    <ul class="nav-bar">
        <li
            class="nav-bar-item"
            v-for="(item, index) in navBar"
            :key="index"
            @click="setNavBar(index)"
        >
            <router-link class="nav-bar-button" :to="item.path">
                <img class="nav-bar-img" :src="+curr === index ? item.activeImg : item.img" alt="">
                <p class="nav-bar-text" :class="{active: +curr === index}">{{item.name}}</p>
            </router-link>
        </li>
    </ul>
</template>
<script lang="ts">
    import { defineComponent, ref } from 'vue'

    export default defineComponent({
        name: 'NaveBar',
        setup() {
            const navBar: any[] = [
                {
                    img: require('../assets/logo.png'),
                    activeImg: require('../assets/img/home/nav0.png'),
                    name: '主页',
                    path: '/'
                },
                {
                    img: require('../assets/logo.png'),
                    activeImg: require('../assets/img/home/nav0.png'),
                    name: '班级动态',
                    path: '/'
                },
                            {
                    img: require('../assets/logo.png'),
                    activeImg: require('../assets/img/home/nav0.png'),
                    name: '教务管理',
                    path: '/edu-manage'
                },
                {
                    img: require('../assets/logo.png'),
                    activeImg: require('../assets/img/home/nav0.png'),
                    name: '大球教育',
                    path: '/'
                }
            ]
            const curr = ref(localStorage.getItem('currentBar') || 0)

            return {
                curr,
                navBar
            }
        },

        methods: {
            setNavBar(i: number) {
                localStorage.setItem('currentBar', String(i))
                this.curr = i
            }
        }
    })
</script>
<style lang="scss" scoped>
.nav-bar {
    position: fixed;
    display: flex;
    bottom: 0;
    left: 0;
    right: 0;
    border-top: 1px solid #ddd;
    background: #fff;
    z-index: 999;
    &-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        flex: 1;
        height: 100px;
    }
    &-button {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-decoration: none;
    }
    &-img {
        display: block;
        width: 40px;
        height: 40px;
        margin-bottom: 5px;
    }
    &-text {
        font-size: 24px;
        color: #333;
        &.active {
            color: #00a570;
        }
    }
}
</style>
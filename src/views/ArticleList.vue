<template>
    <div class="article">
        <ul class="article-list">
            <li
                class="article-item"
                v-for="(item, index) in articleList"
                :key="index"
            >
                <img :src="item.img" alt="" class="article-img">
                <p class="article-title">
                    {{item.title}}
                </p>
            </li>
        </ul>
    </div>
</template>
<script lang="ts">
    import { defineComponent } from 'vue'
    export default defineComponent({
        name: 'ArticleList',
        data() {
            return {
                articleList: [
                    {
                        id: 1,
                        title: '“分不够，钱来凑”？高考后一定要谨防这10大骗局。',
                        img: require('../assets/img/Article01.jpg')
                    },
                    {
                        id: 2,
                        title: '“分不够，钱来凑”？高考后一定要谨防这10大骗局。',
                        img: require('../assets/img/Article02.jpg')
                    },
                    {
                        id: 3,
                        title: '“分不够，钱来凑”？高考后一定要谨防这10大骗局。',
                        img: require('../assets/img/Article03.png')
                    },
                    {
                        id: 4,
                        title: '“分不够，钱来凑”？高考后一定要谨防这10大骗局。',
                        img: require('../assets/img/Article04.png')
                    },
                    {
                        id: 5,
                        title: '“分不够，钱来凑”？高考后一定要谨防这10大骗局。',
                        img: require('../assets/img/Article05.png')
                    }
                ]
            }
        }
    });
</script>
<style lang="scss" scoped>
.article-list {
    padding: 0 30px;
}
.article-item {
    display: flex;
    align-items: center;
    padding: 20px 0;
    border-bottom: 1px solid #ececec;
    &:last-child {
        border-bottom: 0;
    }
}
.article-img {
    width: 148px;
    height: 148px;
    flex-shrink: 0;
    margin-right: 20px;
}
.article-title {
    font-size: 28px;
    color: #333;
    text-align: left;
    line-height: 1.4;
}
</style>
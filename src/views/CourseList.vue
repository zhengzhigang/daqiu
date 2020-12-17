<template>
    <div class="course">
        <div class="wrap">
            <ul class="course-list" v-for="(item, index) in courseList" :key="index">
                <li class="course-item">
                    <h3 class="course-title">
                        {{item.title}}
                    </h3>
                    <p class="course-brief">{{item.brief}}</p>
                    <p class="course-desc">{{item.desc}}</p>
                </li>
            </ul>
        </div>
    </div>
</template>
<script lang="ts">
    import 'swiper/dist/css/swiper.css'
    import Swiper from 'swiper';
    import { defineComponent } from 'vue'
    const courseList = [
        {
            title: '文科零基础冲刺班',
            brief: '班级人数：12-15人',
            desc: `招生对象：针对文化基础课相对薄弱，深知整个高中阶段没有系统学习文化课，
                    各科知识断层比较严重且有志于冲刺国家本科院校的学生。要求学生有吃苦耐劳的精神和
                    勇于奋进的意志，有独立的理想和比较明确的高考目标，有自己热爱的院校，并愿意为之努力。`
        },
        {
            title: '4-6人VIP冲刺班',
            brief: '招生计划：统筹兼收 随到随学',
            desc: '招生条件：针对偏科比较严重或自觉性较差需要老师时时重视的学员，也适合一些目标比较高的学生。'
        },
                {
            title: '统考冲刺班',
            brief: '班级人数：15-20人',
            desc: `招生对象：有一定文化课基础，高三模拟考试能够在300分以上，
                    有理想的目标院校和良好的学习习惯，有认真的学习态度和吃苦耐劳的精神，
                    能够遵循学习各项规定并且紧跟老师节奏，认真完成各项任务。无不良嗜好，没有网络游戏成瘾，
                    有一定自制力和强烈的求胜欲的高三应往届毕业生。`
        },
        {
            title: '12人VIP冲刺班',
            brief: '',
            desc: '教学特色：1V12人课堂，难中易针对性教学，提分方案专属定制，短时省力又高效'
        }
    ]
    export default defineComponent({
        name: 'Home',
        setup() {
            return {
                courseList
            }
        }
    });
</script>
<style lang="scss" scoped>
.course {
    padding: 0 30px;
    background: #eee;
    .wrap {
        padding: 40px 20px;
        background: #fff;
    }
    &-list {

    }
    &-item {

    }
    &-title {
        display: flex;
        align-items: center;
        padding-left: 40px;
        width: 320px;
        height: 66px;
        margin-bottom: 20px;
        background-color: #f59014;
        font-size: 30px;
        color: #fff;
        border-radius: 6px;
        font-weight: bold;
        text-align: left;
        line-height: normal;
    }
    &-brief, &-desc {
        padding: 0 20px;
        font-size: 24px;
        columns: #181818;
        line-height: 1.4;
        text-align: left;
    }
    &-brief {
        margin-bottom: 40px;
    }
    &-desc {
        margin-bottom: 30px;
    }
}
</style>
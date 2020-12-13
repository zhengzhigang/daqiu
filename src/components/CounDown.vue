<template>
    <div class="count-down" v-if="showCountDown">
        <div class="count-down-time">
            <span class="count-down-time-num" v-if="Number(countDown.day) > 0">{{countDown.day}}</span>
            <span class="count-down-time-num">{{countDown.hours}}</span>
            <span class="count-down-time-num">{{countDown.minutes}}</span>
            <span class="count-down-time-num">{{countDown.seconds}}</span>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'CountDown',
        components: {
        },
        props: {
            showCountDown: {
                type: Boolean,
                default: false
            },
            countdownStatus: {
                type: [Number, String],
                default: 0
            },
            countDown: {
                type: Object,
                default: {
                    day: '',
                    hours: '',
                    minutes: '',
                    seconds: '',
                    mmsec: ''
                }
            },
        },
        data () {
            return {
            }
        },
        mounted () {
        },
        methods: {
        }
    }
</script>
<style lang="scss" scoped>
    .count-down {
        height: 35px;
        padding: 0 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        &-time {
            color: #282828;
            font-size: 12px;
            text-align: center;
            height: 40px;
            line-height: 40px;

            &-title {
                float: left;
                color: #999999;
            }

            &-num {
                float: left;
                background-color: #282828;
                color: #ffffff;
                margin: 0 8px 0 5px;
                width: 34px;
                height: 40px;
                line-height: 40px;
                text-align: center;
                border-radius: 6px;
                position: relative;

                &::after {
                    content: ':';
                    position: absolute;
                    right: -10px;
                    top: 0px;
                    color: #282828
                }
                &:last-child::after {
                    content: '';
                }
            }

            &-mmsec {
                float: left;
                background-color: #282828;
                color: #ffffff;
                margin-left: 5px;
                width: 34px;
                height: 40px;
                line-height: 40px;
                text-align: center;
                border-radius: 6px;
            }
        }
    }
</style>

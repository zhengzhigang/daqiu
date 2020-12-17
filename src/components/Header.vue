<template>
    <div class="header-bar">
        <img class="header-bar-img" src="../assets/logo.png" alt="">
        <span class="login-button">登录</span>
    </div>
</template>
<script lang="ts">
    import { defineComponent } from 'vue'

    export default defineComponent({
        name: 'HeaderBar'
    })
</script>
<style lang="scss" scoped>
.header-bar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: #fff;
    z-index: 999;
    border-bottom: 1px solid #eee;
    &-img {
        display: block;
        width: 100px;
        height: 100px;
        margin: auto;
    }
    .login-button {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        top: 0;
        right: 20px;
        width: 80px;
        height: 60px;
        padding: 20px 0;
        font-size: 28px;
    }
}
</style>
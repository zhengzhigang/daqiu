<template>
  <div class="main">
    <header-bar></header-bar>
    <router-view />
    <nav-bar></nav-bar>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import NavBar from '@/components/NavBar.vue'; // @ is an alias to /src
import HeaderBar from '@/components/Header.vue';

@Options({
  components: {
    NavBar,
    HeaderBar
  },
})
export default class Container extends Vue {}
</script>
<style lang="scss" scoped>
.main {
  padding: 100px 0;
}
</style>

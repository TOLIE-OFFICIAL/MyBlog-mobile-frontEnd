<!-- author: TOLIE -->
<!-- date: 2023-03-05 11:44:17 -->
<!-- description:  -->
<template>
  <van-tabbar v-model="active">
    <van-tabbar-item name="home" icon="home-o">标签</van-tabbar-item>
    <van-tabbar-item name="search" icon="search">标签</van-tabbar-item>
    <van-tabbar-item name="friends" icon="friends-o">标签</van-tabbar-item>
    <van-tabbar-item name="setting" icon="setting-o">标签</van-tabbar-item>
  </van-tabbar>
</template>

<script lang="ts" setup>
const active = ref("home");
</script>

<style scoped></style>

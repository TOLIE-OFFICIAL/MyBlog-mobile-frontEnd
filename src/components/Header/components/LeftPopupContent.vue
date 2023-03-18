<!-- author: TOLIE -->
<!-- date: 2023-03-05 13:03:07 -->
<!-- description: 左侧弹出框内容 -->
<template>
  <div class="content-avatar">
    <van-image
      round
      width="11.875rem "
      height="11.875rem "
      src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
    />
  </div>
  <div class="content-menu">
    <van-sidebar v-model="active" class="w-full">
      <van-sidebar-item
        v-for="{ meta, path, name } in list"
        :title="meta.title"
        @click="handleClick(path)"
      >
        <van-icon name="wap-home-o" />
      </van-sidebar-item>
    </van-sidebar>
  </div>
</template>

<script lang="ts" setup>
// import type BlogArticles from "@/typings/api"

import router from "@/router";

// import { showToast } from "vant";
const list: Array<AuthRoute.Route> = reactive([
  {
    name: "home",
    /** 路由路径 */
    path: "/",
    redirect: "/home/index",
    meta: {
      title: "首页",
      icon: "",
    },
  },
  {
    name: "achieves",
    /** 路由路径 */
    path: "/achieves",
    redirect: "/achieves/index",
    meta: {
      title: "归档",
    },
  },
  {
    name: "tags",
    /** 路由路径 */
    path: "/tags",
    redirect: "/tags/index",
    meta: {
      title: "标签墙",
    },
  },
  {
    name: "links",
    /** 路由路径 */
    path: "/links",
    redirect: "/links/index",
    meta: {
      title: "友人账",
    },
  },
]);

const active = ref(0);
const handleClick = (path: string) => {
  console.log(path);

  router.push(path);
};
// const onLoad = () => {
//   // 异步更新数据
//   // setTimeout 仅做示例，真实场景中一般为 ajax 请求
//   setTimeout(() => {
//     for (let i = 0; i < 10; i++) {
//       list.value.push(list.value.length + 1);
//     }

//     // 加载状态结束
//     loading.value = false;

//     // 数据全部加载完成
//     if (list.value.length >= 40) {
//       finished.value = true;
//     }
//   }, 1000);
// };
</script>

<style scoped></style>

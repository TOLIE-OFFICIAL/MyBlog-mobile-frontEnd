<!-- author: TOLIE -->
<!-- date: 2023-03-05 11:42:19 -->
<!-- description: Header组件 -->
<template>
  <van-nav-bar>
    <template #left>
      <van-icon
        name="bars"
        size="18"
        is-link
        @click="handleShowPopup"
      ></van-icon>
      <van-popup
        v-model:show="showPopup"
        close-on-popstate
        @click-overlay="handleShowPopup"
        position="left"
        class="flex w-3/4 min-h-full flex-col justify-around"
      >
        <template #default><LeftPopupContent /></template>
      </van-popup>
    </template>
    <template #right>
      <van-image
        height="2.875rem"
        width="2.875rem"
        src="https://s2.loli.net/2023/03/07/pP3XoAUfQan4l8s.png"
      />
    </template>
  </van-nav-bar>
</template>

<script lang="ts" setup>
// import { getCurrentInstance, ComponentInternalInstance } from 'vue'
// const update = getCurrentInstance();
const route = useRoute();

const showPopup = ref(false);
const handleShowPopup = () => {
  showPopup.value = !showPopup.value;
};

// 监听路由变化
watch(
  () => route.path,
  (n, o) => handleShowPopup()
);
</script>

<style scoped></style>

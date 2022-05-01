<template>


  <div class="app">
    <!-- 加载图标  -->
    <div class="loading" v-show="loading">
      <van-loading size="24px" vertical>加载中...</van-loading>
    </div>



    <router-view v-slot="{ Component }">
      <keep-alive>

        <component :is="Component" :key="route.name" v-if="route.meta.keepAlive"></component>

      </keep-alive>

      <component :is="Component" :key="route.name" v-if="!route.meta.keepAlive"></component>
    </router-view>


    <mainTabbar />

  </div>
</template>

<script setup>

import { onMounted } from 'vue'
import mainTabbar from 'comp/content/main-tab-bar/index.vue'
import { usePinia } from './hooks/pinia';
import { useRouters } from './hooks/router';

const { route, router } = useRouters()
const { getPropoty } = usePinia()
// 获取loading 来判断是否加载页面
const loading = getPropoty('loading')
const userInfo = getPropoty('userInfo')


onMounted(() => {
  // 将大小自适应浏览器除去工作栏的高度
  document.querySelector('.app').style.height = (document.documentElement.clientHeight) + 'px'
})



// router.options.routes.forEach(item => {
//   item.meta.keepAlive = false



</script>




<style lang='less' scoped>
.app {
  // height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-color: @backColor;

  .loading {
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: black;
    opacity: .5;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9;
  }
}
</style>
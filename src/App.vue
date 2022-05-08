<template>


  <div class="app">
    <!-- 加载图标  -->

    <van-overlay :show="loading">
      <div class="loading">
        <van-loading size="24px" vertical>加载中...</van-loading>
      </div>
    </van-overlay>

    <router-view v-slot="{ Component }">
      <keep-alive>

        <component :is="Component" :key="route.name" v-if="route.meta.keepAlive"></component>

      </keep-alive>

      <component :is="Component" :key="route.name" v-if="!route.meta.keepAlive"></component>
    </router-view>

    <!-- 播放器 -->
    <audio autoplay ref="audio">
      <source :src="currentSongUrl">
    </audio>



  </div>
  <mainTabbar />

</template>

<script setup>
import mainTabbar from 'comp/content/main-tab-bar/index.vue'
// hooks
import { onMounted, watch, ref } from 'vue'
import { usePinia } from './hooks/pinia';
import { useRouters } from './hooks/router';
import { Toast } from 'vant';


const { route, router } = useRouters()
const { getPropoty } = usePinia()
// 获取loading 来判断是否加载页面
const loading = getPropoty('loading')

const tabbarShow = getPropoty('tabbarShow')

// 这是获取audio标签的
const audio = ref(null)
const currentSongUrl = getPropoty('currentSongUrl')

onMounted(() => {

  // 将大小自适应浏览器除去工作栏的高度
  document.querySelector('.app').style.height = (document.documentElement.clientHeight) + 'px'
  watch(currentSongUrl, (oldVal, newVal) => {
    audio.value.load()
    if (!oldVal) {
      Toast('该歌曲暂无版权');
    }
  })

})





</script>




<style lang='less' scoped>
.app {
  // 遮盖层
  --van-overlay-z-index: 99;
  width: 100vw;
  background-color: @backColor;
  overflow: hidden;

  .loading {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    z-index: 99;
  }
}
</style>
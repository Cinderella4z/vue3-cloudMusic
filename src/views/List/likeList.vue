<template>
  <songList :songArr="likeList" :idsArr="likeListId" :tabName="'我喜欢的音乐'">
    <!-- 设置slot嵌套 navbar -->
    <template #left>
      <van-icon name="arrow-left" />
    </template>
    <template #center>
      歌单
    </template>
    <template #right>
      <van-icon name="search" />
    </template>

  </songList>
</template>

<script setup>
import { ref, reactive } from 'vue'
import songList from 'comp/content/songList/index.vue'
import { usePinia } from 'hooks/pinia';
import { useLoadSong } from 'hooks/utils/loadSong.js'
// 获取
const { getPropoty } = usePinia()
const likeListId = getPropoty('likeListId')

// 收集喜欢的歌曲
const likeList = ref([])

// 初始化歌曲
const { initSong } = useLoadSong()
initSong(likeListId, likeList, 50)






</script>

<style lang='less' scoped>
</style>
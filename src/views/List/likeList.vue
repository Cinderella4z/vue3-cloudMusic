<template>
  <songList :songArr="likeList">
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


const likeList = getPropoty('currentList')








</script>

<style lang='less' scoped>
</style>
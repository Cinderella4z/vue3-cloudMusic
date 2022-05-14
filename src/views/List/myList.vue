<template>
  <songList :songArr="list">
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
import { ref, toRefs } from 'vue'
import { usePinia } from 'hooks/pinia';
import songList from 'comp/content/songList/index.vue'

const { getPropoty } = usePinia()
const list = getPropoty('currentList')



</script>

<style lang='less' scoped>
</style>
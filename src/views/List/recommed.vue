<template>
  <songList :songArr="songs" :tabName="name">
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
import { ref } from 'vue'
import { useRouters } from '../../hooks/router';
import songList from 'comp/content/songList/index.vue'


const { route } = useRouters()
const songs = JSON.parse(route.value.query.songs)
const name = route.value.query.name



</script>

<style lang='less' scoped>
</style>
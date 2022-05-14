<template>

  <!-- 上导航栏 -->
  <navbar>
    <template #left>
      <van-icon name="bars" />
    </template>
    <template #center>

    </template>
    <template #right>
      <van-icon name="search" />
    </template>
  </navbar>


  <scroll>
    <mySelf />

    <myLike :list="myLikeList" />

    <myList :list="myAddList" />

  </scroll>

</template>

<script setup>

// component
import navbar from 'comp/common/navbar/index.vue'
import myLike from './child/myLike/index.vue'
import mySelf from './child/mySelf/index.vue'
import myList from './child/myList/index.vue'
import scroll from 'comp/common/betterScroll/index.vue'

// hooks
import { useStorage } from 'hooks/storage';
import { usePinia } from 'hooks/pinia';
import { useMy } from 'network/my'
import { computed, ref } from 'vue'

const { getUserPlaylist } = useMy()
const { setStorage } = useStorage()
const { getPropoty } = usePinia()


// 登录成功后保存cookie
const userInfo = getPropoty('userInfo')
const playlist = ref('')

// 我喜欢的歌单 和 我收藏的歌单
const myLikeList = computed(() => playlist.value ? playlist.value.slice(0, 1) : {})
const myAddList = computed(() => playlist.value ? playlist.value.slice(1) : {})

if (userInfo.value.code === 200 && userInfo.value !== '') {
  const cookie = userInfo.value.cookie
  setStorage('cookie', cookie)

  // 获取所有用户的歌单
  getUserPlaylist(userInfo.value.profile.userId).then(res => {
    playlist.value = res.data.playlist
  })
}











</script>


<style lang='less' scoped>
</style>
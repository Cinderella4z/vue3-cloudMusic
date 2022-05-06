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


  <mySelf />

  <myLike />

</template>

<script setup>

// component
import navbar from 'comp/common/navbar/index.vue'
import myLike from './child/myLike/index.vue'
import mySelf from './child/mySelf/index.vue'

import { onActivated } from 'vue'
// hooks
import { useStorage } from 'hooks/storage';
import { usePinia } from 'hooks/pinia';
import { useRouters } from 'hooks/router';
const { setStorage, } = useStorage()
const { getPropoty } = usePinia()
const { route } = useRouters()

// 登录成功后保存cookie
const userInfo = getPropoty('userInfo')

if (userInfo.value.code === 200 && userInfo.value !== '') {
  const cookie = userInfo.value.cookie
  setStorage('cookie', cookie)
}






</script>


<style lang='less' scoped>
</style>
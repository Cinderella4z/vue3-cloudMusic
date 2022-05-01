<template>

  <!-- 上导航栏 -->
  <navbar>
    <template #left>
      <van-icon name="bars" size="1.5rem" />
    </template>
    <template #center>

    </template>
    <template #right>
      <van-icon name="search" size="1.5rem" />
    </template>
  </navbar>



  <user />

  <myLike />

</template>

<script setup>

// component
import navbar from 'comp/common/navbar/index.vue'
import user from './child/my-self.vue'
import myLike from './child/my-like.vue';
// hooks
import { useStorage } from '../../hooks/storage';
import { usePinia } from '../../hooks/pinia';
import { useRouters } from '../../hooks/router';
const { setStorage, } = useStorage()
const { getPropoty } = usePinia()
const { route } = useRouters()

// 登录成功后保存cookie
const userInfo = getPropoty('userInfo')

if (userInfo.value !== '') {
  const cookie = userInfo.value.cookie
  setStorage('cookie', cookie)
}


console.log('my');


</script>


<style lang='less' scoped>
</style>
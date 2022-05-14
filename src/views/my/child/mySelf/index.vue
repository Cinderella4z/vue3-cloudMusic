<template>
  <div class="user">

    <div class="touxaing">
      <!-- 登录展示 -->
      <img :src="touxiang" alt="" v-if="touxiang">
      <!-- 未登录展示 -->
      <img src="../../../../assets/img/login/login.png" v-else>
    </div>


    <div class="info">
      <!-- 登录展示 -->
      <div v-if="userInfo">
        <div>{{ username }}</div>
        <span>{{ follows }} 关注</span>
        <span>{{ followeds }} 粉丝</span>
      </div>
      <!-- 未登录展示 -->
      <div v-else>
        <div @click="toLogin">立即登录</div>
      </div>

    </div>

  </div>
</template>

<script  setup>
import { ref, computed, onActivated } from 'vue'
// hooks
import { usePinia } from 'hooks/pinia';
import { useRouters } from 'hooks/router';
const { getPropoty, } = usePinia()
const { push } = useRouters()


const userInfo = getPropoty('userInfo')


const profile = ref('')
const touxiang = ref('')
const username = ref('')
const follows = ref('')
const followeds = ref('')

if (userInfo.value) {
  profile.value = userInfo.value.profile
  touxiang.value = profile.value.avatarUrl
  username.value = profile.value.nickname
  follows.value = profile.value.follows
  followeds.value = profile.value.followeds
}





const toLogin = () => {
  push('/')
}





</script>



<style lang='less' scoped>
.user {
  position: relative;
  height: 15vh;
  min-height: 100px;
  max-height: 100px;
  background-color: @itemColor;
  border-radius: @border;
  @margin();
  margin-top: 50px;

  .touxaing {
    position: absolute;
    width: 5rem;
    height: 5rem;
    border-radius: 50px;

    top: -50%;
    left: 50%;
    transform: translate(-50%);

    img {
      width: 100%;
      height: 100%;
      border-radius: 50px;
    }
  }

  .info {
    width: 40%;
    height: 50%;
    left: 50%;
    bottom: 10%;
    transform: translate(-50%);
    position: absolute;
    text-align: center;

    // username
    div {
      // margin-bottom: .5rem;
      font-size: 1.3rem;
    }

    // 关注粉丝
    span {
      color: @baseColor;
      display: inline-block;
      font-size: .9rem;
      width: 50%;
    }
  }



}
</style>
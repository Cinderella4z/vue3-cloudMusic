<template>
  <div class="myLike">
    <div class="img">
      <van-icon name="like" />
    </div>
    <div class="text">
      <div>我喜欢的音乐</div>
      <div class="number">{{ length }}首</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// hooks
import { user } from 'network/user'
import { usePinia } from 'hooks/pinia/index.js'

const { getPropoty } = usePinia()
const { getLikeList } = user()
// 用户信息
const userInfo = getPropoty('userInfo')
const uid = ref('')
// 获取到喜欢音乐的id数组
const length = ref('0')
const ids = ref('')
// 存在用户信息就执行
if (userInfo.value !== '') {
  uid.value = userInfo.value.account.id
  getLikeList(uid).then(res => {
    // console.log(res);
    length.value = res.data.ids.length
    ids.value = res.data.ids
  })
}


</script>

<style lang='less' scoped>
.myLike {
  width: 90%;
  height: 10%;
  background-color: @itemColor;
  border-radius: @border;
  @margin();
  display: flex;
  align-items: center;

  .img {
    width: 55px;
    height: 55px;
    background-color: red;
    opacity: .5;
    margin-right: 0.5rem;
    margin-left: 0.8rem;
    border-radius: @border;
    color: white;
    text-align: center;
    line-height: 55px;
    position: relative;
    font-size: 1.5rem;

    img {
      width: 100%;
      height: 100%;
      border-radius: @border;
      position: absolute;
      left: 0;
    }
  }


  .text {
    // background-color: aqua;
    height: 55%;

    .number {
      color: @baseColor;
      font-size: 14px;
      margin-top: 5px;
    }
  }
}
</style>
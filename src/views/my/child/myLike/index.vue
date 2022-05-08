<template>
  <div class="myLike" @click="enterLikeList">
    <div class="img">
      <van-icon name="like" />
    </div>
    <div class="text">
      <div>我喜欢的音乐</div>
      <div class="number">{{ likeListId.length }}首</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// hooks
import { user } from 'network/user'
import { usePinia } from 'hooks/pinia/index.js'
import { useRouters } from 'hooks/router';
const { getPropoty, setPropoty } = usePinia()
const { getLikeList, } = user()
// 用户信息
const userInfo = getPropoty('userInfo')
const likeListId = getPropoty('likeListId')


const uid = ref('')
// 获取到喜欢音乐的id数组
const res = ref('')
const ids = ref('')

// 首先获取所有歌曲的ids，再拿到每个歌曲的详细
const getSongsInfo = async () => {
  res.value = await getLikeList(uid.value)
  ids.value = res.value.data.ids
  setPropoty('likeListId', ids.value)
}

// 存在用户信息就执行
if (userInfo.value.code === 200) {
  uid.value = userInfo.value.account.id
  getSongsInfo();
}



// 进入喜欢音乐的列表
const { push } = useRouters()
const enterLikeList = () => {
  push('/likeList')
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
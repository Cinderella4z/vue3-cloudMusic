<template>
  <div class="myLike" @click="enterLikeList">
    <div class="img" v-if="img">
      <img :src="img">
    </div>
    <div class="img" v-else>
      <div>❤</div>
    </div>
    <div class="text">
      <div>我喜欢的音乐</div>
      <div class="number">{{ trackCount }}首</div>
    </div>
  </div>
</template>

<script setup>
import { ref, toRefs, computed } from 'vue'

// hooks

import { usePinia } from 'hooks/pinia/index.js'
import { useRouters } from 'hooks/router';

const { setPropoty } = usePinia()


const props = defineProps({
  list: Object
})
const { list } = toRefs(props)

console.log(list);

const trackCount = computed(() => list.value[0] ? list.value[0].trackCount : 0)
const img = computed(() => list.value[0] ? list.value[0].coverImgUrl : '')
// 进入喜欢音乐的列表
const { push } = useRouters()

const enterLikeList = () => {
  setPropoty('currentList', list.value[0])
  push('/likeList')
}





</script>

<style lang='less' scoped>
.myLike {
  height: 5rem;
  background-color: @itemColor;
  border-radius: @border;
  @margin();
  display: flex;
  align-items: center;

  .img {
    width: 55px;
    height: 55px;
    margin-right: 1rem;
    margin-left: 1rem;
    border-radius: @border;
    text-align: center;
    position: relative;
    font-size: 1.5rem;
    background-color: pink;
    color: white;
    line-height: 55px;

    img {
      width: 100%;
      height: 100%;
      border-radius: @border;
      position: absolute;
      left: 0;
    }
  }


  .text {
    height: 55%;

    .number {
      color: @baseColor;
      font-size: 14px;
      margin-top: 5px;
    }
  }
}
</style>
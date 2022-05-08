<template>

  <navbar>
    <template #left>
      <van-icon name="bars" />
    </template>
    <template #center>
      <input :value="search" class="input" />
    </template>
    <template #right>
      <van-icon name="search" />
    </template>
  </navbar>

  <van-swipe :autoplay="3000" lazy-render class="my-swipe" indicator-color="white">
    <van-swipe-item v-for="image in images" :key="image">
      <img :src="image.pic" />
    </van-swipe-item>
  </van-swipe>

  <recommed></recommed>




</template>

<script lang='ts' setup>
import { ref } from 'vue'
import { Find } from '../../network/find/index'
import navbar from 'comp/common/navbar/index.vue'
import recommed from './child/recommed.vue'


const { getBanner } = Find()
const images = ref([])
const search = ref('')

getBanner(2).then(res => {
  images.value = res.data.banners
})





</script>


<style lang='less' scoped>
.input {
  background-color: aquamarineinput;
  height: 2.2rem;
  line-height: 2.2rem;
  width: 100%;
  border-radius: 30px;
  border: 0;
  font-size: 1rem;
  font-weight: normal;
  color: @baseColor;
}

.my-swipe {
  @marginX();
  height: 20vh;
  border-radius: 10px;

  img {
    width: 100%;
    height: 100%;
  }

}
</style>
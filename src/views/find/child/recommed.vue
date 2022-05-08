<template>
  <div class="recommed">
    <div class="tabName">
      <span class="s1">推荐歌单</span>
      <span style="float: right;" class="s2">
        <button>更多></button>
      </span>
    </div>

    <div class="lists">
      <div class="list" v-for="item in recommed" @click="goRecommed(item)">

        <img :src="item.picUrl">

        <div class="text">
          <span>{{ item.name }}</span>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Find } from 'network/find/index'
import { useRouters } from '../../../hooks/router';
const { getRecommed, getRecommedSongs } = Find()
const { push } = useRouters();

const recommed = ref('')
getRecommed(6).then(res => {
  recommed.value = res.data.result
})

const goRecommed = (item) => {
  getRecommedSongs(item.id, 100).then(res => {
    push({
      path: '/recommed',
      query: {
        songs: JSON.stringify(res.data.songs),
        name: item.name
      }
    })
  })



}



</script>

<style lang='less' scoped>
.recommed {
  overflow: hidden;
  border-radius: 10px;
  margin-top: 5%;
  background-color: @itemColor;

  ::-webkit-scrollbar {
    /*隐藏滚轮*/
    display: none;
  }

  .tabName {
    margin-left: 5%;
    margin-right: 5%;
    margin-top: 2%;
    margin-bottom: 2%;

    .s1 {
      font-size: 1.2rem;
      font-weight: bolder;
    }

    .s2 {
      font-size: .8rem;

      button {
        width: 3.5rem;
        height: 1.5rem;
        background-color: white;
        border: 1px solid @baseColor;
        border-radius: 30px;
      }
    }

  }


  .lists {
    white-space: nowrap;
    overflow-x: scroll;
    margin-left: 5%;
    margin-bottom: 5%;

    .list {
      width: 8rem;
      border-radius: 10px;
      display: inline-block;
      margin-right: 10px;
      vertical-align: top;

      img {
        width: 100%;
        border-radius: 10px;
      }

      .text {
        white-space: normal;
        font-size: .8rem;
      }
    }

  }

}
</style>
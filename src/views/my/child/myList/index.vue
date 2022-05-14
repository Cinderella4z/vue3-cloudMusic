<template>
  <div class="box">

    <div class="content">
      <div class="tabName">我的歌单({{ list.length }})</div>
      <div v-for="item in list" class="item" v-if="list.length" @click="getItem(item)">

        <img :src="item.coverImgUrl">
        <div class="info">
          <div class="name">{{ item.name }}</div>
          <div class="creator">by {{ item.creator.nickname }}</div>
        </div>

      </div>

      <div v-else class="noLogin">暂无收藏的歌单</div>
    </div>

  </div>
</template>

<script setup>
import { toRefs } from 'vue'
import { usePinia } from '../../../../hooks/pinia';
import { useRouters } from '../../../../hooks/router';
// hook
const { setPropoty } = usePinia()

const { push } = useRouters()

const props = defineProps({
  list: Object
})

const { list } = toRefs(props)

// 获取歌单歌曲

const getItem = (item) => {
  setPropoty('currentList', item)
  push('/myList')
}

</script>

<style lang='less' scoped>
.box {
  background-color: @itemColor;
  border-radius: @border;
  @margin();

  .content {
    margin-left: 1rem;

    .tabName {
      color: @baseColor;
      font-size: .8rem;
      height: 3em;
      line-height: 3rem;
    }

    .item {

      height: 4rem;
      overflow: hidden;
      white-space: nowrap;

      img {
        height: 80%;
        vertical-align: middle;
        border-radius: @border;
        margin-right: 1rem;
      }

      .info {
        vertical-align: middle;
        width: 90%;
        display: inline-block;

        .name {
          width: 90%;
          text-overflow: ellipsis;
          overflow: hidden;
        }

        .creator {
          color: @baseColor;
          font-size: .8rem;
          text-overflow: ellipsis;

        }
      }
    }
  }

  .noLogin {
    height: 4rem;
    line-height: 3rem;
    text-align: center;
    color: @baseColor;
  }
}
</style>
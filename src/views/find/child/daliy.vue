<template>

  <div class="daliy">

    <div class="content">

      <div class="tabname">
        新歌速递
        <van-icon name="replay" @click="reload" />
      </div>

      <div v-for="i in page" class="item" @click="getSongs(i)">
        <img :src="i.picUrl">
        <div class="name">
          {{ i.name }} <br>
          <span>{{ i.song.artists[0].name }}</span>
        </div>
      </div>

    </div>


    <div class="content">

      <div class="tabname">
        热歌推荐
        <van-icon name="replay" @click="reload2" />
      </div>



      <div v-for="i in page2" class="item" @click="getSongs(i)">
        <img :src="i.picUrl">
        <div class="name">
          {{ i.name }} <br>
          <span>{{ i.song.artists[0].name }}</span>
        </div>
      </div>

    </div>


  </div>

</template>

<script setup>
import { ref, computed } from 'vue'
import { Find } from 'network/find/index.js'
import { Toast } from 'vant';
import { usePinia } from '../../../hooks/pinia';
import { user } from 'network/user'
const { getDaliySongs } = Find()

const songs = ref('')

const offset = ref(0)
const offset2 = ref(30)

getDaliySongs(60).then(res => {
  songs.value = res.data.result
})


// 加载新资源
const page = computed(() => songs.value.slice(offset.value, 3 + offset.value))
const page2 = computed(() => songs.value.slice(offset2.value, 3 + offset2.value))


const length = computed(() => songs.value.length)
const reload = () => {
  if (offset.value + 3 < length.value / 2) {
    offset.value += 3
  }
  else {
    Toast('加载完毕')
  }
}

const reload2 = () => {
  if (offset2.value + 3 < length.value) {
    offset2.value += 3
  }
  else {
    Toast('加载完毕')
  }
}

const { setPropoty } = usePinia()
const { getSongUrl } = user()

const getSongs = (i) => {
  setPropoty('currentSong', i)
  getSongUrl(i.id).then(res => {
    setPropoty('currentSongUrl', res.data.data[0].url)
  })
}



</script>

<style lang='less' scoped>
.daliy {
  width: 100%;
  background-color: @itemColor;
  border-radius: 10px;
  overflow: hidden;
  margin-top: 5%;
  // height: 280px;
  white-space: nowrap;
  overflow-x: scroll;

  .content {
    @marginX();
    display: inline-block;
    width: 90%;

    .tabname {
      font-weight: bolder;
      font-size: 1.2rem;
      margin-top: .5rem;

    }



    .item {
      width: 100%;
      height: 5rem;
      display: flex;
      align-items: center;

      img {
        height: 85%;
        border-radius: 10px;
        vertical-align: middle;
      }

      .name {
        margin-left: .5rem;
        display: inline-block;
        vertical-align: middle;

        span {
          color: @baseColor;
          font-size: .8rem;
        }
      }
    }
  }




}
</style>
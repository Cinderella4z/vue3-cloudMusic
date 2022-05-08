<template>
  <navbar :color="'white'" :backGroundImg="backgroundImg" :backGroundColor="'black'">
    <template #left>
      <span @click="back">
        <slot name="left"></slot>
      </span>
    </template>

    <template #center>
      <slot name="center"></slot>
    </template>

    <template #right>
      <span>
        <slot name="right"></slot>
      </span>
    </template>
  </navbar>

  <div class="sticky2 " v-show="ifShow">
    <div>
      <van-icon name="play-circle" size="1.2rem" color="red" />
      <span class="playAll">播放全部</span>
      <span class="songNum"> ({{ songArr.length }})</span>
    </div>
  </div>


  <scroll :height="tabImgHeight" @onHeight="onHeight" @atBottom="atBottom">

    <div class="tabImg" :style="{ backgroundImage: 'url(' + backgroundImg + ')' }" ref="tabImg">
      <div class="box">
        <!-- 左边的图片 -->
        <img :src="backgroundImg" alt="" v-if="backgroundImg !== ''">
        <img src="../../../assets/img/默认.png" v-else>
        <!-- 右边的用户相关 -->
        <span>
          {{ tabName }}
          <div class="user" v-if="userInfo">
            <img :src="touxiang">
            {{ userName }}
          </div>

          <div class="user" v-else>请先登录></div>
        </span>
      </div>

    </div>
    <!-- 播放全部 -->
    <div class="sticky1 " ref="sticky">
      <div>
        <van-icon name="play-circle" size="1.2rem" color="red" />
        <span class="playAll">播放全部</span>
        <span class="songNum"> ({{ songArr.length }})</span>
      </div>
    </div>

    <!-- 播放表 -->
    <div class="Items">
      <div v-for="(i, k) in songArr" class="songItem" @click="itemClick(i, k)"
        :style="{ color: k === currentIndex ? 'red' : '' }">

        <div class="num" :style="{ color: k === currentIndex ? 'red' : '' }">
          <span v-if="k !== currentIndex">{{ k + 1 }}</span>
          <van-icon name="bar-chart-o" v-else size="1.3rem" />
        </div>

        <div class="right">
          <div class="songName">{{ i.name }}</div>
          <span class="artist" v-for="(item, key) in i.ar">
            {{ item.name }}{{ key + 1 < i.ar.length ? ' / ' : ' ' }} </span>
        </div>

      </div>
    </div>


    <div class="load" v-if="loadShow">上拉加载</div>
    <div class="load" v-else>加载完毕</div>

  </scroll>



</template>

<script setup>
import { ref, toRefs, watch, onMounted, } from 'vue'
import navbar from 'comp/common/navbar/index.vue'
import scroll from 'comp/common/betterscroll/index.vue'
import { useRouters } from 'hooks/router';
import { usePinia } from 'hooks/pinia';
import { user } from 'network/user'
import { useLoadSong } from 'hooks/utils/loadSong';

const { back } = useRouters()

const props = defineProps({
  songArr: {
    type: Array,
    defalut: () => []
  },
  idsArr: {
    type: Array,
    defalut: () => []
  },
  tabName: {
    type: String,
    defalut: ''
  }
})



// 获取滚动完
const ifShow = ref(false)
const tabImg = ref(null)
const tabImgHeight = ref(0)
const loadShow = ref(false)
onMounted(() => {
  tabImgHeight.value = tabImg.value.offsetHeight
})

// 控制吸顶效果
const onHeight = (bool) => {
  ifShow.value = bool
}


// 这是获取用户值的
const { songArr, idsArr } = toRefs(props)
const { getPropoty, setPropoty } = usePinia()

const userInfo = getPropoty('userInfo')


let profile, userName, touxiang;

const backgroundImg = ref('');

if (userInfo.value !== '') {
  profile = userInfo.value.profile
  userName = profile.nickname
  touxiang = profile.avatarUrl
}

watch(songArr, (n, o) => {
  // 控制背景的
  backgroundImg.value = n[0].al.picUrl
  // 是否展示 加载文字
  if (n.length < idsArr.value.length) {
    loadShow.value = true
  }
  else {
    loadShow.value = false
  }

})




// 点击事件
const currentIndex = ref('')
const { getSongUrl } = user()

const itemClick = (i, k) => {
  currentIndex.value = k
  setPropoty('currentSong', i)
  getSongUrl(i.id).then(res => {
    setPropoty('currentSongUrl', res.data.data[0].url)
  })
}

// 监听滚动到底部事件
const { loadSong } = useLoadSong()
const atBottom = () => {
  loadSong(idsArr, songArr, 50)
}




</script>

<style lang='less' scoped>
@itemMargin: {
  margin-left: 5%;
}

@itemHeight: 4rem;

.tabImg {
  height: 10rem;
  overflow: hidden;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 10;

  .box {
    @marginX();
    height: 70%;

    img {
      height: 100%;
      border-radius: 10px;
      vertical-align: top;
    }

    span {
      @marginX();
      color: @itemColor;
      font-size: 1.2rem;
      display: inline-block;
      height: 50%;
      width: 50%;
      overflow: hidden;
    }


    .user {
      font-size: .8rem;
      margin-top: 5%;
      font-weight: bolder;
      color: @baseColor;

      img {
        vertical-align: middle;
        width: 1.5rem;
      }

    }


  }
}

// 控制吸顶效果
@sticky: {
  background-color: @backColor;
  width: 100%;

  div {
    height: @itemHeight;
    line-height: @itemHeight;
    @marginX();
  }

  .playAll {
    font-size: 1.1rem;
    font-weight: bolder;
    margin-left: .5rem;
  }

  .songNum {
    font-size: .8rem;
    color: @baseColor;
  }
}

.sticky1 {
  @sticky();
}

.sticky2 {
  @sticky();
  position: fixed;
  z-index: 9;
}

.Items {

  .songItem {
    height: @itemHeight;
    font-size: 0;

    .num {
      font-size: 1rem;
      display: inline-block;
      width: 12%;
      height: @itemHeight;
      line-height: @itemHeight;
      vertical-align: top;
      text-align: center;
      color: @baseColor;
    }

    .right {
      height: 100%;
      width: 88%;
      display: inline-block;
    }

    .songName {
      // display: inline-block;
      width: 80%;
      height: 50%;
      font-size: 1.2rem;
      @textOverFlow();
      @center();
    }

    .artist {
      // display: inline-block;
      height: 50%;
      font-size: .8rem;
      color: @baseColor;
      // @center();
    }

  }



}

.load {
  width: 100%;
  height: 30px;
  line-height: 30px;
  text-align: center;
  font-size: .8rem;
  color: @baseColor;
  // position: absolute;
  bottom: 0;
}
</style>
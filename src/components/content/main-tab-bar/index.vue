<template >
  <!-- 通过给父传颜色 确定基本颜色 -->
  <tabbar v-if="currentPath.path !== '/'">

    <!-- 发现 -->
    <tabbarItem link="find" active="#ec625c">
      <template #img>
        <span class="iconfont">&#xe63b;</span>
      </template>



      <template #text>
        <span class="fontsize">发现</span>

      </template>
    </tabbarItem>



    <!-- 音乐 -->
    <tabbarItem link="my" active="#ec625c">
      <template #img>
        <span class="iconfont">&#xe632;</span>
      </template>


      <template #text>
        <span class="fontsize">音乐</span>

      </template>
    </tabbarItem>

    <!-- 关注 -->

    <tabbarItem link="guanzhu" active="#ec625c">
      <template #img>
        <span class="iconfont">&#xe7c1;</span>
      </template>


      <template #text>
        <span class="fontsize">关注</span>
      </template>
    </tabbarItem>


  </tabbar>





</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

/* 这是引入的组件 */
import tabbar from 'comp/common/tabbar/tabbar.vue'
import tabbarItem from 'comp/common/tabbar/tabBarItem.vue'


export default defineComponent({
  name: '',
  components: {
    tabbar, tabbarItem
  },
  setup() {
    // 默认为登录页面
    const router = useRouter()
    const currentPath = router.currentRoute

    return {
      currentPath,
    }
  },
})

</script>
<style lang='less' scoped>
@font-face {
  font-family: 'iconfont';
  src: url('../../../../src/assets/cont/iconfont.ttf?t=1650895145600') format('truetype');
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 2rem;
  font-style: normal;
  border-radius: 10px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.fontsize {
  font-size: .6rem;
  text-align: center;
}
</style>
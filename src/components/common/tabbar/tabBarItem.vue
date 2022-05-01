<template >

  <div class="item" @click="itemClick">

    <div :class="{ active: currentPath === '/' + link }">
      <slot name="img"></slot>
    </div>

    <div :class="{ active: currentPath === '/' + link }">
      <slot name="text"></slot>
    </div>
  </div>

</template>

<script lang='ts'>
import { defineComponent, computed } from 'vue'
import { useRouter } from 'vue-router'
export default defineComponent({
  name: '',
  props: ['link', 'active'],
  setup(props) {
    const router = useRouter()
    const active = props.active
    const link = props.link
    // 对应给tabbar每个加上跳转
    const itemClick = () => {
      router.push(props.link)
    }
    // 获取当前的path
    const currentPath = computed(() => {
      return router.currentRoute.value.path
    })
    return {
      itemClick, currentPath, active, link
    }
  },
})

</script>
<style lang='less' scoped>
.item {
  text-align: center;
  margin-top: 5px;
}

.active {
  color: v-bind('active');
}

div {
  -webkit-tap-highlight-color: #FFFFFF;
  /* 设置点击背景 */
  -webkit-tap-highlight-color: transparent;
  /* 解决点击闪烁问题 */
}
</style>
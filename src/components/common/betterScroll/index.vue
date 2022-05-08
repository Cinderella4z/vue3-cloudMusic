<template>
  <div class="wrapper" @scroll="onScroll" ref="wrapper">
    <div class="content" ref="content">
      <slot></slot>
    </div>



  </div>

</template>

<script setup>
import { ref, } from 'vue'

const $emit = defineEmits(['onHeight', 'atBottom'])

const props = defineProps({
  height: {
    type: Number,
    defalut: 0
  },
  // songArr: {
  //   type: Array,
  //   default: () => []
  // }

})



const wrapper = ref(null)
const content = ref(null)




let timer = null
const onScroll = () => {
  // 控制 吸顶效果
  if (wrapper.value.scrollTop >= props.height) {
    $emit('onHeight', true)
  }
  else {
    $emit('onHeight', false)
  }

  // 控制上拉加载

  if (wrapper.value.scrollTop + wrapper.value.offsetHeight >= content.value.offsetHeight + 40) {


    if (timer) {
      clearTimeout(timer)
    }

    timer = setTimeout(() => {
      // console.log('加载');
      $emit('atBottom')
    }, 200);


  }
}

</script>

<style lang='less' scoped>
.wrapper {
  height: calc(100% - 8.8rem);
  position: absolute;
  top: 60px;
  bottom: 84px;
  left: 0;
  right: 0;
  overflow: scroll;
}
</style>
<template>
  <div class="wrapper" @scroll="onScroll" ref="wrapper">
    <div class="content" ref="content">
      <slot></slot>
    </div>
    <div class="upLoad">上拉加载</div>
  </div>
</template>

<script setup>
import { ref, } from 'vue'
import { Toast } from 'vant';
const $emit = defineEmits(['onHeight', 'atBottom'])

const props = defineProps({
  height: {
    type: Number,
    defalut: 0
  },

})



const wrapper = ref(null)
const content = ref(null)

const onScroll = () => {
  // 控制 吸顶效果
  if (wrapper.value.scrollTop >= props.height) {
    $emit('onHeight', true)
  }
  else {
    $emit('onHeight', false)
  }

  // 控制上拉加载
  if (wrapper.value.scrollTop + wrapper.value.offsetHeight >= content.value.offsetHeight + 30) {
    Toast('a')
    $emit('atBottom')
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

.upLoad {
  width: 100%;
  background-color: aqua;
  text-align: center;
  font-size: .8rem;
}
</style>
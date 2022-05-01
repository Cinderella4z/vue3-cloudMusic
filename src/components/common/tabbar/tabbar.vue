<template>
  <div class="tabbar">

    <slot></slot>

  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'

export default defineComponent({
  name: '',
  setup() {
    return {
    }
  },
})

</script>
<style lang='less' scoped>
.tabbar {
  background-color: @itemColor;
  height: 84px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: space-around;
  align-items: center;
  color: @baseColor;
}
</style>
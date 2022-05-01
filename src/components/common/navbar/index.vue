<template>

  <div class="navbar">

    <div class="left">
      <slot name="left"></slot>
    </div>

    <div class="center">
      <slot name="center"></slot>
    </div>

    <div class="right">
      <slot name="right"></slot>
    </div>

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
.navbar {
  display: flex;
  height: 60px;
  text-align: center;
  line-height: 60px;
  // background-color: @;

  .center {
    flex: 1;
  }

  .right {
    width: 12%;
  }

  .left {
    width: 12%;
  }
}
</style>
<template>

  <div class="navbar"
    :style="{ color: color, backgroundImage: 'url(' + backGroundImg + ')', backgroundColor: backGroundColor }">

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
  props: ['color', 'backGroundImg', 'backGroundColor'],
  setup() {
    return {
    }
  },
})

</script>
<style lang='less' scoped>
.navbar {
  display: flex;
  height: 3.8rem;
  text-align: center;
  line-height: 3.8rem;
  font-size: 1.5rem;
  font-weight: bolder;


  .center {
    flex: 1;
    font-size: 1.2rem;
  }

  .right {
    width: 12%;
  }

  .left {
    width: 12%;
  }
}
</style>
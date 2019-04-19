<template>
  <div class="infobox-content">
    <VueDraggableResizable 
      style="width:100%；height：100%"
      :drag-handle="'.drag-handle'"
      v-on:dragging="onDrag" v-on:resizing="onResize">
        <div class="drag-handle infoBox-title">
          <span>弹框标题</span>
          <span class="infobox-close">×</span>
        </div>
        <div class="infobox-content">弹框内容</div>
    </VueDraggableResizable>
  </div>
</template>

<script>
import VueDraggableResizable from 'vue-draggable-resizable'
export default {
  name:'infoBox',
  data: function () {
     return {
        width: 0,
        height: 0,
        x: 0,
        y: 0
    }
  },
  methods: {
    onResize(){},
    onDrag(){}
  },
  components:{
    VueDraggableResizable,
  }
}
</script>
<style lang="stylus">
@import '../../static/base.styl';
.infobox-content
  width 100%
  height 100vh
  position relative
  overflow hidden
  .draggable.resizable
    contentWarpStyl()
    .infoBox-title
      contentTitleStyl()
      &:hover
        opacity 0.9
        cursor pointer
      .infobox-close
        float right
        font-size 20px
    
</style>

<template>
  <div class="infobox-container">
    <VueDraggableResizable 
      style="width:100%；height：100%"
      :drag-handle="'.drag-handle'"
      v-on:dragging="onDrag" 
      v-on:resizing="onResize"
      v-if="openInfobox">
        <div class="drag-handle infoBox-title">
          <span>弹框标题</span>
          <span class="infobox-close" @click="closeInfoBox()">×</span>
        </div>
        <div class="infobox-content">弹框内容</div>
    </VueDraggableResizable>
    <button @click="openInfoBox" v-if="!openInfobox">点我弹框</button>
  </div>
</template>

<script>
import VueDraggableResizable from 'vue-draggable-resizable'
export default {
  name:'infoBox',
  data: function () {
     return {
       openInfobox:true,
        width: 0,
        height: 0,
        x: 0,
        y: 0
    }
  },
  methods: {
    onResize(){},
    onDrag(){},
    closeInfoBox(){
      var _this=this;
      _this.openInfobox=false;
    },
    openInfoBox(){
      var _this=this;
      _this.openInfobox=true;
    }
  },
  components:{
    VueDraggableResizable,
  }
}
</script>
<style lang="stylus">
@import '../../static/base.styl';
.infobox-container
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

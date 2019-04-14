<template>
<div  class="index-container">
    <div class="alert-container">
      <VueDraggableResizable 
        :w="400" :h="500" 
        style="border: 1px solid black;" 
        :drag-handle="'.drag-handle'"
        v-on:dragging="onDrag" v-on:resizing="onResize">
          <div class="drag-handle alert-title">弹框标题xxxx</div>
          <alertLayer></alertLayer>
      </VueDraggableResizable>
    </div> 
  </div> 
</template> 

<script>
import VueDraggableResizable from 'vue-draggable-resizable'
import alertLayer from './alertLayer.vue'

export default {
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
    alertLayer
  }
}
</script>


<style type="text/css">

  *{
    margin: 0;
    padding: 0;
  }
  .alert-container{
   /* position: absolute;
    top: 20%;
    left: 30%*/
    position: relative;
    /*margin-top: 200px；*/
  }
  .alert-title{
    width: 100%;
    text-align: left;
    background-color: #ccc;
  }
</style>

<template>
  <div  class="index-container">
    <h2 class="index-title">
      vue中使用过的组件集合
    </h2>
    <ol class="index-content">
      <li v-for="(item,index) in listName" :key="index">
        <!-- 使用 router-link 组件来导航. -->
        <!-- 通过传入 `to` 属性指定链接. -->
        <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
       <router-link :to="'/'+item.url">
          <span>{{item.name}}</span>
        </router-link>
      </li>
    </ol>
  </div> 
</template> 

<script>

import infoBox from './infoBox.vue'
import echartFn from './echartFn'
export default {
  data: function () {
    return {
      listName:[
        {
          name:"可拖拽拉伸弹框",
          url:"infoBox"
        },{
          name:"Echart-应用实例",
          url:"echartFn"
        },
      ]
    }
  },
  methods: {

  },
  components:{
    infoBox,//可拖拽移动弹框
    echartFn,//Echart-自绘地图
  }
}
</script>


<style lang="stylus">

.index-container
  position relative 
  margin  10px
  .index-content
    margin-left 20px
</style>

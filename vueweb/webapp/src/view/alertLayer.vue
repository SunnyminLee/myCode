<template>
  <!-- <h4 class="layer-title">{{layertitle}}</h4> -->
  <div class="layer-content">
    <ul class="content-docs">
      <li>
        <p class="doc-title">文件名称文件名称文件名文件名称文件名称文件名称文件名称文件名称文件名称称</p>
        <p class="doc-download">下载</p>
      </li>
      <li>
        <p class="doc-title">文件名称文件名称文件名称称</p>
        <p class="doc-download">下载</p>
      </li>
    </ul>
    <div></div>
  
</div>

</template>

<script>
export default {
  data: function () {
    return {
 
    }
  },
  methods: {

  }
}
</script>
<style type="text/css">
  *{
    margin: 0;
    padding: 0;
  }
  .layer-content{
    width: 100%;
    height:100%;
    text-align: left;
  }
  .content-docs{
    list-style: none;
  }
  .content-docs li{
    height: 28px;
    line-height: 28px;
  }
  .content-docs p{
    display:inline-block;
    padding: 5px; 
  }
  .content-docs .doc-title{
    width: 70%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow:ellipsis;
  }
  .content-docs .doc-download{
    color: #fe45ef;
    vertical-align: top;

  }
</style>

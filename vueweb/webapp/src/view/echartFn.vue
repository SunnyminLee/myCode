<template>
  <div class="echartFn-container">
      <div class="container-left echart-tree">
            <ol class="tree-content">
                <li v-for="(item,index) in listName" :key="index">
                    <span class="title" @click="drawChart(item.id,item.type)">{{item.name}}</span>
                </li>
            </ol>
      </div>
      <div class="container-right ">
          <div :id="curEchart" class="echart-content"></div>
      </div>
  </div>
</template>

<script>
import echarts from "echarts";
export default {
    name:'echartFn',
    data: function () {
     return {
        curEchart:'',
        listName:[
            {
                name:"饼图-样式1",
                id:"pie-styl1",
                type:"pie"
            },{
                name:"饼图-样式2",
                id:"pie-styl2",
                 type:"pie"
            },{
                name:"自绘地图",
                id:"geo-styl3",
                 type:"geo"
            },{
                name:"饼图-样式4",
                id:"pie-styl4",
                 type:"pie"
            },
        ],
        chartObj:{
           chart: null,
           "pie-styl1":{
                legend: [
                    {
                        orient: 'vertical',
                        data : ["苹果","香蕉"],
                        left : '50px',
                        top:'10px',
                        textStyle: {
                            color: '#fft'
                        }
                    },{
                        orient: 'vertical',
                        data : ["火龙果","橘子"],
                        left : '150px',
                        top:'10px',
                        textStyle: {
                            color: '#fft'
                        }
                    }
                ],
                series: [
                    {   //外环
                        type:'pie',
                        hoverAnimation : false,
                        radius: ['40%', '50%'],
                        //center: ['30%','70%'],
                        label: {
                            normal: {
                                show: true,
                                position: 'center',
                                formatter:function (argument) {
                                    var html;
                                    html='总数';
                                    return html;
                                },
                                textStyle:{
                                    fontSize: 14,
                                    color:'#47F9FA'
                                }
                            },
                        },
                        labelLine: {
                            normal: {
                                show:false
                            }
                        },
                        itemStyle:{
                            borderWidth:5, //设置border的宽度有多大
                            borderColor:'#fff',//根据背景色来设置改颜色，圆环空隙
                            shadowBlur:{
                                shadowColor: '#fff',
                                shadowBlur: 100
                            }
                        },
                        data:[
                            {value:25,name:"苹果"},
                            {value:40,name:"香蕉"},
                            {value:60,name:"火龙果"},
                            {value:80,name:"橘子"}
                        ],
                        //color:_this.equipmentsChart.color
                    },{
                        //内环
                        type:'pie',
                        hoverAnimation:false,
                        selectedMode:false,
                        radius: ['37%', '38%'],
                        //center: ['30%','70%'],
                        label:false,
                            labelLine: {
                            normal: {
                                show:false
                            }
                        },
                        data:[
                                {value:1, name:"总数"}
                        ],
                        color:['#3395CF']
                    }
                ]   
            },
            "pie-styl2":{
                // tooltip: {
                //     trigger: 'item',
                //     formatter: "{b}: {c} ({d}%)"
                // },
                legend: {
                    show:false
                },
                series: [
                    {   
                        //name:'访问来源',
                        type:'pie',
                        hoverAnimation : false,
                        radius: ['48%', '60%'],
                        center: ['50%','50%'],
                        label: {
                            normal: {
                                show: true,
                                position: 'center',
                                formatter:function (argument) {
                                    var html='';
                                    if(argument.name!='总数'){
                                        html=argument.percent+'%\n'+argument.name;
                                    }
                                    return html;
                                },
                                textStyle:{
                                    fontSize: 12,
                                    color:"green"
                                }
                            },
                        },
                        itemStyle:{
                            borderWidth:2, //设置border的宽度有多大
                            borderColor:"green",
                        },
                        labelLine: {
                            normal: {
                                show:false
                            }
                        },
                        data:[{
                            value:30, 
                            name:'正常' 
                        },{
                            value:100, 
                            name:'总数'
                        }],
                        color:["green","transparent"]
                    }
                ]   
            },
            "geo-styl3":{
                tooltip: {
                    trigger: 'item',
                    formatter: '{b}'
                },
                geo: {
                    show: true,
                    map: '水源地区',
                    label: {
                        normal: {
                            show: false
                        },
                        emphasis: {
                            show: true,
                            color:"#fff"
                        },
                    },
                    roam: true,
                    itemStyle: {
                        normal: {
                            areaColor:"#2C50E0",//地图颜色
                            borderColor: "#869BEA",//边界颜色
                        },
                        emphasis: {
                            areaColor:'#0A29A0'////地图选中颜色
                        }
                    },
                    zoom: 1.2
                    },
                series:  [{//水位监测
                    name: '水位监测',
                    type: 'scatter',
                    coordinateSystem: 'geo',
                    data:[{
                        name: '点位1',
                        value:[118.247696,36.767272]
                    }],
                    symbolSize: 12,
                        showEffectOn: 'render',
                    rippleEffect: {
                        brushType: 'stroke'
                    },
                    hoverAnimation: true,
                    label: {
                        normal: {
                            formatter: '{b}',
                            position: 'right',
                            show: false
                        }
                    },
                    itemStyle: {
                        normal: {
                            //color: "",//自定义颜色
                            shadowBlur: 10,
                            shadowColor: '#333'
                        }
                    },
                    zlevel: 1
                },
                {//当前设备
                        name: '当前设备',
                        type: 'effectScatter',
                        coordinateSystem: 'geo',
                        data:[{
                            name: '点位1',
                            value:[118.247696,36.767272]
                        }],
                        symbolSize: 15,
                            showEffectOn: 'render',
                        rippleEffect: {
                            brushType: 'fill',
                            scale:5
                        },
                        hoverAnimation: true,
                        label: {
                            normal: {
                                formatter: '{b}',
                                position: 'right',
                                show: false
                            }
                        },
                        zlevel: 2
                    }]
            }
        },
    }
  },
  methods:{
      drawChart(id,type){
        let _this=this;
        _this.curEchart=id;
        if(_this.chartObj.chart){
            //_this.chart.clear();//清空画布
            _this.chartObj.chart.dispose();//销毁实例
        };
        if(_this.chartObj[_this.curEchart]){
            if(type=="geo"){
                let url=encodeURI("./../../static/mapdata.json");
                _this.axios.get(url)
                .then((response)=> {
                    let data = response.data;
                    echarts.registerMap('水源地区', data);
                    let option = _this.chartObj[_this.curEchart];
                    setTimeout(function(){
                        let chartObj=document.getElementById(_this.curEchart);
                        _this.chartObj.chart = echarts.init(chartObj); // 基于准备好的dom，初始化echarts实例
                        // _this.chartObj.chart.showLoading();
                        _this.chartObj.chart.setOption(option);
                        _this.chartObj.chart.hideLoading();  //提示关闭
                    },20);
                },(response) =>{
                   console.log("获取失败！");
                })
            }else{
                let option = _this.chartObj[_this.curEchart];
                setTimeout(function(){
                    let chartObj=document.getElementById(_this.curEchart);
                    _this.chartObj.chart = echarts.init(chartObj); // 基于准备好的dom，初始化echarts实例
                    // _this.chartObj.chart.showLoading();
                    _this.chartObj.chart.setOption(option);
                    _this.chartObj.chart.hideLoading();  //提示关闭
                },20);
            }
            
        }
      }
  }
}
</script>
<style lang="stylus">
@import '../../static/base.styl';

.echartFn-container
    width 100%
    height 100vh
    position relative
    overflow hidden
    font-family "Source Sans Pro", "Helvetica Neue", Arial, sans-serif
    .container-left
        width 300px
        height 100%
        padding 10px
        padding-left 20px
        background-color #F1F3F4
        font-size 14px
        .tree-content
            li
                &:hover
                    cursor pointer
                    color #46AEFF
    .container-right
        position absolute
        left 310px
        right 0
        bottom 0
        top 0
    .echart-content
        width 100%
        height 100%
</style>
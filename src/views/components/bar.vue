<template>
  <div class="container">
    <div id="myChartBar" :style="{width: '940px', height: '400px'}"></div>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data() {
      return {
        

      }
    },
    props:['barDataObj'],
    mounted(){
      this.drawLine(this.barDataObj.barData,this.barDataObj.xAxisData,this.barDataObj.yAxisName);
    },
    methods: {
        drawLine(barData,xAxisData,yAxisName){
          // 基于准备好的dom，初始化echarts实例
          let myChart = this.$echarts.init(document.getElementById('myChartBar'))
          // 绘制图表
          myChart.setOption({
             tooltip : {
            trigger: 'axis',
            axisPointer:{  //删除中轴线
                type:'none'
            },
            padding:8,
            backgroundColor:'rgba(255,255,255,0.9)',
            borderColor:'#b0f2f9',
            borderWidth:1,
            borderRadius:1,
            shadowColor:'rgba(0,0,0,0.9)',
            textStyle:{
                color:'#555',
                fontFamily:'微软雅黑',
                fontSize:'12'
            }
         },
        calculable : true,
        xAxis : [
            {
              type : 'category',
              data : xAxisData,
              axisLabel: {
                            show: true,
                            textStyle: {
                                color: '#666',
                                fontFamily:'微软雅黑',
                                align:'center'
                            },
                            // formatter:function(value)  
                            //     {  
                            //         return value.split("").join("\n");  
                            //     } 
                        },
                        axisLine:{
                          show:true,
                          lineStyle:{
                              color: '#999',
                              width: 1,
                              type: 'solid'
                          }
                        },
                        axisTick:{
                          show:false
                        },
                        splitLine:{   //去网格线
                          show:false
                        }
            }
        ],
            yAxis : [
                  {
                      name:yAxisName,
                      position:'left',
                      nameLocation:'middle',
                      nameGap:40,
                      nameRotate:90,
                      nameTextStyle:{
                        color:"#666",
                        fontFamily:'微软雅黑'
                      },
                      type : 'value',
                      axisLabel: {
                          show: true,
                         textStyle: {
                              color: '#666',
                              fontFamily:'微软雅黑'
                          }
                      },
                      axisLine:{
                        show:false
                      },
                      axisTick:{
                        show:false
                      },
                      // splitLine:{   
                      //           lineStyle:{  //网格线样式
                      //           color: '#f6f7fa',
                      //           width: 1,
                      //           type: 'solid'
                      //         }
                      //                   　　}
                  }
              ],
            series : [
                {
                    name:'人数（千人）',
                    type:'bar',
                    barWidth:"30",//柱图宽度
                    data:barData,
                    // itemStyle: {
                    //               normal: {
                    //                 color: color
                    //               },
                    //             emphasis:{
                    //                 color:'#56e3f2'
                    //             }
                    //           },
                }
              ]
          });
      }
    },
    created() {
    },
    destroyed() {
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss">

</style>


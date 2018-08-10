<template>
  <div class="container">
    <div id="myChart" :style="{width: '940px', height: '700px'}"></div>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data() {
      return {
        

      }
    },
    props:['dataObj'],
    mounted(){
      this.drawLine(this.dataObj.dataSeries,this.dataObj.radius,false);
    },
    methods: {
        drawLine(pie_data,data_radius,rose){
          // 基于准备好的dom，初始化echarts实例
          let myChart = this.$echarts.init(document.getElementById('myChart'))
          // 绘制图表
          myChart.setOption({
             tooltip: {
              trigger: 'item',
              formatter: "{a} <br/>{b}: {c} ({d}%)",
              backgroundColor:"rgba(255,255,255,0.9)",
              padding:8,
              minAngle:10,
              textStyle :{
                  color :"#666",
                  fontSize:"10px",
              },
              extraCssText :'box-shadow:0 2px 4px 0 rgba(0,0,0,0.10);',
              extraCssText :'text-align:left;'
          },

          series: [
              {
                  name:'人数（千人）',
                  type:'pie',
                  selectedMode: 'single',
                  selectedOffset :0,
                  radius: data_radius,
                  startAngle:0,
                  // "itemStyle":{
                  //     "normal":{
                  //         "borderWidth":3,
                  //         "borderColor":"#fff",
                  //     }
                  // },
                  data:pie_data,
                  roseType:rose,
                  label: {
                      normal: {
                          formatter:"{b}",
                          position:"outside",
                          textStyle: {
                              color: 'rgba(0, 0, 0, 1)'
                          }
                      },
                  },
                  labelLine: {
                      normal: {
                          smooth: 0.2,
                          length: 10,
                          length2: 15
                      }
                  },
              }
          ],
        //   color:data_color
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


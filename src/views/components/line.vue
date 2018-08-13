<template>
  <div class="container">
    <div id="myChart" :style="{width: '300px', height: '300px'}"></div>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data() {
      return {


      }
    },
    mounted(){
      this.drawLine();
    },
    methods: {
        drawLine(){
          // 基于准备好的dom，初始化echarts实例
          let myChart = this.$echarts.init(document.getElementById('myChart'))
          // 绘制图表
          myChart.setOption({
              title: { text: '在Vue中使用echarts' },
              tooltip: {},
              xAxis: {
                  data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
              },
              yAxis: {},
              series: [{
                  name: '销量',
                  type: 'bar',
                  data: [5, 20, 36, 10, 10, 20]
              }]
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
.container{
   h2{
    font-size: 36px;
    color:#000;
    text-align: center;
    line-height: 1;
    margin-top: 65px;
    margin-bottom: 45px;
  }
  .tips{
    font-size: 16px;
    color:#5b5b5b;
    text-align: center;
    line-height: 30px;
  }
  .ico{
    position: relative;
    .el-icon-arrow-down{
      font-size: 24px;
      font-weight: bold;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      margin-top: 50px;
    }
    .el-icon-arrow-down:before{
      color:#21a4ff;
    }
  }
  .el-row{
    width:1106px;
    margin:120px auto 0;
  }

}
.block{
  width:300px;
  height:456px;
  background: #fff;
  h3{
    font-size:28px;
    line-height: 1;
    color:#1c1c1c;
    margin-top:40px;
    margin-bottom:35px;
    padding-left:20px;
    border-left:17px solid #21a4ff;
  }
  p{
    padding:0 35px;
    font-size: 14px;
    color:#666;
    line-height: 24px;
  }
}
</style>


<template>
  <div class="container_con">
    <h2>大数据分析中心</h2>
    <p class="tips">平台提供了重点信息的仪表台展示；提供了按癌肿、死亡、发病、性别、年龄、地区、时间等的多维度数据筛查与检索；</p>
    <p class="tips">提供了报表数据深钻到人的数据挖掘。</p>
    <p class='ico'><i class="el-icon-arrow-down"></i></p>
    
  <el-row>
  <el-col :span="8">
    <div class="grid-content bg-purple">
      <div class="block">
        <img src="../../assets/img/img1.jpg" alt="">
        <h3>癌症监测</h3>
        <p>实时监测全国肿瘤癌症发病与死亡情况。支持全国各地、各癌种按时间维度检索趋势变化。支持多维度筛查与可视化报表。</p>
      </div>
    </div>
  </el-col>
    <el-col :span="8">
    <div class="grid-content bg-purple">
        <div class="block" style="margin:0 auto;">
          <img src="../../assets/img/img2.jpg" alt="">
          <h3>早诊早治</h3>
          <div class='center'>
            <router-link :to="{path:'/dataCenter/detail',query:{flag:'1'}}">
              <p><i></i>城市癌症早诊早治项目</p>
            </router-link>
            <router-link :to="{path:'/dataCenter/detail',query:{flag:'2'}}">
              <p><i></i>淮河癌症早诊早治项目</p>
            </router-link>
            <router-link :to="{path:'/dataCenter/detail',query:{flag:'3'}}">
             <p><i></i>其他癌症早诊早治项目</p>
            </router-link>
          </div>
        </div>
      
    </div>
  </el-col>
    <el-col :span="8">
    <div class="grid-content bg-purple">
      <div class="block fr">
        <img src="../../assets/img/img3.jpg" alt="">
        <h3>科研项目</h3>
        <p>实时查看科研项目开展之后的进展状态与结果报告。支持癌种与各因素的多维度筛选，并生成各种可视化报表。</p>
      </div>
    </div>
  </el-col>
</el-row>

  </div>
</template>

<script>
  export default {
    name: 'login',
    data() {
      return {
        

      }
    },
    methods: {
    
    },
    created() {
    },
    destroyed() {
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scope>
.container_con{
  padding-bottom: 30px;
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
.center {
  padding:0 35px;
}
.center p{
  margin-bottom: 15px;
  position: relative;
  padding-left: 15px;
  i{
    position: absolute;
    width: 5px;
    height: 5px;
    background:#21a4ff;
    border-radius:50%;
    top: 50%;
    left:0;
    transform: translateY(-50%);
  }
}
</style>


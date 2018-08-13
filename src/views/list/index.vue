<template>
  <div class="container_con">
    <h5>国家癌症防控信息平台数据分析中心</h5>
    <p class="tips">国家癌症防控信息平台数据分析中心（DAC）,是一个基于中国癌症数据进行统计分析的平台。</p>
    <p class="tips">平台提供了重点信息的仪表台展示：提供了按癌种、死亡、发病、性别、年龄、地区、</p>
    <p class="tips">时间等的多维度数据筛查与检查：提供了报表数据深钻到人的数据挖掘。</p>
    <el-row :gutter="50">
      <el-col :span="12">
        <div class="grid-content bg-purple">
          <div class="block">
            <el-col :span="12">
              <img src="../../assets/img/item1.png" alt="">
            </el-col>
            <el-col :span="12">
              <div>
                <div class="h4">早诊早治</div>
                <p>实时监测早诊早治项目数据，以及问卷人群的癌症的风险情况。</p>
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
            </el-col>
          </div>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple">
          <div class="block" style="margin:0 auto;">
            <el-col :span="12">
              <img src="../../assets/img/item4.jpg" alt="">
            </el-col>
            <el-col :span="12">
              <div class="h4">癌症监测</div>
              <p>实时收集、监测全国肿瘤癌症发病与死亡情况。</p>
              <div class='center'>
                <p><i></i>癌症发病上报入口</p>
                <p><i></i>癌症死亡上报入口</p>
                <p><i></i>癌症监测数据查看</p>
              </div>
            </el-col>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="50">
      <el-col :span="12">
        <div class="grid-content bg-purple">
          <div class="block fr">
            <el-col :span="12">
              <img src="../../assets/img/item3.jpg" alt="">
            </el-col>
            <el-col :span="12">
              <div class="h4">科研项目</div>
              <p>开展科研，实时查看科研项目的进展状态与数据状况。</p>
              <div class='center'>
                <p><i></i>科研项目申请</p>
                <p><i></i>我的科研项目</p>
              </div>
            </el-col>
          </div>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple">
          <div class="block fr">
            <el-col :span="12">
              <img src="../../assets/img/item2.jpg" alt="">
            </el-col>
            <el-col :span="12">
              <div class="h4">生物样本</div>
              <p>可以实时查看中心收集的生物样本库存储情况。以及各地生物样本收集已上报情况</p>
              <div class='center'>
                <p><i></i>中心样本查询</p>
                <p><i></i>各地样本查询</p>
              </div>
            </el-col>
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
      return {}
    },
    methods: {},
    created() {
    },
    destroyed() {
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scope>
  .container_con {
    width: 1200px;
    margin: 0 auto;
    h5 {
      font-size: 24px;
      color: #000;
      text-align: center;
      line-height: 1;
      margin-top: 65px;
      padding-bottom: 20px;
      /*margin-bottom: 45px;*/
    }
    .tips {
      font-size: 16px;
      color: #5b5b5b;
      text-align: center;
      line-height: 30px;
    }
    .ico {
      position: relative;
      .el-icon-arrow-down {
        font-size: 24px;
        font-weight: bold;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        margin-top: 50px;
      }
      .el-icon-arrow-down:before {
        color: #21a4ff;
      }
    }
    .el-row {
      margin: 40px auto;
      /*margin:120px auto 0;*/
    }

  }

  .block {
    height: 230px;
    background: #fff;
    border-radius: 8px;
    .el-col {
      padding-left: 0px !important;
    }
    img {
      height: 230px;
      border-radius: 8px;
      width: 280px;
    }

    .h4 {
      font-size: 24px;
      line-height: 1;
      color: #1c1c1c;
      margin-top: 20px;
      margin-bottom: 25px;
      padding-left: 45px;
    }
    p {
      padding-left: 45px;
      font-size: 14px;
      color: #666;
      line-height: 24px;
    }
  }

  .center {
    padding-left: 45px;
    margin-top: 25px;
  }

  .center p {
    margin-bottom: 3px;
    position: relative;
    padding-left: 15px;
    i {
      position: absolute;
      width: 8px;
      height: 8px;
      background: #153451;
      border-radius: 50%;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
    }
  }
</style>


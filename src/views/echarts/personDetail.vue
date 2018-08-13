<template>
  <div class="container_con">
     <div class="top">
       <div >
         <span class="title">基本信息</span>
       </div>
       <div class="info">
         <ul>
           <li>
             姓名: 张三丰
           </li>
           <li>
             性别: 男
           </li>
           <li>
             出生日期: 1966年6月 10日（52岁）
           </li>
           <li>
             地区: 北京
           </li>
           <li>
             手机号: 138*****223
           </li>
         </ul>
       </div>
       <div >
         <span class="title"> 项目参与情况：</span>
         <span style="margin-left: 80px;">参与项目: 城市癌症早诊早治项目</span>
         <span style="margin-left: 80px;">总体状况: 疑似肺癌</span>
       </div>
       <table class="table">
         <tr>
           <td></td>
           <td>肺</td>
           <td>乳腺</td>
           <td>上消化道</td>
           <td>肝</td>
           <td>结直肠</td>
         </tr>
         <tr>
           <td>高危评估</td>
           <td>高危</td>
           <td>非高危</td>
           <td>高危</td>
           <td>非高危</td>
           <td>非高危</td>
         </tr>
         <tr>
           <td>癌症筛查</td>
           <td>已完成</td>
           <td>--</td>
           <td>待筛查</td>
           <td>--</td>
           <td>--</td>
         </tr>
         <tr>
           <td>是否会诊</td>
           <td>是</td>
           <td>否</td>
           <td>--</td>
           <td>--</td>
           <td>--</td>
         </tr>
         <tr>
           <td>生物样本</td>
           <td>已入库</td>
           <td>--</td>
           <td>--</td>
           <td>--</td>
           <td>--</td>
         </tr>
         <tr>
           <td>随访情况</td>
           <td>完成1次</td>
           <td>--</td>
           <td>--</td>
           <td>--</td>
           <td>--</td>
         </tr>
       </table>
     </div>
    <div style="border: 1px solid #cad0d9;margin-top: 20px;background: #fff;">
      <div  style="border-bottom: 1px solid #cad0d9;background: #fff;padding-left: 20px;height: 40px;line-height: 40px;font-weight: 600; color: #555;" >
        <span>故事线</span>
      </div>
      <div style="margin: 20px;">
        <div style="margin-bottom: 10px;border: 1px solid #cad0d9;border-radius:4px;">
          <el-collapse v-model="activeNames" @change="handleChange" >
            <el-collapse-item title="2018.03.01 14:10:30" name="1">
              <div class="border">参与肺、乳腺、上消化道、肝、结直肠高危筛查</div>
              <div class="border">结果为：肺、上消化道高危</div>
              <div class="border">具体作答问卷（查看）</div>
            </el-collapse-item>
          </el-collapse>
        </div>
        <div style="margin-bottom: 10px;border: 1px solid #cad0d9;border-radius:4px;">
          <el-collapse v-model="activeNames" @change="handleChange" >
            <el-collapse-item title="2018.03.01 14:10:30" name="1">
              <div class="border">参与肺、乳腺、上消化道、肝、结直肠高危筛查</div>
              <div class="border">结果为：肺、上消化道高危</div>
              <div class="border">具体作答问卷（查看）</div>
            </el-collapse-item>
          </el-collapse>
        </div>
        <div style="margin-bottom: 10px;border: 1px solid #cad0d9;border-radius:4px;">
          <el-collapse v-model="activeNames" @change="handleChange" >
            <el-collapse-item title="2018.03.01 14:10:30" name="1">
              <div class="border">参与肺、乳腺、上消化道、肝、结直肠高危筛查</div>
              <div class="border">结果为：肺、上消化道高危</div>
              <div class="border">具体作答问卷（查看）</div>
            </el-collapse-item>
          </el-collapse>
        </div>
        <div style="margin-bottom: 10px;border: 1px solid #cad0d9;border-radius:4px;">
          <el-collapse v-model="activeNames" @change="handleChange" >
            <el-collapse-item title="2018.03.01 14:10:30" name="1">
              <div class="border">参与肺、乳腺、上消化道、肝、结直肠高危筛查</div>
              <div class="border">结果为：肺、上消化道高危</div>
              <div class="border">具体作答问卷（查看）</div>
            </el-collapse-item>
          </el-collapse>
        </div>
        <div style="margin-bottom: 10px;border: 1px solid #cad0d9;border-radius:4px;">
          <el-collapse v-model="activeNames" @change="handleChange" >
            <el-collapse-item title="2018.03.01 14:10:30" name="1">
              <div class="border">参与肺、乳腺、上消化道、肝、结直肠高危筛查</div>
              <div class="border">结果为：肺、上消化道高危</div>
              <div class="border">具体作答问卷（查看）</div>
            </el-collapse-item>
          </el-collapse>
        </div>
      </div>
    </div>
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
  .border{
    border-top:1px solid #cad0d9;
    height: 40px;
    line-height: 40px;
    color: #999;
    padding-left: 20px;
  }
  .el-collapse-item__content{
    padding-bottom:0px;
  }
  .title{
    line-height: 40px;
    display: inline-block;
    height:40px;
    font-weight:600;
  }
  .el-collapse-item__header{
    padding-left: 20px;
    font-weight: 600;
  }
  .container_con {
    width: 1200px;
    margin: 0 auto;
    padding-bottom: 20px;

    .top{
      background: #fff;
      border:1px solid #cad0d9;
      color: #555;
      margin-top:20px;
      padding:0 15px 15px 15px;
      .title{
        line-height: 40px;
        display: inline-block;
        height:40px;
        font-weight:600;
      }
      .table{
        tr{
          td{
            border:1px solid #cad0d9;
            padding: 15px 69px;
            text-align: center;
          }
        }
      }
      .info{
        ul{
          list-style:none;
          width:100%;
          display: flex;
          justify-content: space-between;
          border-top:1px solid #cad0d9;
          padding: 0 20px;
          height:56px;
          line-height:56px;
          border-bottom:1px solid #cad0d9;
          li{
            float: left;
            display: flex;

          }
        }
      }
    }
  }
</style>


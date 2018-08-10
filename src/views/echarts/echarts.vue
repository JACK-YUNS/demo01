<template>
  <div class="container">
    <div class="tabBars">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="早诊早治首页" name="first">
          <div class="containerCon">
            <h2 class="tit">{{title}}</h2>
            <p class="goto"><a href='http://datav.aliyun.com/share/2261d8d84ef2116263c12d6005408c14' target="_blank">进入仪表台 ></a></p>
            <ul class="uls clearfix">
              <li>
                <h3>全国参与问卷总人数</h3>
                <p>1,931,098</p>
              </li>
              <li>
                <h3>全国高危总人数</h3>
                <p>392,135</p>
              </li>
              <li>
                <h3>全国实际筛查总人数</h3>
                <p>133,369</p>
              </li>
              <li>
                <h3>全国随访总人数</h3>
                <p>2,174</p>
              </li>
              <li>
                <h3>全国确诊总人数</h3>
                <p>130</p>
              </li>
            </ul>
            <ul class="uls uls1 clearfix">
              <li>
                <h3>全国昨日参与问卷人数</h3>
                <p>500</p>
              </li>
              <li>
                <h3>全国昨日高危人数</h3>
                <p>260</p>
              </li>
              <li>
                <h3>全国昨日实际筛查人数</h3>
                <p>101</p>
              </li>
              <li>
                <h3>全国昨日随访人数</h3>
                <p>10</p>
              </li>
              <li>
                <h3>全国昨日确诊人数</h3>
                <p>6</p>
              </li>
            </ul>
          </div>
        </el-tab-pane>
        <el-tab-pane label="数据检索" name="second">
          <div class="containerCon">
              <div class="clearfix">
                <div class="left fl">
                  <div class="titBlock">
                    <div class="title">数据展示</div>
                    <el-form ref="form" :model="form" label-width="100px">
                      <el-form-item label="数据维度">
                        <el-select v-model="form.region" placeholder="请选择">
                          <el-option label="按状态" value="1"></el-option>
                          <el-option label="按性别" value="2"></el-option>
                          <el-option label="按年龄" value="3"></el-option>
                          <el-option label="按癌种" value="4"></el-option>
                          <el-option label="按地区" value="5"></el-option>
                          <el-option label="按民族" value="6"></el-option>
                          <el-option label="按参与年" value="7"></el-option>
                        </el-select>
                      </el-form-item>
                      <el-form-item label="展示数量">
                        <el-select v-model="form.number" placeholder="请选择">
                          <el-option label="前5" value="1"></el-option>
                          <el-option label="前10" value="2"></el-option>
                          <el-option label="前15" value="3"></el-option>
                          <el-option label="前20" value="4"></el-option>
                          <el-option label="前25" value="5"></el-option>
                        </el-select>
                      </el-form-item>
                       <el-form-item label="数据精度">
                        <el-select v-model="form.num" placeholder="请选择">
                          <el-option label="1" value="1"></el-option>
                          <el-option label="0.1" value="0.1"></el-option>
                          <el-option label="0.01" value="0.01"></el-option>
                          <el-option label="0.001" value="0.001"></el-option>
                          <el-option label="0.0001" value="0.0001"></el-option>
                        </el-select>
                      </el-form-item>
                    </el-form>
                    <!--  -->
                    <div class="title" style="border-top:1px solid #cad0d9;margin-top:26px">数据源</div>
                    <el-collapse v-model="activeName1" accordion>
                      <el-collapse-item title="状态" name="1">
                         <el-checkbox v-model="checkAll1" @change="handleCheckAllChange" class='checkall'>全部</el-checkbox>
                          <div style="margin: 15px 0;"></div>
                          <el-checkbox-group v-model="checkedStatus" @change="handleCheckedCitiesChange">
                            <el-checkbox v-for="item in status" :label="item" :key="item">{{item}}</el-checkbox>
                          </el-checkbox-group>
                      </el-collapse-item>
                      <!-- <div>
                        <div class='sexBox'>性别</div>
                        <el-checkbox label="1" key="1">男</el-checkbox>
                        <el-checkbox label="2" key="2">女</el-checkbox>
                      </div> -->
                      <el-collapse-item title="性别" name="3" class='sexBox'>
                       <el-checkbox label="1" key="1">男</el-checkbox>
                       <el-checkbox label="2" key="2">女</el-checkbox>
                      </el-collapse-item>
                      <el-collapse-item title="年龄" name="4">
                        <el-checkbox v-model="checkAll2" @change="handleCheckAllChange2"  class='checkall'>全部</el-checkbox>
                          <div style="margin: 15px 0;"></div>
                          <el-checkbox-group v-model="checkedAges" @change="handleCheckedCitiesChange2">
                            <el-checkbox v-for="item in ages" :label="item" :key="item">{{item}}</el-checkbox>
                          </el-checkbox-group>
                      </el-collapse-item>
                      <el-collapse-item title="癌种" name="5">
                        <el-checkbox v-model="checkAll3" @change="handleCheckAllChange3" class='checkall'>全部</el-checkbox>
                          <div style="margin: 15px 0;"></div>
                          <el-checkbox-group v-model="checkedClasses" @change="handleCheckedCitiesChange3">
                            <el-checkbox v-for="item in classes" :label="item" :key="item">{{item}}</el-checkbox>
                          </el-checkbox-group>
                      </el-collapse-item>
                      <el-collapse-item title="地区" name="6">
                        <el-checkbox v-model="checkAll4" @change="handleCheckAllChange4" class='checkall'>全部</el-checkbox>
                          <div style="margin: 15px 0;"></div>
                          <el-checkbox-group v-model="checkedAreas" @change="handleCheckedCitiesChange4">
                            <el-checkbox v-for="item in areas" :label="item" :key="item">{{item}}</el-checkbox>
                          </el-checkbox-group>
                          <el-select v-model="form.nation" placeholder="请选择城市" style='margin-left:30px;'>
                            <el-option label="北京市" value="1"></el-option>
                            <el-option label="黑龙江省" value="2"></el-option>
                            <el-option label="辽宁省" value="3"></el-option>
                            <el-option label="河北省" value="4"></el-option>
                            <el-option label="山东省" value="5"></el-option>
                          </el-select>
                      </el-collapse-item>
                       <el-form ref="form" :model="form" label-width="80px">
                      <el-form-item label="民族">
                        <el-select v-model="form.nation" placeholder="请选择">
                          <el-option label="少数民族" value="1"></el-option>
                          <el-option label="汉族" value="2"></el-option>
                          <el-option label="壮族" value="3"></el-option>
                          <el-option label="藏族" value="4"></el-option>
                          <el-option label="满族" value="5"></el-option>
                        </el-select>
                      </el-form-item>
                       <el-collapse-item title="参与年" name="7">
                        <el-checkbox v-model="checkAll5" @change="handleCheckAllChange5" class='checkall'>全部</el-checkbox>
                          <div style="margin: 15px 0;"></div>
                          <el-checkbox-group v-model="checkedYears" @change="handleCheckedCitiesChange5">
                            <el-checkbox v-for="item in years" :label="item" :key="item">{{item}}</el-checkbox>
                          </el-checkbox-group>
                      </el-collapse-item>
                    </el-form>
                    </el-collapse>
                  </div>
                </div>
                <div class="right fl">
                  <el-tabs v-model="activeName2" type="card" >
                    <el-tab-pane label="饼图" name="first">
                      <pie :dataObj='dataObj'></pie>
                      
                    </el-tab-pane>
                    <el-tab-pane label="柱状图" name="second">
                      <bar :barDataObj='barDataObj'></bar>
                    </el-tab-pane>
                    <el-tab-pane label="地图" name="third">
                      <div id="map" style="width:940px;height:560px;"></div>
                    </el-tab-pane>
                    <el-tab-pane label="表格" name="fourth">
                      <el-table
                        :data="tableData"
                        style="width: 100%;margin-top:30px;margin-left:30px;">
                        <el-table-column
                          prop="name"
                          label="省份">
                        </el-table-column>
                        <el-table-column
                          prop="value"
                          label="人数（千人）">
                        </el-table-column>
                      </el-table>
                      
                    </el-tab-pane>
                  </el-tabs>
                  <p style="text-align:right;margin-top:30px;">
                        <el-button type="primary"  @click="dialogVisible = true">下载</el-button>
                      </p>
                </div>
              </div>
              <!-- <pie :dataObj='dataObj'></pie>
              <bar :barDataObj='barDataObj'></bar> -->
            </div>
        </el-tab-pane>
        <el-tab-pane label="高危因素分布" name="third">
          <div class='containerCon'>
            <p class="goto" style="margin:20px 0;"><a href='http://datav.aliyun.com/share/f063324f87a8479d7eab77e1993e43b4' target="_blank">全屏</a></p>
            <iframe src="http://datav.aliyun.com/share/f063324f87a8479d7eab77e1993e43b4" frameborder="0" width="100%" height="1080px"></iframe>
          </div>
        </el-tab-pane>
        <el-tab-pane label='数据来源与方法说明' name="fourth" disabled>数据来源与方法说明</el-tab-pane>
      </el-tabs>
    </div>

  <el-dialog
  title="请填写项目申请"
  :visible.sync="dialogVisible"
  width="30%"
  :before-close="handleClose">
  <span><el-input v-model="name" type="textarea"></el-input></span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="submit">确 定</el-button>
  </span>
</el-dialog>
   
  </div>
</template>

<script>
import pie from '../components/pie'
import bar from '../components/bar'
import option from '../components/china.js'
import 'echarts/map/js/china.js';

const status=['参与', '高危', '疑似', '确诊', '死亡', '随访'];
const age=['<50;50+', '<65;65+', '<20', '20-49', '50-64', '65-74', '75+'];
const classes=['肺癌', '结直肠癌', '肝癌', '食管癌', '乳腺癌', '胃癌'];
const areas=['城市','农村','淮河','沿海','内陆']
const years=['2018', '2016'];
  export default {
    name: 'login',
    data() {
      return {
        activeName: 'first',
        activeName1: '1',
        activeName2:'first',
        dialogVisible: false,
        title:'项目实时进度',
        name:'',
        dataObj:{
          radius:[0,"60%"],
          dataSeries:[
              {value:528, name:'黑龙江省'},
              {value:359, name:'辽宁省'},
              {value:350, name:'北京市'},
              {value:668, name:'河北省'},
              {value:427, name:'山东省'},
              {value:388, name:'江苏省'},
              {value:284, name:'安徽省'},
              {value:280, name:'浙江省'},
              {value:650, name:'云南省'},
              {value:356, name:'重庆市'},
            ],
          // color:['#90e6fb','#ff94b1']
        },
        barDataObj:{
          barData:[528, 359, 350, 668, 427, 388, 284, 280, 650, 356],
          color:'#b0f2f9',
          xAxisData:['黑龙江省','辽宁省','北京市','河北省','山东省','江苏省','安徽省','浙江省','云南省','重庆市'],
          yAxisName:'单位（千人）'
        },
        form:{
          region:'',
          number:'',
          num:'',
          nation:''
        },
        // 状态
        checkAll1: false,
        checkedStatus: [],
        status: status,
        // 年龄
         // 状态
        checkAll2: false,
        checkedAges: [],
        ages: age,
        // 癌种
        checkAll3: false,
        checkedClasses: [],
        classes: classes,
         // 地区
        checkAll4: false,
        checkedAreas: [],
        areas: areas,
        // 参与年
        checkAll5: false,
        checkedYears: [],
        years: years,
        tableData: [{value:528, name:'黑龙江省'},
              {value:359, name:'辽宁省'},
              {value:350, name:'北京市'},
              {value:668, name:'河北省'},
              {value:427, name:'山东省'},
              {value:388, name:'江苏省'},
              {value:284, name:'安徽省'},
              {value:280, name:'浙江省'},
              {value:650, name:'云南省'},
              {value:356, name:'重庆市'},
              {value:4290, name:'全国'}]
      }
    },
    components:{
      pie,
      bar
    },
    mounted(){
      this.drawChinaMap();
      if(this.$route.query.flag=='1'){
          this.title="城市癌症项目实时进度"
      }else if(this.$route.query.flag=='2'){
          this.title="淮河癌症项目实时进度"
      }else if(this.$route.query.flag=='3'){
          this.title="其他癌症项目实时进度"
      }
    },
    methods: {
       handleClose(done) {
        done();
      },
      submit(){
        this.dialogVisible = false;
        this.$message({
          message: '提交成功，请等待审核！',
          type: 'success'
        })
      },
       handleCheckAllChange(val) {
        this.checkedStatus = val ? status : [];
      },
      handleCheckedCitiesChange(value) {
        let checkedCount = value.length;
        this.checkAll1 = checkedCount === this.status.length;
      },
        handleCheckAllChange2(val) {
        this.checkedAges = val ? ages : [];
      },
      handleCheckedCitiesChange2(value) {
        let checkedCount = value.length;
        this.checkAll2 = checkedCount === this.ages.length;
      },
        handleCheckAllChange3(val) {
        this.checkedClasses = val ? classes : [];
      },
      handleCheckedCitiesChange3(value) {
        let checkedCount = value.length;
        this.checkAll3 = checkedCount === this.classes.length;
      },
         handleCheckAllChange4(val) {
        this.checkedAreas = val ? areas : [];
      },
      handleCheckedCitiesChange4(value) {
        let checkedCount = value.length;
        this.checkAll4 = checkedCount === this.areas.length;
      },
         handleCheckAllChange5(val) {
        this.checkedYears = val ? years : [];
      },
      handleCheckedCitiesChange5(value) {
        let checkedCount = value.length;
        this.checkAll5 = checkedCount === this.years.length;
      },
      handleClick(tab, event) {
        if(tab.index=='2'){
        //  window.open('http://datav.aliyun.com/share/f063324f87a8479d7eab77e1993e43b4');
        }
      },
      drawChinaMap() {
            var myChart = this.$echarts.init(document.getElementById('map'));
            myChart.setOption(option);
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
   .tabBars{
     width: 100%;
     height: 70px;
     border-bottom:1px solid #d8dde3;
     background: #fff;
     .el-tabs__header{
       margin-bottom: 0;  
       width: 560px;
       margin:0 auto;
       height: 70px;
     }
     .el-tabs__item {
       font-size: 16px;
       color:#333;
       height: 70px;
       line-height: 70px;
     }
     .is-disabled{
       color:#999;
     }
     .is-active{
       font-weight: bold;
       font-size: 18px;
     }
     .el-tabs__active-bar{
       background:#2b93eb;
       height: 6px;
       border-radius:50px;
     }
   }
}
.containerCon{
  width:1260px;
  margin:0 auto;
  padding-bottom:30px;
  .left{
     width: 320px;
     height: 900px;
     background: #e5e9f0; 
     .title{
       height:54px;
       border-bottom:1px solid #cad0d9;
       text-align: center;
       font-size: 20px;
       line-height: 54px;
     }
     .el-form-item{
       margin:13px 0 0;
       padding-left: 15px;
     }
     .el-form-item__label{
       font-size: 18px;
       line-height: 44px;
     }
     .el-input__inner{
       width: 190px;
       height: 44px;
       background: #f5f5f5;
       border: 0;
     }
     .el-collapse-item__header, .el-collapse-item__wrap{
       background:none;
     }
     .el-collapse-item__header{
       border-bottom:1px solid #cad0d9;
      padding-left: 23px;
      font-size: 16px;
     }
     .el-checkbox__inner{
       background:#c4cbd5;
     }
     .el-checkbox__label{
       font-size: 16px;
       color: #000;
     }
     .el-checkbox{
       width: 38%;
       margin-left: 30px;
     }
     .el-checkbox__input.is-checked  .el-checkbox__inner{
       background: #2b93eb;
     }
     .checkall{
       width: 100%;
       margin-top: 20px;
       border-bottom: 1px solid #b1b6bd;
       padding-bottom:5px;
     }
     .el-checkbox-group .el-checkbox{
       margin-bottom: 10px;
       border-bottom: none;
     }
     .sexBox .el-collapse-item__content{
       margin-top:15px;
       border-bottom:0;
     }
  }
  .el-checkbox-group{
    height: auto;
  }
  .right{
    width: 940px;
    .el-tabs--card>.el-tabs__header{
      border-bottom:none;
    }
    .el-tabs--card>.el-tabs__header .el-tabs__nav{
      border: none;
    }
    .el-tabs__item{
      border: none;
    }
  }
  .el-table__row{
    height: 36px;
  }
}
.container .right .tabBars .el-tabs__header{
  width: 940px;
}
.containerCon{
  .tit{
    text-align: center;
    font-size:26px;
    font-weight: bold;
    color: #333;
    margin-top: 50px;
  }
}
.uls li{
  float: left;
  list-style-type: none;
  width: 230px;
  height: 120px;
  margin: 30px 11px 0;
  background: #938AF7;
  border-radius: 2px;
  color:#fff;
  padding-left: 30px;
  padding-top: 20px;
  h3{
    font-weight: normal;
    font-size: 16px;
    margin-bottom: 15px;
  }
  p{
    font-size: 30px;
  }
}
.uls1 li{
  background: #FBAE96;
  margin-top: 50px;
}
.goto{
  text-align: right;
  cursor: pointer;
  a{
    background:#409EFF;
    color: #fff;
    padding: 10px 15px;
    border-radius:5px;
    margin-right: 11px;
  }
}
</style>
<style>
.el-form{
  margin-top:0;
}
.el-textarea__inner{
  height: 200px;
}
</style>



<template>
  <div class="container">
    <div class="tabBars">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="早诊早治概况" name="first">
          <div class="containerCon">
            <h2 class="tit">{{title}}</h2>
            <div class="group">
              <el-radio-group v-model="radio3" @change="radioChange" class="radioGroup" size="small">
                <el-radio-button label="全部"></el-radio-button>
                <el-radio-button label="城市项目"></el-radio-button>
                <el-radio-button label="淮河项目"></el-radio-button>
                <el-radio-button label="其他项目"></el-radio-button>
              </el-radio-group>
            </div>
            <div class="data">
              <span class="data-center">总体数据</span>
            </div>
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
            <div class="data">
              <span class="data-center1">昨日数据</span>
            </div>
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
            <p class="goto"><a href='http://datav.aliyun.com/share/2261d8d84ef2116263c12d6005408c14' target="_blank">进入仪表台 ></a></p>
          </div>
        </el-tab-pane>
        <el-tab-pane label="早诊早治效果评估" name="second">
          <div class="containerCon">
              <div class="clearfix">
                <div class="left fl">
                  <div class="titBlock">
                    <el-form ref="form" :model="form" >
                        <div class="title" >数据展示</div>
                      <div style="margin-top: 10px;">
                        <el-form-item >
                          <span class="form-title">数据维度</span>
                          <el-select v-model="form.region" placeholder="请选择" size="small">
                            <el-option label="按状态" value="1" ></el-option>
                            <el-option label="按性别" value="2"></el-option>
                            <el-option label="按年龄" value="3"></el-option>
                            <el-option label="按癌种" value="4"></el-option>
                            <el-option label="按地区" value="5"></el-option>
                            <el-option label="按民族" value="6"></el-option>
                            <el-option label="按参与年" value="7"></el-option>
                          </el-select>
                        </el-form-item>
                        <el-form-item >
                          <span class="form-title">展示数量</span>
                          <el-select v-model="form.number" placeholder="请选择" size="small">
                            <el-option label="前5" value="1"></el-option>
                            <el-option label="前10" value="2"></el-option>
                            <el-option label="前15" value="3"></el-option>
                            <el-option label="前20" value="4"></el-option>
                            <el-option label="前25" value="5"></el-option>
                          </el-select>
                        </el-form-item>
                        <el-form-item>
                          <span class="form-title">数据精度</span>
                          <el-select v-model="form.num" placeholder="请选择" size="small" style="display: inline-block;">
                            <el-option label="1" value="1"></el-option>
                            <el-option label="0.1" value="0.1"></el-option>
                            <el-option label="0.01" value="0.01"></el-option>
                            <el-option label="0.001" value="0.001"></el-option>
                            <el-option label="0.0001" value="0.0001"></el-option>
                          </el-select>
                        </el-form-item>

                      </div>

                      <div class="title" style="border-top:1px solid #cad0d9;margin-top:10px">数据源</div>
                      <div style="border-bottom:1px solid #cad0d9;">
                        <el-form-item >
                          <span  class="form-item-title">参与项目</span>
                          <span class="form-check-title">
                           <el-checkbox v-model="item1" @change="item1Change">全部</el-checkbox>
                          </span>
                        </el-form-item>
                      </div>
                      <div class="form-checkbox clearfix">
                        <ul>
                          <li>
                            <el-checkbox v-model="item1_0" @change="checkChange('item1_',3,'item')">城市早诊早治</el-checkbox>
                          </li>
                          <li>
                            <el-checkbox v-model="item1_1" @change="checkChange('item1_',3,'item')">淮河早诊早治</el-checkbox>
                          </li>
                          <li>
                            <el-checkbox v-model="item1_2" @change="checkChange('item1_',3,'item')">其他早诊早治</el-checkbox>
                          </li>
                        </ul>
                      </div>
                      <div style="border-bottom:1px solid #cad0d9;">
                        <el-form-item >
                          <span  class="form-item-title">受试者阶段</span>
                          <span class="form-check-title">
                           <el-checkbox v-model="item2" @change="item2Change">全部</el-checkbox>
                          </span>
                        </el-form-item>
                      </div>
                      <div class="form-checkbox clearfix">
                        <ul>
                          <li>
                            <el-checkbox v-model="item2_0">参与问卷</el-checkbox>
                          </li>
                          <li>
                            <el-checkbox v-model="item2_1">高危</el-checkbox>
                          </li>
                          <li>
                            <el-checkbox v-model="item2_2">疑似癌/癌</el-checkbox>
                          </li>
                          <li>
                            <el-checkbox v-model="item2_3">已筛查</el-checkbox>
                          </li>
                          <li>
                            <el-checkbox v-model="item2_4">疑似阳性</el-checkbox>
                          </li>
                          <li>
                            <el-checkbox v-model="item2_5">癌前病变</el-checkbox>
                          </li>
                          <li>
                            <el-checkbox v-model="item2_6">随访</el-checkbox>
                          </li>
                        </ul>
                      </div>
                      <div style="border-bottom:1px solid #cad0d9;">
                        <el-form-item >
                          <span  class="form-item-title">癌种</span>
                          <span class="form-check-title">
                           <el-checkbox v-model="item3" @change="item3Change">全部</el-checkbox>
                          </span>
                        </el-form-item>
                      </div>
                      <div class="form-checkbox clearfix">
                        <ul>
                          <li>
                            <el-checkbox v-model="item3_0">肺癌</el-checkbox>
                          </li>
                          <li>
                            <el-checkbox v-model="item3_1">结直肠癌</el-checkbox>
                          </li>
                          <li>
                            <el-checkbox v-model="item3_2">肝癌</el-checkbox>
                          </li>
                          <li>
                            <el-checkbox v-model="item3_3">食管癌</el-checkbox>
                          </li>
                          <li>
                            <el-checkbox v-model="item3_4">乳腺癌</el-checkbox>
                          </li>
                          <li>
                            <el-checkbox v-model="item3_5">胃癌</el-checkbox>
                          </li>
                        </ul>
                      </div>
                      <el-form-item style="border-bottom:1px solid #cad0d9;padding:5px 0 5px 20px;">
                        <span class="form-title">地区</span>
                        <el-select v-model="form.area" placeholder="请选择" size="small">
                          <el-option :label="item" value="1" v-for="item in areas" :value="item"></el-option>
                        </el-select>
                      </el-form-item>
                      <el-form-item style="border-bottom:1px solid #cad0d9;padding:5px 0 5px 20px;">
                        <span class="form-title" >参与年</span>
                        <el-select v-model="form.year" placeholder="请选择" size="small">
                          <el-option :label="item" value="1" v-for="item in years" :value="item"></el-option>
                        </el-select>
                      </el-form-item>
                      <el-form-item style="border-bottom:1px solid #cad0d9;padding:10px 0">
                       <el-button style="padding-left: 40px;padding-right: 40px;" @click="showMore">其他更多筛查条件 <i :class="moreState?'el-icon-arrow-up':'el-icon-arrow-down'"></i></el-button>
                      </el-form-item>
                      <el-collapse-transition>

                      <div v-if="moreState">

                        <div style="border-bottom:1px solid #cad0d9;">
                          <el-form-item >
                            <span  class="form-item-title">性别</span>
                            <span class="form-check-title">
                          </span>
                          </el-form-item>
                        </div>
                        <div class="form-checkbox clearfix">
                          <ul>
                            <li>
                              <el-checkbox v-model="sex">男</el-checkbox>
                            </li>
                            <li>
                              <el-checkbox v-model="sex1">女</el-checkbox>
                            </li>
                          </ul>
                        </div>
                        <div style="border-bottom:1px solid #cad0d9;">
                          <el-form-item >
                            <span  class="form-item-title">年龄</span>
                            <span class="form-check-title">
                             <el-checkbox v-model="item4" @change="item4Change">全部</el-checkbox>
                          </span>
                          </el-form-item>
                        </div>
                        <div class="form-checkbox clearfix">
                          <ul>
                            <li>
                              <el-checkbox v-model="item4_0"><50:50+</el-checkbox>
                            </li>
                            <li>
                              <el-checkbox v-model="item4_1"><60:65+</el-checkbox>
                            </li>
                            <li>
                              <el-checkbox v-model="item4_2"><20</el-checkbox>
                            </li>
                            <li>
                              <el-checkbox v-model="item4_3">20-49</el-checkbox>
                            </li>
                            <li>
                              <el-checkbox v-model="item4_4">50-64</el-checkbox>
                            </li>
                            <li>
                              <el-checkbox v-model="item4_5">65-74</el-checkbox>
                            </li>
                            <li>
                              <el-checkbox v-model="item4_6">75+</el-checkbox>
                            </li>
                          </ul>
                        </div>
                        <div style="border-bottom:1px solid #cad0d9;">
                          <el-form-item style="border-bottom:1px solid #cad0d9;padding:5px 0 5px 20px;">
                            <span class="form-title" >民族</span>
                            <el-select v-model="form.volk" placeholder="请选择" size="small">
                              <el-option label="少数民族" value="1"></el-option>
                              <el-option label="汉族" value="2"></el-option>
                              <el-option label="壮族" value="3"></el-option>
                              <el-option label="藏族" value="4"></el-option>
                              <el-option label="满族" value="5"></el-option>
                            </el-select>
                          </el-form-item>
                        </div>
                      </div>
                      </el-collapse-transition>
                    </el-form>
                  </div>
                </div>
                <div class="right fl">
                  <p class="title-nav">您所在的位置：首页》早诊早治概况》早诊早治概况筛查</p>
                  <div style="text-align: left;padding-left: 20px;margin-top: 20px;" class="group">
                    <el-radio-group v-model="radio4" @change="radioChange">
                      <el-radio-button :label="1">线图</el-radio-button>
                      <el-radio-button :label="2">柱状图</el-radio-button>
                      <el-radio-button :label="3">饼图</el-radio-button>
                      <el-radio-button :label="4">离散图</el-radio-button>
                      <el-radio-button :label="5">热力图</el-radio-button>
                      <el-radio-button :label="6">雷达图</el-radio-button>
                      <el-radio-button :label="7">旭日图</el-radio-button>
                      <el-radio-button :label="8">绘画图</el-radio-button>
                      <el-radio-button :label="9">表格</el-radio-button>
                    </el-radio-group>
                    <span class="down-container-btn" style="margin-left: 20px;">
                       <el-button type="primary" icon="el-icon-download">下载</el-button>
                    </span>
                  </div>
                  <pie :dataObj='dataObj' v-if="radio4 == 3"></pie>
                  <router-link to="cityDetail">
                    <bar :barDataObj='barDataObj' v-if="radio4 == 2"></bar>
                  </router-link>
                  <line v-if="radio4 == 1"></line>
                  <div id="map" style="width:940px;height:560px;" v-if="radio4 == 5"></div>
                  <div  v-if="radio4 == 9" class="table-container">
                    <el-table
                      :data="tabledData1"
                      style="width: 100%;margin-top:30px;margin-left:30px;"
                      v-if="showData"
                    >
                      <el-table-column
                        prop="name"
                        align="center"
                        label="城市">
                      </el-table-column>
                      <el-table-column
                        prop="value"
                        align="center"
                        label="人数（千人）">
                      </el-table-column>
                      <el-table-column
                        label="操作"
                        align="center"
                      >
                        <template slot-scope="scope">
                          <!--<router-link to="personDetail">-->
                          <el-button type="text" @click="openUrl1">查看</el-button>
                          <!--</router-link>-->
                        </template>
                      </el-table-column>
                    </el-table>
                    <div v-else>
                      <el-table
                        :data="tableData"
                        style="width: 100%;margin-top:30px;margin-left:30px;"
                      >
                        <el-table-column
                          prop="name"
                          label="姓名">
                        </el-table-column>
                        <el-table-column
                          prop="sex"
                          label="性别">
                        </el-table-column>
                        <el-table-column
                          prop="phone"
                          label="手机"
                          width="120">
                        </el-table-column>
                        <el-table-column
                          prop="address"
                          label="住址">
                        </el-table-column>
                        <el-table-column
                          prop="state"
                          label="总体状态">
                        </el-table-column>
                        <el-table-column
                          prop="item1"
                          label="是否会诊">
                        </el-table-column>
                        <el-table-column
                          prop="item2"
                          label="高危评估">
                        </el-table-column>
                        <el-table-column
                          prop="item4"
                          label="癌症筛查">
                        </el-table-column>
                        <el-table-column
                          prop="item5"
                          label="生物样本">
                        </el-table-column>
                        <el-table-column
                          prop="item6"
                          label="随访">
                        </el-table-column>
                        <el-table-column
                          label="操作"
                        >
                          <template slot-scope="scope">
                            <!--<router-link to="personDetail">-->
                              <el-button type="text" @click="openUrl">查看详情</el-button>
                            <!--</router-link>-->
                          </template>
                        </el-table-column>
                      </el-table>
                    </div>


                    <div class="down-container-pagination">
                      <el-pagination
                        background
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page="currentPage4"
                        :page-sizes="[100, 200, 300, 400]"
                        :page-size="100"
                        layout="total, sizes, prev, pager, next, jumper"
                        :total="400">
                      </el-pagination>
                    </div>
                  </div>

                  <!--<el-tabs v-model="activeName2" type="card" >-->
                    <!--<el-tab-pane label="饼图" name="first">-->
                      <!--<pie :dataObj='dataObj' v-if="radio4 == 3"></pie>-->
                    <!--</el-tab-pane>-->
                    <!--<el-tab-pane label="柱状图" name="second">-->
                      <!--<bar :barDataObj='barDataObj'></bar>-->
                    <!--</el-tab-pane>-->
                    <!--<el-tab-pane label="地图" name="third">-->
                      <!--<div id="map" style="width:940px;height:560px;"></div>-->
                    <!--</el-tab-pane>-->
                    <!--<el-tab-pane label="表格" name="fourth">-->
                      <!--<el-table-->
                        <!--:data="tableData"-->
                        <!--style="width: 100%;margin-top:30px;margin-left:30px;">-->
                        <!--<el-table-column-->
                          <!--prop="name"-->
                          <!--label="省份">-->
                        <!--</el-table-column>-->
                        <!--<el-table-column-->
                          <!--prop="value"-->
                          <!--label="人数（千人）">-->
                        <!--</el-table-column>-->
                      <!--</el-table>-->

                    <!--</el-tab-pane>-->
                  <!--</el-tabs>-->
                  <!--<p style="text-align:right;margin-top:30px;">-->
                        <!--<el-button type="primary"  @click="dialogVisible = true">下载</el-button>-->
                      <!--</p>-->
                </div>
              </div>
              <!-- <pie :dataObj='dataObj'></pie>
              <bar :barDataObj='barDataObj'></bar> -->
            </div>
        </el-tab-pane>
        <el-tab-pane label="筛查人群癌症危险因素分布" name="third">
          <div class="containerCon">
            <div class="clearfix">
              <div class="left fl">
                <div class="titBlock">
                  <el-form ref="form" :model="form" >
                    <div class="title" >数据展示</div>
                    <div style="margin-top: 10px;">
                      <el-form-item >
                        <span class="form-title">癌种</span>
                        <el-select v-model="form.region" placeholder="请选择" size="small">
                          <el-option label="肺癌" value="1" ></el-option>
                          <el-option label="结直肠癌" value="2"></el-option>
                          <el-option label="肝癌" value="3"></el-option>
                          <el-option label="食管癌" value="4"></el-option>
                          <el-option label="乳腺癌" value="5"></el-option>
                          <el-option label="胃癌" value="6"></el-option>
                        </el-select>
                      </el-form-item>
                      <el-form-item >
                        <span class="form-title">因素</span>
                        <el-select v-model="form.number" placeholder="请选择" size="small">
                          <el-option label="煤尘、粉尘" value="1"></el-option>
                          <el-option label="农药" value="2"></el-option>
                          <el-option label="铍、铀、氢" value="3"></el-option>
                          <el-option label="肺结核" value="4"></el-option>
                          <el-option label="高温油烟" value="5"></el-option>
                          <el-option label="近十年来生活环境有污染" value="6"></el-option>
                          <el-option label="祖父母有肺癌" value="7"></el-option>
                          <el-option label="吸烟大于等于30包每年" value="8"></el-option>
                          <el-option label="石棉" value="9"></el-option>
                          <el-option label="放射线" value="10"></el-option>
                          <el-option label="肺气肿" value="11"></el-option>
                        </el-select>
                      </el-form-item>
                      <el-form-item>
                        <span class="form-title">展示数量</span>
                        <el-select v-model="form.num" placeholder="请选择" size="small" style="display: inline-block;">
                          <el-option label="前5" value="1"></el-option>
                          <el-option label="前15" value="0.1"></el-option>
                          <el-option label="前20" value="0.01"></el-option>
                          <el-option label="前25" value="0.001"></el-option>
                          <el-option label="前30" value="0.0001"></el-option>
                        </el-select>
                      </el-form-item>
                      <el-form-item>
                        <span class="form-title">数据精度</span>
                        <el-select v-model="form.num" placeholder="请选择" size="small" style="display: inline-block;">
                          <el-option label="1" value="1"></el-option>
                          <el-option label="0.1" value="0.1"></el-option>
                          <el-option label="0.01" value="0.01"></el-option>
                          <el-option label="0.001" value="0.001"></el-option>
                          <el-option label="0.0001" value="0.0001"></el-option>
                        </el-select>
                      </el-form-item>

                    </div>

                    <div class="title" style="border-top:1px solid #cad0d9;margin-top:10px">数据源</div>
                    <div style="border-bottom:1px solid #cad0d9;">
                      <el-form-item >
                        <span  class="form-item-title">参与项目</span>
                        <span class="form-check-title">
                           <el-checkbox v-model="item1" @change="item1Change">全部</el-checkbox>
                          </span>
                      </el-form-item>
                    </div>
                    <div class="form-checkbox clearfix">
                      <ul>
                        <li>
                          <el-checkbox v-model="item1_0" @change="checkChange('item1_',3,'item')">城市早诊早治</el-checkbox>
                        </li>
                        <li>
                          <el-checkbox v-model="item1_1" @change="checkChange('item1_',3,'item')">淮河早诊早治</el-checkbox>
                        </li>
                        <li>
                          <el-checkbox v-model="item1_2" @change="checkChange('item1_',3,'item')">其他早诊早治</el-checkbox>
                        </li>
                      </ul>
                    </div>
                    <div style="border-bottom:1px solid #cad0d9;">
                      <el-form-item >
                        <span  class="form-item-title">受试者阶段</span>
                        <span class="form-check-title">
                           <el-checkbox v-model="item2" @change="item2Change">全部</el-checkbox>
                          </span>
                      </el-form-item>
                    </div>
                    <div class="form-checkbox clearfix">
                      <ul>
                        <li>
                          <el-checkbox v-model="item2_0">参与问卷</el-checkbox>
                        </li>
                        <li>
                          <el-checkbox v-model="item2_1">高危</el-checkbox>
                        </li>
                        <li>
                          <el-checkbox v-model="item2_2">疑似癌/癌</el-checkbox>
                        </li>
                        <li>
                          <el-checkbox v-model="item2_3">已筛查</el-checkbox>
                        </li>
                        <li>
                          <el-checkbox v-model="item2_4">疑似阳性</el-checkbox>
                        </li>
                        <li>
                          <el-checkbox v-model="item2_5">癌前病变</el-checkbox>
                        </li>
                        <li>
                          <el-checkbox v-model="item2_6">随访</el-checkbox>
                        </li>
                      </ul>
                    </div>
                    <div style="border-bottom:1px solid #cad0d9;">
                      <el-form-item >
                        <span  class="form-item-title">癌种</span>
                        <span class="form-check-title">
                           <el-checkbox v-model="item3" @change="item3Change">全部</el-checkbox>
                          </span>
                      </el-form-item>
                    </div>
                    <div class="form-checkbox clearfix">
                      <ul>
                        <li>
                          <el-checkbox v-model="item3_0">肺癌</el-checkbox>
                        </li>
                        <li>
                          <el-checkbox v-model="item3_1">结直肠癌</el-checkbox>
                        </li>
                        <li>
                          <el-checkbox v-model="item3_2">肝癌</el-checkbox>
                        </li>
                        <li>
                          <el-checkbox v-model="item3_3">食管癌</el-checkbox>
                        </li>
                        <li>
                          <el-checkbox v-model="item3_4">乳腺癌</el-checkbox>
                        </li>
                        <li>
                          <el-checkbox v-model="item3_5">胃癌</el-checkbox>
                        </li>
                      </ul>
                    </div>
                    <el-form-item style="border-bottom:1px solid #cad0d9;padding:5px 0 5px 20px;">
                      <span class="form-title">地区</span>
                      <el-select v-model="form.area" placeholder="请选择" size="small">
                        <el-option :label="item" value="1" v-for="item in areas" :value="item"></el-option>
                      </el-select>
                    </el-form-item>
                    <el-form-item style="border-bottom:1px solid #cad0d9;padding:5px 0 5px 20px;">
                      <span class="form-title" >参与年</span>
                      <el-select v-model="form.year" placeholder="请选择" size="small">
                        <el-option :label="item" value="1" v-for="item in years" :value="item"></el-option>
                      </el-select>
                    </el-form-item>
                    <el-form-item style="border-bottom:1px solid #cad0d9;padding:10px 0">
                      <el-button style="padding-left: 40px;padding-right: 40px;" @click="showMore">其他更多筛查条件 <i :class="moreState?'el-icon-arrow-up':'el-icon-arrow-down'"></i></el-button>
                    </el-form-item>
                    <el-collapse-transition>

                      <div v-if="moreState">

                        <div style="border-bottom:1px solid #cad0d9;">
                          <el-form-item >
                            <span  class="form-item-title">性别</span>
                            <span class="form-check-title">
                          </span>
                          </el-form-item>
                        </div>
                        <div class="form-checkbox clearfix">
                          <ul>
                            <li>
                              <el-checkbox v-model="sex">男</el-checkbox>
                            </li>
                            <li>
                              <el-checkbox v-model="sex1">女</el-checkbox>
                            </li>
                          </ul>
                        </div>
                        <div style="border-bottom:1px solid #cad0d9;">
                          <el-form-item >
                            <span  class="form-item-title">年龄</span>
                            <span class="form-check-title">
                             <el-checkbox v-model="item4" @change="item4Change">全部</el-checkbox>
                          </span>
                          </el-form-item>
                        </div>
                        <div class="form-checkbox clearfix">
                          <ul>
                            <li>
                              <el-checkbox v-model="item4_0"><50:50+</el-checkbox>
                            </li>
                            <li>
                              <el-checkbox v-model="item4_1"><60:65+</el-checkbox>
                            </li>
                            <li>
                              <el-checkbox v-model="item4_2"><20</el-checkbox>
                            </li>
                            <li>
                              <el-checkbox v-model="item4_3">20-49</el-checkbox>
                            </li>
                            <li>
                              <el-checkbox v-model="item4_4">50-64</el-checkbox>
                            </li>
                            <li>
                              <el-checkbox v-model="item4_5">65-74</el-checkbox>
                            </li>
                            <li>
                              <el-checkbox v-model="item4_6">75+</el-checkbox>
                            </li>
                          </ul>
                        </div>
                        <div style="border-bottom:1px solid #cad0d9;">
                          <el-form-item style="border-bottom:1px solid #cad0d9;padding:5px 0 5px 20px;">
                            <span class="form-title" >民族</span>
                            <el-select v-model="form.volk" placeholder="请选择" size="small">
                              <el-option label="少数民族" value="1"></el-option>
                              <el-option label="汉族" value="2"></el-option>
                              <el-option label="壮族" value="3"></el-option>
                              <el-option label="藏族" value="4"></el-option>
                              <el-option label="满族" value="5"></el-option>
                            </el-select>
                          </el-form-item>
                        </div>
                      </div>
                    </el-collapse-transition>
                  </el-form>
                </div>
              </div>
              <div class="right fl">
                <p class="title-nav">您所在的位置：首页》早诊早治概况》筛查人群癌症危险因素分布</p>
                <div style="text-align: left;padding-left: 20px;margin-top: 20px;" class="group">
                  <el-radio-group v-model="radio4">
                    <el-radio-button :label="1">线图</el-radio-button>
                    <el-radio-button :label="2">柱状图</el-radio-button>
                    <el-radio-button :label="3">饼图</el-radio-button>
                    <el-radio-button :label="4">离散图</el-radio-button>
                    <el-radio-button :label="5">热力图</el-radio-button>
                    <el-radio-button :label="6">雷达图</el-radio-button>
                    <el-radio-button :label="7">旭日图</el-radio-button>
                    <el-radio-button :label="8">绘画图</el-radio-button>
                    <el-radio-button :label="9">表格</el-radio-button>
                  </el-radio-group>
                  <el-button style="margin-left: 40px;"><a href='http://datav.aliyun.com/share/f063324f87a8479d7eab77e1993e43b4' target="_blank">该癌种大屏数据</a></el-button>

                </div>
                <pie :dataObj='dataObj' v-if="radio4 == 3"></pie>
                <router-link to="cityDetail">
                  <bar :barDataObj='barDataObj' v-if="radio4 == 2"></bar>
                </router-link>
                <line v-if="radio4 == 1"></line>
                <div id="map" style="width:940px;height:560px;" v-if="radio4 == 5"></div>
                <div  v-if="radio4 == 9" class="table-container">
                  <el-table
                    :data="tableData"
                    style="width: 100%;margin-top:30px;margin-left:30px;"
                  >
                    <el-table-column
                      prop="name"
                      label="姓名">
                    </el-table-column>
                    <el-table-column
                      prop="sex"
                      label="性别">
                    </el-table-column>
                    <el-table-column
                      prop="phone"
                      label="手机"
                      width="120">
                    </el-table-column>
                    <el-table-column
                      prop="address"
                      label="住址">
                    </el-table-column>
                    <el-table-column
                      prop="state"
                      label="总体状态">
                    </el-table-column>
                    <el-table-column
                      prop="item1"
                      label="是否会诊">
                    </el-table-column>
                    <el-table-column
                      prop="item2"
                      label="高危评估">
                    </el-table-column>
                    <el-table-column
                      prop="item4"
                      label="癌症筛查">
                    </el-table-column>
                    <el-table-column
                      prop="item5"
                      label="生物样本">
                    </el-table-column>
                    <el-table-column
                      prop="item6"
                      label="随访">
                    </el-table-column>
                    <el-table-column
                      label="操作"
                    >
                      <template slot-scope="scope">
                        <!--<router-link to="personDetail">-->
                        <el-button type="text" @click="openUrl">查看详情</el-button>
                        <!--</router-link>-->
                      </template>
                    </el-table-column>
                  </el-table>
                  <div class="down-container-pagination">
                    <el-pagination
                      background
                      @size-change="handleSizeChange"
                      @current-change="handleCurrentChange"
                      :current-page="currentPage4"
                      :page-sizes="[100, 200, 300, 400]"
                      :page-size="100"
                      layout="total, sizes, prev, pager, next, jumper"
                      :total="400">
                    </el-pagination>
                  </div>
                </div>

                <!--<el-tabs v-model="activeName2" type="card" >-->
                <!--<el-tab-pane label="饼图" name="first">-->
                <!--<pie :dataObj='dataObj' v-if="radio4 == 3"></pie>-->
                <!--</el-tab-pane>-->
                <!--<el-tab-pane label="柱状图" name="second">-->
                <!--<bar :barDataObj='barDataObj'></bar>-->
                <!--</el-tab-pane>-->
                <!--<el-tab-pane label="地图" name="third">-->
                <!--<div id="map" style="width:940px;height:560px;"></div>-->
                <!--</el-tab-pane>-->
                <!--<el-tab-pane label="表格" name="fourth">-->
                <!--<el-table-->
                <!--:data="tableData"-->
                <!--style="width: 100%;margin-top:30px;margin-left:30px;">-->
                <!--<el-table-column-->
                <!--prop="name"-->
                <!--label="省份">-->
                <!--</el-table-column>-->
                <!--<el-table-column-->
                <!--prop="value"-->
                <!--label="人数（千人）">-->
                <!--</el-table-column>-->
                <!--</el-table>-->

                <!--</el-tab-pane>-->
                <!--</el-tabs>-->
                <!--<p style="text-align:right;margin-top:30px;">-->
                <!--<el-button type="primary"  @click="dialogVisible = true">下载</el-button>-->
                <!--</p>-->
              </div>
            </div>
            <!-- <pie :dataObj='dataObj'></pie>
            <bar :barDataObj='barDataObj'></bar> -->
          </div>
          <!--<div class='containerCon'>-->
            <!--<p class="goto" style="margin:20px 0;"><a href='http://datav.aliyun.com/share/f063324f87a8479d7eab77e1993e43b4' target="_blank">全屏</a></p>-->
            <!--<iframe src="http://datav.aliyun.com/share/f063324f87a8479d7eab77e1993e43b4" frameborder="0" width="100%" height="1080px"></iframe>-->
          <!--</div>-->
        </el-tab-pane>
        <el-tab-pane label='通知公告（2）' name="fourth">
          <div class="news-container">
            <ul class="news-container-ul clearfix">
              <li>
                <img src="../../assets/img/WechatIMG12.jpeg" alt="">
                <div class="news-container-item">
                  <p class="news-container-title">
                     2018年20省开展结直肠早诊早治项目通知
                  </p>
                  <p class="content">
                    为了提高结直肠癌的早诊早治效果和效率，降低中国结直肠癌的发病与死亡。将结直肠癌的早诊早治筛查点增加到10000万个，覆盖20个省份。请各地认真学习并履行结直肠癌的早诊早治项目
                  </p>
                  <p class="detail">
                    <span class="date">2017.7.11</span> <span class="show-detail">查看详情></span>
                  </p>
                </div>
              </li>
              <li>
                <img src="../../assets/img/WechatIMG13.jpeg" alt="">
                <div class="news-container-item">
                  <p class="news-container-title">
                    2018年20省开展结直肠早诊早治项目通知
                  </p>
                  <p class="content">
                    为了提高结直肠癌的早诊早治效果和效率，降低中国结直肠癌的发病与死亡。将结直肠癌的早诊早治筛查点增加到10000万个，覆盖20个省份。请各地认真学习并履行结直肠癌的早诊早治项目
                  </p>
                  <p class="detail">
                    <span class="date">2017.7.11</span> <span class="show-detail">查看详情></span>
                  </p>
                </div>
              </li>
              <li>
                <img src="../../assets/img/WechatIMG14.jpeg" alt="">
                <div class="news-container-item">
                  <p class="news-container-title">
                    2018年20省开展结直肠早诊早治项目通知
                  </p>
                  <p class="content">
                    为了提高结直肠癌的早诊早治效果和效率，降低中国结直肠癌的发病与死亡。将结直肠癌的早诊早治筛查点增加到10000万个，覆盖20个省份。请各地认真学习并履行结直肠癌的早诊早治项目
                  </p>
                  <p class="detail">
                    <span class="date">2017.7.11</span> <span class="show-detail">查看详情></span>
                  </p>
                </div>
              </li>
              <li>
                <img src="../../assets/img/WechatIMG15.jpeg" alt="">
                <div class="news-container-item">
                  <p class="news-container-title">
                    2018年20省开展结直肠早诊早治项目通知
                  </p>
                  <p class="content">
                    为了提高结直肠癌的早诊早治效果和效率，降低中国结直肠癌的发病与死亡。将结直肠癌的早诊早治筛查点增加到10000万个，覆盖20个省份。请各地认真学习并履行结直肠癌的早诊早治项目
                  </p>
                  <p class="detail">
                    <span class="date">2017.7.11</span> <span class="show-detail">查看详情></span>
                  </p>
                </div>
              </li>
            </ul>
            <div class="down-container-pagination">
              <span>
                  <el-pagination
                    background
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage4"
                    :page-sizes="[100, 200, 300, 400]"
                    :page-size="100"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="400">
              </el-pagination>
              </span>

            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label='下载专区' name="fifth">
         <div class="down-container">
           <el-row style=" border-top:1px solid #dfe3e8;border-top:none">
             <el-col :span="20">
               <span class="down-container-title">项目实施技术方案</span> <span class="down-container-time">201808.08</span>
             </el-col>
             <el-col :span="4">
               <div class="down-container-btn">
                 <el-button type="primary" icon="el-icon-download">下载</el-button>
               </div>
             </el-col>
           </el-row>
           <el-row>
             <el-col :span="20">
               <span class="down-container-title">关于平台使用培训手册</span> <span class="down-container-time">201808.08</span>
             </el-col>
             <el-col :span="4">
               <div class="down-container-btn">
                 <el-button type="primary" icon="el-icon-download">下载</el-button>
               </div>
             </el-col>
           </el-row>
           <el-row>
             <el-col :span="20">
               <span class="down-container-title">平台常见</span> <span class="down-container-time">201808.08</span>
             </el-col>
             <el-col :span="4">
               <div class="down-container-btn">
                 <el-button type="primary" icon="el-icon-download">下载</el-button>
               </div>
             </el-col>
           </el-row>
           <el-row>
             <el-col :span="20">
               <span class="down-container-title">肺癌早诊早治筛查实施步骤及注意事项</span> <span class="down-container-time">201808.08</span>
             </el-col>
             <el-col :span="4">
               <div class="down-container-btn">
                 <el-button type="primary" icon="el-icon-download">下载</el-button>
               </div>
             </el-col>
           </el-row>
           <el-row>
             <el-col :span="20">
               <span class="down-container-title">结直肠癌早诊早治筛查实施步骤及注意事项</span> <span class="down-container-time">201808.08</span>
             </el-col>
             <el-col :span="4">
               <div class="down-container-btn">
                 <el-button type="primary" icon="el-icon-download">下载</el-button>
               </div>
             </el-col>
           </el-row>
           <el-row>
             <el-col :span="20">
               <span class="down-container-title">乳腺癌早诊早治筛查实施步骤及注意事项</span> <span class="down-container-time">201808.08</span>
             </el-col>
             <el-col :span="4">
               <div class="down-container-btn">
                 <el-button type="primary" icon="el-icon-download">下载</el-button>
               </div>
             </el-col>
           </el-row>
           <el-row>
             <el-col :span="20">
               <span class="down-container-title">上消化道早诊早治筛查实施步骤及注意事项</span> <span class="down-container-time">201808.08</span>
             </el-col>
             <el-col :span="4">
               <div class="down-container-btn">
                 <el-button type="primary" icon="el-icon-download">下载</el-button>
               </div>
             </el-col>
           </el-row>
           <el-row>
             <el-col :span="20">
               <span class="down-container-title">肺癌城市早诊早治筛查实施步骤及注意事项</span> <span class="down-container-time">201808.08</span>
             </el-col>
             <el-col :span="4">
               <div class="down-container-btn">
                 <el-button type="primary" icon="el-icon-download">下载</el-button>
               </div>
             </el-col>
           </el-row>
           <div class="down-container-pagination">
             <el-pagination
               background
               @size-change="handleSizeChange"
               @current-change="handleCurrentChange"
               :current-page="currentPage4"
               :page-sizes="[100, 200, 300, 400]"
               :page-size="100"
               layout="total, sizes, prev, pager, next, jumper"
               :total="400">
             </el-pagination>
           </div>
         </div>
        </el-tab-pane>
        <el-tab-pane label='数据来源与方法说明' name="sixth" disabled>数据来源与方法说明</el-tab-pane>
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
import line from '../components/line'
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

         item1:false,
        item1_0:false,
        item1_1:false,
        item1_2:false,
        item2:false,
        item2_0:false,
        item2_1:false,
        item2_2:false,
        item2_3:false,
        item2_4:false,
        item2_5:false,
        item2_6:false,
        item3:false,
        item3_0:false,
        item3_1:false,
        item3_2:false,
        item3_3:false,
        item3_4:false,
        item3_5:false,
        item4:false,
        item4_0:false,
        item4_1:false,
        item4_2:false,
        item4_3:false,
        item4_4:false,
        item4_5:false,
        item4_6:false,
        sex:'',
        sex1:'',


        showData:true,
        radio4:1,
        moreState:false,
        activeName: 'first',
        activeName1: '1',
        activeName2:'first',
        dialogVisible: false,
        title:'项目实时进度',
        radio3:'全部',
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
        currentPage4:'',
        form:{
          region:'',
          number:'',
          num:'',
          nation:'',
          area:'',
          year:'',
          volk:'',
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
        tabledData1:[
          {
              name:'黑龙江省',
             value:'346'
          },
          {
            name:'辽宁省',
            value:'357'
          },
          {
            name:'北京市',
            value:'843'
          },
          {
            name:'河北省',
            value:'262'
          },
          {
            name:'山东省',
            value:'341'
          },
          {
            name:'江苏省',
            value:'245'
          }, {
            name:'安徽省',
            value:'678'
          }, {
            name:'浙江省',
            value:'309'
          },


        ],
        tableData: [
          { sex:'男',
            name:'张三',
            phone:'17830299303',
            address:'北京市',
            state:'意思肺癌',
            item1:'是',
            item2:'肺高危',
            item4:'已完成',
            item5:'已入库',
            item6:'待随访'
          },
          { sex:'男',
            name:'张三',
            phone:'17830299303',
            address:'北京市',
            state:'意思肺癌',
            item1:'是',
            item2:'肺高危',
            item4:'已完成',
            item5:'已入库',
            item6:'待随访'
          },
          { sex:'男',
            name:'张三',
            phone:'17830299303',
            address:'北京市',
            state:'意思肺癌',
            item1:'是',
            item2:'肺高危',
            item4:'已完成',
            item5:'已入库',
            item6:'待随访'
          },
          { sex:'男',
            name:'张三',
            phone:'17830299303',
            address:'北京市',
            state:'意思肺癌',
            item1:'是',
            item2:'肺高危',
            item4:'已完成',
            item5:'已入库',
            item6:'待随访'
          },
          { sex:'男',
            name:'张三',
            phone:'17830299303',
            address:'北京市',
            state:'意思肺癌',
            item1:'是',
            item2:'肺高危',
            item4:'已完成',
            item5:'已入库',
            item6:'待随访'
          },
          { sex:'男',
            name:'张三',
            phone:'17830299303',
            address:'北京市',
            state:'意思肺癌',
            item1:'是',
            item2:'肺高危',
            item4:'已完成',
            item5:'已入库',
            item6:'待随访'
          },
          { sex:'男',
            name:'张三',
            phone:'17830299303',
            address:'北京市',
            state:'意思肺癌',
            item1:'是',
            item2:'肺高危',
            item4:'已完成',
            item5:'已入库',
            item6:'待随访'
          },
          { sex:'男',
            name:'张三',
            phone:'17830299303',
            address:'北京市',
            state:'意思肺癌',
            item1:'是',
            item2:'肺高危',
            item4:'已完成',
            item5:'已入库',
            item6:'待随访'
          },
        ]
      }
    },
    components:{
      pie,
      bar,
      line,
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
    watch:{
        'radio4':function(val){
            if(val!= 9){
                this.showData = true
            }
        }
    },
    methods: {
        openUrl(){
            console.log(this.$route)
//          window.location.href='http://211.103.176.186:9527/dataSatistics/#/dataCenter/personDetail'
         window.open('http://211.103.176.186:9527/dataSatistics/#/dataCenter/personDetail')
        },
        openUrl1(){
          this.showData = false
        },
       handleClose(done) {
        done();
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      //查看更多
      showMore(){
        this.moreState = !this.moreState
        if(this.moreState){
          window.scrollTo(0,document.body.scrollHeight)
        }else {
          window.scrollTo(0,0)
        }
      },
      clickCheckAll(a,b,c){
        for(let i = 0; i < b;i++){
          this[a+i] = c
        }
      },
      //参与项目全选
      item1Change(value){
         if(value){
           this.clickCheckAll('item1_',3,true)
         }else{
           this.clickCheckAll('item1_',3,false)
         }
      },
      item2Change(value){
        if(value){
          this.clickCheckAll('item2_',7,true)
        }else{
          this.clickCheckAll('item2_',7,false)
        }
      },
      item3Change(value){
        if(value){
          this.clickCheckAll('item3_',6,true)
        }else{
          this.clickCheckAll('item3_',6,false)
        }
      },
      item4Change(value){
        if(value){
          this.clickCheckAll('item4_',7,true)
        }else{
          this.clickCheckAll('item4_',7,false)
        }
      },
      checkChange(a,b,c){
          console.log(a,b,c)
          let state = true
        for(let i = 0; i < b; i ++){
            if(this[a+i]==false){
              state = false
              return
            }
        }
        if(state){
          this[c] = true
        }

      },



      radioChange(value){
           if(value == '全部'){
               this.title = '全部癌症项目实时进度'
           }else if(value == '城市项目'){
               this.title = '城市癌症项目实时进度'
           }else if(value == '淮河项目'){
               this.title = '淮河癌症项目实时进度'
           }else if(value == '其他项目'){
               this.title = '其他癌症项目实时进度'
           }
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

<style rel="stylesheet/scss" lang="scss" >
  .down-container-pagination{
    text-align: right;
    /*padding-right:20px;*/
    margin-top:10px;
    .number:hover{
      color: #fe8861!important;
    }
    .el-pagination.is-background .el-pager li:not(.disabled).active{
      background-color: #fe8861;
    }
  }
  .down-container-btn{
    padding-right: 20px;
    text-align: right;
    .el-button{
      background-color: #fe8861;
      border:none;
    }
  }
.container{
   .tabBars{
     width: 100%;
     height: 70px;
     text-align: center;
     border-bottom:1px solid #d8dde3;
     background: #fff;
     .el-tabs__header{
       margin:0 auto;
       width: 1000px;
       text-align: center;
       height: 70px;
     }
     .el-tabs__item {
       font-size: 16px;
       color:#000;
       height: 70px;
       line-height: 70px;
     }
     .is-disabled{
       color:#999;
     }
     .is-active{
       color: #153451;
       /*font-size: 18px;*/
     }
     .el-tabs__active-bar{
       background:#153451;
       height: 4px;
       border-radius:50px;
     }
   }
}
.news-container{
  width: 984px;
  margin: 20px auto;
  .down-container-pagination{
    text-align: right;
    padding-right:20px;
    margin-top:10px;
    .number:hover{
      color: #fe8861!important;
    }
    .el-pagination.is-background .el-pager li:not(.disabled).active{
      background-color: #fe8861;
    }
  }
  .news-container-ul{
    list-style-type: none;
    li{
      margin-bottom: 10px;
      img{
        width:176px;
        height: 150px;
        float: left;
      }
      .news-container-item{
        background: #ffffff;
        height: 150px;
        padding-left: 176px;
        .news-container-title{
          font-size:15px;
          font-weight:600;
          padding-top: 10px;
          text-align: left;
          padding-left: 30px;
        }
        .content{
          text-align: left;
          padding-left: 20px;
          padding-top: 20px;
          padding-right: 50px;
          font-size: 14px;
          height:60px;
          color: #8b8b8b;
        }
        .detail{
          text-align: right;
          padding-top:20px;
          padding-right: 50px;
          font-size: 14px;
          .date{
            padding-left: 30px;
            background: url("../../assets/img/date.png")no-repeat;
            color: #bababa;
          }
          .show-detail{
            padding-left: 30px;
            background: url("../../assets/img/detail.png")no-repeat;
            color: #fe8861;
            margin-left: 20px;
          }
        }
      }
    }
  }
}
.down-container{
  width:984px;
  margin: 40px auto;
  background: #fff;
  padding:20px;
  .down-container-pagination{
    text-align: right;
    padding-right:20px;
    margin-top:20px;
    .number:hover{
      color: #fe8861!important;
    }
    .el-pagination.is-background .el-pager li:not(.disabled).active{
      background-color: #fe8861;
    }
  }
  .el-col{
    text-align: left;
    border-bottom:1px solid #dfe3e8;
    padding-left: 20px;
    height:60px;
    line-height:60px;
    .down-container-title{
      color: #555555;
    }
    .down-container-time{
      font-weight:600;
      margin-left:20px;
    }
    .down-container-btn{
      padding-right: 20px;
      text-align: right;
      .el-button{
        background-color: #fe8861;
        border:none;
      }
    }

  }
}
.containerCon{
  width:1260px;
  margin:0 auto;
  padding-bottom:30px;
  .left{
     width: 320px;
     background: #e5e9f0;
    .form{
      padding-top:20px;
    }
    .form-checkbox{
      background: #dbe1ea;
      padding:10px 0 10px 19px;
      ul {
        list-style-type: none;
        li{
          width:140px;
          float: left;
          text-align: left;
          padding-left:10px;
        }
      }
    }
   .title{
     height:42px;
     border-bottom:1px solid #cad0d9;
     text-align: center;
     line-height: 42px;
     color: #153a5e;
   }
    .form-check-title{
      width: 190px;
      display: inline-block;
      text-align: left;
      padding-left: 45px;
    }
    .form-title{
      display: inline-block;
      padding-right:20px;
      width:90px;
      text-align: left;
    }
    .form-item-title{
      display: inline-block;
      text-align: left;
      width:100px;
      padding-left:10px;
    }
     .el-form-item{
       /*margin:13px 0 0;*/
       padding-left: 15px;
       margin-bottom: 0px!important;

     }
     .el-form-item__label{
       font-size: 18px;
       /*line-height: 44px;*/
     }
     .el-input__inner{
       width: 190px;
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
  .group{
    .radioGroup{
      margin-top:20px;
    }
    .is-active{
      background-color: #153451 !important;
      color: red;
    }
    .el-radio-button__orig-radio:checked+.el-radio-button__inner{
      background-color: #153451;
      border-color: #153451;
      box-shadow:none;
    }
  }
  .data{
    text-align: left;
    margin-top:60px;
    .data-center{
      height:40px;
      display: inline-block;
      font-size:20px;
      padding-left:60px;
      background: url('../../assets/img/data-center1.png') no-repeat  10px 0;
    }
    .data-center1{
      height:40px;
      display: inline-block;
      font-size:20px;
      padding-left:60px;
      background: url('../../assets/img/data-center2.png') no-repeat  10px 0;
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
    .group{
      .radioGroup{
        margin-top:20px;
      }
      .is-active{
        background-color: #153451 !important;
        color: red;
      }
      .el-radio-button__orig-radio:checked+.el-radio-button__inner{
        background-color: #153451;
        border-color: #153451;
        box-shadow:none;
      }
    }
    .title-nav{
      text-align: left;
      font-size:11px;
      padding:10px 0 0 20px;
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
  margin: 10px 11px 0;
  background: #6fcabf;
  border-radius: 4px;
  color:#fff;
  /*padding-left: 30px;*/
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
  background: #57bdde;
  margin-top: 10px;
  text-align: center;
}
.goto{
  text-align: right;
  cursor: pointer;
  margin-top:40px;
  a{
    background:#fe8861;
    color: #fff;
    font-size:14px;
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



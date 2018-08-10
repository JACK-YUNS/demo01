<template>
  <div class="container" id="nav">
    <el-menu class="navbar" mode="horizontal">
      <div class="con clearfix">
        <router-link to="/dataCenter/list">
          <img src="../../assets/img/login_logo.png" alt="logo" class="fl">
        </router-link>
        <span class="fl tit">国家癌症防控信息管理平台</span>
        <div class="fr">
          <el-dropdown class="avatar-container" hide-on-click >
            <router-link to="/dataCenter/list">
            首页
          </router-link>
            <span class="avatar-wrapper">
              {{loginName}} 您好！
            </span>
            <router-link to='/login'>
              <span class='loginOut'>退出</span>
            </router-link>
          </el-dropdown>
        </div>
      </div>
    </el-menu>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        loginName:'PI',
      }
    },
    computed: {
     
    },
   
    methods: {
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.el-menu--horizontal{
  border:0;
}
  .navbar {
    width: 100%;
    height:184px;
    background: #168ae9 url(../../assets/img/top_bg.jpg) no-repeat;
    .con{
      width:1260px;
      margin:0 auto;
    }
    img{
      margin-top:70px;
    }
    .tit{
      font-size: 36px;
      color:#fff;
      font-weight: 550;
      margin-left: 70px;
      margin-top:70px;
      line-height: 1;
    }
    .hamburger-container {
      line-height: 58px;
      height: 50px;
      float: left;
      padding: 0 10px;
    }
    .errLog-container {
      display: inline-block;
      position: absolute;
      right: 150px;
    }
    .screenfull {
      position: absolute;
      right: 105%;
      top: 16px;
      color: red;
    }
    .avatar-container {
      padding-top:25px;
      color:#fff;
      font-size:16px;
      height: 50px;
      display: inline-block;
      right: 35px;
      .loginOut{
        padding-left: 35px;;
        height: 25px;
        line-height: 25px;
        display: inline-block;
        margin-left: 50px;
        background: url(../../assets/img/icons.png) no-repeat;
        background-position:0px -100px;
      }
      .avatar-wrapper {
        margin-left:30px;
        cursor: pointer;
        margin-top: 5px;
        position: relative;
        .user-avatar {
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }
        .el-icon-caret-bottom {
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }

</style>



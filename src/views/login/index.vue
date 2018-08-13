<template>
  <div class="login-container">
    <div class="login">
      <h1><img src="../../assets/img/login_logo.png" alt="logo" ></h1>
      <p class="tit">国家癌症防控信息管理平台</p>
      <p class='tit_en'>China Cancer Prevention and Control Platform</p>
      <el-form autoComplete="on" :model="loginForm" ref="loginForm" label-position="left" label-width="0px"
        class="card-box login-form">
          <el-form-item prop="loginName">
            <i class='ico1'></i>
            <el-input name="loginName" type="text" v-model="loginForm.loginName" placeholder="用户名"></el-input>
          </el-form-item>
          <el-form-item prop="pwd">
            <i class='ico2'></i>
            <el-input name="pwd" type="password" v-model="loginForm.pwd" placeholder="密码"></el-input>
          </el-form-item>
        <el-form-item class='loginBox'>
          <el-button type="primary" class='loginBtn' :loading="loading"  @click.native.prevent="handleLogin">
            登录
          </el-button>
        </el-form-item>
      </el-form>
      <!-- <div class="form-box">

        <img src="../../assets/img/login_logo.png" alt="logo" class="login-img">
        <el-form autoComplete="on" :model="loginForm" :rules="loginRules" ref="loginForm" label-position="left" label-width="0px"
        class="card-box login-form">
          <el-form-item prop="loginName">
            <i class="icon iconfont icon-user"></i>
            <el-input name="loginName" type="text" v-model="loginForm.loginName" placeholder="用户名"></el-input>
          </el-form-item>
          <el-form-item prop="pwd">
            <i class="icon iconfont icon-ico-pwd1"></i>
            <el-input name="pwd" type="password" v-model="loginForm.pwd" placeholder="密码"></el-input>
          </el-form-item>
        <el-form-item prop="capText">
          <el-input name="capText" type="text"  v-model="loginForm.capText" autoComplete="on"
                    placeholder="图片校验码" @keyup.enter.native="handleLogin('loginForm')" class="yanzheng"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="width:100%;" :loading="loading"  @click.native.prevent="handleLogin('loginForm')">
            登录
          </el-button>
        </el-form-item>
      </el-form>
      </div> -->
    </div>


  </div>
</template>

<script>
  export default {
    name: 'login',
    data() {
      const validatePass = (rule, value, callback) => {
        if (value.length < 6) {
          callback(new Error('密码不能小于6位'));
        } else {
          callback();
        }
      };
      return {
        disabled:false,
        nickName:'',
        imgUrl:SERVER_NAME+'/auth/authCode/images',
        testCode:'获取验证码',
        loginForm: {
          loginName: '',
          pwd: '',
          capText: ''
        },
        loginRules: {
          loginName: [
            { required: true,message:'用户名不能为空' , trigger: 'blur' }
          ],
          pwd: [
            { required: true,message:'密码不能为空' , trigger: 'blur' }
          ],
          capText: [
            { required: true,message:'请填写图片验证码' , trigger: 'blur' }
          ]
        },
        loading: false,
        showDialog: false,
        hospitalType:''

      }
    },
    methods: {
     handleLogin(){
       this.$router.push('/dataCenter/list')
     }
    },
    created() {
      sessionStorage.setItem('token','22')   //测试
    },
    destroyed() {
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss">
  .login-container {
    position:fixed;
    background-image: url(../../assets/img/login_bg.png);
    background-size:cover;
    width: 100%;
    height: 100%;
    top:0;
    left:0;
  }
   .login{
      width: 675px;
      height: 500px;
      margin:0 auto;
      padding-top: 55px;
      position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%,-50%);
      h1{
        text-align: center;
        margin-bottom:60px;
      }
      .tit{
        font-size: 56px;
        color:#fff;
        text-align: center;
        line-height: 1;
        margin-bottom: 30px;
      }
      .tit_en{
        font-size: 20px;
        color:#fff;
        text-align: center;
        line-height: 1;
        font-weight: 100;
      }
      .el-input__inner{
        background:none;
        border:none;
        border-bottom:1px solid #9ba5ad;
        padding-left:60px;
        border-radius:0;
        color: #fff;
      }
      .el-input{
        position: relative;
      }
      .ico1{
        width:28px;
        height: 26px;
        position: absolute;
        background: url(../../assets/img/user.png) no-repeat 100% 100% / 100% 100%;
        left:10px;
        top:2px;

      }
      .ico2{
        width:28px;
        height: 26px;
        position: absolute;
        background: url(../../assets/img/password.png) no-repeat 100% 100% / 100% 100%;
        left:10px;
        top:2px;
      }
      .el-form-item{
        margin-bottom: 30px;
      }
      .loginBox{
        padding-top: 45px;
      }
    }
    .el-form{
      width:326px;
      margin:50px auto;
    }
    .loginBtn{
      width: 326px;
      height: 65px;
      border-radius:50px;
      margin:0 auto;
      font-size: 24px;
      background:#dceefd;
      border:none;
      margin:0 auto;
      color:#041d3f;
      font-weight: 500;
    }
    .loginBtn:hover{
        background:#d4e9fc;
        border:none;
        color:#2482e3;
    }

</style>
<style>

</style>

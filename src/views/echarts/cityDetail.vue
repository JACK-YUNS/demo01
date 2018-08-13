<template>
  <div class="container_con">
    <table style="margin-top:20px">

    </table>
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


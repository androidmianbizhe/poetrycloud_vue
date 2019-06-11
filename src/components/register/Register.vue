<template>
  <div class="register-box" >

    <el-row class="register-row">
      <el-col>
        <h3 style="text-align: center;color: cornflowerblue">注册账号</h3>
      </el-col>
    </el-row>

    <el-row class="register-row">
      <el-col>
        <el-input placeholder="请输入手机号码" v-model="inputphone">
          <template slot="prepend" class="">账号</template>
        </el-input>
      </el-col>
    </el-row>
    <el-row class="register-row">
      <el-col>
        <el-input type="password" placeholder="请输入密码" v-model="inputpwd1">
          <template slot="prepend">密码</template>
        </el-input>
      </el-col>
    </el-row>
    <el-row class="register-row">
      <el-col>
        <el-input type="password" placeholder="请在此输入密码" v-model="inputpwd2">
          <template slot="prepend">密码</template>
        </el-input>
      </el-col>
    </el-row>

    <el-row class="register-row">
      <el-col>
        <!--<el-checkbox>基础密码</el-checkbox>-->
        <a href="#/login" class="register-a">已有帐号?登录</a>
      </el-col>
    </el-row>
    <el-row class="register-row">
      <el-col>
        <el-button id="login" style="width:100%" type="primary">注册</el-button>
      </el-col>
    </el-row>
    <el-row class="register-row-bottom">
      ------------ 社交账号*快速注册 -----------
    </el-row>
    <el-row class="register-row-bottom">
      <el-col>
        <a href="" class="third-login-a">
          <img class="third-login-img" src="../../assets/QQ.png">
        </a>
        <a href="" class="third-login-a">
          <img class="third-login-img" src="../../assets/QQ.png">
        </a>
        <a href="" class="third-login-a">
          <img class="third-login-img" src="../../assets/weibo.png">
        </a>
        <!--<a href="" class="third-login-a">-->
          <!--<img class="third-login-img" src="../../assets/zcode.png">-->
        <!--</a>-->
      </el-col>
    </el-row>

  </div>
</template>

<script>

export default {
  name: 'Register',
  data () {
    return {
      inputphone: '',
      inputphone1: '',
      inputphone2: ''
    }
  },
  methods: {
    // checkInputName: function () {
    //   alert('afa')
    // }
  }
}
</script>

<style scoped>

  .register-box {
    margin-right: 37%;
    margin-left: 37%;
    margin-top: 10%;
    width: 26%;
    background-color: #fff;
    border-radius: 5px;
  }

  .register-row {
    width: 100%;
    padding-left: 8%;
    padding-right: 8%;
  }

  .register-row:nth-child(odd) {
    padding-top: 5%;
    padding-bottom: 5%;
  }
  .register-row:nth-child(even) {
    padding-top: 0px;
    padding-bottom: 0px;
  }

  .register-a {
    text-decoration: none;
    float: right;
    font-size: 13px;
    color: cornflowerblue;
  }

  .third-login-img {
    width: 35px;
    margin-bottom: 2%;
  }

  .third-login-a {
    text-align: center;
  }

  .register-row-bottom {
    text-align: center;
    margin-top: 8px;
    font-size: 12px;
    color: cornflowerblue;
  }
</style>

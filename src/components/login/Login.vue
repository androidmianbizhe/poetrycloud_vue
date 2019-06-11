<template>
  <div class="login-box">
    <form>
      <el-row class="login-row">
        <el-col>
          <h3 style="text-align: center;color: cornflowerblue">注册账号</h3>
        </el-col>
      </el-row>

      <el-row class="login-row">
        <el-col>
          <el-input placeholder="请输入手机号" v-model="name">
            <template slot="prepend">帐号</template>
          </el-input>
        </el-col>
      </el-row>

      <el-row class="login-row">
        <el-col>
          <el-input v-model="password" type="password" placeholder="请输入密码">
            <template slot="prepend">密码</template>
          </el-input>
        </el-col>
      </el-row>

      <el-row class="login-row">
        <el-col>
          <el-checkbox v-model="storePwd">记住密码</el-checkbox>
          <a href="#/register" class="register-a">没有帐号?注册</a>
        </el-col>
      </el-row>
      <el-row class="login-row">
        <el-col>
          <el-button style="width:100%" type="primary" @click="loginBtn()">登录</el-button>
        </el-col>
      </el-row>
      <el-row class="login-row-bottom">
        ------------ 快捷登录 -----------
      </el-row>
      <el-row class="login-row-bottom">
        <el-col>
          <img class="third-login-img" src="../../assets/QQ.png">
          <img class="third-login-img" src="../../assets/weibo.png" @click="weiboThirdLogin()">
          <img class="third-login-img" src="../../assets/zcode.png">
        </el-col>
      </el-row>
    </form>

  </div>
</template>

<script>
import QS from 'qs'

export default {
  name: 'Login',
  data () {
    return {
      name: '',
      password: '',
      storePwd: false,
      weibo_client_id: '2992412706',
      weibo_codeURL: 'https://api.weibo.com/oauth2/authorize',
      weibo_accessTokenURL: 'https://api.weibo.com/oauth2/access_token',
      redirectURL: 'https://api.weibo.com/oauth2/default.html',
      code: null,
      getCodeUrl: '',
      accessToken: null,
      signState: false
    }
  },
  methods: {
    weiboThirdLogin () {
      const authUrl = this.weibo_codeURL + ('?' + QS.stringify({
        client_id: this.weibo_client_id,
        redirect_uri: this.redirectURL
      }))
      location.href = authUrl
    },
    getCode: function () {
      let codeurl = location.href.replace('http://localhost:8080/#/login?', '')
      let parse = QS.parse(codeurl)
      this.code = parse.code
    },
    getAccessToken: function () {
      // 通过服务器 获取token
      this.$axios.post('/ssoweb/user/getAcsToken', QS.stringify({
        'weibo_accessTokenURL': this.weibo_accessTokenURL,
        'client_id': this.weibo_client_id,
        'client_secret': '',
        'grant_type': 'authorization_code',
        'code': this.code,
        'redirect_uri': this.redirectURL
      })).then((res) => {
        if (res.status === 200) {
          let parse = QS.parse(res.data)

          if (parse.code === 200) {
            // 获取信息
          } else {
            console.log(parse.msg)
          }
        }
      })
    },
    loginBtn: function () {
      // 判断是否为空
      if (this.name === '' || this.password === '') {
        this.$message.error('用户名或密码为空')
        return
      }
      let phoneRegx = /^1[3|4|5|7|8][0-9]\d{8}$/
      // 判断手机号是否合法
      if (!phoneRegx.test(this.name)) {
        this.$message.error('手机号码输入错误')
        return
      }
      // 判断密码是否合法
      if (this.password.length < 8) {
        this.$message.error('密码输入错误')
        return
      }
      // 登录
      this.$axios.post('/ssoweb/user/login', QS.stringify({
        'phone_number': this.name,
        'password': this.password,
        'type': '1'
      }), {
        headers: {
          'type': '1',
          'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
        }
      }).then((res) => {
        if (res.status === 200) {
          if (res.data.status === 200) {
            // 记住密码
            if (this.storePwd) {
              localStorage.setItem('shiyun_phone', this.name)
              localStorage.setItem('shiyun_pwd', this.password)
              localStorage.setItem('shiyun_storepwd', this.storePwd)
              // 获取当前时间戳
              let currentMills = Date.parse(new Date()) + 60 * 60 * 24 * 7
              localStorage.setItem('shiyun_global_expire', currentMills)
              // 存储session
              sessionStorage.setItem('token', res.data.data)
              // 跳转页面
              this.$router.push({ path: '/' })
            } else {
              localStorage.removeItem('shiyun_phone')
              localStorage.removeItem('shiyun_pwd')
              localStorage.removeItem('shiyun_storepwd')
              localStorage.removeItem('shiyun_global_expire')
            }
          } else {
            this.$message.error(res.data.msg)
          }
        } else {
          this.$message.error('请求出错')
        }
      })
    }
  },
  created () {
    // 判断是否已经登陆
    let token = sessionStorage.getItem('token')
    if (token !== null) {
      // goto index
      this.$router.push({ path: '/' })
    }
    let item = localStorage.getItem('shiyun_storepwd')
    if (item !== null && item === 'true') {
      this.name = localStorage.getItem('shiyun_phone')
      this.password = localStorage.getItem('shiyun_pwd')
      this.storePwd = (item === 'true')
    }
  }
}
</script>

<style scoped>

  .login-box {
    margin-right: 37%;
    margin-left: 37%;
    margin-top: 10%;
    width: 26%;
    background-color: #fff;
    border-radius: 5px;
  }

  .login-row {
    width: 100%;
    padding-left: 8%;
    padding-right: 8%;
  }

  .login-row:nth-child(odd) {
    padding-top: 5%;
    padding-bottom: 5%;
  }

  .login-row:nth-child(even) {
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
    cursor: pointer;
  }

  .login-row-bottom {
    text-align: center;
    margin-top: 8px;
    font-size: 12px;
    color: cornflowerblue;
  }
</style>

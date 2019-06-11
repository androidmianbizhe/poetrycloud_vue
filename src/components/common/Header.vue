<template>
  <div class="header">
    <img class= "web-logo" src="../../assets/logo.png">
    <navi class="navi-top"></navi>
    <query class="top-query"></query>
    <el-row class="top-login-row" v-if="!isLogin">
      <a href="#/login" class="login-btn-a">
        <el-button round class="top-login-btn" size="small">登录</el-button>
      </a>
      <a href="#/register" class="login-btn-a">
        <el-button round class="top-login-btn" size="small">注册</el-button>
      </a>
    </el-row>
    <div class="user-container" v-if="isLogin">
      <el-dropdown @command="handleCommand" class="user-container-dropdown" placement="bottom">
        <img :src="userIconUrl" class="user-container-photo">
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item icon="el-icon-monitor" command="userhome">我的主页</el-dropdown-item>
          <el-dropdown-item icon="el-icon-star-off" command="collect">我的收藏</el-dropdown-item>
          <el-dropdown-item icon="el-icon-document" command="bloglist">我的博客</el-dropdown-item>
          <el-dropdown-item icon="el-icon-message" command="messages">
            <el-badge is-dot>我的消息</el-badge>
          </el-dropdown-item>
          <el-dropdown-item icon="el-icon-folder" command="poetfolder">我的诗单</el-dropdown-item>
          <el-dropdown-item icon="el-icon-switch-button" command="logout">退出账户</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import navi from './Navigation'
import query from './Query'
import QS from 'qs'
export default {
  name: 'Header',
  components: {navi, query},
  data () {
    return {
      isLogin: false,
      userIconUrl: 'http://img.pconline.com.cn/images/upload/upc/tx/itbbs/1410/19/c6/39851563_1413703610908.jpg',
      userInfo: {
        uid: '',
        icon: '',
        gender: '',
        username: '',
        usertag: ''
      }
    }
  },
  methods: {
    handleCommand (command) {
      if (command !== '') {
        if (command === 'logout') {
          // clear token and data
          sessionStorage.clear()
          this.isLogin = false
          this.$router.push({ path: '/' })
          return
        }
        this.$router.push({
          path: command,
          query: { wd: this.input2 }
        })
      }
    }
  },
  created () {
    let token = sessionStorage.getItem('token')
    if (token === null) {
      this.isLogin = false
      this.$router.push({ path: '/' })
      return
    }
    this.isLogin = true
    // get user icon url
    this.$axios.post('/ssoweb/user/getuser', QS.stringify({
      'token': token
    }), {
      headers: {
        'token': 'tokenHeader'
      }
    }).then((res) => {
      if (res.status === 200) {
        if (res.data.status === 200) {
          this.userIconUrl = res.data.data.iconUrl
        } else {
          this.isLogin = false
          sessionStorage.clear()
          this.$message.error(res.data.msg)
        }
      } else {
        this.$message.error('请求异常')
      }
    })
  }
}

</script>

<style scoped>

  .header {
    width: 100%;
    height: 70px;
    font-size: 22px;
    border-bottom: 1px solid #e6e6e6;
    background-color: #fff;
    /*float: left;*/
  }
  .header .web-logo {
    width: 5%;
    padding-right: 3%;
    float: left;
    margin-left: 5%;
    line-height: 70px;
  }
  .header .navi-top {
    width: 40%;
    float: left;
    line-height: 60px;
  }
  .header .top-query {
    width: 15%;
    float: left;
    line-height: 70px;
    margin-left: 10%;
  }

  .top-login-row {
    width: 22%;
    float: left;
    text-align: center;
    line-height: 70px;
  }

  .top-login-btn {
    font-family: simkai;
    font-size: 12px;
    text-align: center;
  }

  .login-btn-a {
    text-decoration: none;
    color: #606266;
    margin-right: 8px;
  }

  .user-container {
    width: 22%;
    float: left;
    text-align: center;
  }

  .user-container-photo {
    border-radius: 50%;
    width: 50px;
    height: 50px;
    margin-top: 10px;
    line-height: 50px;
  }

  .user-container-dropdown {
    width: 100%;
    height: 60px;
  }
</style>

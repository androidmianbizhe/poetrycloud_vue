<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import QS from 'qs'

export default {
  name: 'App',
  data () {
    return {
    }
  },
  methods: {
  },
  created () {
    let globalExpire = localStorage.getItem('shiyun_global_expire')
    if (globalExpire === null) {
      return
    }
    if (globalExpire > Date.parse(new Date())) {
      return
    }
    // 获取本地存储 密码
    let item = localStorage.getItem('shiyun_storepwd')
    if (item !== null && item === 'true') {
      this.name = localStorage.getItem('shiyun_phone')
      this.password = localStorage.getItem('shiyun_pwd')
    }
    // 自动登录
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

            // 存储sessionStorage
            sessionStorage.setItem('token', res.data.data)
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
}
</script>

<style>

@import "./assets/css/main.css";
@import "./assets/font/font.css";
</style>

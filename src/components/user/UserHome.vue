<template>
  <div class="wrapper">
    <pcheader></pcheader>
    <div class="user-home">
      <div class="user-home-self">
        <div class="user-des">
          <div class="user-img-container">
            <img class="user-img"
                 :src="userInfo.icon"/>
          </div>
          <el-row :gutter="20" class="user-img-right">
            <el-col :span="8">
              <div class="user-nick">{{ userInfo.username }}</div>
            </el-col>

            <el-col :span="4">
              <el-button size="mini" circle>{{ userInfo.gender }}</el-button>
            </el-col>
            <el-col :span="12">
              <div class="user-edit">
                <el-button type="primary" icon="el-icon-edit" size="mini" @click="editUserInfo()">编辑个人资料</el-button>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="20" class="user-img-right">
            <el-col :span="3">
              <el-button type="success" size="mini">12关注</el-button>
            </el-col>
            <el-col :span="3">
              <el-button type="danger" size="mini">32粉丝</el-button>
            </el-col>
            <el-col :span="3">
              <el-button type="primary" size="mini">44博客</el-button>
            </el-col>
            <el-col :span="3">
              <el-button type="warning" size="mini">21创作</el-button>
            </el-col>
            <el-col :span="3">
              <el-button type="info" size="mini">已关注</el-button>
            </el-col>
            <el-col :span="3">
              <el-button type="primary" size="mini" icon="el-icon-edit">创作</el-button>
            </el-col>
          </el-row>
          <el-row :gutter="20" class="user-img-right">
            <el-col :span="24">
              <div style="font-size: small">{{ userInfo.usertag }}</div>
            </el-col>
          </el-row>
        </div>
        <div class="user-advice">
          <div class="advice-item" v-for="i in 4" :key="i">
            <div class="advice-poet">
              <h5 class="poet-title">静夜思</h5>
              <p class="poet-content">床前明月光，疑是地上霜。举头望明月，低头思故乡。</p>
            </div>
            <div class="advice-pics">
              <el-carousel :interval="4000" type="card" height="150px">
                <el-carousel-item v-for="item in 6" :key="item">
                  <img class="advice-pics-carousel-pic"
                       src="http://img.pconline.com.cn/images/upload/upc/tx/itbbs/1410/19/c6/39851563_1413703610908.jpg"/>
                </el-carousel-item>
              </el-carousel>
            </div>
            <div class="advice-response">
              <el-row>
                <el-button size="mini" icon="el-icon-share" circle></el-button>
                <el-button size="mini" icon="el-icon-delete" circle></el-button>
                <li class="item-time el-icon-time">12-23 18:23</li>
                <li class="item-browser el-icon-view">123</li>
              </el-row>
            </div>
          </div>
        </div>
      </div>
      <div class="user-home-others">
        <p style="margin: 5px">相似用户</p>
        <div class="friend-link">
          <el-row class="link-row" v-for="i in 7" :key="i">
            <div class="advice-user">
              <img class="advice-user-img" src="http://img.pconline.com.cn/images/upload/upc/tx/itbbs/1410/19/c6/39851563_1413703610908.jpg">
              <p class="advice-nickname">墨中白你好吗羽</p>
              <el-button size="mini" class="user-tag" type="warning">酒中仙</el-button>
              <el-button size="mini" class="user-tag" type="success">关注</el-button>
            </div>
          </el-row>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import pcheader from '../common/Header'
import QS from 'qs'

export default {
  name: 'UserHome',
  components: {pcheader},
  data () {
    return {
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
    editUserInfo () {
      this.$router.push({path: '/edituser'})
    }
  },
  created () {
    let token = sessionStorage.getItem('token')
    if (token === null) {
      // 跳转到主界面
      this.$message.info('请先登录..')
      this.$router.push({ path: '/login' })
      return
    }
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
          console.log(res.data.data)
          this.userInfo.icon = res.data.data.iconUrl
          this.userInfo.username = res.data.data.nickname
          this.userInfo.gender = res.data.data.gender
          this.userInfo.birthday = res.data.data.birthday
          this.userInfo.usertag = res.data.data.tag
        } else {
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
  .user-home {
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    height: 100%;
    margin-top: 8px;
  }

  .user-home-self {
    width: 70%;
    border-radius: 4px;
    background-color: #fff;
    float: left;
  }

  .user-home-others {
    width: 29%;
    border-radius: 4px;
    float: left;
    margin-left: 8px;
  }

  .user-des {
    width: 100%;
    margin-top: 5px;
    border-radius: 4px;
    overflow: hidden;
  }

  .user-img-container {
    float: left;
    width: 20%;
    text-align: center;
    line-height: 100%;
  }

  .user-advice {
    float: bottom;
    width: 100%;
    margin-top: 8px;
    border-radius: 4px;
  }

  .user-img {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    margin: 8px;
  }

  .user-img-right {
    float: left;
    width: 80%;
    margin-top: 8px;
    margin-bottom: 5px;
    margin-left: 8px;
  }

  .user-nick {
    font-size: large;
    font-weight: bold;
  }

  .user-edit {
    float: right;
    text-align: right;
  }

  .advice-item {
    width: 100%;
    border-top: 1px solid #ccc;
  }

  .advice-poet {
    width: 90%;
    margin-left: 5%;
    margin-right: 5%;
    text-align: center;
  }

  .poet-title {
    margin-top: 8px;
  }

  .poet-content {
    margin-top: 8px;
  }

  .advice-pics {
    text-align: center;
    width: 90%;
    margin-top: 8px;
    margin-left: 5%;
    margin-right: 5%;
  }

  .advice-pics-carousel-pic {
    height: 150px;
  }

  .advice-response {
    width: 90%;
    margin: 8px 5%;
  }

  .item-browser {
    float: right;
    font-size: xx-small;
    margin-right: 8px;
    line-height: 25px;
  }

  .item-time {
    float: right;
    font-size: xx-small;
    line-height: 25px;
  }

  .friend-link {
    width:100%;
    text-align: center;
  }

  .link-row {
    width: 100%;
    text-align: center;
    background-color: #fff;
    border-radius: 4px;
    margin-bottom: 8px;
  }

  .advice-user {
    width: 100%;
    overflow: hidden;
    text-align: center;
    line-height: 56px;
  }

  .advice-user-img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin: 8px;
    float: left;
  }

  .advice-nickname {
    font-size: 14px;
    float: left;
    line-height: 56px;
  }

  .user-tag {
    margin-top: 8px;
    margin-left: 8px;
    font-size: x-small;
    padding: 5px;
  }
</style>

<template>
  <div class="wrapper">
    <pcheader></pcheader>
    <div class="edit-user-content">
      <h4>编辑个人资料</h4>
      <div class="edit-user">
        <div class="user-info">
          <div class="des-label">
            昵称:
          </div>
          <div class="user-nickname">
            <el-input v-model="usernameInput" placeholder="请输入新的昵称" @blur="getUsername" size="mini">

            </el-input>
          </div>
          <i v-if="usernameIsSuccess" size="mini" class="el-icon-loading btn-success" circle></i>
          <i v-if="!usernameIsSuccess" size="mini" class="el-icon-check btn-success" circle></i>
        </div>
        <div class="user-info">
          <div class="des-label">
            性别:
          </div>
          <div class="user-gender">
            <el-switch
              v-model="gender"
              active-text="男"
              inactive-text="女">
            </el-switch>
          </div>
        </div>
        <div class="user-info">
          <div class="des-label">
            签名:
          </div>
          <div class="user-gender">
            <el-input v-model="usertagInput" placeholder="请输入新的昵称" size="mini"></el-input>
          </div>
        </div>
        <div class="user-info">
          <div class="des-label">
            住址:
          </div>
          <div class="user-gender">
            <el-select v-model="selectedCountry" placeholder="请选择" size="mini">
              <el-option
                v-for="item in countries"
                :key="item.id"
                :label="item.name"
                :value="item.id">
              </el-option>
            </el-select>
            <el-select v-model="selectedProvince" placeholder="请选择" size="mini">
              <el-option
                v-for="item in provinces"
                :key="item.id"
                :label="item.name"
                :value="item.id">
              </el-option>
            </el-select>
            <el-select v-model="selectedCity" placeholder="请选择" size="mini">
              <el-option
                v-for="item in cities"
                :key="item.id"
                :label="item.name"
                :value="item.id">
              </el-option>
            </el-select>
          </div>
        </div>
        <div class="user-info">
          <div class="des-label">
            生日:
          </div>
          <div class="user-gender">
            <el-date-picker size="mini"
              v-model="birthday"
              type="datetime"
              placeholder="选择日期时间">
            </el-date-picker>
          </div>
        </div>
        <div class="user-info">
          <div class="des-label">
            职业:
          </div>
          <div class="user-nickname">
            <el-input v-model="jobInput" placeholder="请输入你的职业" size="mini"></el-input>
          </div>
        </div>
        <div class="user-info">
          <div class="des-label">
            上传用户头像:
          </div>
          <div>
            <el-upload
              action="">
              <img v-if="imageUrl" :src="imageUrl" class="avatar">
              <i v-if="!imageUrl" class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </div>
        </div>
      </div>
      <div>
        <el-button size="mini" class="btn-commit" type="primary">提交信息</el-button>
      </div>
    </div>
    <div class="edit-user-content">
      <h4>重新设置密码</h4>
      <div class="edit-user">
        <div class="user-info">
          <div class="des-label">
            请输入原密码:
          </div>
          <div class="user-nickname">
            <el-input v-model="input1" placeholder="请输入新的昵称" size="mini"></el-input>
          </div>
          <i v-if="usernameIsSuccess" size="mini" class="el-icon-loading btn-success" circle></i>
          <i v-if="!usernameIsSuccess" size="mini" class="el-icon-check btn-success" circle></i>
        </div>
        <div class="user-info">
          <div class="des-label">
            请输入新密码:
          </div>
          <div class="user-nickname">
            <el-input v-model="input1" placeholder="请输入新的昵称" size="mini"></el-input>
          </div>
          <i v-if="usernameIsSuccess" size="mini" class="el-icon-loading btn-success" circle></i>
          <i v-if="!usernameIsSuccess" size="mini" class="el-icon-check btn-success" circle></i>
        </div>
        <div class="user-info">
          <div class="des-label">
            请输入新密码:
          </div>
          <div class="user-nickname">
            <el-input v-model="input1" placeholder="请输入新的昵称" size="mini"></el-input>
          </div>
          <i v-if="usernameIsSuccess" size="mini" class="el-icon-loading btn-success" circle></i>
          <i v-if="!usernameIsSuccess" size="mini" class="el-icon-check btn-success" circle></i>
        </div>
      </div>
      <div>
        <el-button size="mini" class="btn-commit" type="primary">提交信息</el-button>
      </div>
    </div>
    <div class="edit-user-content">
      <h4>忘记密码</h4>
      <div class="edit-user">
        <div class="user-info">
          <div class="des-label">
            请输入手机号:
          </div>
          <div class="user-nickname">
            <el-input v-model="input1" placeholder="请输入新的昵称" size="mini"></el-input>
          </div>
          <i v-if="usernameIsSuccess" size="mini" class="el-icon-loading btn-success" circle></i>
          <i v-if="!usernameIsSuccess" size="mini" class="el-icon-check btn-success" circle></i>
        </div>
        <div class="user-info">
          <div class="des-label">
            请输入新密码:
          </div>
          <div class="user-nickname">
            <el-input v-model="input1" placeholder="请输入新的昵称" size="mini"></el-input>
          </div>
          <i v-if="usernameIsSuccess" size="mini" class="el-icon-loading btn-success" circle></i>
          <i v-if="!usernameIsSuccess" size="mini" class="el-icon-check btn-success" circle></i>
        </div>
        <div class="user-info">
          <div class="des-label">
            请输入新密码:
          </div>
          <div class="user-nickname">
            <el-input v-model="input1" placeholder="请输入新的昵称" size="mini"></el-input>
          </div>
          <i v-if="usernameIsSuccess" size="mini" class="el-icon-loading btn-success" circle></i>
          <i v-if="!usernameIsSuccess" size="mini" class="el-icon-check btn-success" circle></i>
        </div>
      </div>
      <div>
        <el-button size="mini" class="btn-commit" type="primary">提交信息</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import pcheader from '../common/Header'
import QS from 'qs'
export default {
  name: 'Blog',
  components: {pcheader},
  data () {
    return {
      usernameInput: '',
      usernameIsSuccess: true,
      gender: '女',
      usertagInput: '',
      countries: [
        {
          id: 12,
          name: '中国'
        },
        {
          id: 13,
          name: '俄罗斯'
        }
      ],
      selectedCountry: 12,
      provinces: [
        {
          id: 123,
          name: '湖北省'
        },
        {
          id: 234,
          name: '湖南省'
        }
      ],
      selectedProvince: 123,
      cities: [
        {
          id: 1234,
          name: '武汉'
        },
        {
          id: 3456,
          name: '黄冈'
        }
      ],
      selectedCity: 1234,
      birthday: '',
      jobInput: '',
      input1: 'hello world!',
      input2: '你好吗 天气好吗',
      input3: '程序员',
      imageUrl: ''
    }
  },
  methods: {
    getUsername () {
      // 判断是否为空
      if (this.usernameInput === '') {
        this.$message.info('请输入昵称')
        return
      }

      let token = sessionStorage.getItem('token')
      // 请求网络
      this.$axios.post('/ssoweb/user/queryname', QS.stringify({
        nickname: this.usernameInput,
        token: token
      })).then((res) => {
        if (res.status === 200) {
          if (res.data.status === 200) {
            this.usernameIsSuccess = (res.data.data === 'true')
          } else {
            this.$message.error(res.data.msg)
          }
        } else {
          this.$message.error('请求异常')
        }
      })
    }
  },
  created () {
    let theToken = sessionStorage.getItem('token')
    if (theToken === null) {
      this.$router.push({path: '/'})
    }
    // 初始化数据
    this.$axios.post('/ssoweb/user/getuser', QS.stringify({
      token: theToken
    }), {
      headers: {
        'token': 'tokenHeader'
      }
    }).then((res) => function () {
      alert('sad')
      if (res.status === 200) {
        if (res.data.status === 200) {
          // 获取信息成功
          this.usernameInput = res.data.nickname
          this.gender = res.data.gender
          this.usertagInput = res.data.tag
        } else {
          this.$message.error(res.data.msg)
        }
      } else {
        this.$message.info('请稍后再试')
      }
    })
  }
}
</script>

<style scoped>
  .edit-user-content {
    width: 70%;
    margin: 10px 15%;
    border-radius: 4px;
  }

  .user-info {
    border-radius: 4px;
    text-align: left;
    overflow: hidden;
    margin-top: 8px;
  }

  .btn-success {
    float: right;
    color: #3a8ee6;
  }

  .user-nickname {
    float: left;
    height: 30px;
    width: 20%;
  }

  .des-label {
    float: left;
    margin-right: 8px;
    line-height: 30px;
  }

  .user-gender {
    float: left;
    line-height: 28px;
    width: 80%;
  }

  .edit-user {
    background-color: #fff;
    border-radius: 4px;
    padding: 5px;
    margin-top: 5px;
  }

  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
  }
  .avatar {
    width: 30px;
    height: 30px;
    display: block;
  }
  .btn-commit {
    margin-top: 5px;
    float: right;
  }
</style>

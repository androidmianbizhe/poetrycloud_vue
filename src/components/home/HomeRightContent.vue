<template>
  <div class="home-right">
    <div class="right-todo">
      <el-row class="right-row">
        <el-button type="primary" class="todo-btn" @click="toWriteBlog()">写博客</el-button>
      </el-row>
      <el-row>
        <el-button type="primary" class="todo-btn">论诗词</el-button>
      </el-row>
      <el-row>
        <el-button type="primary" class="todo-btn">赏故事</el-button>
      </el-row>
    </div>

    <p style="margin-top: 10px;margin-bottom: 5px;">友情链接</p>
    <div class="friend-link">
      <el-row class="link-row">
        <el-button type="primary" class="link-btn" size="mini">按钮ss</el-button>
        <el-button type="success" class="link-btn" size="mini">成钮</el-button>
        <el-button type="info" class="link-btn" size="mini">信息</el-button>
        <el-button type="warning" class="link-btn" size="mini">按钮</el-button>
        <el-button type="danger" class="link-btn" size="mini">你好吗</el-button>
        <el-button type="primary" class="link-btn" size="mini">天气好吗</el-button>
        <el-button type="success" class="link-btn" size="mini">成钮</el-button>
        <el-button type="info" class="link-btn" size="mini">信息</el-button>
        <el-button type="warning" class="link-btn" size="mini">按钮</el-button>
        <el-button type="danger" class="link-btn" size="mini">危钮</el-button>
        <el-button type="primary" class="link-btn" size="mini">天气好吗</el-button>
        <el-button type="success" class="link-btn" size="mini">成钮</el-button>
        <el-button type="info" class="link-btn" size="mini">信息</el-button>
        <el-button type="warning" class="link-btn" size="mini">按钮</el-button>
        <el-button type="danger" class="link-btn" size="mini">危钮</el-button>
        <el-button type="primary" class="link-btn" size="mini">天气好吗</el-button>
        <el-button type="success" class="link-btn" size="mini">成钮</el-button>
        <el-button type="info" class="link-btn" size="mini">信息</el-button>
        <el-button type="warning" class="link-btn" size="mini">按钮</el-button>
        <el-button type="danger" class="link-btn" size="mini">危钮</el-button>
      </el-row>
    </div>
    <p style="margin-top: 10px;margin-bottom: 5px;">全网公告</p>
    <div class="right-notice">
      <a class="notice-a" href="">
        @本站将要有重大更新，与2019-8-10期间无法访问，请大家注意。
      </a>
    </div>

    <p style="margin-top: 10px;margin-bottom: 5px;">关于我们</p>
    <div class="right-about">
      <p class="about-info">@QQ交流群: 1284792582</p>
      <p class="about-info">@本站版本: V1.0-2019.05.09</p>
      <p class="about-info">@个人QQ号: 1367592252</p>
      <p class="about-info">@关于诗云: 个人运维，完全免费</p>
    </div>

  </div>
</template>

<script>

export default {
  name: 'HomeRightContent',
  data () {
    return {
      msg: '公告'
    }
  },
  methods: {
    toWriteBlog () {
      this.$router.push({
        path: '/writeblog'
      })
    }
  }
}

</script>

<style scoped>
  .home-right {
    /*font-family: simkai;*/
    background-color: transparent;
  }

  .right-todo {
    width:100%;
    background-color: #fff;
    border-radius: 4px;
  }

  .right-row {
  }

  .friend-link {
    width:100%;
    /*height: 250px;*/
    background-color: #fff;
    border-radius: 4px;
  }

  .link-row {
    width: 100%;
    text-align: center;
  }

  .link-btn {
    float: left;
    margin-top: 5px;
    margin-left: 5px;
    margin-bottom: 5px;
    padding: 8px;
  }

  .right-notice {
    /*height: 250px;*/
    background-color: #fff;
    border-radius: 4px;
    padding: 5px;
  }

  .notice-a {
    text-decoration: none;
    color: #409EFF;
    font-size: 14px;
  }

  .todo-btn {
    width:80%;
    margin: 10px 10%;
  }

  .right-about {
    /*width:100%;*/
    /*height: 250px;*/
    background-color: #fff;
    border-radius: 4px;
    padding: 5px;
  }
  .about-info {
    font-family: simfang;
    cursor: pointer;
    margin-bottom: 5px;
  }
</style>

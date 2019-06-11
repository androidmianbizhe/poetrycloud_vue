<template>
  <div class="home-right">
    <div class="right-todo">
      <el-row class="right-row">
        <el-button type="primary" class="todo-btn">写博客</el-button>
      </el-row>
      <el-row>
        <el-button type="primary" class="todo-btn">论诗词</el-button>
      </el-row>
      <el-row>
        <el-button type="primary" class="todo-btn">赏故事</el-button>
      </el-row>
    </div>

    <p style="margin-top: 10px;margin-bottom: 5px;">推荐用户</p>
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
</template>

<script>

export default {
  name: 'DiscoverRightContent',
  data () {
    return {
      msg: '公告'
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
  .todo-btn {
    width:80%;
    margin: 10px 10%;
  }
</style>

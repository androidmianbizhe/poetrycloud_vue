<template>
  <div class="home-right">
    <div class="right-todo">
      <el-row>
        <el-button type="primary" class="todo-btn">写博客</el-button>
      </el-row>
      <el-row>
        <el-button type="primary" class="todo-btn">论诗词</el-button>
      </el-row>
      <el-row>
        <el-button type="primary" class="todo-btn">赏故事</el-button>
      </el-row>
    </div>

    <p style="margin-top: 10px;margin-bottom: 5px;">推荐诗单</p>
    <div class="friend-link">
      <el-row class="item-content" v-for="i in 8" :key="i">
        <div class="poet-img-div">
          <img class="image" src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png">
        </div>
        <div class="poet-text-div">
          <p class="poet-text-p-title">你好吗 天气好吗</p>
          <p class="poet-text-p-des">安静覆盖率啊asasfdfdffff哭不噶开发商深刻的还是看到V回事诗单，不就行速度快V</p>
        </div>
      </el-row>
    </div>
  </div>
</template>

<script>

export default {
  name: 'SquareRightContent',
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

  .friend-link {
    width:100%;
    /*height: 250px;*/
    border-radius: 4px;
  }

  .item-content {
    margin-top: 8px;
    background-color: #fff;
    border-radius: 4px;
  }

  .poet-img-div {
    float: left;
    margin: 5px;
  }

  .poet-text-p-title {
    font-size: 12px;
    margin: 5px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }

  .poet-text-p-des {
    font-size: 12px;
    margin-left: 5px;
    color: #aaa;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .poet-text-div {

  }

  .image {
    width: 50px;
    height: 50px;
    border-radius: 4px;
  }
  .todo-btn {
    width:80%;
    margin: 10px 10%;
  }
</style>

<template>
  <div class="discover-main-content">
    <div class="advice-item" v-for="i in 4" :key="i">
      <div class="advice-user">
        <img class="advice-user-img" src="http://img.pconline.com.cn/images/upload/upc/tx/itbbs/1410/19/c6/39851563_1413703610908.jpg">
        <p class="advice-nickname">墨中白羽</p>
        <el-button size="mini" class="user-tag" type="warning">酒中仙</el-button>
        <el-button size="mini" class="user-tag" type="success">关注</el-button>
        <el-button size="mini" class="delete-tag el-icon-delete"></el-button>
      </div>
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
          <el-button size="mini" icon="el-icon-star-off" circle></el-button>
          <el-button size="mini" icon="el-icon-share" circle></el-button>
          <li class="item-time el-icon-time">12-23 18:23</li>
          <li class="item-browser el-icon-view">123</li>
        </el-row>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: 'DiscoverMainContent',
  data () {
    return {
      msg: '你好',
      currentDate: new Date()
    }
  },
  methods: {
  }
}

</script>

<style scoped>
  .discover-main-content {
    font-size: 20px;
    margin-left: 12%;
    background-color: transparent;
  }
  .advice-item {
    width: 100%;
    /*border-top: 1px solid #ccc;*/
    background-color: #fff;
    border-radius: 4px;
  }

  .advice-poet {
    width: 90%;
    margin-left: 5%;
    margin-right: 5%;
    text-align: center;
  }

  .advice-user {
    width: 100%;
    overflow: hidden;
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
    margin-top: 8px;
  }

  .user-tag {
    margin-top: 8px;
    margin-left: 8px;
    font-size: x-small;
    padding: 5px;
  }

  .delete-tag {
    margin-top: 8px;
    margin-right: 8px;
    font-size: x-small;
    padding: 5px;
    float: right;
  }

  .poet-title {
    /*margin-top: 8px;*/
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
    padding-bottom: 5px;
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
</style>

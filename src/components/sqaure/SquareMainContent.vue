<template>
  <div class="home-main-content">
    <div>
      <div class="blog-card">
        <el-row class="item-content" v-for="i in 12" :key="i">
          <div class="poet-user-div">
            <div>
              <img class="poet-user-div-img" src="http://img.pconline.com.cn/images/upload/upc/tx/itbbs/1410/19/c6/39851563_1413703610908.jpg">
              <el-button size="mini" class="poet-user-div-btn" type="success">关注</el-button>
            </div>
          </div>
          <div class="poet-text-div">
            <a href="" class="item-title">可配置定义更丰富的内容展示。</a>
            <p class="item-des">
              css去掉a超链接锚文本自带下划线样式 我们知道一般没有做css初始化,网页中带超链接文字会出现下划线,假如我们想去掉下划线该如何设置呢?接下来divcss5...
            </p>

            <div class="item-bottom">

              <li class="item-is-top">置顶</li>
              <li class="item-user-text">苏轼</li>
              <li class="item-browser el-icon-time">12-23 18:23</li>
              <li class="item-browser el-icon-view">123</li>
              <li class="item-browser el-icon-star-off">12</li>
            </div>

          </div>

          <div class="poet-img-div">

            <img style="border-radius: 3%" src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">

          </div>
        </el-row>

      </div>
      </div>
    </div>
</template>

<script>

export default {
  name: 'SquareMainContent',
  data () {
    return {
      msg: '你好',
      currentDate: new Date()
    }
  },
  methods: {

    click2: function (num) {
      alert(num + 'safasfafsasf')
    }
  }
}

</script>

<style scoped>
  .home-main-content {
    font-size: 20px;
    margin-left: 12%;
    background-color: transparent;
  }

  .poet-text-div {
    float: left;
    width: 76%;
  }

  .poet-user-div {
    float: left;
    width: 10%;
    text-align: center;
  }

  .poet-user-div-img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    line-height: 60px;
  }

  .poet-user-div-btn {
    margin-top: 8px;
    font-size: x-small;
    padding: 5px;
  }
  .poet-img-div {
    float: right;
    width: 12%;
    margin-bottom: 8px;
    margin-right: 8px;
  }
  .blog-card {
    border-radius: 2px;
  }

  .item-content {
    margin-bottom: 6px;
    border-bottom: 1px solid #ccc;
    padding-top: 8px;
    padding-bottom: 2px;
    background-color: #ffffff;
    border-radius: 4px;
  }

  .item-title {
    text-decoration:none;
    color: #2c3e50;
    font-size: 18px;
    margin-left: 8px;
    margin-top: 8px;
  }

  .item-des {
    color: gray;
    font-size: medium;
    margin-top: 8px;
    margin-left: 8px;
  }

  .item-bottom {
    /*margin-left: 8px;*/
    /*margin-top: 8px;*/
    width: 100%;
    height: 25px;
  }

  .item-browser {
    float: right;
    color: gray;
    margin-left: 20px;
    margin-right: 15px;
    font-size: 12px;
    line-height: 25px;
  }
  .image {
    width: 100%;
    display: block;
  }

  .item-is-top {
    border: 1px solid #ccc;
    border-radius: 6px;
    float: left;
    font-size: 12px;
    padding: 2px;
    margin: 5px;
    list-style: none;
  }

  .item-user-text {
    list-style: none;
    border: 1px solid #ccc;
    border-radius: 6px;
    float: left;
    font-size: 12px;
    margin: 5px;
    padding: 2px;
  }
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }

</style>

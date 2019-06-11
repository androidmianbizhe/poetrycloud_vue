<template>
  <div class="wrapper">
    <pcheader></pcheader>
    <div class="collection-content">
      <div class="poet-folder-user">
        <el-row>
          每日推荐: 每日凌晨6:00更新，根据个人口味生成
          <li class="item-browser el-icon-time">2012-09-12 12:34</li>
        </el-row>
      </div>
      <el-row class="item-content" v-for="i in 10" :key="i">
        <div class="poet-text-div">
          <a href="" class="item-title">可配置定义更丰富的内容展示。</a>
          <p class="item-des">
            css去掉a超链接锚文本自带下划线样式 我们知道一般没有做css初始化,网页中带超链接文字会出现下划线,假如我们想去掉下划线该如何设置呢?接下来...
            css去掉a超链接锚文本自带下划线样式 我们知道一般没有做css初始化,网页中带超链接文字会出现下划线,假如我们想去掉下划线该如何设置呢?接下来...
          </p>

          <div class="item-bottom">
            <a class="item-author" href="" >
              <img class="item-uicon" src="http://img.pconline.com.cn/images/upload/upc/tx/itbbs/1410/19/c6/39851563_1413703610908.jpg"/>
              李小白
            </a>

            <li class="item-browser el-icon-time">12-23 18:23</li>
            <li class="item-browser el-icon-view">123</li>
            <li class="item-browser el-icon-star-off">12</li>
            <li class="item-browser el-icon-lollipop">23</li>
          </div>
        </div>

        <div class="poet-img-div">
          <img style="border-radius: 3%" src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
        </div>
      </el-row>
    </div>
  </div>
</template>

<script>
import pcheader from '../common/Header'
export default {
  name: 'RecommendBlog',
  components: { pcheader },
  data () {
    return {
      msg: 'hello world!'
    }
  }
}
</script>

<style scoped>
  .collection-content {
    width: 70%;
    margin-left: 15%;
    margin-right: 15%;
    margin-top: 8px;
  }

  .poet-folder-user {
    font-size: 14px;
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
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .item-bottom {
    margin-left: 8px;
    margin-top: 8px;
  }

  .item-author {
    text-decoration: none;
    color: gray;
    font-size: 12px;
    float: left;
  }

  .item-uicon {
    width: 20px;
    height: 20px;
    float: left;
    margin-right: 8px;
    margin-bottom: 2px;
    border-radius: 50%;
  }

  .item-browser {
    float: right;
    color: gray;
    margin-left: 20px;
    font-size: 12px;
    line-height: 25px;
    margin-right: 5px;
  }

  .poet-img-div {
    float: right;
    width: 10%;
    padding-bottom: 5px;
    padding-right: 8px;
  }

  .poet-text-div {
    float: left;
    width: 89%;
  }

  .image {
    width: 100%;
    display: block;
  }
</style>

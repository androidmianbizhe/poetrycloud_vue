<template>
  <div class="home-main-content">
    <el-carousel :interval="4000" arrow="always" class="bannner">
      <el-carousel-item v-for="item in pics" :key="item">
        <img :src='item'>
      </el-carousel-item>
    </el-carousel>
    <div>
      <div class="poet-card">
        <div>
          <span class="recommend-des"><strong>诗单推荐</strong></span>
          <a class="more" href="">查看更多>></a>
        </div>
        <el-row class="item-content" v-for="i in 2" :key="i" @click="click2('1')">
          <el-col :span="12">
            <div class="poet-folder-text-div">
              <a href="" class="item-title">可配置定义更丰富的内容展示。</a>
              <p class="item-folder-des">
                css去掉a超链接锚文本自带下划线样式 我们知道一般没有做css初始化,网页中带超链接文字会出现下划线,假如我们想去掉下划线该如何设置呢?接下来divcss5...
              </p>
            </div>
            <div class="poet-img-div">
              <img style="border-radius: 3%"
                   src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                   class="image">
            </div>
          </el-col>
          <el-col :span="12">
            <div class="poet-folder-text-div">
              <a href="" class="item-title">可配置定义更丰富的内容展示。</a>
              <p class="item-folder-des">
                css去掉a超链接锚文本自带下划线样式 我们知道一般没有做css初始化,网页中带超链接文字会出现下划线,假如我们想去掉下划线该如何设置呢?接下来divcss5...
              </p>
            </div>
            <div class="poet-img-div">
              <img style="border-radius: 3%"
                   src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                   class="image">
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="blog-card">
        <div>
          <span class="recommend-des"><strong>博客推荐</strong></span>
          <a class="more" href="">查看更多>></a>
        </div>
        <el-row class="item-content" v-for="i in 2" :key="i">
          <div class="poet-text-div">
            <a href="" class="item-title">可配置定义更丰富的内容展示。</a>
            <p class="item-des">
              css去掉a超链接锚文本自带下划线样式 我们知道一般没有做css初始化,网页中带超链接文字会出现下划线,假如我们想去掉下划线该如何设置呢?接下来...
              css去掉a超链接锚文本自带下划线样式 我们知道一般没有做css初始化,网页中带超链接文字会出现下划线,假如我们想去掉下划线该如何设置呢?接下来...
            </p>
            <div class="item-bottom">
              <a class="item-author" href="">
                <img class="item-uicon"
                     src="http://img.pconline.com.cn/images/upload/upc/tx/itbbs/1410/19/c6/39851563_1413703610908.jpg"/>
                李小白
              </a>
              <li class="item-browser el-icon-time">12-23 18:23</li>
              <li class="item-browser el-icon-view">123</li>
            </div>
          </div>
          <div class="poet-img-div">
            <img style="border-radius: 3%"
                 src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                 class="image">
          </div>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomeMainContent',
  data () {
    return {
      msg: '你好',
      pics: [
        'https://upload-images.jianshu.io/upload_images/3627484-55113662646cdae8.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/750/format/webp',
        'https://upload-images.jianshu.io/upload_images/3627484-5801d92033640ddc.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/750/format/webp',
        'https://upload-images.jianshu.io/upload_images/14715425-49e1dccf1fcf51da.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1000/format/webp'
      ],
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

  .bannner {
    background-color: #d3dce6;
    height: 330px;
  }

  .poet-card {
    margin-top: 10px;
    border-radius: 2px;
    background-color: transparent;
  }

  .poet-text-div {
    float: left;
    width: 86%;
  }

  .poet-folder-text-div {
    float: left;
    width: 85%;
    border-left: 1px solid #ccc;
  }

  .poet-img-div {
    float: right;
    width: 12%;
    margin-bottom: 8px;
    margin-right: 8px;
  }

  .blog-card {
    margin-top: 10px;
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
    text-decoration: none;
    color: #2c3e50;
    font-size: 16px;
    margin-left: 8px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
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

  .item-folder-des {
    color: gray;
    font-size: medium;
    margin-top: 8px;
    margin-left: 8px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
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
    margin-right: 15px;
    font-size: 12px;
  }

  .more {
    float: right;
    font-size: 14px;
    text-decoration: none;
    color: cornflowerblue;
    line-height: 30px;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }

  .recommend-des {
    font-size: 18px;
    font-family: simkai;
  }

</style>

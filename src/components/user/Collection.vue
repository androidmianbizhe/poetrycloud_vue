<template>
  <div class="wrapper">
    <pcheader></pcheader>
    <div class="collection-content">
      <el-tabs type="border-card">
        <el-tab-pane label="相关博客">

          <el-row class="blog-item-content" v-for="i in 5" :key="i">
            <div class="blog-text-div">
              <a href="" class="blog-item-title">可配置定义更丰富的内容展示。</a>
              <p class="blog-item-des">
                css去掉a超链接锚文本自带下划线样式 我们知道一般没有做css初始化,网页中带超链接文字会出现下划线,假如我们想去掉下划线该如何设置呢?接下来...
                css去掉a超链接锚文本自带下划线样式 我们知道一般没有做css初始化,网页中带超链接文字会出现下划线,假如我们想去掉下划线该如何设置呢?接下来...
              </p>
              <el-row class="blog-item-bottom">
                <a class="blog-item-author" href="">
                  <img class="blog-item-uicon"
                       src="http://img.pconline.com.cn/images/upload/upc/tx/itbbs/1410/19/c6/39851563_1413703610908.jpg"/>
                  李小白
                </a>
                <li class="blog-item-browser el-icon-delete"></li>
                <li class="blog-item-browser el-icon-share"></li>
                <li class="blog-item-browser el-icon-view">123</li>
              </el-row>
            </div>
            <div class="blog-img-div">
              <img style="border-radius: 3%;width: 90px"
                   src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                   class="image">
            </div>
          </el-row>
          <el-pagination class="blog-page"
                         background
                         layout="prev, pager, next"
                         :total="1000">
          </el-pagination>

        </el-tab-pane>

        <el-tab-pane label="相关古诗">

          <div class="poet-item" v-for="i in 12" :key="i">
            <div class="poet-content">
              <h5 class="poet-title">静夜思_李白_唐</h5>
              <p class="poet-content">床前明月光，疑是地上霜。举头望明月，低头思故乡。</p>
            </div>
            <div class="poet-bottom">
              <el-row>
                <i class="poet-item-browser el-icon-delete"></i>
                <li class="blog-item-browser el-icon-share"></li>
                <i class="poet-item-browser iconfont iconicon_community_line">123</i>
                <i class="poet-item-browser el-icon-view">123</i>
              </el-row>
            </div>
          </div>

          <el-pagination class="poet-page"
                         background
                         layout="prev, pager, next"
                         :total="1000">
          </el-pagination>

        </el-tab-pane>
        <el-tab-pane label="相关创作">
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

          <el-pagination class="folder-page"
                         background
                         layout="prev, pager, next"
                         :total="1000">
          </el-pagination>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import pcheader from '../common/Header'
export default {
  name: 'Collection',
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
  }
  /*
    ==========================================================
    相关博客
    ==========================================================
  */
  .blog-item-content {
    border-bottom: 1px solid #ccc;
    background-color: #ffffff;
    border-radius: 4px;
    padding: 8px;
  }

  .blog-item-title {
    text-decoration: none;
    color: #2c3e50;
    font-size: 18px;
    margin-top: 8px;
  }

  .blog-item-des {
    color: gray;
    font-size: medium;
    margin-top: 8px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .blog-item-bottom {
    margin-top: 8px;
  }

  .blog-item-author {
    text-decoration: none;
    color: gray;
    font-size: 12px;
    float: left;
  }

  .blog-item-uicon {
    width: 20px;
    height: 20px;
    float: left;
    margin-right: 8px;
    margin-bottom: 2px;
    border-radius: 50%;
  }

  .blog-item-browser {
    float: right;
    color: gray;
    margin-left: 20px;
    margin-right: 15px;
    font-size: 12px;
  }

  .blog-text-div {
    float: left;
    width: 86%;
  }

  .blog-img-div {
    float: right;
    margin-bottom: 8px;
  }

  .blog-page {
    margin-top: 5px;
    text-align: center;
    margin-bottom: 5px;
  }

  /*
    =================================================
    相关古诗
    =================================================
  */
  .poet-item {
    width: 100%;
    background-color: #fff;
    border-radius: 4px;
    margin-top: 10px;
    border-bottom: 1px solid #ccc;
  }

  .poet-content {
    width: 90%;
    margin-left: 5%;
    margin-right: 5%;
    text-align: center;
    margin-top: 8px;
  }

  .poet-title {
    /*margin-top: 8px;*/
    /*padding-top: 8px;*/
  }

  .poet-bottom {
    width: 90%;
  }

  .poet-item-browser {
    float: right;
    color: gray;
    margin-left: 20px;
    font-size: 12px;
    right: 28px;
    line-height: 16px;
  }

  .poet-page {
    margin-top: 5px;
    text-align: center;
    margin-bottom: 5px;
  }

  /*
    ======================================================
    创作
    ======================================================
  */
  .folder-page {
    margin-top: 5px;
    text-align: center;
    margin-bottom: 5px;
  }

  .user-advice {
    float: bottom;
    width: 100%;
    margin-top: 8px;
    border-radius: 4px;
  }

  .advice-item {
    width: 100%;
    border-radius: 4px;
    border-bottom: 1px solid #ccc;
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
</style>

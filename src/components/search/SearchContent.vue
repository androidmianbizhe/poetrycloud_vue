<template>
  <div class="wrapper">
    <div class="search-content">
      <div class="search-res">
        <el-tabs type="border-card">
          <el-tab-pane label="相关博客">

            <el-row class="blog-item-content" v-for="i in 5" :key="i">
              <div class="blog-text-div">
                <a href="" class="blog-item-title">可配置定义更丰富的内容展示。</a>
                <p class="blog-item-des">
                  css去掉a超链接锚文本自带下划线样式 我们知道一般没有做css初始化,网页中带超链接文字会出现下划线,假如我们想去掉下划线该如何设置呢?接下来...
                  css去掉a超链接锚文本自带下划线样式 我们知道一般没有做css初始化,网页中带超链接文字会出现下划线,假如我们想去掉下划线该如何设置呢?接下来...
                </p>
                <el-row class="blog-bottom-row">
                  <a class="blog-item-author" href="">
                    <img class="blog-item-uicon"
                         src="http://img.pconline.com.cn/images/upload/upc/tx/itbbs/1410/19/c6/39851563_1413703610908.jpg"/>
                    李小白
                  </a>
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
          <el-tab-pane label="相关诗单">
            <div class="folder-content">
              <el-row class="folder-item-content" v-for="i in 8" :key="i">
                <div class="folder-img-div">
                  <img class="folder-image" src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png">
                </div>
                <div class="folder-text-div">
                  <p class="folder-text-p-title">你好吗 天气好吗</p>
                  <p class="folder-text-p-des">
                    安静覆盖率啊asasfdfdffff哭不噶开发商深刻的还是看到V回事诗单，不就行速度快V
                  </p>
                </div>
              </el-row>
            </div>

            <el-pagination class="folder-page"
                           background
                           layout="prev, pager, next"
                           :total="1000">
            </el-pagination>
          </el-tab-pane>
        </el-tabs>
      </div>

      <div class="search-recom">
        <div class="search-recom-user">
          <p class="search-recom-h">相关用户</p>
          <el-row class="search-recom-row" v-for="i in 7" :key="i">
            <div class="search-recom-user">
              <img class="search-recom-user-img"
                   src="http://img.pconline.com.cn/images/upload/upc/tx/itbbs/1410/19/c6/39851563_1413703610908.jpg">
              <p class="search-recom-nickname">墨中白你好吗羽</p>
              <el-button size="mini" class="search-recom-user-tag" type="warning">酒中仙</el-button>
              <el-button size="mini" class="search-recom-user-tag" type="success">关注</el-button>
            </div>
          </el-row>
        </div>
      </div>
    </div>
  </div>

</template>

<script>

export default {
  name: 'SearchContent',
  data () {
    return {}
  },
  methods: {}
}
</script>

<style scoped>

  /*
    ==========================================================
    分类
    ==========================================================
  */
  .search-content {
    /*width: 100%;*/
  }

  .search-res {
    float: left;
    width: 60%;
    margin-left: 5%;
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
  .blog-bottom-row {
    margin-top: 8px;
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
    诗单
    ======================================================
  */
  .folder-page {
    margin-top: 5px;
    text-align: center;
    margin-bottom: 5px;
  }

  .folder-content {
    width:100%;
    border-radius: 4px;
  }

  .folder-item-content {
    margin-top: 8px;
    background-color: #fff;
    border-radius: 4px;
    border-bottom: 1px solid #ccc;
  }

  .folder-img-div {
    float: left;
    margin: 5px;
  }

  .folder-text-div {

  }

  .folder-text-p-title {
    font-size: 12px;
    margin: 5px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .folder-text-p-des {
    font-size: 12px;
    margin-left: 5px;
    color: #aaa;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .folder-image {
    width: 50px;
    height: 50px;
    border-radius: 4px;
  }
  /*
    ======================================================
    分类-推荐用户
    ======================================================
  */
  .search-recom {
    float: left;
    width: 25%;
    margin-right: 5%;
  }

  .search-recom-row {
    width: 100%;
    text-align: center;
    background-color: #fff;
    border-radius: 4px;
    margin-bottom: 8px;
  }

  .search-recom-user {
    width: 100%;
    margin-left: 8px;
  }

  .search-recom-h {
    margin: 5px;
  }

  .search-recom-user-img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin: 8px;
    float: left;
  }

  .search-recom-nickname {
    font-size: 14px;
    float: left;
    line-height: 56px;
  }

  .search-recom-user-tag {
    margin-top: 8px;
    margin-left: 8px;
    font-size: x-small;
    padding: 5px;
  }

</style>

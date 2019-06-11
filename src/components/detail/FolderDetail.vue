<template>
  <div class="wrapper">
    <pcheader></pcheader>
    <div class="folder-right">
      <div class="poet-folder-user">
        <el-row>
          诗单名称: 四月是你的谎言
          <el-button class="detail-user-collect" type="primary" size="mini">收藏诗单</el-button>
          诗单创建者:<a href="" class="poet-folder-user-a">李小白</a>
          <el-button class="detail-user-care" type="success" size="mini">关注用户</el-button>
          <i class="item-browser el-icon-time">2012-09-12 12:34</i>
          <i class="item-browser el-icon-view">123</i>
          <i class="item-browser el-icon-lollipop">1223</i>
        </el-row>
      </div>
      <div class="advice-item" v-for="i in 7" :key="i">
        <div class="advice-poet">
          <h5 class="poet-title"><a class="item-title-a" href="">静夜思_李白_唐</a></h5>
          <p class="poet-content">床前明月光，疑是地上霜。举头望明月，低头思故乡。</p>
        </div>

        <div class="advice-response">
          <el-row>
            <li class="item-browser el-icon-view">123</li>
            <li class="item-browser el-icon-chat-dot-square">123</li>
            <li class="item-browser el-icon-star-off">123</li>
            <li class="item-browser el-icon-lollipop">13</li>
          </el-row>
        </div>
      </div>
      <div class="detail-blog-btns">
        <el-button class="detail-blog-btn" type="primary" icon="el-icon-share" circle plain size="mini"></el-button>
        <el-button class="detail-blog-btn" type="primary" icon="el-icon-star-off" circle plain size="mini"></el-button>
        <el-button class="detail-blog-btn" type="primary" icon="el-icon-lollipop" circle plain size="mini"></el-button>
      </div>
      <div class="detail-blog-comments">
        <div class="detail-blog-input">
          <el-input placeholder="写下你的评论吧.." v-model="input2">
            <template slot="append"><el-button>回复</el-button></template>
          </el-input>
        </div>
        <div class="detail-blog-users-comment" v-for="i in 3" :key="i">
          <div style="width: 100%">
            <div class="detail-blog-photo">
              <a href="">
                <img class="detail-user-img" src="http://img.pconline.com.cn/images/upload/upc/tx/itbbs/1410/19/c6/39851563_1413703610908.jpg"/>
              </a>
            </div>
            <div class="detail-blog-info-right">
              <div class="detail-blog-info-right-top">
                <a href="" class="detail-user-name">李小白</a>
              </div>
              <div class="detail-blog-info-right-bottom">
                <i class="info-time el-icon-time">1998-10-2 12:12</i>
                <i class="info-time el-icon-office-building">3楼</i>
              </div>
            </div>
          </div>
          <div>
            <div class="detail-blog-users-comment-content">
              庐州的月光在我心上
              太多的伤也难诉衷肠
              庐州的月光在我心上
              太多的伤也难诉衷肠。
            </div>
            <div class="detail-blog-users-comment-content-price">
              <el-row>
                <i class="res-btn el-icon-lollipop">12</i>
                <i class="res-btn el-icon-chat-round" @click="response()">回复</i>
              </el-row>
            </div>
          </div>
          <div class="detail-blog-users-comment-content-response" v-for="q in 3" :key="q">
            <a href="" class="detail-comment-user-name">李白</a>
            回复
            <a href="" class="detail-comment-user-name">杜甫</a>
            你好吗天气好吗？
            <i class="detail-comment-user-time el-icon-time">1998-10-2 12:12</i>
            <i class="detail-comment-user-time el-icon-lollipop">123</i>
            <el-button type="text" icon="el-icon-chat-round" @click="response()">回复</el-button>
          </div>
          <div class="detail-blog-users-comment-content-input" v-if="responseCommentInput">
            <el-input placeholder="写下你的评论吧.." v-model="input2">
              <template slot="append">发表</template>
            </el-input>
          </div>
        </div>

      </div>
    </div>
  </div>

</template>

<script>
import pcheader from '../common/Header'
export default {
  name: 'PoetFolder',
  components: {pcheader},
  data () {
    return {
      input2: '',
      responseCommentInput: ''
    }
  },
  methods: {
  },
  mounted () {
  }
}
</script>

<style scoped>
  .folder-right {
    width: 76%;
    float: left;
    height: 100%;
    margin-left: 12%;
    margin-left: 12%;
    margin-top: 8px;
    border-radius: 4px;
  }

  .poet-folder-user {
    font-size: 14px;
  }

  .poet-folder-user-a {
    text-decoration: none;
    color: #409EFF;
  }

  .advice-item {
    width: 100%;
    background-color: #fff;
    border-radius: 4px;
    margin-bottom: 10px;
  }

  .advice-poet {
    width: 90%;
    margin-left: 5%;
    margin-right: 5%;
    text-align: center;
  }

  .poet-title {
    /*margin-top: 8px;*/
    padding-top: 8px;
  }

  .poet-content {
    margin-top: 8px;
  }

  .advice-response {
    width: 90%;
  }

  .item-browser {
    float: right;
    color: gray;
    margin-left: 20px;
    font-size: 12px;
    line-height: 25px;
  }

  .item-title-a {
    text-decoration: none;
    color: #666;
  }
  .detail-user-care {
    padding: 3px;
  }
  .detail-user-collect {
    padding: 3px;
  }
  .detail-blog-btns {
    width: 100%;
    overflow: hidden;
    margin-right: 5px;
    padding-bottom: 6px;
    /*border-bottom: 1px dashed #ccc;*/
  }

  .detail-blog-btn {
    float: right;
    margin-left: 20px;
  }

  .detail-blog-comments {
    width: 99%;
    overflow: hidden;
    padding: 5px;
    background-color: #fff;
  }
  .detail-blog-input {
    margin-bottom: 8px;
  }

  .detail-blog-users-comment {
    overflow: hidden;
    border-bottom: 1px dashed #ccc;
    border-radius: 4px;
    margin-bottom: 6px;
  }

  .detail-blog-users-comment-content {
    float: left;
    width: 85%;
    font-size: 15px;
  }
  .detail-blog-users-comment-content-price {
    float: left;
    width: 15%;
  }
  .detail-blog-users-comment-content-response {
    width: 95%;
    margin-left: 5%;
    overflow: hidden;
    margin-top: 8px;
    font-size: 14px;
  }

  .detail-comment-user-name {
    font-size: 16px;
    text-decoration: none;
    color: #21A0FF;
    margin-left: 5px;
  }
  .detail-comment-user-time {
    font-size: 12px;
    color: #aaa;
    cursor: pointer;
  }
  .detail-blog-users-comment-content-input {
    width: 95%;
    margin-left: 5%;
  }

  .res-btn {
    font-size: 14px;
    color: #21A0FF;
    cursor: pointer;
  }

  .detail-user-img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    float: left;
  }
  .detail-blog-photo{
    float: left;
  }
  .detail-blog-info-right {
    float: left;
    margin-left: 5px;
  }
  .detail-blog-info-right-top {
    overflow: hidden;
  }
  .detail-user-name {
    font-size: 16px;
    text-decoration: none;
    color: #21A0FF;
    margin-left: 5px;
    float: left;
  }

  .detail-blog-info-right-bottom {
    overflow: hidden;
  }
  .detail-user-img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    float: left;
  }
  .detail-user-name {
    font-size: 16px;
    text-decoration: none;
    color: #21A0FF;
    margin-left: 5px;
    float: left;
  }

  .info-time {
    color: #aaa;
    font-size: 12px;
    line-height: 20px;
    margin-right: 20px;
    overflow: hidden;
  }
</style>

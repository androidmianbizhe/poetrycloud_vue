<template>
  <div class="wrapper">
    <div class="detail-content">
      <div class="detail-blog-title">
        <h2>{{ title }}</h2>
      </div>
      <div class="detail-blog-info">
        <div class="detail-blog-photo">
          <!--<a href="">-->
            <!--<img class="detail-user-img" src="http://img.pconline.com.cn/images/upload/upc/tx/itbbs/1410/19/c6/39851563_1413703610908.jpg"/>-->
          <!--</a>-->
        </div>
        <div class="detail-blog-info-right">
          <div class="detail-blog-info-right-top">
            <a class="detail-user-name">李小白</a>
            <!--<el-button class="detail-user-care" type="success" size="mini">关注</el-button>-->
          </div>
          <div class="detail-blog-info-right-bottom">
            <i class="info-time el-icon-time">唐</i>
            <i class="info-view el-icon-lollipop">23</i>
            <i class="info-view el-icon-star-off">234</i>
            <i class="info-view el-icon-chat-round">214</i>
            <i class="info-view el-icon-view">199</i>
          </div>
        </div>
      </div>
      <div class="detail-blog-content">
        <div class="advice-poet">
          <p class="poet-content">床前明月光，疑是地上霜。举头望明月，低头思故乡。</p>
        </div>
        <div class="advice-trans">
          <h5>翻译</h5>
          <p class="poet-detail-trans">
            明亮的月光洒在床前的窗户纸上，好像地上泛起了一层霜。
            我禁不住抬起头来，看那天窗外空中的一轮明月，不由得低头沉思，想起远方的家乡。
          </p>
          <h5>注释</h5>
          <p class="poet-detail-trans">明亮的月光洒在床前的窗户纸上，好像地上泛起了一层霜。
            我禁不住抬起头来，看那天窗外空中的一轮明月，不由得低头沉思，想起远方的家乡。</p>
        </div>
      </div>
      <div class="detail-blog-btns">
        <el-button class="detail-blog-btn" type="primary" icon="el-icon-share" circle plain size="mini"></el-button>
        <el-button class="detail-blog-btn" type="primary" icon="el-icon-star-off" circle plain size="mini"></el-button>
        <el-button class="detail-blog-btn" type="primary" icon="el-icon-folder-add" circle plain size="mini" @click="collectPoet()"></el-button>
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
    <el-dialog title="添加到诗单" :visible.sync="dialogFormVisible" width="400px">
      <el-form :model="form">
        <el-form-item label="诗单名称" :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>

export default {
  name: 'PoetDetail',
  data () {
    return {
      title: '静夜思',
      msg: '',
      input2: '',
      responseCommentInput: false,
      dialogFormVisible: false,
      form: {
        name: '',
        region: ''
      },
      formLabelWidth: '100px'
    }
  },
  methods: {
    response () {
      this.responseCommentInput = !this.responseCommentInput
    },
    collectPoet () {
      this.dialogFormVisible = true
    }
  }
}
</script>

<style scoped>
  .detail-content {
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    background-color: #fff;
  }
  .detail-blog-title {
    padding-top: 10px;
    padding-bottom: 10px;
    text-align: center;
    font-family: simfang;
  }

  .detail-blog-info {
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    overflow: hidden;
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

  .info-view {
    line-height: 20px;
    color: #aaa;
    font-size: 12px;
    margin-right: 20px;
    overflow: hidden;
  }

  .detail-blog-content {
    width: 70%;
    overflow: hidden;
    margin: 5px 15%;
  }

  .detail-blog-btns {
    width: 70%;
    overflow: hidden;
    margin: 5px 15%;
    padding-bottom: 6px;
    border-bottom: 1px dashed #ccc;
  }

  .detail-blog-btn {
    float: right;
    margin-left: 20px;
  }

  .detail-blog-comments {
    width: 70%;
    overflow: hidden;
    margin: 5px 15%;
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

  .advice-poet {
    width: 90%;
    margin-left: 5%;
    margin-right: 5%;
    text-align: center;
  }

  .poet-content {
    margin-top: 8px;
    font-family: simkai;
    font-size: 18px;
    padding-bottom: 8px;
    border-bottom: 1px dashed #ccc;
  }

  .advice-trans {
    width: 90%;
    margin-top: 8px;
    margin-left: 5%;
    margin-right: 5%;
  }

  .poet-detail-trans {
    text-align: left;
    margin-bottom: 8px;
    font-size: 14px;
  }
</style>

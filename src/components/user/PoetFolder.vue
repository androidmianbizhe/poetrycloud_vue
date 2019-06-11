<template>
  <div class="wrapper">
    <pcheader></pcheader>
    <div class="folder-left">
      <el-row>
        <el-col :span="24">
          <el-menu
            :default-active='defaultIndex'
            @open="handleOpen"
            @close="handleClose"
            @select="handlerSelect">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-setting" @click.stop="editCollectFolder()"></i>
                <span>我收藏的诗单</span>
              </template>
              <el-menu-item-group>
                <el-menu-item v-for="(c, i) in collectFolder" :key='i' :index="c.id +''" @click="folderClick(c.id)">
                  <i class="el-icon-delete" v-show="collectIsShow" @click="deleteCollect(c.id)"></i>
                  {{ c.name }}
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-setting" @click.stop="editCreateFolder()"></i>
                <span>我创建的诗单</span>
              </template>
              <el-menu-item-group>
                <el-menu-item v-for="(c, i) in createFolder" :key='i' :index="c.id + ''" @click="folderClick(c.id)">
                  <i class="el-icon-edit" v-show="createIsShow" @click="renameCreateFolder(c.id)"></i>
                  <i class="el-icon-delete" v-show="createIsShow" @click="deleteCreateFolder(c.id)"></i>
                  {{ c.name }}
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="3">
              <i class="el-icon-edit"></i>
              <span slot="title">创建新的诗单</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </div>
    <el-dialog title="创建诗单" :visible.sync="dialogCreateFormVisible">
      <el-form :model="form">
        <el-form-item label="诗单名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="诗单描述" :label-width="formLabelWidth">
          <el-input v-model="form.des" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer">
        <el-button @click="dialogCreateFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogSure()">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog title="编辑诗单" :visible.sync="dialogEditFormVisible">
      <el-form :model="form">
        <el-form-item label="诗单名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="诗单描述" :label-width="formLabelWidth">
          <el-input v-model="form.des" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer">
        <el-button @click="dialogEditFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="sureRenameCreateFolder()">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog
      title="提示"
      :visible.sync="deleteCollectDialogVisible"
      width="30%"
      :before-close="handleDialogClose">
      <span>确定删除此诗单吗？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="deleteCollectDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="sureDeleteCollectFolder()">确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog
      title="提示"
      :visible.sync="deleteCreateDialogVisible"
      width="30%"
      :before-close="handleDialogClose">
      <span>确定删除此诗单吗？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="deleteCreateDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="sureDeleteCreateFolder()">确 定</el-button>
      </span>
    </el-dialog>
    <div class="folder-right">
      <div class="poet-folder-user">
        <el-row>
        诗单创建者:<a href="" class="poet-folder-user-a">李小白</a>
          <el-button class="detail-user-care" type="success" size="mini">关注</el-button>
          <li class="item-browser el-icon-time">2012-09-12 12:34</li>
          <li class="item-browser el-icon-view">123</li>
          <li class="item-browser el-icon-lollipop">1223</li>
        </el-row>
      </div>
      <div class="advice-item" v-for="i in 7" :key="i">
        <div class="advice-poet">
          <h5 class="poet-title"><a class="item-title-a" href="">静夜思_李白_唐</a></h5>
          <p class="poet-content">床前明月光，疑是地上霜。举头望明月，低头思故乡。</p>
        </div>

        <div class="advice-response">
          <el-row>
            <li class="item-browser el-icon-delete"></li>
            <li class="item-browser el-icon-view">123</li>
            <li class="item-browser el-icon-view">123</li>
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
      collectFolder: [
        {
          id: 12,
          name: '你好吗',
          des: '独揽月下萤火 照亮一纸寂寞'
        },
        {
          id: 13,
          name: '时光慢些走',
          des: '独揽月下萤火 照亮一纸寂寞'
        },
        {
          id: 14,
          name: '那是年少',
          des: '独揽月下萤火 照亮一纸寂寞'
        },
        {
          id: 15,
          name: '突然好想你',
          des: '独揽月下萤火 照亮一纸寂寞'
        },
        {
          id: 16,
          name: '南方姑娘',
          des: '独揽月下萤火 照亮一纸寂寞'
        }
      ],
      createFolder: [
        {
          id: 18,
          name: '白发',
          des: '独揽月下萤火 照亮一纸寂寞'
        },
        {
          id: 23,
          name: '青丝',
          des: '独揽月下萤火 照亮一纸寂寞'
        },
        {
          id: 45,
          name: '斗酒',
          des: '独揽月下萤火 照亮一纸寂寞'
        },
        {
          id: 1221,
          name: '舞剑',
          des: '独揽月下萤火 照亮一纸寂寞'
        },
        {
          id: 12124,
          name: '对饮',
          des: '独揽月下萤火 照亮一纸寂寞'
        }
      ],
      defaultIndex: '0',
      dialogCreateFormVisible: false,
      dialogEditFormVisible: false,
      form: {
        name: '',
        des: ''
      },
      formLabelWidth: '120px',
      collectIsShow: false,
      createIsShow: false,
      isEditStatus: false,
      deleteCollectDialogVisible: false,
      deleteCreateDialogVisible: false,
      selectFolderId: 0
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      this.collectIsShow = false
      this.createIsShow = false
      this.isEditStatus = false
    },
    handlerSelect (index, indexPath) {
      if (indexPath[0] === '3') {
        // 创建诗单
        this.dialogCreateFormVisible = true
      }
    },
    handleDialogClose () {
      this.deleteCollectDialogVisible = false
      this.deleteCreateDialogVisible = false
    },
    dialogSure () {
      // 创建
      // 判断是否 为空
      this.createFolder.push({id: this.createFolder.length, name: this.form.name, des: this.form.des})
      this.dialogCreateFormVisible = false
      // 向服务器提交代码
    },
    folderClick (id) {
      this.$router.replace({
        path: '/poetfolder',
        query: {folderId: id}
      })
      this.selectFolderId = id
    },
    editCollectFolder () {
      this.collectIsShow = !this.isEditStatus
      this.isEditStatus = !this.isEditStatus
    },
    editCreateFolder () {
      this.createIsShow = !this.isEditStatus
      this.isEditStatus = !this.isEditStatus
    },
    deleteCollect (id) {
      this.selectFolderId = id
      this.deleteCollectDialogVisible = true
    },
    sureDeleteCollectFolder () {
      this.deleteCollectDialogVisible = false

      for (var i = 0; i < this.collectFolder.length; i++) {
        if (this.collectFolder[i].id === this.selectFolderId) {
          this.collectFolder.splice(i, 1)
        }
      }
    },
    sureDeleteCreateFolder () {
      this.deleteCreateDialogVisible = false

      for (var i = 0; i < this.createFolder.length; i++) {
        if (this.createFolder[i].id === this.selectFolderId) {
          this.createFolder.splice(i, 1)
        }
      }
    },
    renameCreateFolder (id) {
      this.selectFolderId = id

      // 遍历
      for (var i = 0; i < this.createFolder.length; i++) {
        var item = this.createFolder[i]
        if (this.createFolder[i].id === this.selectFolderId) {
          this.form.name = item.name
          this.form.des = item.des
        }
      }
      this.dialogEditFormVisible = true
    },
    deleteCreateFolder (id) {
      this.selectFolderId = id
      this.deleteCreateDialogVisible = true
    },
    sureRenameCreateFolder () {
      // 遍历
      for (var i = 0; i < this.createFolder.length; i++) {
        if (this.createFolder[i].id === this.selectFolderId) {
          this.createFolder[i].name = this.form.name
          this.createFolder[i].des = this.form.des
        }
      }
      this.dialogEditFormVisible = false
      // 释放
      this.form.name = ''
      this.form.des = ''
    }
  },
  mounted () {
    if (this.$route.query.folderId !== undefined) {
      this.defaultIndex = this.$route.query.folderId + ''
      this.selectFolderId = this.$route.query.folderId
    } else {
      this.defaultIndex = this.collectFolder[0].id + ''
      this.selectFolderId = this.collectFolder[0].id
    }
  }
}
</script>

<style scoped>
  .folder-left {
    width: 20%;
    height: 100%;
    float: left;
    margin-top: 8px;
    margin-left: 8px;
    background-color: #fff;
  }

  .folder-right {
    width: 75%;
    float: left;
    height: 100%;
    margin-left: 8px;
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
    width: 100%;
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

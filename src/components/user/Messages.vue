<template>
  <div class="wrapper">
    <pcheader></pcheader>
    <div class="message-left">
      <el-row>
        <el-col :span="24">
          <el-menu
            :default-active='defaultIndex'
            @open="handleOpen"
            @close="handleClose"
            @select="handlerSelect">
            <el-menu-item index="1">
              <i class="el-icon-menu"></i>
              <span slot="title">与我相关</span>
            </el-menu-item>
            <!--<el-menu-item index="2">-->
            <!--<i class="el-icon-menu"></i>-->
            <!--<span slot="title">诗云简讯</span>-->
            <!--</el-menu-item>-->
            <!--<el-menu-item index="3">-->
            <!--<i class="el-icon-menu"></i>-->
            <!--<span slot="title">系统通知</span>-->
            <!--</el-menu-item>-->
          </el-menu>
        </el-col>
      </el-row>
    </div>

    <div class="message-right">

      <div class="advice-item" v-for="(i,index) in comments" :key="index">
        <div class="advice-poet">
          <p class="msg-content">
            <a class="item-author" :href="i.userHomeUrl">
              {{ i.username }}
            </a>
           :{{i.msg }}
          </p>
          <p class="item-content">
            <a class="msg-back-a" :href="i.itemUrl">
              {{ i.itemDetail }}
            </a>
          </p>
          <p class="msg-res" v-for="(ms, idx) in i.msgTemp" :key="idx">
            我:{{ ms.m }}
          </p>

          <div class="advice-response">
            <i class="item-browser el-icon-time">{{ i.msgTime }}</i>
            <i class="item-browser el-icon-chat-dot-square" @click="talk(index + '')"></i>
          </div>
          <div class="talk-div" v-if="i.isInputShow">
            <el-input placeholder="请输入内容" size="mini" v-model="i.msgContentInput">
              <template slot="append"><el-button @click="publishMsg(index)">发布</el-button></template>
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
  name: 'Messages',
  components: {pcheader},
  data () {
    return {
      defaultIndex: '1',
      comments: [
        {
          username: '李小白',
          userHomeUrl: 'localhost:8080',
          msg: '静夜思_李白_唐',
          itemDetail: '床前明月光，疑是地上霜。举头望明月，低头思故乡。\n' +
            '              床前明月光，疑是地上霜。举头望明月，低头思故乡。\n' +
            '              床前明月光，疑是地上霜。举头望明月，低头思故乡。\n' +
            '              床前明月光，疑是地上霜。举头望明月，低头思故乡。',
          itemUrl: 'localhost:8080',
          msgTemp: [
          ],
          msgTime: '12:34',
          msgContentInput: '',
          isInputShow: false
        },
        {
          username: '李小白',
          userHomeUrl: 'localhost:8080',
          msg: '静夜思_李白_唐',
          itemDetail: '床前明月光，疑是地上霜。举头望明月，低头思故乡。\n' +
            '              床前明月光，疑是地上霜。举头望明月，低头思故乡。\n' +
            '              床前明月光，疑是地上霜。举头望明月，低头思故乡。\n' +
            '              床前明月光，疑是地上霜。举头望明月，低头思故乡。',
          itemUrl: 'localhost:8080',
          msgTemp: [],
          msgTime: '12:34',
          msgContentInput: '',
          isInputShow: false
        },
        {
          username: '李小白',
          userHomeUrl: 'localhost:8080',
          msg: '静夜思_李白_唐',
          itemDetail: '床前明月光，疑是地上霜。举头望明月，低头思故乡。\n' +
            '              床前明月光，疑是地上霜。举头望明月，低头思故乡。\n' +
            '              床前明月光，疑是地上霜。举头望明月，低头思故乡。\n' +
            '              床前明月光，疑是地上霜。举头望明月，低头思故乡。',
          itemUrl: 'localhost:8080',
          msgTemp: [],
          msgTime: '12:34',
          msgContentInput: '',
          isInputShow: false
        }
      ]
    }
  },
  methods: {

    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
    },
    handlerSelect (index, indexPath) {
    },
    talk (i) {
      this.comments[i].isInputShow = true
    },
    publishMsg (i) {
      this.comments[i].msgTemp.push({m: this.comments[i].msgContentInput})
      this.comments[i].isInputShow = false
      this.comments[i].msgContentInput = ''
    }
  }
}
</script>

<style scoped>
  .message-left {
    width: 20%;
    height: 100%;
    float: left;
    margin-top: 8px;
    margin-left: 8px;
    background-color: #fff;
  }

  .message-right {
    width: 75%;
    float: left;
    height: 100%;
    margin-left: 8px;
    margin-top: 8px;
    border-radius: 4px;
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
  }

  .msg-content {
    padding-top: 8px;
    font-size: 14px;
  }

  .item-content {
    margin-top: 8px;
    font-size: 12px;
    background-color: #ccc;
    padding: 8px;
    border-radius: 4px;
  }

  .msg-res {
    width: 100%;
    margin-top: 5px;
    font-size: 14px;
  }

  .msg-back-a {
    text-decoration: none;
    color: #409EFF;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }

  .advice-response {
    width: 100%;
    overflow: hidden;
  }

  .item-browser {
    float: right;
    color: gray;
    margin-left: 20px;
    font-size: 12px;
    line-height: 20px;
  }

  .item-author {
    text-decoration: none;
    color: #409EFF;
    font-size: 14px;
  }

  .talk-div {
    padding-bottom: 5px;
  }
</style>

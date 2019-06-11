<template>
  <div class="wrapper">
    <pcheader></pcheader>
    <div class="folder-right">
      <div class="poet-folder-user">
        <el-row>
          每日推荐: 每日凌晨6:00更新，根据个人口味生成
          <li class="item-browser el-icon-time">2012-09-12 12:34</li>
        </el-row>
      </div>
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
            <el-row>
              <li class="item-browser el-icon-view">123</li>
              <li class="item-browser el-icon-star-off">123</li>
              <li class="item-browser el-icon-chat-dot-square">23</li>
              <li class="item-browser el-icon-lollipop">23</li>
            </el-row>
          </div>
        </el-row>
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

  .folder-content {
    width:100%;
    border-radius: 4px;
  }

  .folder-item-content {
    margin-bottom: 8px;
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
    font-size: 15px;
    margin: 5px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }

  .folder-text-p-des {
    font-size: 12px;
    margin-left: 5px;
    color: gray;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }

  .folder-image {
    width: 50px;
    height: 50px;
    border-radius: 4px;
  }

  .item-browser {
    float: right;
    color: gray;
    margin-left: 20px;
    font-size: 12px;
    line-height: 25px;
    margin-right: 5px;
  }
</style>

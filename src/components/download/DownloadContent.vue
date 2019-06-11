<template>
  <div class="download-container">
    <div class="download-container-imgs">
      <el-collapse v-model="activeName" accordion class="download-container-collapse">
        <el-collapse-item title="Android客户端扫码下载" name="1">
          <img style="border-radius: 3%" src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
        </el-collapse-item>
        <el-collapse-item title="IOS客户端扫码下载" name="2">
          <img style="border-radius: 3%" src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
        </el-collapse-item>
        <el-collapse-item title="微信小程序扫码体验" name="3">
          <img style="border-radius: 3%" src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
        </el-collapse-item>
      </el-collapse>
    </div>
    <div class="download-container-des">
      敬请期待
    </div>
  </div>
</template>

<script>

export default {
  name: 'DownloadContent',
  data () {
    return {
      activeName: '1'
    }
  }
}

</script>

<style scoped>
  .download-container {
    width: 90%;
    background-color: #fff;
    margin-left: 5%;
    margin-right: 5%;
    margin-top: 8px;
    border-radius: 4px;
  }

  .download-container-imgs {
    width: 100%;
    text-align: center;
    /*height: 580px;*/
  }

  .download-container-collapse {
    padding: 8px;
  }

  .download-container-des {
    width: 100%;
    height: 580px;
    text-align: center;
    line-height: 580px;
  }

</style>

<template>
  <div class="wrapper">
    <div class="classify-top">
      <div class="classify-first">
        <el-row :gutter="20">
          <el-col :span="2" class="classify-first-des">朝代分类:</el-col>
          <el-col :span="22">
            <el-tag class="classify-item"><a href="#/classify" class="classify-first-a">标签二</a></el-tag>
            <el-tag class="classify-item"><a href="#/classify" class="classify-first-a">标签二</a></el-tag>
            <el-tag class="classify-item"><a href="#/classify" class="classify-first-a">标签二</a></el-tag>
            <el-tag class="classify-item"><a href="#/classify" class="classify-first-a">标签二</a></el-tag>
            <el-tag class="classify-item"><a href="#/classify" class="classify-first-a">标签二</a></el-tag>
            <el-tag class="classify-item"><a href="#/classify" class="classify-first-a">标签二</a></el-tag>
            <el-tag class="classify-item"><a href="#/classify" class="classify-first-a">标签二</a></el-tag>
            <el-tag class="classify-item"><a href="#/classify" class="classify-first-a">标签二</a></el-tag>
            <el-tag class="classify-item"><a href="#/classify" class="classify-first-a">标签二</a></el-tag>
            <el-tag class="classify-item"><a href="#/classify" class="classify-first-a">标签二</a></el-tag>
            <el-tag class="classify-item"><a href="#/classify" class="classify-first-a">标签二</a></el-tag>

          </el-col>
        </el-row>

      </div>
      <div class="classify-second">
        <el-row :gutter="20">
          <el-col :span="2" class="classify-second-des">标签分类:</el-col>
          <el-col :span="22">
            <el-tag class="classify-item" type="success"><a href="#/classify" class="classify-first-b">标签二</a></el-tag>
            <el-tag class="classify-item" type="success"><a href="#/classify" class="classify-first-b">标签二</a></el-tag>
            <el-tag class="classify-item" type="success"><a href="#/classify" class="classify-first-b">标签二</a></el-tag>
            <el-tag class="classify-item" type="success"><a href="#/classify" class="classify-first-b">标签二</a></el-tag>
            <el-tag class="classify-item" type="success"><a href="#/classify" class="classify-first-b">标签二</a></el-tag>
            <el-tag class="classify-item" type="success"><a href="#/classify" class="classify-first-b">标签二</a></el-tag>
            <el-tag class="classify-item" type="success"><a href="#/classify" class="classify-first-b">标签二</a></el-tag>
            <el-tag class="classify-item" type="success"><a href="#/classify" class="classify-first-b">标签二</a></el-tag>
            <el-tag class="classify-item" type="success"><a href="#/classify" class="classify-first-b">标签二</a></el-tag>
            <el-tag class="classify-item" type="success"><a href="#/classify" class="classify-first-b">标签二</a></el-tag>
            <el-tag class="classify-item" type="success"><a href="#/classify" class="classify-first-b">标签二</a></el-tag>
          </el-col>
        </el-row>

      </div>
    </div>
    <div class="classify-content">
      <div class="classify-res">
        <div class="advice-item" v-for="i in 12" :key="i">
          <div class="advice-poet">
            <h5 class="poet-title">静夜思_李白_唐</h5>
            <p class="poet-content">床前明月光，疑是地上霜。举头望明月，低头思故乡。</p>
          </div>

          <div class="advice-response">
            <el-row>
              <li class="item-browser el-icon-view">123</li>
              <li class="item-browser el-icon-view">123</li>
            </el-row>
          </div>
        </div>

        <el-pagination class="classify-page"
          background
          layout="prev, pager, next"
          :total="1000">
        </el-pagination>
      </div>

      <div class="classify-recom">
        <div class="classify-recom-hot-word">
          <p style="margin: 5px">热门搜索</p>
          <div>
            <el-tag class="classify-hot-word" size="small"><a href="http://localhost:8080/#/search?wd=李白" class="classify-first-c">李白</a></el-tag>
            <el-tag class="classify-hot-word" size="small"><a href="http://localhost:8080/#/search?wd=李白" class="classify-first-c">李白</a></el-tag>
            <el-tag class="classify-hot-word" size="small"><a href="http://localhost:8080/#/search?wd=李白" class="classify-first-c">李白</a></el-tag>
            <el-tag class="classify-hot-word" size="small"><a href="http://localhost:8080/#/search?wd=李白" class="classify-first-c">李白</a></el-tag>
            <el-tag class="classify-hot-word" size="small"><a href="http://localhost:8080/#/search?wd=李白" class="classify-first-c">李白</a></el-tag>
            <el-tag class="classify-hot-word" size="small"><a href="http://localhost:8080/#/search?wd=李白" class="classify-first-c">李白</a></el-tag>
            <el-tag class="classify-hot-word" size="small"><a href="http://localhost:8080/#/search?wd=李白" class="classify-first-c">李白</a></el-tag>
            <el-tag class="classify-hot-word" size="small"><a href="http://localhost:8080/#/search?wd=李白" class="classify-first-c">李白</a></el-tag>
            <el-tag class="classify-hot-word" size="small"><a href="http://localhost:8080/#/search?wd=李白" class="classify-first-c">李白</a></el-tag>
            <el-tag class="classify-hot-word" size="small"><a href="http://localhost:8080/#/search?wd=李白" class="classify-first-c">李白</a></el-tag>

          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>

export default {
  name: 'ClassifyContent',
  data () {
    return {}
  },
  methods: {
  }
}

</script>

<style scoped>

  .classify-top {
    margin-top: 8px;
    width: 90%;
    margin-left: 5%;
    margin-right: 5%;
    border-radius: 5px;
    background-color: #fff;
  }

  .classify-first {
    width: 100%;
    padding: 8px;
  }

  .classify-first-des {
    text-align: center;
    margin-top: 2px;
  }

  .classify-second {
    width: 100%;
    padding: 8px;
  }

  .classify-second-des {
    text-align: center;
    margin-top: 2px;
  }

  .classify-item {
    margin-bottom: 5px;
  }

  .classify-hot-word {
    margin-left: 5px;
    margin-bottom: 5px;
  }

  .advice-item {
    width: 100%;
    background-color: #fff;
    border-radius: 4px;
    margin-top: 10px;
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
    font-size: xx-small;
    margin-right: 8px;
    line-height: 25px;
  }

  .item-browser {
    float: right;
    color: gray;
    margin-left: 20px;
    margin-right: 15px;
    font-size: 12px;
  }
  .classify-content {
    /*width: 100%;*/
  }
  .classify-res {
    float: left;
    width: 60%;
    margin-left: 5%;
  }

  .classify-recom {
    float: left;
    width: 30%;
    margin-right: 5%;
  }

  .classify-recom-hot-word {
    margin-top: 10px;
    background-color: #fff;
    border-radius: 4px;
    margin-left: 8px;
  }

  .classify-first-a {
    text-decoration: none;
    color: #409EFF;
  }

  .classify-first-b {
    text-decoration: none;
    color: #67C23A;
  }

  .classify-first-c {
    text-decoration: none;
  }
  .classify-page {
    margin-top: 5px;
    text-align: center;
    margin-bottom: 5px;
  }
</style>

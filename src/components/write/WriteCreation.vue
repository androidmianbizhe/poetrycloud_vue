<template>
  <div class="wrapper">
    <div class="wb-content">
      <div class="blog-title">
        <el-input v-model="input" placeholder="题目"></el-input>
      </div>
      <div class="edit_container">
        <el-input
          type="textarea"
          :autosize="{ minRows: 8}"
          placeholder="请输入内容"
          v-model="textarea2">
        </el-input>
      </div>
      <el-upload
        action=""
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :file-list="fileList"
        list-type="picture">
        <el-button size="small" type="primary" style="margin-top: 5px">上传图片</el-button>
        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
    </div>
    <div class="blog-bottom-btn">
      <el-button type="primary" size="small" class="editor-publish-btn" @click="publish()">发表</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WriteBlog',
  data () {
    return {
      content: `你好`,
      textarea2: '',
      input: '',
      fileList: [
        {name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'},
        {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}
      ]
    }
  },
  methods: {
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePreview (file) {
      console.log(file)
    }
  },
  computed: {
  },
  mounted () {
  }
}
</script>

<style scoped>
  .wb-content {
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
  }
  .blog-title {
    margin-top: 8px;
    margin-bottom: 8px;
  }
  .edit_container {
    background-color: #fff;
  }

  .blog-bottom-btn {
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
  }

  .editor-publish-btn {
    float: right;
    margin-top: 5px;
    margin-left: 5px;

  }
</style>

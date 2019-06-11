<template>
  <div class="wrapper">
    <div class="wb-content">
      <div class="blog-title">
        <el-input v-model="input" placeholder="博客标题"></el-input>
      </div>
      <div class="edit_container">
        <quill-editor
          v-model="content"
          class="editor-content"
          ref="myQuillEditor"
          :options="editorOption"
          @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
          @change="onEditorChange($event)">
        </quill-editor>
      </div>
    </div>
    <div class="blog-bottom-btn">
      <el-button type="primary" size="small" class="editor-publish-btn" @click="publish()">发布博客</el-button>
      <el-button type="primary" size="small" class="editor-publish-btn" @click="publish()">保存博客</el-button>
    </div>
  </div>
</template>

<script>
import { quillEditor } from 'vue-quill-editor'

const toolOptions = [
  ['bold', 'italic', 'underline', 'strike'],
  ['blockquote', 'code-block'],
  [{'header': 1}, {'header': 2}],
  [{'list': 'ordered'}, {'list': 'bullet'}],
  [{'script': 'sub'}, {'script': 'super'}],
  [{'indent': '-1'}, {'indent': '+1'}],
  [{'direction': 'rtl'}],
  [{'header': [1, 2, 3, 4, 5, 6, false]}],
  [{'color': []}, {'background': []}],
  [{'font': []}],
  [{'align': []}],
  ['clean'],
  ['link', 'image']
]

export default {
  name: 'WriteBlog',
  components: {
    quillEditor
  },
  data () {
    return {
      content: `你好`,
      editorOption: {
        modules: {
          toolbar: toolOptions
        }
      },
      input: ''
    }
  },
  methods: {
    onEditorReady (editor) {
      // 准备编辑器
    },
    onEditorBlur () {
      // 失去焦点
    },
    onEditorFocus () {
      // 获得焦点事件
    },
    onEditorChange () {
      // 内容改变事件
    },
    publish () {
      alert(this.content)
    },
    // 把实体格式字符串转义成HTML格式的字符串
    escapeStringHTML (str) {
      str = str.replace(/&lt;/g, '<')
      str = str.replace(/&gt;/g, '>')
      return str
    }
  },
  computed: {
    editor () {
      return this.$refs.myQuillEditor.quill
    }
  },
  mounted () {
    // 请求后台返回的内容字符串
    let contents = ''
    this.content = this.escapeStringHTML(contents)
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

  .editor-content {
    min-height: 500px;
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

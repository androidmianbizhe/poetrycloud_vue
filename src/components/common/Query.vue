<template>
  <el-input
    size="small"
    placeholder="请输入内容"
    suffix-icon="el-icon-search"
    class="query-input"
    maxlength="15"
    clearable
    @keyup.enter.native="enterClick"
    v-model="input2">
  </el-input>
</template>

<script>
export default {
  name: 'Query',
  data () {
    return {
      input2: this.$route.query.wd
    }
  },
  methods: {
    enterClick () {
      if (this.input2 !== '') {
        this.$router.push({
          path: '/search',
          query: { wd: this.input2 }
        })
      }
    }
  }
}
</script>

<style scoped>

</style>

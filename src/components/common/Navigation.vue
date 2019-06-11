<template>
  <el-row class="navi-root">
    <el-menu :default-active="$route.path" router class="navi-el-menu" mode="horizontal" @select="handleSelect">
      <el-menu-item class="navi-el-menu-item" index="/home">首页</el-menu-item>
      <el-menu-item class="navi-el-menu-item" index="/square">广场</el-menu-item>
      <el-menu-item class="navi-el-menu-item" index="/discover">发现</el-menu-item>
      <el-menu-item class="navi-el-menu-item" index="/classify">分类</el-menu-item>
      <el-menu-item class="navi-el-menu-item" index="/download">下载</el-menu-item>
    </el-menu>
  </el-row>

</template>

<script>

export default {
  name: 'Navigation',
  data () {
    return {
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key + ' = ' + keyPath)
    }
  }
}

</script>

<style scoped>

  .navi-root {
  }
  .navi-root .navi-el-menu {
    padding-right: 30px;

  }
  .el-menu.el-menu--horizontal {
    border-bottom: solid 0px #e6e6e6;
  }

  .navi-root .navi-el-menu .navi-el-menu-item{
    padding-right: 30px;
    padding-left: 30px;
    font-size: large;
    font-weight: bold;
    font-family: simfang;
  }
</style>

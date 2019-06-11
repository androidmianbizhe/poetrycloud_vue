<template>
  <div class="home">
    <maincontent class="home-main"></maincontent>
    <rightcontent class="home-right"></rightcontent>
  </div>
</template>

<script>
import maincontent from './HomeMainContent'
import rightcontent from './HomeRightContent'
export default {
  name: 'HomeContent',
  components: { maincontent, rightcontent },
  data () {
    return {
      msg: 'Home'
    }
  }
}

</script>

<style scoped>
  .home {
    width: 100%;
    height: 100%;
  }
  .home-main {
    background-color: #ffffff;
    width: 60%;
    margin-top: 8px;
    border-radius: 2px;
    float: left;
  }
  .home-right {
    background-color: #ffffff;
    width: 20%;
    margin-top: 8px;
    margin-left: 5%;
    border-radius: 2px;
    float: left;
  }
</style>

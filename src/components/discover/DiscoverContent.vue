<template>
  <div class="wrapper">
    <discovermaincontent class="discover-main"></discovermaincontent>
    <discoverrightcontent class="discover-right"></discoverrightcontent>
  </div>

</template>

<script>
import discovermaincontent from './DiscoverMainContent'
import discoverrightcontent from './DiscoverRightContent'
export default {
  name: 'DiscoverContent',
  components: { discovermaincontent, discoverrightcontent },
  data () {
    return {
      msg: 'Discover'
    }
  }
}

</script>

<style scoped>
  .discover-main {
    background-color: #ffffff;
    width: 60%;
    margin-top: 8px;
    border-radius: 2px;
    float: left;
  }

  .discover-right {
    background-color: #ffffff;
    width: 20%;
    margin-left: 5%;
    margin-top: 8px;
    border-radius: 2px;
    float: left;
  }
</style>

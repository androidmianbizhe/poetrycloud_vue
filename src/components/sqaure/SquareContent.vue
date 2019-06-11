<template>
  <div class="square">
    <squaremaincontent class="square-main"></squaremaincontent>
    <squarerightcontent class="square-right"></squarerightcontent>
  </div>

</template>

<script>
import squaremaincontent from './SquareMainContent'
import squarerightcontent from './SquareRightContent'
export default {
  name: 'SquareContent',
  components: {squaremaincontent, squarerightcontent},
  data () {
    return {
    }
  }
}

</script>

<style scoped>
  .square {
    width: 100%;
    height: 100%;
  }
  .square-main {
    background-color: #ffffff;
    width: 60%;
    border-radius: 2px;
    float: left;
    margin-top: 8px;
  }

  .square-right {
    background-color: #ffffff;
    width: 20%;
    margin-left: 5%;
    margin-top: 8px;
    border-radius: 2px;
    float: left;
  }
</style>

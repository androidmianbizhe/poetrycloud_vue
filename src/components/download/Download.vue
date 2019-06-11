<template>
  <div class="wrapper">
    <pcheader></pcheader>
    <downloadbody></downloadbody>
  </div>

</template>

<script>
import pcheader from '../common/Header'
import downloadbody from './DownloadContent'

export default {
  name: 'Download',
  components: {pcheader, downloadbody},
  data () {
    return {
      msg: 'Download'
    }
  }
}

</script>

<style scoped>
</style>

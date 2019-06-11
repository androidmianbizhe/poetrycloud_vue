<template>
  <div class="wrapper">
    <pcheader></pcheader>
    <discoverbody></discoverbody>
  </div>
</template>

<script>
import pcheader from '../common/Header'
import discoverbody from './DiscoverContent'

export default {
  name: 'Discover',
  components: {pcheader, discoverbody},
  data () {
    return {
      msg: 'Discover'
    }
  }
}
</script>

<style scoped>
</style>

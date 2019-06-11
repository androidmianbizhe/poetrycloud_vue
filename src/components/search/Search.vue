<template>
  <div class="wrapper">
    <pcheader></pcheader>
    <searchbody></searchbody>
  </div>
</template>

<script>
import pcheader from '../common/Header'
import searchbody from './SearchContent'
export default {
  name: 'Search',
  components: {pcheader, searchbody},
  data () {
    return {
    }
  }
}
</script>

<style scoped>

</style>

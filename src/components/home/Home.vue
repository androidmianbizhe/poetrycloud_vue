<template>
  <div class="wrapper">
    <pcheader></pcheader>
    <homebody></homebody>
  </div>

</template>

<script>
import pcheader from '../common/Header'
import homebody from './HomeContent'

export default {
  name: 'Home',
  components: {pcheader, homebody},
  data () {
    return {
      msg: 'Home'
    }
  }
}
</script>

<style scoped>
</style>

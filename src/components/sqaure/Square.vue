<template>
  <div class="wrapper">
    <pcheader></pcheader>
    <squarecontent></squarecontent>
  </div>

</template>

<script>
import pcheader from '../common/Header'
import squarecontent from './SquareContent'

export default {
  name: 'Square',
  components: {pcheader, squarecontent},
  data () {
    return {
    }
  }
}

</script>

<style scoped>
</style>

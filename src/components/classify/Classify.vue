<template>
  <div class="wrapper">
    <pcheader></pcheader>
    <classifybody></classifybody>
  </div>

</template>

<script>
import pcheader from '../common/Header'
import classifybody from './ClassifyContent'

export default {
  name: 'Classify',
  components: {pcheader, classifybody},
  data () {
    return {
      msg: 'Classify'
    }
  }
}

</script>

<style scoped>
</style>

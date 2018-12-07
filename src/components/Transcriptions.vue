<template>
  <div class="">
    <h1>List of transcriptions</h1>
  </div>
</template>

<script>
import Base64Image from './Base64Image.vue'
import db from '../db.ts'

export default {
  name: 'Transcriptions',
  props: {

  },
  components: {
  },
  // data() {
  //   imageText
  // },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

<template>
  <div class="hello">
    <Base64Image imageText="iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg=="/>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import Base64Image from './Base64Image.vue'


export default {
  name: 'Transcription',
  props: {
    msg: String
  },
  components: {
    Base64Image,
  },
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

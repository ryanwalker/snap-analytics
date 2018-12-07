<template>
  <div class="hello">
    <img :src="imageSource" width="500" alt="image" />
  </div>
</template>

<script>
export default {
  name: 'Base64Image',
  props: {
    imageText: String
  },
  data() {
        return {
            imageSource: "data:image/png;base64, " + this.imageText,
        };
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

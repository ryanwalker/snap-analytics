<template>
  <div id="app">
    <Transcription msg="Snapped Image"/>
    <button v-on:click="doStuff()"/>
  </div>
</template>

<script>
import Transcription from './components/Transcription.vue'
import db from './db.ts';

export default {
  name: 'app',
  components: {
    Transcription,
  },
  methods: {
    doStuff() {
      const docs = db.collection('production').doc('ClCFmpieDq89nR2s6lU4');

      docs.get().then(function(docs) {
          // if (docs.exists) {
          //     console.log("Document data:", doc.data());
          // } else {
          //     // doc.data() will be undefined in this case
          //     console.log("No such document!");
          // }
      }).catch(function(error) {
          console.log("Error getting document:")
          console.log( error);
      });
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
  <div class="hello">
    <button @click="myIncrement">增加</button>
    <button @click="myDecrement">减少</button>
  </div>
</template>

<script>
import * as types from "../store/mutation-types";
import { mapMutations, mapActions } from "Vuex";
import Vue from "vue";
export default {
  name: "HelloWorld",
  data() {
    return {};
  },
  methods: {
    ...mapMutations([types.In_crement, types.De_crement]),
    ...mapActions(["myIncrement", "myDecrement"])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
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

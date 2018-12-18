<template>
  <div id="app">
    <Nav />
    <router-view></router-view>
  </div>
</template>

<script>
import bus from './bus';
import Nav from './components/Nav';

export default {
  name: 'App',

  data () {
    return {

    }
  },

  created: function () {


  },

  methods: {

  },

  components: {
    Nav,

  }
}
</script>

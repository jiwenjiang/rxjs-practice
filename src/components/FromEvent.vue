<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Preview</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank"><router-link to="/fromEvent">From Event</router-link></a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
  //  import Rx from 'rxjs/Rx'
  export default {
    name: 'FromEvent',
    data () {
      return {
        msg: 'Welcome to Practice fromEvent of Rxjs'
      }
    },
    mounted () {
//      let count = 0
//      let rate = 1000
//      let lastClick = Date.now() - rate
//      let button = document.querySelector('button')
//      button.addEventListener('click', () => {
//        if (Date.now() - lastClick >= rate) {
//          console.log(`Clicked ${++count} times`)
//          lastClick = Date.now()
//        }
//      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
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

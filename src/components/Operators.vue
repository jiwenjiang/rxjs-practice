<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Operators</h2>
    <div style="margin-left: 30%">
      <ul style="text-align: left">
        <li>
          <button id="status" @click="subject">Operators </button>
          操作符是 Observable 类型上的方法。操作符本质上是一个纯函数 (pure function)，它接收一个 Observable 作为输入，并生成一个新的 Observable 作为输出。<br>
        </li>
        <br>
      </ul>
    </div>
    <h3>
      <router-link to="/">返回主页</router-link>
    </h3>
  </div>
</template>

<script>
  import Rx from 'rxjs/Rx'
  export default {
    name: 'Operators',
    data () {
      return {
        msg: 'Welcome to Practicing Operators of Rxjs'
      }
    },
    mounted () {
    },
    methods: {
      subject () {
        function multiplyByTen (input) {
          var output = Rx.Observable.create(function subscribe (observer) {
            input.subscribe({
              next: (v) => observer.next(10 * v),
              error: (err) => observer.error(err),
              complete: () => observer.complete()
            })
          })
          return output
        }

        var input = Rx.Observable.from([1, 2, 3, 4])
        var output = multiplyByTen(input)
        output.subscribe(x => console.log(x))
      }
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
    margin: 0 10px;
    color: #42b983;
  }

  a {
    color: #42b983;
  }

  button {
    width: 100px;
    height: 30px;
    background-color: #E8008E;
    color: white;
    outline: none !important;
    cursor: pointer;
  }
</style>

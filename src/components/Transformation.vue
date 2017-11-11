<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Transformation Operators</h2>
    <div style="margin-left: 30%">
      <ul style="text-align: left">
        <li>
          <button id="buffer" @click="buffer">buffer </button>
          将过往的值收集到一个数组中，并且仅当另一个 Observable 发出通知时才发出此数组。
        </li>
        <li>
          <button id="bufferCount" @click="bufferCount">bufferCount </button>
          将过往的值收集到一个数组中，当数组数量到达设定的 bufferSize 时发出该数组。
        </li>
        <li>
          <button id="bufferTime" @click="bufferTime">bufferTime </button>
          将过往的值收集到数组中，并周期性地发出这些数组。
        </li>
        <li>
          <button id="of" @click="of">of </button>
          接收一组arguments的普通参数，依次执行。
        </li>
        <li>
          <button id="range" @click="range">range </button>
          生成一组数字序列，（start, length）
        </li>
        <li>
          <button id="throw" @click="tothrow">throw </button>
          抛出异常，终止sub
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
    name: 'Transformation',
    data () {
      return {
        msg: 'Welcome to Practicing Operators of Rxjs'
      }
    },
    mounted () {
    },
    methods: {
      buffer () {
        let clicks = Rx.Observable.fromEvent(document.getElementById('buffer'), 'click')
        let interval = Rx.Observable.interval(1000)
        let buffered = interval.buffer(clicks)
        buffered.subscribe(x => console.log(x))
      },
      bufferCount () {
        let clicks = Rx.Observable.fromEvent(document.getElementById('bufferCount'), 'click')
        let buffered = clicks.bufferCount(2)
        buffered.subscribe(x => console.log(x))
      },
      bufferTime () {
        let clicks = Rx.Observable.fromEvent(document.getElementById('bufferTime'), 'click')
        let buffered = clicks.bufferTime(2000, 5000)
        buffered.subscribe(x => console.log(x))
      },
      of () {
        let numbers = Rx.Observable.of(10, 20, 30)
        numbers.subscribe(x => console.log(x))
      },
      range () {
        let numbers = Rx.Observable.range(1, 10)
        numbers.subscribe(x => console.log(x))
      },
      tothrow () {
        let interval = Rx.Observable.interval(1000)
        let result = interval.mergeMap(x =>
          x === 13
            ? Rx.Observable.throw('Thirteens are bad')
            : Rx.Observable.of('a', 'b', 'c')
        )
        result.subscribe(x => console.log(x), e => console.error(e))
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

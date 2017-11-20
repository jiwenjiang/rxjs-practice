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
          <button id="concatMap" @click="concatMap">concatMap </button>
          将源值投射为一个合并到输出 Observable 的 Observable,以串行的方式等待前一个完成再合并下一个 Observable。
        </li>
        <li>
          <button id="exhaustMap" @click="exhaustMap">exhaustMap </button>
          将每个源值投射成 Observable，只有当前一个投射的 Observable 已经完成， 这个 Observable 才会被合并到输出 Observable 中。
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
      concatMap () {
        let clicks = Rx.Observable.fromEvent(document.getElementById('concatMap'), 'click')
        let result = clicks.concatMap(ev => Rx.Observable.interval(1000).take(4))
        result.subscribe(x => console.log(x))
      },
      exhaustMap () {
        let clicks = Rx.Observable.fromEvent(document.getElementById('exhaustMap'), 'click')
        let result = clicks.exhaustMap((ev) => Rx.Observable.interval(1000).take(5))
        result.subscribe(x => console.log(x))
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

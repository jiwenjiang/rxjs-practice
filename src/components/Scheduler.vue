<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Scheduler</h2>
    <div style="margin-left: 30%">
      <ul style="text-align: left">
        <li>
          <button id="async" @click="async">async </button>
          异步调度器，将执行上下文改变为异步调用
        </li>
        <li>
          <button id="combineLatest" @click="combineLatest">queue </button>
          当前事件帧中的队列调度(蹦床调度器)。用于迭代操作。
        </li>
        <li>
          <button id="concat" @click="concat">asap  </button>
          微任务的队列调度，它使用可用的最快速的传输机制，比如 Node.js 的 process.nextTick() 或 Web Worker 的 MessageChannel 或 setTimeout 或其他。用于异步转换。
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
    name: 'Scheduler',
    data () {
      return {
        msg: 'Welcome to Practicing Scheduler of Rxjs'
      }
    },
    mounted () {
    },
    methods: {
      async () {
        var observable = Rx.Observable.create(function (observer) {
          observer.next(1)
          observer.next(2)
          observer.next(3)
          observer.complete()
        })
          .observeOn(Rx.Scheduler.async)
        console.log('just before subscribe')
        observable.subscribe({
          next: x => console.log('got value ' + x),
          error: err => console.error('something wrong occurred: ' + err),
          complete: () => console.log('done')
        })
        console.log('just after subscribe')
      },
      combineLatest () {

      },
      concat () {

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

<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Creation Operators</h2>
    <div style="margin-left: 30%">
      <ul style="text-align: left">
        <li>
          <button id="status">Operators </button>
          操作符有着不同的用途，它们可作如下分类：创建、转换、过滤、组合、错误处理、工具，等等。
        </li>
        <li>
          <button id="create" @click="Create">create </button>
          创建一个新的 Observable ，当观察者( Observer )订阅该 Observable 时，它会执行指定的函数。
        </li>
        <li>
          <button id="from" @click="from">from </button>
          迭代一个数组，类数组对象，并将他们创建为observeble
        </li>
        <li>
          <button id="fromPromise" @click="fromPromise">fromPromise </button>
          把 ES2015 的 Promise 或者兼容 Promises/A+ 规范的 Promise 转化为 Observable。<br>
          <button style="visibility: hidden"></button>
          如果 Promise resolves 一个值, 输出 Observable 发出这个值然后完成。如果 Promise 被rejected, 输出 Observable输出err。
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
    name: 'Operators',
    data () {
      return {
        msg: 'Welcome to Practicing Operators of Rxjs'
      }
    },
    mounted () {
    },
    methods: {
      Create () {
        const observable = Rx.Observable.create((observer) => {
          observer.error('something went really wrong...')
        })

        observable.subscribe(
          value => console.log(value), // 永远不会被调用
          err => console.error(err),
          () => console.log('complete') // 永远不会被调用
        )
      },
      from () {
        function * generateDoubles(seed) {
          let i = seed
          while (true) {
            yield i
            i = 2 * i // double it
          }
        }

        let iterator = generateDoubles(3)
        let result = Rx.Observable.from(iterator).take(10)
        result.subscribe(x => console.log(x))
      },
      fromPromise () {
        let result = Rx.Observable.fromPromise(fetch('http://myserver.com/'))
        result.subscribe(x => console.log(x), e => console.error(e))
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
        result.subscribe(x => console.trace(x), e => console.error(e))
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

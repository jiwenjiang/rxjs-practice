<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Transformation Operators</h2>
    <div style="margin-left: 30%">
      <ul style="text-align: left">
        <li>
          <button id="groupBy" @click="groupBy">groupBy </button>
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
    name: 'Map',
    data () {
      return {
        msg: 'Welcome to Practicing Map of Rxjs'
      }
    },
    mounted () {
    },
    methods: {
      groupBy () {
        Rx.Observable.of({id: 1, name: 'aze1'},
          {id: 2, name: 'sf2'},
          {id: 2, name: 'dg2'},
          {id: 1, name: 'erg1'},
          {id: 1, name: 'df1'},
          {id: 2, name: 'sfqfb2'},
          {id: 3, name: 'qfs3'},
          {id: 2, name: 'qsgqsfg2'}
        )
          .groupBy(p => p.id)
          .flatMap((group$) => group$.reduce((acc, cur) => [...acc, cur], []))
          .subscribe(p => console.log(p))
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

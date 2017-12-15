<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>combine Operators</h2>
    <div style="margin-left: 30%">
      <ul style="text-align: left">
        <li>
          <button id="combineAll" @click="combineAll">combineAll </button>
          接受一个返回 Observables 的 Observable, 并从中收集所有的 Observables 。
        </li>
        <li>
          <button id="combineLatest" @click="combineLatest">combineLatest </button>
          combineLatest 结合传入的多个 Observables。通过函数，顺序触发函数
        </li>
        <li>
          <button id="first" @click="first">first  </button>
          first 会发出源 Observable 中的第一个值，然后完成。
        </li>
        <li>
          <button id="take" @click="take">take </button>
          take 返回的 Observable 只发出源 Observable 最初发出的的N个值 (N = count)。
        </li>
        <li>
          <button id="scan" @click="scan">scan </button>
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
    name: 'Combine',
    data () {
      return {
        msg: 'Welcome to Practicing Combine of Rxjs'
      }
    },
    mounted () {
    },
    methods: {
      combineAll () {
        let clicks = Rx.Observable.fromEvent(document.getElementById('combineAll'), 'click')
        let higherOrder = clicks.map(ev =>
          Rx.Observable.interval(Math.random() * 2000).take(3)
        ).take(2)
        let result = higherOrder.combineAll()
        result.subscribe(x => console.log(x))
      },
      combineLatest () {
        let weight = Rx.Observable.of(70, 72, 76, 79, 75)
        let height = Rx.Observable.of(1.76, 1.77, 1.78)
        let bmi = weight.combineLatest(height, (w, h) => w / (h * h))
        bmi.subscribe(x => console.log('BMI is ' + x))
      },
      first () {
        let clicks = Rx.Observable.fromEvent(document, 'click')
        let result = clicks.first(ev => ev.target.tagName === 'DIV')
        result.subscribe(x => console.log(x))
      },
      take () {
        let interval = Rx.Observable.interval(1000)
        let five = interval.take(5)
        five.subscribe(x => console.log(x))
      },
      scan () {
        let clicks = Rx.Observable.fromEvent(document, 'click')
        let ones = clicks.mapTo(1)
        let seed = 0
        let count = ones.scan((acc, one) => acc + one, seed)
        count.subscribe(x => console.log(x))
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

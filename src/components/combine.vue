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
          <button id="concat" @click="concat">concat  </button>
          通过依次订阅输入Observable将输出Observable加入多个输入Observable，只有前一个Observable结束才会进行下一个Observable。
        </li>
        <li>
          <button id="merge" @click="merge">merge </button>
          合并Observable，并发输出执行，最后一个参数配置并发数。
        </li>
        <li>
          <button id="scan" @click="zip">zip </button>
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
      concat () {
        let timer = Rx.Observable.interval(1000).take(4)
        let sequence = Rx.Observable.range(6, 10)
        let result = timer.concat(sequence)
        result.subscribe(x => console.log(x))
      },
      merge () {
        var timer1 = Rx.Observable.interval(1000).take(10)
        var timer2 = Rx.Observable.interval(2000).take(6)
        var timer3 = Rx.Observable.interval(500).take(10)
        var concurrent = 2 // 参数
        var merged = timer1.merge(timer2, timer3, concurrent)
        merged.subscribe(x => console.log(x))
      },
      zip () {
        let age$ = Rx.Observable.of(27, 25, 29)
        let name$ = Rx.Observable.of('Foo', 'Bar', 'Beer')
        let isDev$ = Rx.Observable.of(true, true, false)

        Rx.Observable
          .zip(age$,
            name$,
            isDev$,
            (age, name, isDev) => ({age, name, isDev}))
          .toArray()
          .subscribe(x => console.log(x))
//        console.log(aa)
//
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

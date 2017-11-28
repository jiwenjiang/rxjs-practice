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
          <button id="map" @click="map">map </button>
          类似于 Array.prototype.map()， 它把每个源值传递给转化函数以获得相应的输出值。
        </li>
        <li>
          <button id="pairwise" @click="pairwise">pairwise </button>
          源 Observable 的第N个发送会使输出 Observable 发出一个数组 [(N-1)th, Nth]，即前一个 值和当前值的数组，它们作为一对。（计算2点之间距离）
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
      map () {
        let clicks = Rx.Observable.fromEvent(document.getElementById('map'), 'click')
        let positions = clicks.map(ev => ev.clientX)
        positions.subscribe(x => console.log(x))
      },
      pairwise () {
        let clicks = Rx.Observable.fromEvent(document, 'click')
        let pairs = clicks.pairwise()
        let distance = pairs.map(pair => {
          let x0 = pair[0].clientX
          let y0 = pair[0].clientY
          let x1 = pair[1].clientX
          let y1 = pair[1].clientY
          return Math.sqrt(Math.pow(x0 - x1, 2) + Math.pow(y0 - y1, 2))
        })
        distance.subscribe(x => console.log(x))
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

<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>filter Operators</h2>
    <div style="margin-left: 30%">
      <ul style="text-align: left">
        <li>
          <button id="distinct" @click="distinct">distinct </button>
          返回 Observable，它发出由源 Observable 所发出的所有与之前的项都不相同的项。(去重)
        </li>
        <li>
          <button id="distinctUntilChanged" @click="distinctUntilChanged">distinctUntilChanged </button>
          返回 Observable，它发出源 Observable 发出的所有与前一项不相同的项。
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
    name: 'Map',
    data () {
      return {
        msg: 'Welcome to Practicing filter of Rxjs'
      }
    },
    mounted () {
    },
    methods: {
      distinct () {
        Rx.Observable.of(
          {age: 4, name: 'Foo'},
          {age: 7, name: 'Bar'},
          {age: 4, name: 'Foo'})
          .distinct(p => p.name)
          .subscribe(x => console.log(x))
      },
      distinctUntilChanged () {
        Rx.Observable.of(1, 1, 2, 2, 2, 1, 1, 2, 3, 3, 4)
          .distinctUntilChanged()
          .subscribe(x => console.log(x)) // 1, 2, 1, 2, 3, 4
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

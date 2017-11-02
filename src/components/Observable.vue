<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Observable</h2>
    <div style="margin-left: 30%">
      <ul style="text-align: left">
        <li>
          <button id="status" @click="status">Observable</button>
          Observable 订阅三种状态，next，error，complete。<br>
          <button style="visibility: hidden">status</button>&nbsp;Observable区别于function，promise返回单个值，区别于generator，async同步返回多值。<br>
          <button style="visibility: hidden">status</button>&nbsp;Observable 会在同步异步并存的情况下返回多值。<br>
          <button style="visibility: hidden">status</button>&nbsp;Observable 与函数的相同点在于，二者都是惰性运算，在调用的节点是才运行。
        </li>
        <li>
          <button id="Subscription" @click="subscription">Subscription</button>
          Subscription 本身有一个取消订阅的执行方法，并可以添加其余订阅到自己身上一并取消订阅。
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
    name: 'Observable',
    data () {
      return {
        msg: 'Welcome to Practicing Observable of Rxjs'
      }
    },
    mounted () {
    },
    methods: {
      status () {
        let observable = Rx.Observable.create((observer) => {
          observer.next(1)
          observer.next(2)
          observer.next(3)
          setTimeout(() => {
            observer.next(4)
            observer.complete()
          }, 1000)
        })
        console.log('just before subscribe')
        observable.subscribe({
          next: x => console.log('got value ' + x),
          error: err => console.error('something wrong occurred: ' + err),
          complete: () => console.log('done')
        })
        console.log('just after subscribe')
      },
      subscription () {
        let observable1 = Rx.Observable.interval(400)
        let observable2 = Rx.Observable.interval(300)

        let subscription = observable1.subscribe(x => console.log('first: ' + x))
        let childSubscription = observable2.subscribe(x => console.log('second: ' + x))

        subscription.add(childSubscription)

        setTimeout(() => {
          // subscription 和 childSubscription 都会取消订阅
          subscription.unsubscribe()
        }, 1000)
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

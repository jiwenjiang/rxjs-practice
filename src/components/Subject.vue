<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Subject</h2>
    <div style="margin-left: 30%">
      <ul style="text-align: left">
        <li>
          <button id="status" @click="subject">Subject </button>
          类似Observable，一个特殊的可观察对象。<br>
          <button style="visibility: hidden">status</button>&nbsp;Subjects 是将任意 Observable 执行共享给多个观察者的唯一方式。<br>
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
    name: 'Subject',
    data () {
      return {
        msg: 'Welcome to Practicing Observable of Rxjs'
      }
    },
    mounted () {
    },
    methods: {
      subject () {
        var subject = new Rx.Subject()

        subject.subscribe(
         (v) => console.log('observerA: ' + v)
        )
        subject.subscribe({
          next: (v) => console.log('observerB: ' + v)
        })

        var observable = Rx.Observable.from([1, 2, 3])
        console.log(observable)
        observable.subscribe(subject)// 你可以提供一个 Subject 进行订阅
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

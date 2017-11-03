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
        </li>
        <li>
          <button id="Subscription" @click="BehaviorSubject">BehaviorSubject</button>
          BehaviorSubject 保存当前subject的最新值，在subscribe时直接运行传入的初始值。
        </li>
        <li>
          <button id="ReplaySubject" @click="ReplaySubject">ReplaySubject</button>
          ReplaySubject 保存指定数目，指定时间内当前subject的最新值，不会自启动。
        </li>
        <li>
          <button id="AsyncSubject" @click="AsyncSubject">AsyncSubject</button>
          AsyncSubject 当observeble 执行完成时，发送最后的值给complete，输出单值。
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
      BehaviorSubject () {
        let subject = new Rx.BehaviorSubject(0) // 0是初始值

        subject.subscribe({
          next: (v) => console.log('observerA: ' + v)
        })

        subject.next(1)
        subject.next(2)

        subject.subscribe({
          next: (v) => console.log('observerB: ' + v)
        })

        subject.next(3)
      },
      ReplaySubject () {
        let subject = new Rx.BehaviorSubject(0) // 0是初始值

        subject.subscribe({
          next: (v) => console.log('observerA: ' + v)
        })

        subject.next(1)
        subject.next(2)

        subject.subscribe({
          next: (v) => console.log('observerB: ' + v)
        })

        subject.next(3)
      },
      AsyncSubject () {
        let subject = new Rx.AsyncSubject()

        subject.subscribe({
          next: (v) => console.log('observerA: ' + v)
        })

        subject.next(1)
        subject.next(2)
        subject.next(3)
        subject.next(4)

        subject.subscribe({
          next: (v) => console.log('observerB: ' + v)
        })

        subject.next(5)
        subject.complete()
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

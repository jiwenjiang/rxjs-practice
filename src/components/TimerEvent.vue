<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>TimerRvent</h2>
    <div style="margin-left: 30%">
      <ul style="text-align: left">
        <li>
          <button id="throttleTime">throttleTime</button>
          函数节流，立即响应发出最新的值（如果值操作在节流之前）
        </li>
        <li>
          <button id="debounceTime">debounceTime</button>
          函数去抖，在没有相关条件触发后，执行函数，并且发出最新的值
        </li>
        <li>
          <button id="auditTime">auditTime</button>
          函数审计，计算在一段时间内，函数触发的情况
        </li>
        <li>
          <button id="delayWhen">delayWhen</button>
          函数延迟，在一段时间后，触发函数相关内容
        </li>
        <li>
          <button id="sampleTime">sampleTime</button>
          函数取样，在指定时间间隔内，去取最新的点击值（时间驱动查询事件）
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
    name: 'TimerEvent',
    data () {
      return {
        msg: 'Welcome to Practicing fromEvent of Rxjs'
      }
    },
    mounted () {
      // throttleTime
      let throttleTime = document.getElementById('throttleTime')
      Rx.Observable.fromEvent(throttleTime, 'click')
        .scan(count => count + 1, 0)
        .throttleTime(1000)
        .subscribe(count => console.log(`Clicked ${count} times throttleTime`))
      // debounceTime
      let debounceTime = document.getElementById('debounceTime')
      Rx.Observable.fromEvent(debounceTime, 'click')
        .scan(count => count + 1, 0)
        .debounceTime(1000)
        .subscribe(count => console.log(`Clicked ${count} times debounceTime`))
      // debounceTime
      let auditTime = document.getElementById('auditTime')
      Rx.Observable.fromEvent(auditTime, 'click')
        .scan(count => count + 1, 0)
        .auditTime(1000)
        .subscribe(count => console.log(`Clicked ${count} times auditTime`))
      // delayWhen
      let delayWhen = document.getElementById('delayWhen')
      Rx.Observable.fromEvent(delayWhen, 'click')
        .scan(count => count + 1, 0)
        .delayWhen(event =>
          Rx.Observable.interval(Math.random() * 5000))
        .subscribe(count => console.log(`Clicked ${count} times delayWhen`))
      // sampleTime
      let sampleTime = document.getElementById('sampleTime')
      Rx.Observable.fromEvent(sampleTime, 'click')
        .scan(count => count + 1, 0)
        .sampleTime(1000)
        .subscribe(count => console.log(`Clicked ${count} times sampleTime`))
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

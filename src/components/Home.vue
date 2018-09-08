<template>
  <div>
    <div class="head">
      <div class="header">
        猫眼电影
      </div>
      <ul class="home-ul">
        <li style="text-align: center">
          <select style="border: 0">
            <option>上海</option>
          </select>
        </li>
        <li @click="hotFn" style="text-align: center" :class="cl">正在热映</li>
        <li @click="futureFn" style="text-align: center" :class="al">即将上映</li>
        <li><button class="icon iconfont">&#xe637;</button></li>
      </ul>
    </div>
    <div :class="cont1">
      <pro-list :list="prolist"></pro-list>
    </div>
    <div :class="cont2">
      <pro-list2 :list2="prolist2"></pro-list2>
    </div>
    <div :class="cont3">
      <pro-list3 :list3="prolist3"></pro-list3>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import {Swipe, SwipeItem} from 'mint-ui'
import List from './List'
import List2 from './List2'
import List3 from './List3'
import axios from 'axios'

Vue.use(Swipe)
Vue.use(SwipeItem)

export default {
  data () {
    return {
      prolist: [],
      prolist2: [],
      prolist3: [],
      cl: 'active',
      al: '',
      cont1: '',
      cont2: 'dis',
      cont3: 'dis'
    }
  },
  components: {
    'pro-list': List,
    'pro-list2': List2,
    'pro-list3': List3
  },
  methods: {
    hotFn () {
      this.al = ''
      this.cl = 'active'
      this.cont1 = ''
      this.cont2 = 'dis'
      this.cont3 = 'dis'
      axios.get('http://localhost:3000/maoyan')
        .then((res) => {
          this.prolist = res.data
          console.log(this.prolist)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    getTopmovie () {
      return axios.get('http://localhost:3000/most')
    },
    getBottommovie () {
      return axios.get('http://localhost:3000/coming')
    },
    futureFn () {
      var _this = this
      this.cl = ''
      this.al = 'active'
      this.cont1 = 'dis'
      this.cont2 = ''
      this.cont3 = ''
      axios.all([this.getTopmovie(), this.getBottommovie()])
        .then(axios.spread((topList, bottomList) => {
          console.log(topList)
          _this.prolist2 = topList.data
          _this.prolist3 = bottomList.data
        }))
    }
  },
  mounted () {
    this.hotFn()
  }
}
</script>
<style lang="scss">
  @import "../lib/reset.scss";
  .head{
    position: fixed;
    @include rect(100%,1rem);
    top:0;
    left: 0;
    z-index: 999;
  }
  .header{
    @include rect(100%,0.50rem);
    @include background-color(#e54847);
    @include line-height(0.50rem);
    @include text-align(center);
    @include text-color(#fff);
    @include font-size(0.18rem);
  }
  .home-ul{
    background-color: #ffffff;
    @include flexbox();
    border-bottom: 1px solid #cccccc;
    @include rect(100%,0.5rem);
    li{
      @include flex(1);
      @include rect(auto,100%);
      @include line-height(0.5rem);
      @include font-weight(900);
      &.active{
        border-bottom: 2px solid red;
      }
      button{
        @include rect(100%,100%);
        @include line-height(0.33rem);
        @include background-color(#fff);
        @include text-color (#ef4238);
        @include font-size(0.22rem);
        border: none;
      }
    }
  }
  .dis{
    display: none;
  }

</style>

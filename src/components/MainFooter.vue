<template>
  <ul class="footer-ul">
    <li v-for="(item,index) of list" :key="index">
      <router-link :to="item.path">
        <p :class="item.icon"></p>
        <p>{{item.name}}</p>
      </router-link>
    </li>
  </ul>
</template>
<script>
export default {
  data () {
    return {
      list: [
        {
          name: '电影',
          path: '/home',
          icon: 'iconfont icon-dianying'
        },
        {
          name: '影院',
          path: '/kind',
          icon: 'iconfont icon-yingyuana'
        },
        {
          name: '我的',
          path: '/user',
          icon: 'iconfont icon-wode'
        }
      ]
    }
  },
  methods: {
    getlocal () {
      if (localStorage.getItem('user')) {
        this.list[2].path = 'username'
      } else {
        return ''
      }
    }
  },
  created () {
    this.getlocal()
  }
}
</script>
<style lang="scss">
  @import "../lib/reset.scss";
  .footer-ul{
    @include flexbox();
    @include rect(100%,100%);
    li{
      @include flex();
      @include rect(auto,100%);
      @include text-align(center);
      background-color: #ffffff;
      a{
        @include text-color(#333);
        &.router-link-active{
          @include text-color(#f03d37);
        }
        p{
          &.iconfont{
            font-size: 0.18rem;
          }
        }
      }
    }
  }
</style>

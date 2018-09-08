<template>
  <div>
    <div class="user-head">
      <div class="head-left" @click="goBack()">&larr;</div>
      <div class="head-right">猫眼电影</div>
    </div>
    <div class="user-title">
      <div @click="getColor1()" :class="act1">美团账号登陆</div>
      <div @click="getColor2()" :class="act2">手机验证登陆</div>
    </div>
    <div :class="dis1">
      <pro-register></pro-register>
    </div>
   <div :class="dis2">
     <pro-login></pro-login>
   </div>

    <div class="problem">
    <a href="#">立即注册</a>
    <a href="#">找回密码</a>
    </div>
    <div class="foot">
      © 猫眼电影 客服电话：<span>400-670-5335</span>
    </div>
  </div>
</template>
<script>
import Register from './Register'
import Login from './Login'
export default {
  data () {
    return {
      act1: 'active',
      act2: '',
      dis1: '',
      dis2: 'hidden'
    }
  },
  components: {
    'pro-register': Register,
    'pro-login': Login
  },
  methods: {
    getColor1 () {
      this.act1 = 'active'
      this.act2 = ''
      this.dis1 = ''
      this.dis2 = 'hidden'
    },
    getColor2 () {
      this.act1 = ''
      this.act2 = 'active'
      this.dis1 = 'hidden'
      this.dis2 = ''
    },
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="scss">
  @import "../lib/reset.scss";
  .user-head{
    @include flexbox();
    @include rect(100%,0.5rem);
    @include text-color(#ffffff);
    @include background-color(#df2d2d);
    @include font-size(0.18rem);
    @include line-height(0.5rem);
    .head-left{
      width: 0.5rem;
      height: 100%;
      text-align: center;
      line-height: 0.5rem;
      font-size: 0.35rem;
    }
    .head-right{
      flex: 1;
      text-align: center;
    }
  }
  .user-title{
    @include flexbox();
    @include rect(100%,0.5rem);
    border-bottom: 0.05rem solid #d6d6d6;
    div{
      flex: 1;
      text-align: center;
      line-height:0.5rem;
      font-size: 0.16rem;
      margin-left: 0.1rem;
      margin-right: 0.1rem;
      height: 0.5rem;
      &.active{
        color:#df2d2d;
        border-bottom: 0.05rem solid #df2d2d;
      }
    }
  }
  .problem{
    @include flexbox();
    justify-content: space-between;
    @include rect(100%,0.5rem);
    a{
      margin: 0.2rem;
      font-size: 0.16rem;
      color: #df2d2d;
    }
  }
  .hidden{
    display: none;
  }
  .foot{
    @include rect(100%,0.5rem);
    text-align: center;
    line-height: 0.5rem;
    span{
      color: #df2d2d
    }
  }
</style>

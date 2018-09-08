<template>
  <div>
    <div class="user-head">
      我的
    </div>
    <div class="logo">
      <img src="../assets/touxiang.png">
      <p class="out" @click="goOut()">[退出]</p>
    </div>
    <div class="cent">
      <div class="sigma-content">
        <div class="sigma-middle-line">
          <span class="sigma-line-text">我的订单</span>
        </div>
      </div>
      </div>
      <div class="order">
        <div><p><img src="../assets/img0.png"/></p><p>电影</p></div>
        <div><p><img src="../assets/img1.png"/></p><p>商城</p></div>
      </div>
      <div class="other">
        <p class="p2">优惠券<span> > </span></p>
        <p class="p2">折扣卡<span> > </span></p>
      </div>
    </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  methods: {
    goOut () {
      localStorage.clear()
      this.$router.push('user')
    }
  }
}
</script>
<style lang="scss">
  @import "../lib/reset.scss";
  .user-head{
    text-align: center;
    @include rect(100%,0.5rem);
    line-height: 0.5rem;
    background-color: #e54847;
    color: #ffffff;
    font-size: 0.2rem;
  }
  .logo{
    @include rect(100%,2rem);
    @include flexbox();
    flex-direction: column;
    @include justify-content(center);
    @include align-items(center);
    background-color: #f03d37;
    img{
      height: 1rem;
      width: 1rem;
      border-radius: 50%;
    }
    .out{
      font-size: 0.2rem;
      color: #e0e0e0;
    }
  }
  .cent{
    @include rect(100%,auto);
    background: #fff;
  }
  .sigma-content{
    padding: 0.2rem 0.8rem 0.2rem 0.8rem;
    text-align: center;
    background-color: #fff;
  }
  .sigma-middle-line:before{
    content: '';
    display: block;
    height: 1px;
    width: 100%;
    background-color: #999;
    position: relative;
    top: 10px;
    left: 0;
  }
  .sigma-line-text{
    display: inline-block;
    background: #fff;
    padding: 0 18px 0 18px;
    position: relative;
    font-size: 14px;
    font-weight: 500;
  }
  .order{
    @include flexbox();
    @include rect(100%,1rem);
    @include justify-content(space-around);
    background-color: #ffffff;
    margin-bottom: 0.1rem;
    p{
      text-align: center;
    }
  }
  .other{
    background-color: #ffffff;
    p{
      @include rect(100%,0.4rem);
      @include flexbox();
      @include justify-content(space-between);
      @include align-items(center);
      padding: 0.2rem;
      border-bottom: 1px solid #f3f3f3
    }
  }

</style>

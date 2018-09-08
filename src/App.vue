<template>
  <div id="app" class="main">
    <!--<div class="header"></div>-->
    <div class="content">
      <router-view></router-view>
    </div>
    <div class="footer">
      <v-footer></v-footer>
    </div>
  </div>
</template>
<script>
import MainFooter from '@/components/MainFooter'
export default {
  components: {
    'v-footer': MainFooter
  }
}
</script>
<style>
  @import "assets/icon/iconfont.css";
</style>
<style lang="scss">
  @import "lib/reset";
  html,body{
    @include rect(100%,100%)
  }
  .main{
    @include rect(100%,100%);
    @include flexbox();
    @include flex-direction(column);
    .content{
      @include flex();
      @include rect(100%,auto);
      @include overflow(auto)
    }
    .footer{
      @include rect(100%,0.5rem);
      @include background-color(#ccc)
    }
  }

</style>

<template>
  <div class="register">
    <mt-field  placeholder="账号 / 手机号 / Emall" type="tel"></mt-field>
    <mt-field  placeholder="请输入您的密码" type="password"></mt-field>
    <mt-button type="danger" size="large" class="but">登录</mt-button>
  </div>
</template>
<script>
import Vue from 'vue'
import { Field, Button} from 'mint-ui';
Vue.component(Field.name, Field);
Vue.component(Button.name, Button);
export default {
}
</script>
<style lang="scss">
  @import "../lib/reset.scss";
  .register{
    .mint-field-core{
      height: 0.5rem;
      border-bottom: 1px solid #cccccc;
    }
    .but1{
      margin-top: 0.05rem;
    }
    .but{
      width: 94%;
      margin-left:3%;
      margin-top: 0.2rem;
      background-color: #df2d2d;
      height: 0.5rem;
      font-size: 0.22rem;
    }
  }
</style>

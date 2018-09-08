<template>
  <div class="login">
    <div class="loginBut">
      <mt-field  placeholder="请输入手机号" style="width: 70%" :state="telState" v-model="tel"></mt-field>
      <mt-button :type="butColor" style="width: 30%" @click="sendData" :disabled="dis">发送验证码</mt-button>
    </div>
    <mt-field  placeholder="请输入验证码" :state="captchaState"  v-model="val">{{val}}</mt-field>
    <mt-button :type="bdColor" size="large" class="but" @click="changedb()" :disabled="disabled">登录</mt-button>
  </div>
</template>
<script>
import Vue from 'vue'
import {Field, Button} from 'mint-ui'
import axios from 'axios'
Vue.component(Field.name, Field)
Vue.component(Button.name, Button)
export default {
  data () {
    return {
      tel: '',
      bdColor: 'default',
      butColor: 'default',
      val: '',
      dis: true,
      disabled: true,
      code: ''
    }
  },
  computed: {
    telState () {
      const str = '^1(3|4|5|6|7|8|9)\\d{9}$'
      if (this.tel.match(str)) {
        this.butColor = 'danger'
        this.dis = false
        return 'success'
      } else {
        if (this.tel == '') {
          return ''
        }
        return 'error'
      }
    },
    captchaState () {
      console.log(this.val)
      if (!this.val == '') {
        if (this.val== this.code){
          this.bdColor = 'danger'
          this.disabled = false
          return 'success'
        } else {
          return ''
        }
      }
    }
  },
  methods: {
    changedb () {
      localStorage.setItem('user', this.tel)
      this.$router.push('username')
    },
    sendData () {
      axios.get('http://www.daxunxun.com/users/sendCode?tel=' + this.tel)
        .then(res => {
          console.log(res.data)
          this.code = res.data.code
          console.log(this.code)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>
<style lang="scss">
  @import "../lib/reset.scss";
.login{
  .loginBut{
    @include flexbox();
    .mint-field-core{
      border-bottom: 1px solid #d6d6d6;
      height: 0.5rem;
    }
  }
  .but{
    width: 94%;
    margin-left:3%;
  }
}

</style>

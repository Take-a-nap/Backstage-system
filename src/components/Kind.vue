<template>
  <div>
    <div class="header">影院</div>
    <div class="cinema-inp">
      <select>
        <option>上海</option>
      </select>
      <input type="text" placeholder="搜影院"/>
    </div>
    <div class="cinema-ul">
      <ul>
        <li><p>全城</p></li>
        <li><p>品牌</p></li>
        <li><p>特色</p></li>
      </ul>
    </div>
    <div class="kind-body">
      <div class="kind-cent" v-for="item of addressList" :key="item.id">
        <div class="cinema-content">
          <div class="top"><span>{{item.nm}}</span><span class="price">{{item.sellPrice}}元起</span></div>
          <div class="middle">
            <p class="kind-p1"><span class="kind-span1">{{item.addr}}</span><span class="kind-span2">{{item.distance}}</span></p>
            <i><span class="bor1">小吃</span><span class="bor2">折扣卡</span></i>
         </div>
         </div>
      </div>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
export default {
  data() {
    return {
      addressList: []
    }
  },
  methods: {
    getData () {
      axios.get('http://localhost:3000/address')
        .then(res => {
          this.addressList = res.data
          console.log(this.addressList)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  mounted () {
      this.getData()
  }
}
</script>
<style lang="scss">
  @import "../lib/reset.scss";
  .header{
    @include rect(100%,0.5rem);
    @include background-color(#e54847);
    @include line-height(0.5rem);
    @include text-align(center);
    @include text-color(#fff);
  }
  .cinema-inp{
    @include flexbox();
    @include rect(100%,0.5rem);
    @include justify-content(space-around);
    @include background-color(#f5f5f5);
    @include align-items(center);
    select{
      border: none;
      @include background-color(#f5f5f5);
    }
    input{
      text-align: center;
      @include rect(60%,0.4rem);
      @include border(1px, #ccc, solid);
      @include border-radius(0.05rem);
      border: 1px solid #cccccc
    }
  }
  .cinema-ul{
    border-top: 1px solid #cccccc;
    ul{
      @include rect(100%,0.5rem);
      @include flexbox();
    }
    li{
      @include flex(1);
      @include flexbox();
      @include align-items(center);
      p {
        @include rect(100%,0.25rem);
        @include text-align(center);
        border-right: 1px solid #cccccc;
      }
    }
  }
  .kind-body{
    @include overflow(auto)
  }
  .cinema-content{
    @include rect(95%,1.3rem);
    padding-left: 10px;
    border-top: 1px solid #cccccc;
    border-bottom: 1px solid #cccccc;
    .top{
      @include rect(100%, 0.4rem);
      @include line-height(0.4rem);
      .price{
        font-size: 0.18rem;
        color: #f03d37;
        margin-left: 0.1rem;
      }
    }
    .middle{
      @include rect(100%, 0.3rem);
      @include line-height(0.3rem);
      .kind-p1{
        @include flexbox();
        .kind-span1{
          width: 60%;
          @include ellipsis(100%, 1)
        }
      }
      i{
        .bor1{
          border: 1px solid #f90;
          color: #f90;
          margin: 0.05rem;
          padding: 0.02rem;
        }
        .bor2{
          border: 1px solid #589daf;
          color: #589daf;
          margin: 0.05rem;
          padding: 0.02rem;
        }
      }
    }
  }
</style>

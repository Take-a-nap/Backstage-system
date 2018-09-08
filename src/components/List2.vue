<template>
<div class="coming">
  <h3>近期最受期待</h3>
  <ul class="coming-ul">
    <li v-for="item of list2" :kye="item.id">
      <div class="coming-img">
        <img :src="item.img">
        <span>{{item.wish}}想看</span>
      </div>
      <h2 style="overflow: hidden;text-overflow: ellipsis; white-space: nowrap;">{{item.nm}}</h2>
      <p style="overflow: hidden;text-overflow: ellipsis; white-space: nowrap;">{{item.comingTitle}}</p>
    </li>
  </ul>
</div>
</template>
<script>
export default {
  props: {
    list2: {
      type: Array,
      default: () => {
        return [1, 1, 1]
      }
    }
  }
}
</script>
<style lang="scss">
  @import "../lib/reset.scss";
  .coming{
    margin-top: 1.1rem;
    h3{
     margin-left: 0.15rem;
    }
    .coming-ul{
      @include overflow(auto);
      @include flexbox();
      border-bottom: 0.1rem solid #efefef;
      li{
        @include rect(1.0rem,2rem);
        padding: 12px 0 12px 15px;
        .coming-img{
          position: relative;
          img{
            @include rect(0.85rem,1.15rem);
          }
          span{
            position: absolute;
            left: 0.04rem;
            bottom: 0.02rem;
            color: #faaf00;
            font-size: 0.13rem;
            font-weight: 600
          }
        }
      }
    }
  }
</style>

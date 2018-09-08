<template>
  <ul class="movie-ul">
    <li class="movie-show" v-for="item of list" :key="item.id">
        <div class="movie-img"><img :src="item.img" ></div>
        <div class="movie-content">
          <h1>{{item.nm}}</h1>
         <p>观众评<span>{{item.sc}}</span></p>
          <p class="star">主演:{{item.star}}</p>
          <p>{{item.showInfo}}</p>
        </div>
        <div class="movie-but">
         <button>购票</button>
       </div>
    </li>
  </ul>
</template>
<script>
export default {
  props: {
    list: {
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
  .movie-ul{
    margin-top: 1rem;
    @include rect(100%,auto)
  }
  .movie-show{
    @include flexbox();
    @include rect(100%,1.2rem);
    @include align-items(center);
    .movie-img{
      @include flex(1);
      margin :0.1rem;
      @include text-align(center);
      img{
        @include rect(0.8rem,1rem);
      }
    }
    .movie-content{
      @include flex(3);
      @include rect(50%,100%);
      padding: 0.1rem;
      border-bottom: 1px solid #cccccc;
      h1{
        @include font-size(0.16rem)
      }
      p{
        &.star{
          @include ellipsis(100%, 1);
        }
        span{
          color: #faaf00;
          font-size: 0.18rem;
          font-weight:500;
        }
      }
    }
    .movie-but{
      @include flexbox();
      @include flex(1);
      @include align-items(center);
      @include justify-content(center);
      border-bottom: 1px solid #cccccc;
      @include rect(100%,100%);
      margin-right: 15px;
      button{
        @include rect(0.50rem,0.3rem);
        @include line-height(0.3rem);
        @include background-color(#f03d37);
        @include text-color(#fff);
        @include border-radius(0.05rem);
        border: none;
      }
    }
  }
</style>

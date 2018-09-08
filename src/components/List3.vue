<template>
  <div>
    <ul class="movie-ul" style="margin-top: 0.1rem">
      <li class="movie-show" v-for="item of list3" :key="item._id">
        <div class="movie-img"><img :src="item.img" ></div>
        <div class="movie-content">
          <h1>{{item.nm}}</h1>
          <p><span>{{item.wish}}</span>想看</p>
          <p class="star">主演:{{item.star}}</p>
          <p>{{item.showInfo}}</p>
        </div>
        <div class="movie-but">
          <button style="background-color: #3c9fe6">预售</button>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    list3: {
      type: Array,
      default: () => {
        return [1, 1, 1]
      }
    }
  }
}
</script>
<style lang="scss">
</style>

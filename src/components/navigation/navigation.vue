<template>
  <div class="navigation border-1px">
    <div class="nav-item">
      <router-link to="/goods">商品</router-link>
    </div>
    <div class="nav-item">
      <router-link to="/ratings">评论</router-link>
    </div>
    <div class="nav-item">
      <router-link to="/seller">商家</router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
  @import "../../assets/scss/mixin";
  .navigation {
    display: flex;
    height: 40px;
    width: 100%;
    line-height: 40px;
    @include border-1px(rgba(7, 17, 27, 0.1));
    .nav-item {
      flex: 1;
      text-align: center;
      a {
        display: block;
        font-size: 14px;
        color: rgb(77, 85, 93);
        &.router-link-active {
          color: rgb(240, 20, 20);
        }
      }
    }
  }
</style>

<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img :src="seller.avatar" width="64" height="64">
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{ seller.name }}</span>
        </div>
        <div class="description">
          <span>{{ seller.description }}/{{ seller.deliveryTime }}分钟送达</span>
        </div>
        <div class="support" v-if="seller.supports">
          <span class="icon" :class="classMap[seller.supports[0].type]"></span>
          <span class="text">{{ seller.supports[0].description }}</span>
        </div>
      </div>
      <div class="supports-count" v-if="seller.supports" @click="showDetail">
        <span class="count">{{ seller.supports.length }}个</span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
    </div>
    <div class="bulletin-wrapper" @click="showDetail">
      <span class="icon"></span>
      <span class="text">{{ seller.bulletin }}</span>
      <i class="icon-keyboard_arrow_right"></i>
    </div>
    <div class="background">
      <img :src="seller.avatar" width="100%">
    </div>
    <v-detail @hideDetail="hideDetail" :detailShow="detailShow" :seller="seller"></v-detail>
  </div>
</template>
<script>
  import detail from 'components/detail/detail';

  export default {
    props: {
      seller: {
        type: Object
      }
    },
    data() {
      return {
        detailShow: false
      };
    },
    methods: {
      showDetail() {
        this.detailShow = true;
      },
      hideDetail() {
        this.detailShow = false;
      }
    },
    created() {
      this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
    },
    components: {
      'v-detail': detail
    }
  };

</script>
<style lang="scss">
  @import "../../assets/scss/mixin.scss";
  .header {
    position: relative;
    overflow: hidden;
    color: rgb(255, 255, 255);
    width: 100%;
    .content-wrapper {
      position: relative;
      padding: 20px 12px 17px 24px;
      .avatar {
        display: inline-block;
        border-radius: 4px;
      }
      .content {
        display: inline-block;
        padding: 2px 0 2px 16px;
        line-height: 18px;
        .title {
          padding-bottom: 8px;
          .brand {
            display: inline-block;
            vertical-align: middle;
            width: 30px;
            height: 18px;
            @include bg-image('brand');
            background-size: 30px 18px;
            background-repeat: no-repeat;
          }
          .name {
            padding-left: 6px;
            font-size: 16px;
            font-weight: bold;
          }
        }
        .description {
          padding-bottom: 10px;
          font-size: 12px;
          font-weight: 200;
          line-height: 12px;
        }
        .support {
          line-height: 12px;
          .icon {
            display: inline-block;
            vertical-align: middle;
            width: 12px;
            height: 12px;
            background-size: 12px 12px;
            background-repeat: no-repeat;
            &.decrease {
              @include bg-image('decrease_1');
            }
            &.discount {
              @include bg-image('discount_1');
            }
            &.guarantee {
              @include bg-image('guarantee_1');
            }
            &.invoice {
              @include bg-image('invoice_1');
            }
            &.special {
              @include bg-image('special_1');
            }
          }
          .text {
            font-size: 12px;
            font-weight: 200;
          }
        }
      }
      .supports-count {
        position: absolute;
        right: 12px;
        bottom: 15px;
        padding: 2px 8px;
        border-radius: 18px;
        background-color: rgba(0, 0, 0, 0.2);
        text-align: center;
        .count {
          font-size: 10px;
          font-weight: 200;
          line-height: 12px;
        }
        .icon-keyboard_arrow_right {
          line-height: 24px;
          font-size: 10px;
        }
      }
    }
    .bulletin-wrapper {
      position: relative;
      height: 28px;
      padding: 0 22px 0 12px;
      background-color: rgba(7, 17, 27, 0.2);
      line-height: 28px;
      font-size: 10px;
      font-weight: 200;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      .icon {
        display: inline-block;
        vertical-align: middle;
        width: 22px;
        height: 12px;
        @include bg-image('bulletin');
        background-size: 22px 12px;
        background-repeat: no-repeat;
      }
      .icon-keyboard_arrow_right {
        position: absolute;
        font-size: 10px;
        right: 12px;
        top: 8px;
      }
    }
    .background {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      z-index: -1;
      filter: blur(10px);
    }
  }

</style>

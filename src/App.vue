<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <v-navigation></v-navigation>
    <keep-alive>
      <router-view :seller="seller"></router-view>
    </keep-alive>
  </div>
</template>
<script>
  import header from 'components/header/header';
  import navigation from 'components/navigation/navigation';
  import ajax from './ajax';

  export default {
    data() {
      return {
        seller: {}
      };
    },
    created() {
      ajax.getSeller((res) => {
        this.seller = res;
      });
    },
    components: {
      'v-header': header,
      'v-navigation': navigation
    }
  };

</script>
<style>


</style>

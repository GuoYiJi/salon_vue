<template>
  <div class="container">
    <router-view></router-view>
  </div>
</template>
<script>
  import store from '../vuex/store'
  export default {
    store
  }
</script>
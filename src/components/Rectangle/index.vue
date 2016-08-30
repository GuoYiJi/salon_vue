<style lang="sass">
  @import '../../assets/scss/base/vars';
  @import '../../assets/scss/base/funs';
  .rectangle {
    $parent-size: 200rem / $rem;
    background: #fff;
    position: relative;
    padding-top: 35.5rem / $rem;
    padding-bottom: 51.5rem / $rem;
    canvas {
      $size: 161.5rem / $rem;
      position: absolute;
      width: $size;
      height: $size;
      transform: translate((($parent-size - $size) / 2), (($parent-size - $size) / 2))
    }
    @at-root #{&}-icon {
      position: relative;
      margin-left: auto;
      margin-right: auto;
      width: $parent-size;
      height: $parent-size;
      & > .icon-items {
        position: absolute;
        text-align: center;
        .icon-item {
          $size: 40rem / $rem;
          width: $size;
          height: $size;
          background-size: $size;
          background-repeat: no-repeat;
        }
        p {
          font-size: 10rem / $rem;
          line-height: 12rem / $rem;
          color: rgb(53, 53, 53)
        }
        &:nth-child(2) {
          right: 0;
          top: 50%;
          transform: translate(90%, -20rem / $rem);
        }
        &:nth-child(3) {
          right: 5rem / $rem;
          bottom: -13rem / $rem;
        }
        &:nth-child(4) {
          left: 5rem / $rem;
          bottom: -13rem / $rem;
        }
        &:nth-child(5) {
          left: 0;
          top: 50%;
          transform: translate(-90%, -20rem / $rem);
        }
        &:nth-child(6) {
          left: 5rem / $rem;
          top: -13rem / $rem;
        }
        &:nth-child(7) {
          right: 5rem / $rem;
          top: -13rem / $rem;
        }
      }
    }
  }
</style>
<template>
  <div class="rectangle">
    <div class="rectangle-icon">
      <canvas id="jsRadar" data-type="Radar"></canvas>
      <template v-for="item in data.myResults">
        <div class="icon-items">
          <div class="icon-item" v-bind:style="{ backgroundImage: 'url(' + item.picture + ')' }"></div>
          <p>{{item.display_title}}</p>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
  import Rectangle from './index'
  export default {
    props: ['data'],
    watch: {
      data(val, oldVal){
        new Rectangle(val)
      }
    }
  }
</script>
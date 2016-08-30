<style lang="sass">
  @import '../../assets/scss/base/vars';
  @import '../../assets/scss/base/funs';
  .pk-box {
    $color-orange: rgb(251, 160, 62);
    $color-green: rgb(146, 199, 0);

    .box {
      @at-root #{&}-flex {
        @include box();
      }
      @at-root #{&}-items {
        @include box-flex(1);
      }
    }
    .user-pk {
      background: rgb(249, 248, 245);
      padding: 42.5rem / $rem 30rem / $rem 0;
      & > .avatar-box {
        @include box();
        position: relative;
      }
      .success {
        position: relative;
        &:after {
          position: absolute;
          left: 50%;
          top: 0;
          background: url(crown@2x.png) no-repeat;
          content: "";
          $size: 28rem / $rem;
          width: $size;
          height: $size;
          background-size: $size;
          @include translate(-14, -15)
        }
      }
      .avatar-item {
        position: relative;
        $size: 53rem / $rem;
        width: $size;
        height: $size;
        margin: 0 auto;
        .avatar-pic {
          position: absolute;
          left: 0;
          top: 0;
          z-index: 2;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          overflow: hidden;
          & > img {
            display: block;
            width: 100%;
            height: auto;
          }
        }
      }
      .circle {
        @at-root {
          #{&}-orange , #{&}-green {
            & > .avatar-pic {
              border: 3rem / $rem solid #fff;
              box-sizing: border-box;
            }
          }
        }
        @at-root #{&}-orange > .avatar-pic {
          border-color: $color-orange;
          
        }
        @at-root #{&}-green > .avatar-pic {
          border-color: $color-green;
        }
      }
      .vs {
        position: absolute;
        left: 50%;
        top: 50%;
        background: url(vs@2x.png) no-repeat;

        @include translate(-14, -14);
        $size: 28rem / $rem;
        width: $size;
        height: $size;
        background-size: $size;
      }


      & > .user-bar {
        margin: 12rem / $rem 0;
      }
      
    }

    .user-bar {
      $radius: 2px;
      position: relative;
      @at-root #{&}-items {
        position: relative;
        float: left;
        width: 50%;
        height: 8rem / $rem;
        border-radius: $radius;
      }
      .bar-item-orange {
        background-color: $color-orange;
        width: 50%;
      }
      .bar-item-green {
        background-color: $color-green;
        width: 50%;
      }
      .skew-icon {
        position: absolute;
        left: 49%;
        top: 0;
        width: 6rem / $rem;
        @include translate(0, -6)
        height: 100%;
        background: #fff;
        transform: skew(-30deg);
      }
    }

    .name-box {
      padding-bottom: 51.5rem / $rem;
      font-size: 15rem / $rem;
      line-height: 20rem / $rem;
      text-align: center;
      .text-orange {
        color: rgb(207, 81, 9)
      }
      .text-green {
        color: rgb(94, 124, 11)
      }
      span {
        margin-left: 5rem / $rem;
        display: inline-block;
        vertical-align: middle;
        font-size: 15rem / $rem;
        &:last-child {
          font-size: 20rem / $rem;
          font-weight: bold;
        }
      }
    }
    .read-tit {
      margin: 0 auto;
      @include translate(0, -16);
      $w: 150rem / $rem;
      $h: 32rem / $rem;
      width: $w;
      height: $h;
      line-height: $h;
      font-size: 12rem / $rem;
      color: rgb(51, 51, 51);
      text-align: center;
      background: url(title_index@2x.png);
      background-size: $w $h;
    }
    .quota {
      position: relative;
      padding-top: 56.5rem / $rem;
      padding-bottom: 115.5rem / $rem;
      background-color: rgb(246, 248, 251);
      font-weight: bold;
      @at-root #{&}-tit {
        position: absolute;
        left: 50%;
        top: 0;
        transform: translateX(-50%);
        font-weight: normal;
        padding: 20rem / $rem 0;
        font-size: 12rem / $rem;
        color: rgb(153, 153, 153);
        &:before, &:after {
          position: absolute;
          top: 50%;
          transform: translateY(-50%) scaleY(0.5);
          width: 40rem / $rem;
          border: 1px solid rgb(204, 204, 204);
          content: "";
        }
        $pos-size: -56rem / $rem;
        &:before {
          left: $pos-size;
        }
        &:after {
          right: $pos-size;
        }
      }
      @at-root #{&}-items {
        position: relative;
        min-height: 45rem / $rem;
        padding: (41rem / $rem) (20rem / $rem) (20rem / $rem);
        background-color: #fff;
        &:before {
          position: absolute;
          left: 50%;
          top: 0;
          height: 100%;
          content: "";
          width: 1px;
          background-color: rgb(153, 153, 153);
        }
      }
      @at-root #{&}-item {
        $text-orange: rgb(207, 81, 9);
        $text-green: rgb(94, 124, 11);
        @at-root #{&}-bar {
          .progress-item {
            position: absolute;
            top: 41rem / $rem;
            & > p {
              margin-top: 10rem / $rem;
              font-size: 20rem / $rem;
            }
            & > .link {
                position: relative;
                display: block;
                width: 117.5rem / $rem;
                height: 4rem / $rem;
                border-radius: 4px;
                overflow: hidden;
                background-color: rgb(246, 248, 251);
                & > span {
                  position: absolute;
                  top: 0;
                  height: 100%;
                  border-radius: 4px;
                }
            }
          }
          $pos-size: 20rem / $rem;
          .progress-orange {
            left: $pos-size;
            color: $text-orange;
            & > .link {
              & > span {
                left: 0;
                background-color: $color-orange;
              }
            }
            
          }
          .progress-green {
            right: $pos-size;
            color: $text-green;
            text-align: right;
            & > .link {
              & > span {
                right: 0;
                background-color: $color-green;
              }
            }
          }
        }
        @at-root #{&}-icon {
          position: absolute;
          left: 50%;
          top: 50%;
          @include translate(-30, -30);
          $size: 60rem / $rem;
          width: $size;
          height: $size;
          background-color: #fff;
          background-repeat: no-repeat;
          background-size: $size;
          @at-root {
            #{&}.total {
              background-image: url(icon_total@2x.png);
            }
            #{&}.value {
              background-image: url(icon_value@2x.png);
            }
            #{&}.author {
              background-image: url(icon_author@2x.png);
            }
            #{&}.press {
              background-image: url(icon_press@2x.png);
            }
          }
        }

        @at-root #{&}-txt {
          & > .desc-item {
            position: absolute;
            top: 18rem / $rem;
            padding-bottom: 6rem / $rem;
            width: 117.5rem / $rem;
            height: 45rem / $rem;
            font-size: 14rem / $rem;
            display: -webkit-box;
            -webkit-box-align: center;
            -webkit-box-orient: horizontal;
            span {
              width: 100%;
            }
          }
          $pos-size: 20rem / $rem;
          & > .desc-orange {
            left: $pos-size;
            text-align: left;
            &:after {
              left: 0;
            }
            color: $text-orange;
          }
          & > .desc-green {
            right: $pos-size;
            text-align: right;
            &:after {
              right: 0;
            }
            color: $text-green;
          }
        }
      }
    }
  }
</style>
<template>
  <div class="pk-box">
    <div class="user-pk">
      <div class="avatar-box box-flex">
        <div class="box-items">
          <div class="avatar-item circle-orange" v-bind:class="{ success: selfCount > otherCount }">
            <div class="avatar-pic"><img alt="{{avatar.self.user_name}}" class="js-avatar" :src="avatar.self.avatar"></div>
          </div>
        </div>
        <div class="box-items">
          <div class="avatar-item circle-green" v-bind:class="{ success: selfCount < otherCount }">
            <div class="avatar-pic"><img alt="{{avatar.other.user_name}}" class="js-avatar" :src="avatar.other.avatar"></div>
          </div>
        </div>
        <div class="vs"></div>
      </div>
      <div class="user-bar clearfix">
        <div class="user-bar-items bar-item-orange" v-bind:style="{ width: orangeBar }"></div>
        <div class="user-bar-items bar-item-green" v-bind:style="{ width: greenBar }"></div>
        <div class="skew-icon" v-bind:style="{ left: skewBar }"></div>
      </div>
      <div class="name-box">
        <div class="box-flex">
          <div class="box-items text-orange"><span>{{avatar.self.user_name}}</span><span>{{selfCount}}</span></div>
          <div class="box-items text-green"><span>{{avatar.other.user_name}}</span><span>{{otherCount}}</span></div>
        </div>
      </div>
    </div>
    <div class="read-tit">阅读基因对比</div>
    <Rectangle :data="data"></Rectangle>
    <div class="quota">
      <div class="quota-tit">其他指标对比</div>
      <div class="quota-items quota-item-bar">
        <div class="progress-item progress-orange">
          <i class="link"><span v-bind:style="{ width: selfLibrary }"></span></i>
          <p>{{library.self.book_count}}</p>
        </div>
        <div class="progress-item progress-green">
          <i class="link"><span v-bind:style="{ width: otherLibrary }"></span></i>
          <p>{{library.other.book_count}}</p>
        </div>
        <div class="quota-item-icon total"></div>

      </div>
      <div class="quota-items quota-item-bar">
        <div class="progress-item progress-orange">
          <i class="link js-myLink"><span v-bind:style="{ width: selfMoney }"></span></i>
          <p>¥{{self.money.count}}</p>
        </div>
        <div class="progress-item progress-green">
          <i class="link js-otLink"><span v-bind:style="{ width: otherMoney }"></span></i>
          <p>¥{{other.money.count}}</p>
        </div>
        <div class="quota-item-icon value"></div>

      </div>
      <div class="quota-items quota-item-txt">
        <div class="desc-item desc-orange border-b"><span class="nowrap-double">{{self.favour_author}}</span></div>
        <div class="desc-item desc-green border-b"><span class="nowrap-double">{{other.favour_author}}</span></div>
        <div class="quota-item-icon author"></div>
      </div>
      <div class="quota-items quota-item-txt">
        <div class="desc-item desc-orange border-b"><span class="nowrap-double">{{self.favour_publisher}}</span></div>
        <div class="desc-item desc-green border-b"><span class="nowrap-double">{{other.favour_publisher}}</span></div>
        <div class="quota-item-icon press"></div>
      </div>
    </div>
  </div>
  <Downbar track="pk分享页下载"></Downbar>
</template>


<script>
  import Downbar from '../Downbar/index.vue'
  import Rectangle from '../Rectangle/index.vue'
  import { getRectangle, getPk, getUser } from '../../vuex/actions'
  export default {
    components: { Downbar, Rectangle },
    computed: {
      // 自己的总数
      selfCount(){
        let count = 0
        this.data.myResults.forEach((item) => {
          count += item.value
        })
        return count
      },
      // 对方的总数
      otherCount(){
        let count = 0
        this.data.othersResults.forEach((item) => {
          count += item.value
        })
        return count
      },
      orangeBar(){
        return this.selfCount / (this.selfCount + this.otherCount) * 100 + '%'
      },
      greenBar(){
        return this.otherCount / (this.selfCount + this.otherCount) * 100 + '%'
      },
      skewBar(){
        let count = this.selfCount / (this.selfCount + this.otherCount) * 100
        if (count >= '100') {
          return '-100%'
        } else if (count <= '0') {
          return '-100%'
        }
        return (this.selfCount - 3) / (this.selfCount + this.otherCount) * 100 + '%'
      },
      moneyCount(){
        return this.self.money.count + this.other.money.count
      },

      libraryCount(){
        return this.library.self.book_count + this.library.other.book_count
      },

      // 自己藏书总量占总的比例
      selfLibrary(){
        return (this.library.self.book_count / this.libraryCount) * 100 + '%'
      },

      // 对方藏书总量占总的比例
      otherLibrary(){
        return (this.library.other.book_count / this.libraryCount) * 100 + '%'
      },
      // 自己藏书价值占总的比例
      selfMoney(){
        return (this.self.money.count / this.moneyCount) * 100 + '%'
      },
      // 对方藏书价值占总的比例
      otherMoney(){
        return (this.other.money.count / this.moneyCount) * 100 + '%'
      }
    },
    vuex: {
      getters: {
        data: ({pk}) => pk.data,
        self: ({pk}) => pk.self,
        other: ({pk}) => pk.other,
        library: ({pk}) => pk.library,
        avatar: ({pk}) => pk.avatar
      },
      actions: {
        getRectangle,
        getPk,
        getUser
      }
    },
    created(){
      let id = this.$route.params.pk_id
      let to_id = this.$route.params.pk_to_id
      this.getRectangle(id, to_id)
      this.getPk(id, to_id)
    },
    compiled(){
    }
  }
</script>
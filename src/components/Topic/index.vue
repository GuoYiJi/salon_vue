<style lang="sass" scope>
  @import '../../assets/scss/base/vars';
  .topic-box {
    padding: (25rem / $rem) (15rem / $rem) (16.5rem / $rem);
    .user {
      #{&}-pic {
        $size: 40rem / $rem;
        width: $size;
        height: $size;
        overflow: hidden;
        border-radius: 50%;
        & > img {
          display: block;
          width: 100%;
          height: auto;
        }
      }
      #{&}-name {
        font-size: 13rem / $rem;
        line-height: 14rem / $rem;
      }
      #{&}-time {
        margin-top: 6rem / $rem;
        font-size: 10rem / $rem;
        line-height: 12rem / $rem;
        color: rgb(204, 204, 204);
      }
    }
    .share-tit {
      font-size: 20rem / $rem;
      line-height: 1.5;
      margin: 20rem / $rem 0;
      font-weight: bold;
    }

    .content {
      #{&}-tit {
        margin: 20rem / $rem 0;
        font-size: 15rem / $rem;
        line-height: 28rem;
      }

      #{&}-pic {
        display: block;
        margin: 20rem / $rem 0;
        width: 100%;
        height: auto;
      }
    }
    .book {
      #{&}-items {
        margin: 20rem / $rem 0;
        &:last-child {
          margin-bottom: 0;
        }
      }
      #{&}-box {
        padding: (15rem / $rem) (20rem / $rem);
      }
      #{&}-pic {
        float: left;
        margin-right: 20rem / $rem;
        $w: 50rem / $rem;
        $h: 70rem / $rem;
        width: $w;
        height: $h;
        & > img {
          display: block;
          box-shadow: 3px 3px 4px rgba(0, 0, 0, .3);
          width: $w;
          height: $h;
        }
      }
      #{&}-name {
        padding-top: 9.5rem / $rem;
        line-height: 18rem / $rem;
        font-size: 16rem / $rem;
      }
      #{&}-ahtor {
        margin-top: 10rem / $rem;
        font-size: 10rem / $rem;
        color: rgb(170, 170, 170)
      }
      #{&}-txt {
        color: rgb(85, 85, 85);
        padding: 0 20rem  / $rem 15rem / $rem;
        font-size: 13rem / $rem;
      }
    }

    .links {
      font-size: 12rem / $rem;
      & > a {
        margin-right: 5rem / $rem;
        color: rgb(204, 204, 204)
      }
      
    }
  }
</style>
<template>
  <div class="topic-box">
    <div class="user clearfix ui_cells">
      <div class="ui_cell">
        <div class="ui_cell_hd user-pic"><img :src="topic.user.avatar" alt=""></div>
        <div class="ui_cell_bd">
          <div class="user-name">{{topic.user.user_name}}</div>
          <div class="user-time" v-text="topic.createtime | date 'yyyy-MM-dd'"></div>
        </div>
      </div>
    </div>

    <h1 class="share-tit">{{topic.title}}</h1>
    <template v-for="item in topic.postBoxes">
      <h3 class="content-tit" v-if="item.type === 'text'">{{item.data.content}}</h3>
      <img class="content-pic" :src="item.data.content" alt="" v-if="item.type === 'image'">
      <template v-if="item.type === 'book'">
        <template v-if="item.data.remark">
        <div class="book-items clearfix border">
          <div class="book-box clearfix">
            <div class="book-pic"><img :src="item.data.book.images.medium" alt=""></div>
            <div>
              <div class="book-name">{{item.data.book.title}}</div>
              <div class="book-ahtor">{{item.data.book.author[0]}}</div>
            </div>
          </div>
          <div class="book-txt">{{item.data.remark}}</div>
        </div>
        </template>
        <template v-else>
        <div class="book-items clearfix">
          <div class="book-box clearfix border bg-light">
        
            <div class="book-pic"><img :src="item.data.book.images.medium" alt=""></div>
            <div>
              <div class="book-name">{{item.data.book.title}}</div>
              <div class="book-ahtor">{{item.data.book.author[0]}}</div>
            </div>
          </div>
          <div class="book-txt">{{item.data.remark}}</div>
        </div>
        </template>
      </template>
    </template>
    <div class="links" v-if="topic.hashtags">
      <a href="javascript:;" v-for="item in topic.hashtags">#{{item}}</a>
    </div>
  </div>
  <Downbar track="话题分享页下载"></Downbar>
</template>

<script>
  import Downbar from '../Downbar/index.vue'
  import { getTopic } from '../../vuex/actions'
  export default {
    components: {
      Downbar
    },
    vuex: {
      getters: {
        topic: ({topic}) => topic.data
      },
      actions: {
        getTopic
      }
    },
    created(){
      let id = this.$route.params.topic_id
      this.getTopic(id)
    }
  }
</script>
<style lang="sass">
  .home-box {
    height: 100%;
    .row {
      height: 100%;
    }
    .side-bar {
      height: 100%;
      background-color: #2e3238;
      color: #f4f4f4;
    }
    .user {
      padding-top: 15px;
      @at-root {
        #{&}__avatar {
          $size: 40px;
          line-height: $size;
          & > img {
            display: inline-block;
            width: $size;
            height: $size;
          }
          & > p {
            margin-left: 10px;
            font-size: 16px;
            display: inline-block;
          }
        }
      }
    }
    .group {
      margin-top: 30px;
      @at-root {
        #{&}__items {
          margin: 0 -15px;
          padding: 15px;
          box-szing: border-box;
          &:hover {
            cursor: pointer;
            background-color: hsla(0,0%,100%,.03);
          }
          $size: 28px;
          line-height: $size;
          border-bottom: 1px solid #292c33;
          &:first-child {
            border-top: 1px solid #292c33;
          }
          & > img {
            float: left;
            margin-right: 10px;
            width: $size;
            height: $size;
            border-radius: 50%;
            overflow: hidden;
          }
          & > p {
            margin: 0;
          }
        }
      }
    }
    .comment-box {
      height: 70%;
      overflow: auto;
    }
    .message-box {
      height: 75%;
      overflow: auto;
    }

  }
</style>
<template>
  <div class="home-box">
    <div class="row">
      <div class="col-lg-3 side-bar">
        <div class="user">
          <div class="user__avatar clearfix">
            <img src="http://7xj2i2.com2.z0.glb.qiniucdn.com/0e041af8b52ee81b875c68ac5f852a4d.png" alt="">
            <p>帅帅帅郭</p>
          </div>
          <div class="user__btns">
            <button type="button" class="btn btn-block btn-danger">退出</button>
            <button type="button" class="btn btn-block btn-primary mt-md">刷新</button>
          </div>
        </div>
        <ul class="group">
          <li class="group__items clearfix">
            <img src="http://ac-7jmvexny.clouddn.com/b7442b6781aa3c8d.jpg" alt="">
            <p>美度客</p>
          </li>
          <li class="group__items clearfix">
            <img src="http://ac-7jmvexny.clouddn.com/b7442b6781aa3c8d.jpg" alt="">
            <p>美度客</p>
          </li>
          <li class="group__items clearfix">
            <img src="http://ac-7jmvexny.clouddn.com/b7442b6781aa3c8d.jpg" alt="">
            <p>美度客</p>
          </li>
        </ul>
      </div>
      <div class="col-lg-5" style="height: 100%;">
        <div class="comment-box"><Comment></Comment></div>
        <div class="send-box" style="height: 30%;"><Addcomment></Addcomment></div>
        
      </div>
      <div class="col-lg-4" style="height: 100%;">
        <div class="message-box">
          <Message></Message>
        </div>
        <div class="send-box" style="height: 25%;"><Addcomment></Addcomment></div>
      </div>
    </div>
  </div>
</template>
<script>
  import Comment from '../Comment/index.vue'
  import Addcomment from '../Comment/add.vue'
  import Message from '../Message/index.vue'
  export default {
    components: { Comment, Addcomment, Message },
    ready(){
      window.calq.action.trackPageView('测试页面Home')
    }
  }
</script>
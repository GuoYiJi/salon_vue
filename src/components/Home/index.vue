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
            <img :src="user.avatar">
            <p>{{user.user_name}}</p>
          </div>
          <div class="user__btns">
            <button type="button" class="btn btn-block btn-danger">退出</button>
            <button type="button" class="btn btn-block btn-primary mt-md">刷新</button>
          </div>
        </div>
        <ul class="group">
          <template v-for="item in convs">
          <li class="group__items clearfix" @click="selectConv($index)">
            <img :src="item._attributes.cover" alt="">
            <p>{{item.name}}</p>
          </li>
          </template>
        </ul>
      </div>
      <div class="col-lg-5" style="height: 100%;">
        <div class="comment-box"><Comment></Comment></div>
        <div class="send-box" style="height: 30%;"><Addcomment></Addcomment></div>
        
      </div>
      <div class="col-lg-4" style="height: 100%;">
        <div class="message-box">
          <Message v-bind:room="room"></Message>
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
  import { getCookie } from '../../utils/authService'
  import { Realtime } from 'leancloud-realtime'
  export default {
    components: { Comment, Addcomment, Message },
    data(){
      return {
        realtimeObj: {},
        convs: {},
        conv: {},
        room: null,
        salonRoom: null
      }
    },
    vuex: {
      getters: {
        user: ({auth}) => auth.user
      }
    },
    created(){
      // AV.initialize('FVW3q1g4e8RXl11WC5NoBzzV-gzGzoHsz', 'Y0rmrXbkLGQcqWyDDh7enAI1')
      this.init()
    },
    ready(){
    },
    methods: {
      init(){
        this.realtimeObj = new Realtime({
          appId: 'FVW3q1g4e8RXl11WC5NoBzzV-gzGzoHsz'
        })
        this.query()
      },
      selectConv(index){
        console.log(index)
      },
      query(){
        const _self = this
        _self.realtimeObj.createIMClient('7c4ddbda0d19c84bdd9b687ff5a71a18').then((session) => {
          session.getQuery().contains('attr.kind', 'group').contains('attr.enable', 'true').containsMembers(['7c4ddbda0d19c84bdd9b687ff5a71a18']).find().then((data) => {
            this.convs = data
            this.conv = data[0]
          })
        })
        // return new Promise((resolve, reject) => {
        //   _self.realtimeObj.on('open', (session) => {
        //     _self.realtimeObj.query({
        //       where: {
        //         'attr.kind': 'group',
        //         'attr.enable': 'true',
        //         m: [_self.realtimeObj.clientId]
        //       }
        //     }, (data) => {
        //       resolve(data)
        //     })
        //   })
        // }).then((convs) => {
        //   this.convs = convs
        //   this.conv = convs[0]
        // })
      }
    },
    route: {
      activate(transition){
        let token = getCookie('token')
        if (!token) {
          transition.redirect('/login')
        }
        transition.next()
      }
    },
    watch: {
      'conv': function (newVal, oldVal){
        if (!newVal) {
          return
        }
        const _self = this
        const salonId = newVal._attributes.attr.salon_id
        _self.realtimeObj.createIMClient('7c4ddbda0d19c84bdd9b687ff5a71a18').then((session) => {
          session.createConversation({ members: [salonId] }).then((salonRoom) => {
            if (salonRoom) {
              _self.salonRoom = salonRoom
            }
          })
        })

        _self.realtimeObj.createIMClient('7c4ddbda0d19c84bdd9b687ff5a71a18').then((session) => {
          session.createConversation({ members: [newVal.id] }).then((room) => {
            if (room) {
              _self.room = room
            }
          })
        })
      }
    }
  }
</script>
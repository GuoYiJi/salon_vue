<style lang="sass">
  @import '../../assets/scss/base/vars';
  .article-box {
    padding-bottom: 30rem / $rem;
  }
  .banner-box {
    margin-bottom: 30rem / $rem;
    & > img {
      display: block;
      width: 100%;
      height: auto;
    }
  }

  .article-tt {
    & > h1 {
      padding: 0 (20rem / $rem);
      font-size: 20rem / $rem;
      line-height: 22rem / $rem;
      text-align: center;
      color: #000;
    }
    & > p {
      margin-top: 15rem / $rem;
      margin-bottom: 30rem / $rem;
      text-align: center;
      color: rgb(153, 153, 153);
      font-size: 13rem / $rem;
    }

  }
  .article-container {
    padding: 0 20rem / $rem;
    img {
      display: block;
      margin: 20rem / $rem 0;
      max-width: 100%;
      width: 100%;
      height: auto;
    }
    p {
      font-size: 15rem / $rem;
      color: rgb(17, 17, 17);
      line-height: 24rem / $rem;
    }
  }
</style>

<template>
  <div class="article-box">
    <div class="banner-box"><img :src="article.cover_picture_url" alt=""></div>
    <div class="article-tt">
      <h1>{{article.title}}</h1>
      <p>{{article.author}}</p>
    </div>
    <div class="article-container" v-html="article.content | markdown"></div>
  </div>
  <Downbar track="Article"></Downbar>
</template>

<script>
  import Downbar from '../Downbar/index.vue'
  import { getArticle } from '../../vuex/actions'
  export default {
    components: { Downbar },
    vuex: {
      getters: {
        article: ({article}) => article.data
      },
      actions: {
        getArticle
      }
    },
    ready(){
      window.calq.action.trackPageView('Article页面')
    },
    created(){
      let id = this.$route.params.article_id
      this.getArticle(id)
    }
  }
</script>
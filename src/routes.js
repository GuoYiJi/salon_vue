export default function (router){
  return router.map({
    '/home': {
      name: 'home',
      component: require('./components/Home/index.vue')
    },
    '/login': {
      name: 'login', 
      component: require('./components/Login/index.vue')
    }
  })
}
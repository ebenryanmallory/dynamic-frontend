import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Contact from "./views/Contact.vue";

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/contact', component: Contact }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  router,
  render: h => h(App),
  mounted () {
    // You'll need this for renderAfterDocumentEvent.
    document.dispatchEvent(new Event('render-event'))
  }
})

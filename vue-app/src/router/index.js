import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '../components/HelloWorld'

Vue.use(VueRouter)

const routes = [
  {
    name: 'hello-world',
    path: '/',
    component: HelloWorld
  }
]

export default routes
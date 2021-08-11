import './public-path';
import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import routes from './router';
import store from './store';
import actions from './shared/shared'
import globalRegister from './shared/index'

Vue.config.productionTip = false

let router = null;
let instance = null;
function render(props = {}) {
  const { container, getGlobalState } = props;
  Vue.prototype.getGlobalState = getGlobalState
  if (props) {
    actions.setActions(props)
  }
  router = new VueRouter({
    base: window.__POWERED_BY_QIANKUN__ ? '/app-vue/' : '/',
    mode: 'history',
    routes,
  });

  instance = new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount(container ? container.querySelector('#app') : '#app');
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  // 这里是子应用独立运行的环境，实现子应用的登录逻辑

  // 独立运行时，也注册一个名为global的store module
  globalRegister(store)
  // 模拟登录后，存储用户信息到global module
  const taskList = [] // 假设登录后取到的用户信息
  store.dispatch('global/setGlobalState', { taskList: taskList })

  render();
}


export async function bootstrap() {
  console.log('[vue] vue app bootstraped');
}
export async function mount(props) {
  console.log('[vue] props from main framework', props);
  globalRegister(store, props)
  render(props);
}
export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = '';
  instance = null;
  router = null;
}
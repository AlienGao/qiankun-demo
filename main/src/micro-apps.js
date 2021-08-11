import shared from './shared'

const mircoApps = [
  {
    name: 'react-app',
    entry: process.env.REACT_APP_REACT_PATH,
    activeRule: '/app-react',
  },
  {
    name: 'vue-app',
    entry: process.env.REACT_APP_VUE_PATH,
    activeRule: '/app-vue',
  }
]

// console.log(process.env, 'vue_path')

const apps = mircoApps.map(app => {
  return {
    ...app,
    container: '#container',
    props: {
      getGlobalState: shared.getGlobalState,
      setGlobalState: shared.setGlobalState
    }
  }
})

export default apps
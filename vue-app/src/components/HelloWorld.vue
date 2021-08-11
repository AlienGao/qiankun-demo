<template>
  <div class="hello">
    <div class="abc">
      <ol>
        <li>
          {{time}}
        </li>
        <li v-for="item in taskList" :key="item.id">
          <input @change="onChange(item)" v-model="item.value" />
        </li>
      </ol>
    </div>
    <ul>
      <li v-for="item in imgList" :key="item.id">
        <img :src="item.thumb" />
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

let timer;
export default {
  name: 'HelloWorld',
  data() {
    return {
      time: new Date().toLocaleString(),
      imgList: []
    }
  },
  created() {
    // 获取远端图片
    axios({
      method:'get',
      url:'http://service.picasso.adesk.com/v1/vertical/vertical',
      params: {
        limit: 10,
        skip: 180,
        adult: false,
        first: 0,
        order: 'hot'
      }
    }).then(res => {
      if (res.data.msg === 'success') {
        this.imgList = res.data.res.vertical
      }
    })
  },
  computed: {
    taskList() {
      return this.$store.state.global.taskList;
    }
  },
  methods: {
    onChange(task) {
      this.$store.dispatch('global/setGlobalState', task)
      // this.microSetGlobalState(this.$store.state.global)
    }
  },
  mounted() {
    timer = setInterval(() => {
      this.time = new Date().toLocaleString()
    }, 1000)
  },
  beforeDestroy() {
    clearInterval(timer)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  padding: 0px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  list-style-type:none;
}
.abc {
  text-align: center;
  display: flex;
  flex-grow: 1;
}
.abc ol {
  margin: 0 auto;
}
</style>

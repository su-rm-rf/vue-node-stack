const TodoItem = {
  props: ['text2', 'text3'],
  template: `<section>todo {{ text2 }}..{{ text3 }}.</section>`
}

const WthItem = {
  props: ['wth'],
  template: `<li>{{ wth.date }} is {{ wth.wth }}</li>`
}

const App = Vue.createApp({
  data() {
    return {
      product: 'Shoes',
      description: 'this is a shoes',
      show: true,
      wths: [
        { date: 'Monday', wth: '晴天'},
        { date: 'Tuesday', wth: '下雨'},
        { date: 'Friday', wth: '阴天'}
      ],
      text22: '今天写代码',
      text33: '今天写了很多代码'
    }
  },
  mounted() {
  },
  methods: {
    handle() {
      this.handle2()
    },
    handle2() {
      this.description = this.description.split('').reverse().join('')
      this.show = !this.show
    },
  },
  components: {
    TodoItem,
    WthItem
  }
})

const mountedApp = App.mount('#root')

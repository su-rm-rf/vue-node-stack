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
      text33: '今天写了很多代码',
      rawHtml: '<span style="color:#f00">Red Text</span>',
      answer2: 'Questions usually contain a question mark.'
    }
  },
  mounted() {
    console.log('mounted at ' + new Date().toLocaleString())
  },
  created() {
    console.log('created at ' + new Date().toLocaleString())
  },
  methods: {
    handle() {
      this.handle2()
    },
    handle2() {
      this.description = this.description.split('').reverse().join('')
      this.show = !this.show
    },
    getAnswer() {
      this.answer2 = 'Thinking...'
      axios.get('https://yesno.wtf/api')
        .then(res => {
          this.answer2 = res.data.answer
        })
        .catch(err => {
          this.answer2 = 'Error! Could not reach the API. ' + Error
        })
    }
  },
  computed: {
    isSun() {
      return this.wths.length > 0 ? 'YES' : 'NO'
    }
  },
  watch: {
    product(newQ, oldQ) {
      if (newQ.indexOf("?" > -1)) this.getAnswer()
    }
  },
  components: {
    TodoItem,
    WthItem
  }
})

const mountedApp = App.mount('#root')

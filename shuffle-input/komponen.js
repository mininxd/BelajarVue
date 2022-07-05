import { createApp } from 'vue'
import { shuffle } from 'lodash-es'

const getInitialItems = () => []
let id = getInitialItems().length + 1

createApp({
  data() {
    return {
      items: getInitialItems()
    }
  },
  methods: {
    insert() {
      const i = Math.round(this.items.length)
      this.items.splice(i, 0, id++)
    },
    decrease() {
    this.items.pop()
    },
    reset() {
      this.items = getInitialItems()
    },
    shuffle() {
      this.items = shuffle(this.items)
    },
    remove(item) {
      const i = this.items.indexOf(item)
      if (i > -1) {
        this.items.splice(i, 1)
      }
    }
  }
}).mount('#app')
import { defineStore } from 'pinia'
export const test2 = defineStore({
  id: 'test2',
  state: () => ({ name1: 'xxx1' }),
  getters: {
    count() {}
  },
  actions: {
    actions() {}
  }
})

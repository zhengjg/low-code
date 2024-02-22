import { defineStore } from 'pinia'
export const test1 = defineStore({
  id: 'test1',
  state: () => ({ name1: 'xxx' }),
  getters: {
    count() {}
  },
  actions: {
    actions() {}
  }
})

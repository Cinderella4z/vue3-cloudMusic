import { defineStore } from 'pinia'



export const useCounterStore = defineStore('counter', {
  state: () => {
    return {

      userInfo: '',
      // 功能变量
      loading: false,//是否显示加载页
      loadingStack: 0,//请求栈
      needKeepAlive: [],//需要缓存的路由






    }
  },
  getters: {

  },
  actions: {



  },

})

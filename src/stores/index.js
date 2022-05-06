import { defineStore } from 'pinia'



export const useCounterStore = defineStore('counter', {
  state: () => {
    return {

      userInfo: '',
      // 我喜欢的音乐
      likeList: [],

      currentSong: '',
      currentSongUrl: '',


      // 功能变量
      /* 这是控制加载页面的 */
      loading: false,//是否显示加载页
      loadingStack: 0,//请求栈
      /* 这是控制路由缓存的 */
      needKeepAlive: [],//需要缓存的路由







    }
  },
  getters: {

  },
  actions: {



  },

})

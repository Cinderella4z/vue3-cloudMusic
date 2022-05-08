
import { createRouter, createWebHistory } from 'vue-router'
import { usePinia } from 'hooks/pinia'
// hooks
import { useKeepAlive } from 'hooks/utils/useKeepAlive'



const find = () => import('views/find/Find.vue')
const my = () => import('views/my/my.vue')
const guanzhu = () => import('views/guanzhu/guanzhu.vue')
const login = () => import('views/login/Login.vue')
const likeList = () => import('views/List/likeList.vue')
const recommed = () => import('views/List/recommed.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: login,
      name: '/',
      meta: {
        keepAlive: false,
        tabbarShow: true,
      }
    },
    {
      path: '/find',
      name: 'find',
      component: find,
      meta: {
        keepAlive: false,
        tabbarShow: true,
      }

    },
    {
      path: '/my',
      name: 'my',
      component: my,
      meta: {
        keepAlive: false,
        tabbarShow: true,
      }
    },
    {
      path: '/guanzhu',
      name: 'guanzhu',
      component: guanzhu,
      meta: {
        keepAlive: false,
        tabbarShow: true,
      }
    },
    {
      path: '/likeList',
      name: 'likeList',
      component: likeList,
      meta: {
        keepAlive: false,
        tabbarShow: false,
      }
    },
    {
      path: '/recommed',
      name: 'recommed',
      component: recommed,
      meta: {
        keepAlive: false,
        tabbarShow: false,
      }
    },

  ]
})



router.beforeEach((to, from) => {
  const { setAllKeepAlive } = useKeepAlive(router)
  const { setPropoty } = usePinia()
  setPropoty('tabbarShow', to.meta.tabbarShow)
  setAllKeepAlive(to)
})



export default router


import { createRouter, createWebHistory } from 'vue-router'
// hooks
import { useKeepAlive } from 'hooks/utils/useKeepAlive'



const find = () => import('views/find/Find.vue')
const my = () => import('views/my/my.vue')
const guanzhu = () => import('views/guanzhu/guanzhu.vue')
const login = () => import('views/login/Login.vue')
const likeList = () => import('views/List/likeList.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: login,
      name: '/',
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/find',
      name: 'find',
      component: find,
      meta: {
        keepAlive: false
      }

    },
    {
      path: '/my',
      name: 'my',
      component: my,
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/guanzhu',
      name: 'guanzhu',
      component: guanzhu,
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/likeList',
      name: 'likeList',
      component: likeList,
      meta: {
        keepAlive: false
      }
    },

  ]
})



router.afterEach((to, from) => {
  const { setAllKeepAlive } = useKeepAlive(router)
  // 使去过的组件加载一次就进行缓存
  // to.meta.keepAlive = true
  // route.value.meta.keepAlive = true
  setAllKeepAlive(to)
})



export default router

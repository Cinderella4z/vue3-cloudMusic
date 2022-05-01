import { usePinia } from 'hooks/pinia'
import { useRouters } from 'hooks/router'

// 进行判断 去的路由是否存在需要缓存的列表里,存在就将他设置为false，为了再次让他进行加载一次
export function setKeepAlive (to) {
  const { getPropoty } = usePinia()
  const needKeepAlive = getPropoty('needKeepAlive')

  for (let i = 0; i < needKeepAlive.value.length; i++) {
    if (needKeepAlive.value[i] === to.name) {
      needKeepAlive.value.splice(i, 1)
      to.meta.keepAlive = false
    }
  }

}

// 登录过后 就将所有路由加入keepAlive栈

export function addKeepAlive () {
  const { router } = useRouters()
  const { setPropoty } = usePinia()
  const routes = router.options.routes
  setPropoty('needKeepAlive', routes)
}
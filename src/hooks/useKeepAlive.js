import { usePinia } from 'hooks/pinia'

export function useKeepAlive (router) {
  const { setPropoty } = usePinia()
  const { getPropoty } = usePinia()
  // 进行判断 去的路由是否存在需要缓存的列表里,存在就将他设置为false，为了再次让他进行加载一次
  function setAllKeepAlive (to) {

    const needKeepAlive = getPropoty('needKeepAlive')
    // console.log(needKeepAlive);
    for (let i = 0; i < needKeepAlive.value.length; i++) {

      if (needKeepAlive.value[i].name === to.name) {
        console.log('删除');
        needKeepAlive.value.splice(i, 1)
        to.meta.keepAlive = false
      }
    }

  }

  // 登录过后 就将所有路由加入keepAlive栈

  function addKeepAlive () {
    const routes = router.options.routes
    setPropoty('needKeepAlive', routes)
  }





  return {
    setAllKeepAlive,
    addKeepAlive
  }
}
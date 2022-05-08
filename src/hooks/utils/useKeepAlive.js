import { usePinia } from 'hooks/pinia'

export function useKeepAlive (router) {
  const { setPropoty } = usePinia()
  const { getPropoty } = usePinia()
  // 进行判断 去的路由是否存在需要缓存的列表里,存在就将他设置为false，为了再次让他进行加载一次
  function setAllKeepAlive (to) {

    const needKeepAlive = getPropoty('needKeepAlive')

    for (let i = 0; i < needKeepAlive.value.length; i++) {
      if (needKeepAlive.value[i].name === to.name) {
        to.meta.keepAlive = false
        needKeepAlive.value.splice(i, 1)
      }
      else {
        to.meta.keepAlive = true
      }
    }


  }

  // 登录过后 就将所有路由加入keepAlive栈

  function addKeepAlive () {
    const routes = router.options.routes
    // 这一步就是判断是否用户是直接登录的，
    //如果是直接登录的，就不需要把所有页面再设置为false重新加载一边
    // const hasKeepAlive = getPropoty('hasKeepAlive')

    setPropoty('needKeepAlive', routes)

  }

  // function addHasKeepAlive (to) {
  //   const hasKeepAlive = getPropoty('hasKeepAlive')
  //   hasKeepAlive.value.push(to)
  // }





  return {
    setAllKeepAlive,
    addKeepAlive,
    // addHasKeepAlive,
  }
}
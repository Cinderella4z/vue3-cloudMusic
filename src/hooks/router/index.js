import { useRouter } from "vue-router";
export function useRouters () {

  const router = useRouter()

  const route = router.currentRoute

  function push (path) {
    router.push(path)
  }
  function replace (path) {
    router.replace(path)
  }



  return {
    push, replace,
    route, router
  }

}
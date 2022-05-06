import { useRouter } from "vue-router";
export function useRouters () {

  const router = useRouter()
  const route = router.currentRoute

  function push (path) {
    router.push(path)
  }
  function back () {
    router.back()
  }



  return {
    push, back,
    route, router
  }

}
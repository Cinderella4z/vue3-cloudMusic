import { usePinia } from "../../hooks/pinia";



export function startLoading () {
  const { setPropoty, getPropoty } = usePinia()
  // 获取加载栈
  const loadingStack = getPropoty('loadingStack')

  // 每发送一个请求 请求栈中就加一
  setPropoty('loadingStack', loadingStack.value + 1)
  if (loadingStack.value >= 0) {
    setPropoty('loading', true)
  }
}

export function endLoading () {
  const { setPropoty, getPropoty } = usePinia()
  // 获取加载栈
  const loadingStack = getPropoty('loadingStack')

  // 每相应一个请求 请求栈就减一
  setPropoty('loadingStack', loadingStack.value - 1)
  if (loadingStack.value === 0) {
    setPropoty('loading', false)
  } else {
    return
  }

}
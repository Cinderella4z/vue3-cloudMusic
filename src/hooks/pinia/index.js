import { useCounterStore } from '../../stores'
import { storeToRefs } from 'pinia'

export function usePinia () {

  const stores = useCounterStore()

  function setPropoty (name, value) {
    stores[name] = value
  }

  function getPropoty (name) {
    const obj = storeToRefs(stores)

    return obj[name]
  }
  function getConst (name) {
    return stores[name]
  }


  return {
    setPropoty, getPropoty, stores, getConst
  }
}
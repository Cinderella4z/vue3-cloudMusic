import axios from 'axios'
import { startLoading, endLoading, } from '../assets/utils/loading';
import { useStorage } from 'hooks/storage'

export function request (config) {
  const { getStorage } = useStorage()
  const cookie = getStorage('cookie')

  const instance = axios.create({
    baseURL: 'http://172.22.122.165:3000',
    timeout: 5000
  })
  // 拦截器 实现loading
  instance.interceptors.request.use(config => {
    startLoading()
    // 给每个请求加上cookie
    if (cookie) {
      config.params.cookie = cookie;
    }
    return config
  })
  instance.interceptors.response.use(config => {

    endLoading()

    return config
  })

  return instance(config)
}
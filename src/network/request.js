import axios from 'axios'
import { startLoading, endLoading, } from '../assets/utils/loading';

export function request (config) {

  const instance = axios.create({
    baseURL: 'http://172.22.122.165:3000',
    timeout: 5000
  })
  // 拦截器 实现loading
  instance.interceptors.request.use(config => {
    startLoading()

    return config
  })
  instance.interceptors.response.use(config => {

    endLoading()

    return config
  })

  return instance(config)
}
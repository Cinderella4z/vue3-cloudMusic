import { request } from '../request'

export function Login () {
  // 传入手机号获取验证码

  function sentCode (phone) {
    return request({
      url: '/captcha/sent',
      params: {
        phone
      }
    })
  }

  // 登录
  function login (phone, captcha) {
    return request({
      url: '/login/cellphone',
      params: {
        phone, captcha
      }
    })
  }
  function login2 (phone, password) {
    return request({
      url: "/login/cellphone",
      params: {
        phone, password
      }

    })
  }
  return {
    sentCode, login, login2
  }
}
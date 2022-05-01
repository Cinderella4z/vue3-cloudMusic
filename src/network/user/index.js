import { request } from "../request";
import { useStorage } from 'hooks/storage'



export function user () {
  const { getStorage } = useStorage()
  const cookie = getStorage('cookie')


  function getLikeList (uid) {
    return request({
      url: '/likelist',
      params: {
        uid,
        cookie: cookie
      }
    })

  }

  return {
    getLikeList,
  }
}
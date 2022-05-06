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
  function getSongDetail (ids) {
    return request({
      url: '/song/detail',
      params: {
        ids
      }
    })
  }
  function getSongUrl (id) {
    return request({
      url: '/song/url',
      params: {
        id
      }
    })
  }

  return {
    getLikeList, getSongDetail, getSongUrl
  }
}
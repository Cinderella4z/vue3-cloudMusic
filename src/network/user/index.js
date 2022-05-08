import { request } from "../request";



export function user () {


  function getLikeList (uid) {
    return request({
      url: '/likelist',
      params: {
        uid,
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
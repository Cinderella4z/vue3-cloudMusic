import { request } from "../request";

export function Find () {

  function getBanner (type) {
    return request({
      url: "/banner",
      params: {
        type
      }
    })
  }
  function getRecommed (limit) {
    return request({
      url: '/personalized',
      params: {
        limit
      }
    })
  }
  function getRecommedSongs (id, limit) {
    return request({
      url: '/playlist/track/all',
      params: {
        id, limit
      }
    })
  }
  function getDaliySongs (limit) {
    return request({
      url: '/personalized/newsong',
      params: {
        limit
      }
    })
  }






  return {
    getBanner, getRecommed, getRecommedSongs, getDaliySongs
  }
}
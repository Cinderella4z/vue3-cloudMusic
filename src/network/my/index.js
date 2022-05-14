import { request } from "../request";

export function useMy () {

  function getUserPlaylist (uid) {
    return request({
      url: '/user/playlist',
      params: {
        uid
      }
    })
  }





  return {
    getUserPlaylist
  }
}
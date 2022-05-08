import { user } from 'network/user'
import { toRefs, ref, watch } from 'vue'
import { Toast } from 'vant'

// 传入的歌曲列表 通过拿到对应的id 异步操作才进行赋值，所以外面拿不到很正常
// 获取起始位置
// 因为这个传入的歌曲列表初始化时候，是通过异步操作的，所以得通过watch，不然就是空值
export function useLoadSong () {
  const { getSongDetail } = user()
  function initSong (idArr, songArr, initNum) {

    const ArrStr = idArr.value.toString()

    if (idArr.value.length !== 0) {

      if (idArr.value.length <= initNum) {
        getSongDetail(ArrStr).then(res => {
          songArr.value = res.data.songs
        })
      }

      else {
        const initId = idArr.value.slice(0, initNum)
        const initIdStr = initId.toString()

        getSongDetail(initIdStr).then(res => {
          songArr.value = res.data.songs
          // console.log(songArr);
        })
      }

    }




  }

  function loadSong (idArr, songArr, num) {

    if (songArr.value.length >= idArr.value.length) {

      return
    }

    const start = songArr.value.length
    let idStr = null

    if (start + num >= idArr.value.length) {
      idStr = idArr.value.slice(start, idArr.value.length).toString()
    }
    else {
      idStr = idArr.value.slice(start, start + num).toString()
    }

    if (idStr) {
      getSongDetail(idStr).then(res => {
        songArr.value.push(...res.data.songs)
      })
    }
  }

  return {
    initSong, loadSong
  }
}
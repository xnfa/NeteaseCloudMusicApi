// 音乐百科基础信息
const createOption = require('../util/option.js')
const md5 = require('crypto-js/md5.js')

module.exports = (query, request) => {
  const message = `songId=${query.id}&_scver=1&_sckey=7ada0f7ccadbe165e6e7fbe01113f4df`
  const code = md5(message).toString()
  const data = {
    _scver: '1',
    _sign: code,
    songId: query.id,
  }
  return request(
    `/api/music/wiki/home/song/get`,
    data,
    createOption(query, 'eapi'),
  )
}

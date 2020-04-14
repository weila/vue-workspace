import { post, get } from '@api/base'
// 通用post请求
export const commonPost = (data) => {
  return post({
    url: data.url,
    params: data.payload
  })
}
// 通用get请求
export const commonGet = (data) => {
  return get({
    url: data.url,
    params: data.payload
  })
}
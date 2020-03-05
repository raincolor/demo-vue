import axios from 'axios'
import { Loading } from 'element-ui'

const ajax = axios.create({})

let loadingInstance = null

ajax.interceptors.request.use(config => {
  loadingInstance = Loading.service({
    lock: true,
    text: 'Loading',
    spinner: 'el-icon-loading',
    background: 'rgba(0, 0, 0, 0.7)'
  })
  return config
})

ajax.interceptors.response.use(resp => {
  loadingInstance.close()
  return resp
})

export const getTabs = () => {
  return ajax.get('/ajax/movieOnInfoList?token=')
}

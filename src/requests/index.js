import axios from 'axios'
import { Loading } from 'element-ui'

const isDev = process.env.NODE_ENV === 'development'

const ajax = axios.create({
  baseURL: isDev ? 'http://jsonplaceholder.typicode.com' : '你真实的地址'
})

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

export const getTodos = () => {
  return ajax.get('/todos')
}

export const getTodoById = (id) => {
  return ajax.get(`/todos/${id}`)
}

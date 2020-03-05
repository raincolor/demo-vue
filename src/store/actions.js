import { postLogin } from '@/requests'
export default {
  deleteCartItemAsync (store, id) {
    // 模拟一下服务器操作的等待时间
    // 比如发送ajax请求之类的
    setTimeout(() => {
      // 不能在这里直接去修改state，需要使用 store.commit('mutation名字', 参数)
      store.commit('deleteCartItem', id)
    }, 1000)
  },
  login (store, loginInfo) {
    // 用户登录的时候，需要有一个actions来处理登录动作
    postLogin(loginInfo)
      .then(resp => {
        if (resp.data.code === 200) {
          // 登录成功之后需要同步用户信息
          store.commit('updateUserInfo', resp.data.data)
        }
      })
  }
}

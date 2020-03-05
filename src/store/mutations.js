import types from './types'
export default {
  // 只能在这里去修改state
  [types.deleteCartItem] (state, id) {
    state.cart = state.cart.filter(item => item.id !== id)
  },
  [types.toggleChecked] (state, id) {
    state.cart = state.cart.map(item => {
      if (item.id === id) {
        item.checked = !item.checked
      }
      return item
    })
  },
  [types.toggleAllCartChecked] (state, checked) {
    state.cart = state.cart.map(item => {
      item.checked = checked
      return item
    })
  },
  [types.addToCart] (state, itemInfo) {
    const isInCart = state.cart.some(cartItem => cartItem.id === itemInfo.id)
    if (isInCart) {
      state.cart = state.cart.map(item => {
        if (item.id === itemInfo.id) {
          item.count += 1
        }
        return item
      })
    } else {
      state.cart.push({
        ...itemInfo,
        checked: false,
        count: 1
      })
    }
  },
  updateUserInfo (state, userInfo) {
    state.userInfo = userInfo
  }
}

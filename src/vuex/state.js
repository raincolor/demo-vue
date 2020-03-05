const state={
    userInfo: JSON.parse(window.localStorage.getItem('lcl-userInfo')) || {
        displayName: '',
        token: ''
      },


    article:localStorage["article"]?JSON.parse(localStorage["article"]): [],
    collections:localStorage["collections"]?JSON.parse(localStorage["collections"]): [],
    carts:localStorage["carts"]?JSON.parse(localStorage["carts"]): [],
    orders:localStorage["orders"]?JSON.parse(localStorage["orders"]): [],
    todos:localStorage["todos"]?JSON.parse(localStorage["todos"]): [],
    address:localStorage["address"]?JSON.parse(localStorage["address"]): [],
    nowIndex:0,


    cart: JSON.parse(window.localStorage.getItem('nb-cart')) || []
}

export default state


// export default {
//   // 初始值应该从本地存储里去取，如果取到就用取到的值，如果没有取到，得自己定义一个初始化的值
//   carts: JSON.parse(window.localStorage.getItem('nb-cart')) || [],
//   userInfo: JSON.parse(window.localStorage.getItem('nb-userInfo')) || {
//     displayName: '',
//     token: ''
//   },

// }

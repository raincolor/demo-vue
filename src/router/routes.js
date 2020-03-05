// import Home from '@/pages/Home'
// import Mall from '@/pages/Mall'
// import Product from '@/pages/Product'
// import Cart from '@/pages/Cart'
// import Mine from '@/pages/Mine'
// import NotFound from '@/pages/NotFound'
import NbTabbar from '@/components/NbTabbar'
import NbHeader1 from '@/components/NbHeader1'
import NbHeader2 from '@/components/NbHeader2'
import NbHeader3 from '@/components/NbHeader3'
import NbHeader4 from '@/components/NbHeader4'


const classify = () => import('@/pages/classify/classify')

const newsDetail = () => import('@/pages/NewsDetails')
const Home = () => import('@/pages/Home')
const Mall = () => import('@/pages/Mall')
const Product = () => import('@/pages/Product')
const Cart = () => import('@/pages/Cart')
const Cart1 = () => import('@/pages/Cart1')
const Mine = () => import('@/pages/Mine')
const NotFound = () => import('@/pages/NotFound')
const Detail = () => import('@/pages/detail/goodDetail')

export default [{
  path: '/',
  redirect: '/home'
}, {
  path: '*',
  redirect: '/404'
}, {
  path: '/404',
  components: {
    default: NotFound
  }
}, {
  path: '/home',
  isTabbar: true,
  title: '首页',
  icon: '&#xe612;',
  components: {
    default: Home,
    tabbar: NbTabbar,
    header:  NbHeader1
  },
  id:1
}, {
  path: '/mall',
  name:"mail",
  title: '分类',
  icon: '&#xe610;',
  isTabbar: true,
  components: {
    default: Mall,
    tabbar: NbTabbar,
    header:  NbHeader2
  },
  id:2
}, {
  path: '/product',
  name: 'productt',
  components: {
    default: Product
  }
}, {
  path: '/cart',
  title: '动态',
  icon: '&#xe602;',
  isTabbar: true,
  components: {
    default: Cart,
    tabbar: NbTabbar,
    header:  NbHeader3
  },
 
}, {
  path: '/newsDetail',
  name: 'newsDetail',
  components: {
    default: newsDetail
  }
},

{
  path: '/cart1',
  title: '购物车',
  icon: '&#xe607;',
  isTabbar: true,
  components: {
    default: Cart1,
    tabbar: NbTabbar,
    header:  NbHeader3
  },
  id:3
},{
  path: '/mine',
  title: '我的',
  icon: '&#xe604;',
  isTabbar: true,
  components: {
    default: Mine,
    tabbar: NbTabbar,
    header:  NbHeader4
  },
  id:4
},
{
  path: '/detail',
  title: '详情',
  components: {
    default: Detail,
  },
  
}


]

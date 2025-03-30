import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import news from '@/views/modules/news/list'
    import baoxiuxinxi from '@/views/modules/baoxiuxinxi/list'
    import jiazhengyuyue from '@/views/modules/jiazhengyuyue/list'
    import zhuhuxinxi from '@/views/modules/zhuhuxinxi/list'
    import wuyejiaofei from '@/views/modules/wuyejiaofei/list'
    import fangwuzulin from '@/views/modules/fangwuzulin/list'
    import storeup from '@/views/modules/storeup/list'
    import yonghu from '@/views/modules/yonghu/list'
    import discussjiazhengfuwu from '@/views/modules/discussjiazhengfuwu/list'
    import jiazhengfuwu from '@/views/modules/jiazhengfuwu/list'
    import messages from '@/views/modules/messages/list'
    import config from '@/views/modules/config/list'
    import xiaoquditu from '@/views/modules/xiaoquditu/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/news',
        name: '公告信息',
        component: news
      }
      ,{
	path: '/baoxiuxinxi',
        name: '报修信息',
        component: baoxiuxinxi
      }
      ,{
	path: '/jiazhengyuyue',
        name: '家政预约',
        component: jiazhengyuyue
      }
      ,{
	path: '/zhuhuxinxi',
        name: '住户信息',
        component: zhuhuxinxi
      }
      ,{
	path: '/wuyejiaofei',
        name: '物业缴费',
        component: wuyejiaofei
      }
      ,{
	path: '/fangwuzulin',
        name: '房屋租赁',
        component: fangwuzulin
      }
      ,{
	path: '/storeup',
        name: '我的收藏管理',
        component: storeup
      }
      ,{
	path: '/yonghu',
        name: '用户',
        component: yonghu
      }
      ,{
	path: '/discussjiazhengfuwu',
        name: '家政服务评论',
        component: discussjiazhengfuwu
      }
      ,{
	path: '/jiazhengfuwu',
        name: '家政服务',
        component: jiazhengfuwu
      }
      ,{
	path: '/messages',
        name: '留言板管理',
        component: messages
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
      ,{
	path: '/xiaoquditu',
        name: '小区地图',
        component: xiaoquditu
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;

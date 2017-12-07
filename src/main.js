// import Vue from '../node_modules/vue/dist/vue.js'
import Vue from 'vue'
import App from './app.vue'

// 导入mint-ui框架
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

// 导入mui框架的css样式
import './statics/css/mui.min.css'

// 引入全局的css样式
import './root.css'

// 添加路由
import VueRouer from 'vue-router'
Vue.use(VueRouer)

// 添加vue-resource框架
import VueResource from 'vue-resource'
Vue.use(VueResource)

// 引入自定义组件
import Home from './components/Home/Home.vue'
import Member from './components/Member.vue'
import Shopcar from './components/Shopcar.vue'
import Search from './components/Search.vue'


// 路由的实例化
var router = new VueRouer({
    linkActiveClass:'mui-active',
    routes:[
        {name:'root',path:'/',redirect:'/home'},//默认加载
        {name:'home',path:'/home',component:Home},
        {name:'member',path:'/member',component:Member},
        {name:'shopcar',path:'/shopcar',component:Shopcar},
        {name:'search',path:'/search',component:Search}

    ]
})

new Vue({
    el:'#app',
    router,
    // 渲染方法，用于渲染app组件
    render:create=>create(App)
})

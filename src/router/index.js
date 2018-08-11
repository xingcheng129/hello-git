import Vue from 'vue'
import Router from 'vue-router'
import Broadcast from '@/components/Broadcast'
import Douban from '@/components/Douban'
import Group from '@/components/Group'
import Home from '@/components/Home'
import Login from '@/components/Login'
import DBLocal from "@/components/douban/DBLocal"
import DBMovie from "@/components/douban/DBMovie"
import DBMusic from "@/components/douban/DBMusic"
import DBStudy from "@/components/douban/DBStudy"
import DBTel from "@/components/douban/DBTel"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/broadcast',
      name: 'Broadcast',
      component: Broadcast
    },
    {
      path: '/douban',
      name: 'Douban',
      component: Douban,
      children:[
      	{
      		path: 'DBLocal',
      		name: 'DBLocal',
      		component: DBLocal
      	},
      	{
      		path: 'DBMusic',
      		name: 'DBMusic',
      		component: DBMusic
      	},
      	{
      		path: 'DBMovie',
      		name: 'DBMovie',
      		component: DBMovie
      	},
      	{
      		path: 'DBStudy',
      		name: 'DBStudy',
      		component: DBStudy
      	},
      	{
      		path: 'DBTel',
      		name: 'DBTel',
      		component: DBTel
      	}
      ]
    },
    {
      path: '/group',
      name: 'Group',
      component: Group
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})

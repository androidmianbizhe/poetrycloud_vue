import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Square from '@/components/sqaure/Square'
import Discover from '@/components/discover/Discover'
import Classify from '@/components/classify/Classify'
import Download from '@/components/download/Download'
import Login from '@/components/login/Login'
import Register from '@/components/register/Register'
import Home from '@/components/home/Home'
import Search from '@/components/search/Search'
import Collect from '@/components/user/Collection'
import Blog from '@/components/user/Blog'
import UserHome from '@/components/user/UserHome'
import PoetFolder from '@/components/user/PoetFolder'
import Messages from '@/components/user/Messages'
import WriteBlog from '@/components/write/WriteBlog'
import WriteCreation from '@/components/write/WriteCreation'
import EditBlog from '@/components/user/EditBlog'
import EditUser from '@/components/user/EditUser'
import BlogDetail from '@/components/detail/BlogDetail'
import CreationDetail from '@/components/detail/CreationDetail'
import PoetDetail from '@/components/detail/PoetDetail'
import RecommendBlog from '@/components/recommend/RecommendBlog'
import RecommendFolder from '@/components/recommend/RecommendFolder'
import FolderDetail from '@/components/detail/FolderDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/square',
      name: 'Square',
      component: Square
    },
    {
      path: '/discover',
      name: 'Discover',
      component: Discover
    },
    {
      path: '/classify',
      name: 'Classify',
      component: Classify
    },
    {
      path: '/download',
      name: 'Download',
      component: Download
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/collect',
      name: 'Collect',
      component: Collect
    },
    {
      path: '/bloglist',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/userhome',
      name: 'UserHome',
      component: UserHome
    },
    {
      path: '/poetfolder',
      name: 'PoetFolder',
      component: PoetFolder
    },
    {
      path: '/messages',
      name: 'Messages',
      component: Messages
    },
    {
      path: '/writeblog',
      name: 'WriteBlog',
      component: WriteBlog
    },
    {
      path: '/writecreation',
      name: 'WriteCreation',
      component: WriteCreation
    },
    {
      path: '/editblog',
      name: 'EditBlog',
      component: EditBlog
    },
    {
      path: '/blogdetail',
      name: 'BlogDetail',
      component: BlogDetail
    },
    {
      path: '/creationdetail',
      name: 'CreationDetail',
      component: CreationDetail
    },
    {
      path: '/poetdetail',
      name: 'PoetDetail',
      component: PoetDetail
    },
    {
      path: '/folderdetail',
      name: 'FolderDetail',
      component: FolderDetail
    },
    {
      path: '/edituser',
      name: 'EditUser',
      component: EditUser
    },
    {
      path: '/recomblog',
      name: 'RecommendBlog',
      component: RecommendBlog
    },
    {
      path: '/recomfolder',
      name: 'RecommendFolder',
      component: RecommendFolder
    }
  ]
})

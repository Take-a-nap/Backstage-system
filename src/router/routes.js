/**
 * Created by Administrator on 2018/8/31.
 */
import Home from '../components/Home'
import Kind from '../components/Kind'
import User from '../components/User'
import Username from '../components/Username'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/kind',
    component: Kind
  },
  {
    path: '/user',
    component: User
  },
  {
    path: '/username',
    component: Username
  }
]
export default routes

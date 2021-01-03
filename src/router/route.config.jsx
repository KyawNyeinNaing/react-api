import { PostList, PostDetail } from '../pages/home'
import About from '../pages/about'
import Contact from '../pages/contact'

const Routes = [
  {
    path: '/',
    component: PostList
  },
  {
    path: '/home/posts', //listing
    component: PostList
  },
  {
    path: '/home/posts/detail/:id', //detail
    component: PostDetail
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/contact',
    component: Contact
  }
]

export default Routes
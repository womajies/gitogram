import feeds from '../pages/feeds'
import user from '../pages/user'
import stories from '../pages/stories'
import profile from '../pages/profile'
import notFound from '../pages/not-found'

export default [
  {
    path: '/',
    name: 'home',
    components: {
      default: feeds
    }
  },
  {
    path: '/user',
    component: user,
    name: 'user',
    props: true,
    children: [
      {
        path: 'profile',
        component: profile,
        name: 'profile'
      }
    ]
  },
  {
    path: '/stories',
    component: stories,
    name: 'stories',
    props: true
  },
  {
    path: '/stories/:initialSlide(\\d+)',
    name: 'storiesSlide',
    component: stories,
    props: true
  },
  {
    path: '/:pathMatch(.*)*',
    component: notFound,
    name: 'not-found'
  }
]

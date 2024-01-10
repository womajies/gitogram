import feeds from '../views/feeds'
import user from '../views/user'
import auth from '../views/auth'
import stories from '../views/stories'
import profile from '../views/profile'
import notFound from '../views/not-found'

export default [
  {
    path: '/',
    name: 'home',
    components: {
      default: feeds
    }
  },
  {
    path: '/auth',
    component: auth,
    name: 'auth',
    props: true
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

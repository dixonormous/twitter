import { UserPage, SearchPage } from '../views';

const routes = [
  {
    path: '/user/5723502255',
    name: 'Home',
    icon: 'fas fa-home',
    component: UserPage
  },
  {
    path: '/search',
    name: 'Explore',
    icon: 'fas fa-hashtag',
    component: SearchPage
  },
  { redirect: true, path: '/', to: '/search' }
];

export default routes;
